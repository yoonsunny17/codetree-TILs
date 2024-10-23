from collections import deque
from pprint import pprint

K = int(input())
matrix = [[0] * 5 for _ in range(5)]
visited = [[0] * 5 for _ in range(5)]

# 상 하 좌 우
dr = [-1, 1, 0, 0]
dc = [0, 0, -1, 1]

for _ in range(K):
    r, c = map(int, input().split())
    matrix[r-1][c-1] = -1 # 갈 수 없는 곳 표시

q = deque()
q.append([0, 0])
matrix[0][0] = 1

# A가 갈 수 있는 칸의 개수
cnt = (25-K)//2 - 1 # 처음에 0,0에 있으므로 1 빼준다

ans = 0
while q:
    r, c = q.popleft()
    for i in range(4):
        rr = r + dr[i]
        cc = c + dc[i]
        # 범위내, 0인 곳
        if 0 <= rr < 5 and 0 <= cc < 5 and matrix[rr][cc] == 0:
            if cnt > 0:
                matrix[rr][cc] += matrix[r][c]
                q.append([rr, cc])
                cnt -= 1
            if cnt == 0:
                if len(q) > 0:
                    ans += 1
                    break

print(ans)