'''
산타 순서대로 행동 > 리스트 만들어서 사용
기절/탈락 제외 > 리스트 만들어서 사용

1. 루돌프: 가장 가까운 산타 방향으로 돌진 (행 큰 -> 열 근), 인접 8 방향
   충돌 시 -> 산타 C점, C칸 밀림, 해당 칸 산타 있으면 [상호작용]
2. 산타 -> 루돌프 가까워지는 방향 이동(산타 중복 불가), 4방향
   충돌 시 -> 산타 D점, 반대 D칸 밀림, [상호작용 1칸 밀림, 연쇄]
3. 기절(이동 못함): 산타는 현재 k턴이면 k+2턴에 정상 상태 됨
   루돌프는 기절한 산타도 돌진대상으로 선택 가능
M턴(모두 탈락 시 즉시 종료) 동안 매 턴마다 미탈락한 산타 1점식 점수 얻음
'''

'''
1 ~ M 반복
alive가 모두 0이면 break

#1. 루돌프 이동
(ri, rj) - 모든 산타 좌표 >> min값, sort
충돌 시 -> move_santa(...) # 연쇄 상호작용

#2. 산타 이동 (1~P번): alive, turn 체크
상 우 좌 하 순서로 탐색 (min값 갱신 시 리스트에 추가)
범위내, 산타없고, 더 가까운 경우

충돌 시 -> 점수/이동

# alive인 경우 score +1
'''
from collections import deque

N, M, P, C, D = map(int, input().split())
v = [[0]*N for _ in range(N)]

ri, rj = map(lambda x: int(x)-1, input().split())
v[ri][rj] = -1 # 루돌프 위치

score = [0] * (1+P)
alive = [1] * (1+P) # 우선 다 살아있으므로 1로 표시
alive[0] = 0 # 인덱스 0은 안쓸거임
wakeup_turn = [1] * (1+P) # 기절 시, 깨어날 턴 번호 저장하기 **

santa = [[N]*2 for _ in range(1+P)]
for _ in range(1, P+1):
    n, i, j = map(int, input().split())
    santa[n] = [i-1, j-1] # 각 산타 초기 위치
    v[i-1][j-1] = n # 이차원행렬에 산타 번호로 표기

def move_santa(curr, si, sj, di, dj, mul):
    q = deque([]) # curr번 산타를 si, sj에서 di, dj 방향으로 mul칸 이동
    q.append((curr, si, sj, mul))

    while q:
        curr, ci, cj, mul = q.popleft()
        # 진행방향 mul칸 만큼 이동시켜서, 범위내이고 산타 있으면 q삽입/범위밖 처리
        ni, nj = ci+di*mul, cj+dj*mul
        if 0 <= ni < N and 0 <= nj < N: # 범위 내 => 산타 존재 여부 확인
            if v[ni][nj] == 0: # 빈 칸 => 이동 처리
                v[ni][nj] = curr # 산타 이동 처리
                santa[curr] = [ni, nj] # 산타 이동한 위치 갱신
                return
            else: # 산타가 존재함 => 연쇄 이동 (큐에 넣어주기)
                q.append((v[ni][nj], ni, nj, 1)) # v[ni][nj]에 다음 산타가 있으니까 큐에 넣기, 한칸 이동!
                v[ni][nj] = curr # 이제 내가 자리 차지
                santa[curr] = [ni, nj]
        else: # 범위 밖 > 탈락 => 끝
            alive[curr] = 0 # 탈락
            return

