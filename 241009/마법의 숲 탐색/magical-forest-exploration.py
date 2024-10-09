from collections import deque

# 출구 위치를 찾는 로직
def findExit(r, c, d):
    if d == 0:
        return [r-1, c]
    elif d == 1:
        return [r, c+1]
    elif d == 2:
        return [r+1, c]
    else:
        return [r, c-1]

# matrix 안에 존재하는지 범위 확인하는 로직
def inBoard(r, c):
    if 0 <= r < N and 0 <= c < M:
        return True
    return False

# 골렘 이동할 때, 이동하려는 칸이 가능한 칸인지 확인하는 로직
def check(r, c):
    if not inBoard(r, c): # 이동하려는 곳이 범위 안에 있지 않다면,
        if r < N and 0 <= c < M: # 근데 좌표가 위쪽에 뚫린 북쪽에 있으면
            return True
    else: # 이동하려는 곳이 범위 안에 존재하고,
        if matrix[r][c] == 0: # 다른 골렘이 이미 차지하고 있지 않다면,
            return True
    return False

# 골렘 이동시키는 로직
def move(c, d, fairy):
    global matrix

    # 골렘을 타고 있는 정령의 위치. 보드 맨 위에서 두칸 위부터 내려옴
    # 인덱스 필요하므로 c-1 해줄것
    r, c = -2, c-1
    while True:
        # 골렘 남쪽으로 이동 (수직 아래)
        # 수직이동했을 때 이동될 칸이 가능한 칸인 경우, 남쪽으로 한 칸 이동
        if check(r+2, c) and check(r+1, c-1) and check(r+1, c+1):
            r += 1 # 아래로 이동
        
        # 골렘 서쪽으로 이동 (왼쪽)
        elif check(r-1, c-1) and check(r, c-2) and check(r+1, c-1) and check(r+1, c-2) and check(r+2, c-1):
            r += 1 # 아래로 이동
            c -= 1 # 왼쪽으로 이동
            d = (d - 1) % 4 # 서쪽으로 이동할 때 출구가 반시계방향으로 돈다

        # 골렘 동쪽으로 이동 (오른쪽)
        elif check(r-1, c+1) and check(r, c+2) and check(r+1, c+1) and check(r+1, c+2) and check(r+2, c+1):
            r += 1 # 아래로 이동
            c += 1 # 오른쪽으로 이동
            d = (d + 1) % 4 # 동쪽으로 이동할 때 출구가 시계방향으로 돈다

        else:
            break

    # 골렘의 위치를 지도에 표시해주자
    # 정령의 위치 (r,c) 중심으로 상하좌우 모두 matrix 안에 존재하는지 확인
    # 만약 한 곳이라도 범위를 벗어났다면 안돼
    if not inBoard(r, c) or not inBoard(r-1, c) or not inBoard(r+1, c) or not inBoard(r, c-1) or not inBoard(r, c+1):
        return [False, -1, -1]
    else:
        matrix[r][c] = matrix[r-1][c] = matrix[r+1][c] = matrix[r][c-1] = matrix[r][c+1] = fairy
        exit_r, exit_c = findExit(r, c, d) # 출구 위치
        matrix[exit_r][exit_c] = -fairy # 출구는 특별히 음수로 표시해주기
        return [True, r, c]

# 정령 이동하는 로직 (bfs 탐색)
def bfs(r, c):
    global ans

    q = deque()
    visited_row = []
    q.append([r, c])
    visited = [[False] * M for _ in range(N)]
    visited[r][c] = True

    while q:
        r, c = q.popleft()
        for i in range(4):
            rr = r + dr[i]
            cc = c + dc[i]
            # 탐색 지점이 범위를 벗어났거나, 이미 방문한 곳이거나, 아니면 0인 경우는 갈 수 없어
            # 0 인 지점을 방문할 수 없는 경우 > 이미 골렘이 착지한 루트들을 0이 아닌 숫자들로 표시했기 때문
            # 정령들은 골렘 몸체 내부에서만 이동이 가능하다
            if not inBoard(rr, cc) or visited[rr][cc] or matrix[rr][cc] == 0:
                continue
            # 조건 1) 해당 정령이 타고있는 골렘의 다른 곳으로 이동하는 경우 (절댓값이 동일한 경우. 출구 위치를 음수로 표현해줘서 절댓값으로 확인해야함)
            # 조건 2) 해당 정령이 골렘의 출구에 있고 && 다른 정령의 골렘 몸체로 이동하는 경우
            if abs(matrix[r][c]) == abs(matrix[rr][cc]) or (matrix[r][c] < 0 and abs(matrix[r][c]) != abs(matrix[rr][cc])):
                # 이동할 수 있으면 다음 탐색지점으로 넘겨주고, 방문표시 하고, 해당 row 방문했던 것 표시해줘
                q.append([rr, cc])
                visited[rr][cc] = True
                visited_row.append(rr)

    visited_row.sort(reverse=True) # 내가 방문했던 row를 내림차순으로 정렬하고
    final_pos = visited_row[0] + 1 # 최종 위치의 row를 가져와 (idx였으니까 +1 해주기)
    
    return final_pos


N, M, K = map(int, input().split())
matrix = [[0] * M for _ in range(N)] # R*C 이차행렬 만들어주기
ans = 0

# d >> 북 동 남 서
dr = [-1, 0, 1, 0]
dc = [0, 1, 0, -1]

# for _ in range(K):
# c, d = map(int, input().split())
for fairy in range(1, K+1):
    c, d = map(int, input().split()) # 각 정령의 초기 열 위치, 출구 방향
    
    # 정령이 타고 있는 골렘 이동시키기
    rlt = move(c, d, fairy)
    inBound, x, y = rlt

    # 골렘 몸 일부가 범위 벗어나있는지 확인
    if inBound:
        # 범위 내에 존재하는 경우, 정령 이동
        ans += bfs(x, y)
    else:
        # 범위 내에 존재하지 않는다면, 숲 초기화해주기
        matrix = [[0] * M for _ in range(N)]

print(ans)