from collections import deque

def rotate(arr, si, sj):
    narr = [x[:] for x in arr]
    for i in range(3):
        for j in range(3):
            narr[si+i][sj+j] = arr[si+3-j-1][sj+i]

    return narr

def bfs(arr, visited, si, sj, clr):
    q = deque()
    sset = set()
    cnt = 0

    q.append([si, sj])
    visited[si][sj] = 1
    sset.add((si, sj))
    cnt += 1

    while q:
        r, c = q.popleft()
        for i in range(4):
            rr = r + dr[i]
            cc = c + dc[i]
            # 범위내, 네방향, 미방문, 조건: 같은 값이면
            if 0 <= rr < 5 and 0 <= cc < 5 and visited[rr][cc] == 0 and arr[r][c] == arr[rr][cc]:
                q.append([rr, cc])
                visited[rr][cc] = 1
                sset.add((rr, cc))
                cnt += 1 

    if cnt >= 3: # 유물이면 > cnt 리턴, cnt == 1이면 0으로 리턴
        if clr == 1: # 0으로 초기화
            for i, j in sset:
                arr[i][j] = 0
        return cnt
    else:
        return 0

def count_clear(arr, clr): # clr == 1: 3개 이상 값들을 0으로 clear
    visited = [[0] * 5 for _ in range(5)]
    cnt = 0

    for i in range(5):
        for j in range(5): # 방문 안했을 때, 같은 값이면 fill
            if visited[i][j] == 0:
                # 같은 값이면, 3개 이상인 경우
                t = bfs(arr, visited, i, j, clr)
                cnt += t
    return cnt

K, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(5)]
lst = list(map(int, input().split()))
ans = []

# 상 하 좌 우
dr = [-1, 1, 0, 0]
dc = [0, 0, -1, 1]

for _ in range(K): # K턴 진행 (유물 없는 경우 즉시 종료)
    # 1. 탐사 진행
    mx_cnt = 0
    for rot in range(1, 4): # 회전수 -> 열 -> 행 (작은순)
        for sj in range(3):
            for si in range(3):
                # rot 횟수만큼 90도 시계방향 회전 => narr
                narr = [x[:] for x in arr]
                for _ in range(rot):
                    narr = rotate(narr, si, sj)

                # 유물개수 카운트 (회전된 행렬, clear할지말지 flag값)
                t = count_clear(narr, 0)
                if mx_cnt < t: # 최대 개수 갱신
                    mx_cnt = t
                    marr = narr
    
    # 유물이 없는 경우 턴 즉시 종료
    if mx_cnt == 0:
        break

    # 2. 연쇄 획득
    cnt = 0
    arr = marr
    while True:
        t = count_clear(arr, 1) # 클리어할거니까 1
        if t == 0:
            break # 연쇄 획득 종료 -> 다음 턴으로..
        cnt += t # 획득한 유물 개수 누적
        
        # arr의 0값인 부분 리스트에서 순서대로 추가
        for j in range(5):
            for i in range(4, -1, -1):
                if arr[i][j] == 0:
                    arr[i][j] = lst.pop(0)

    ans.append(cnt) # 이번턴 연쇄 획득한 개수 추가

print(*ans)