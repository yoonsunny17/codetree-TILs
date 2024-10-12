from collections import deque

N, M, K = map(int, input().split())
matrix = [list(map(int, input().split())) for _ in range(N)]
recent_turn = [[0] * M for _ in range(N)] # 공격 이력 기록 (처음엔 모두 0)

# d: 우 하 좌 상
di = [0, 1, 0, -1]
dj = [1, 0, -1, 0]

# dd: 8방향 (우선순위 x) 우 우하 하 하좌 좌 좌상 상 우상
ddi = [0, 1, 1, 1, 0, -1, -1, -1]
ddj = [1, 1, 0, -1, -1, -1, 0, 1]

def attack_laser(si, sj, ei, ej):
    q = deque() # 공격 경로 탐색할 큐
    q.append([si, sj]) # 시작점(공격자) 넣어서 초기화
    visited = [[[] for _ in range(M)] for _ in range(N)] # 공격 경로에 해당되는가

    damage = matrix[si][sj] # 공격량

    while q:
        ci, cj = q.popleft()
        if (ci, cj) == (ei, ej): # 종료조건: 목적지 포탑이라면
            matrix[ei][ej] = max(0, matrix[ei][ej]-damage) # 공격받았을 때 음수면, 0으로 넣어줘
            while True:
                ci, cj = visited[ci][cj]
                if (ci, cj) == (si, sj): # 시작지점(공격자 위치) => 성공적으로 공격 완료
                    return True
                matrix[ci][cj] = max(0, matrix[ci][cj]-damage//2) # 공격 경로에 있었으므로 공격력 절반만큼 피해 입음
                attacked_set.add((ci, cj)) # 마지막 처리 위해서 공격받았다고 넣어주기

        for r in range(4):
            # 범위밖 (반대쪽으로 나온다 => %N, %M 처리)
            ni = (ci + di[r]) % N
            nj = (cj + dj[r]) % M
            # 범위내, 0보다 큰 곳, 방문한 적 없음(빈 리스트)
            if visited[ni][nj] == [] and matrix[ni][nj] > 0:
                q.append((ni, nj))
                visited[ni][nj] = (ci, cj) # 어디서 왔는지를 기록해줌

    return False # 목적지 찾기 실패했으면 레이저 공격 실패!

def attack_bomb(si, sj, ei, ej):
    damage = matrix[si][sj] # 공격량
    matrix[ei][ej] = max(0, matrix[ei][ej]-damage) # 데미지만큼 피해

    # 공격받는 포탑의 주위 8방향에 있는 포탑에 피해 입힘
    for r in range(8):
        ni = (ei+ddi[r]) % N
        nj = (ej+ddj[r]) % M
        if (ni, nj) != (si, sj): # 공격자가 아닌 경우 > 데미지//2 입음
            matrix[ni][nj] = max(0, matrix[ni][nj]-damage//2)
            attacked_set.add((ni, nj)) # 공격받았음을 넣어줄 것

for turn in (1, K+1): # K턴동안 진행
    # 공격자 선정: 가장 약한 > 가장 최근에 공격한 > 행+열 큰 > 열 큰
    min_power, max_turn, si, sj = 5001, -1, 0, 0
    for i in range(N):
        for j in range(N):
            if matrix[i][j] <= 0: # 포탑이 살아있지 않으면 Skip
                continue
            elif (matrix[i][j] < min_power) or (matrix[i][j] == min_power and recent_turn[i][j] > turn) or (matrix[i][j] == min_power and recent_turn[i][j] == turn and i+j > si+sj) or (matrix[i][j] == min_power and recent_turn[i][j] == turn and i+j == si+sj and j > sj):
                min_power = matrix[i][j]
                max_turn = recent_turn[i][j]
                si, sj = i, j

    # 공격할 대상 선정: 가장 센 > 가장 예전에 공격한 > 행+열 작은 > 열 작은
    max_power, min_turn, ei, ej = 0, turn, N, M
    for i in range(N):
        for j in range(M):
            if matrix[i][j] <= 0: # 포탑이 살아있지 않으면 Skip
                continue
            elif (matrix[i][j] > max_power) or (matrix[i][j] == max_power and min_turn > recent_turn[i][j]) or (matrix[i][j] == max_power and min_turn == recent_turn[i][j] and i+j < ei+ej) or (matrix[i][j] == max_power and min_turn == recent_turn[i][j] and i+j == ei+ej and j < ej):
                max_power = matrix[i][j]
                min_turn = recent_turn[i][j]
                ei, ej = i, j

    # 공격자 공격력 상승, 공격 이력 갱신
    matrix[si][sj] += (M+N)
    recent_turn[si][sj] = turn

    # 공격 피해 입은 포탄들 (공격자 포함)
    attacked_set = set()
    attacked_set.add((si, sj))
    attacked_set.add((ei, ej))

    # 공격: 레이저 공격 >> 레이저 공격 불가하면 포탄 공격 진행
    if not attack_laser(si, sj, ei, ej): # 레이저 공격 실패(False)
        attack_bomb(si, sj, ei, ej) # 포탄 공격 진행

    # 포탑 정비 (공격받지 않은 포탑들 공격력 +1)
    for i in range(N):
        for j in range(M):
            if matrix[i][j] > 0 and (i, j) not in attacked_set:
                matrix[i][j] += 1

    # 종료 조건: 포탑 하나만 살아남은 경우
    cnt = N * M
    for lst in matrix:
        cnt -= lst.count(0)
    
    if cnt <= 1:
        break

print(max(map(max, matrix)))