for turn in range(1, M+1):
    # [0] 산타 모두 탈락(alive가 모두 0)이면 끝! (break)
    if alive.count(1) == 0:
        break

    # [1-1] 루돌프 이동: 가장 가까운 산타 찾기
    min_dist = 2*N**2
    for idx in range(1, P+1):
        if alive[idx] == 0: continue # 탈락한 산타는 skip

        si, sj = santa[idx]
        cur_dist = (ri-si)**2 + (rj-sj)**2 # 산타와 루돌프 거리
        if min_dist > cur_dist:
            min_dist = cur_dist
            min_lst = [(si, sj, idx)] # 최소 거리 => 새 리스트 만들기
        elif min_dist == cur_dist: # 같은 거리 => 리스트에 추가
            min_lst.append((si, sj, idx))
    
    min_lst.sort(reverse=True) # 행큰, 열큰 순서로 정렬 (내림차순)
    si, sj, min_idx = min_lst[0] # 돌격할 목표 산타
    
    # [1-2] 대상 산타 방향으로 루돌프 이동
    rdi, rdj = 0, 0 # 루돌프 이동 방향 초기화
    # 산타가 좌표 작은 값이면 -1 이동
    # 산타가 좌표 큰 값이면 +1 이동
    if ri > si: rdi = -1 
    elif ri < si: rdi = 1

    if rj > sj: rdj = -1
    elif rj < sj: rdj = 1

    v[ri][rj] = 0 # 루돌프 현재 자리 지우고, 이동시키기
    ri, rj = ri+rdi, rj+rdj # 루돌프 이동 좌표
    v[ri][rj] = -1 # 루돌프 이동 자리에 표시 (산타 밀려날거니까 -1로 바로 표시해도 됨)

    # [1-3] 루돌프 이동 완료 후, 산타와 충돌 시 산타 밀리는 처리
    if (ri, rj) == (si, sj): # 충돌했다면
        score[min_idx] += C # 산타 C점 획득
        wakeup_turn[min_idx] = turn+2 # 산타 기절, 깨어날 턴 번호 저장
        move_santa(min_idx, si, sj, rdi, rdj, C) # 산타 C칸 밀림, 연쇄작용이므로 여기서 바로 처리x

    # [2-1] 순서대로 산타이동: 기절하지 않은 경우(산타의 턴 <= turn)
    for idx in range(1, P+1):
        if alive[idx] == 0: continue # 탈락한 경우 skip
        if wakeup_turn[idx] > turn: continue # 현재 턴보다 깨어날 턴이 더 나중이면 skip

        si, sj = santa[idx]
        min_dist = (si-ri)**2 + (sj-rj)**2 # 루돌프와 거리 측정 (움직이기 전 거리를 최소거리값으로 초기화)
        tmp_lst = []

        # 상우하좌 순으로 최소거리 찾기
        di = [-1, 0, 1, 0]
        dj = [0, 1, 0, -1]
        for r in range(4):
            ni, nj = si+di[r], sj+dj[r] # 이동할 위치 => 더 짧아지는 거리여야 함
            dist = (ri-ni)**2 + (rj-nj)**2
            # 범위내, 산타없고, 더 짧은 거리인 경우
            if 0 <= ni < N and 0 <= nj < N and v[ni][nj] <= 0 and min_dist > dist:
                min_dist = dist # 최소 거리 갱신
                tmp_lst.append((ni, nj, di[r], dj[r]))
        
        if len(tmp_lst) == 0: continue # 이동할 위치 없음
        ni, nj, di, dj = tmp_lst[-1] # 더 짧을 때마다 넣었으니까, 가장 마지막이 이동할 위치

        # [2-2] 루돌프와 충돌 시 처리
        if (ni, nj) == (ri, rj): # 충돌했으면
            score[idx] += D # 산타 D점 획득
            wakeup_turn[idx] = turn+2 # 산타 기절, 깨어날 턴 번호 저장
            v[si][sj] = 0 # 밀릴거니까 현재 위치 지우기
            move_santa(idx, ni, nj, -di, -dj, D) # 산타 D칸 밀림, 반대방향, 연쇄작용이므로 여기서 바로 처리x
        else: # 빈칸인 경우: 좌표 갱신, 이동 처리
            v[si][sj] = 0
            v[ni][nj] = idx
            santa[idx] = [ni, nj]

    # [3] 점수획득: alive 산타는 +1
    for i in range(1, P+1):
        if alive[i] == 1:
            score[i] += 1

print(*score[1:]) # 1번 산타부터 순서대로 점수 출력