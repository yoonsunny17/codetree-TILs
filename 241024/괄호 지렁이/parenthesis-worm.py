def is_super_valid(string):
    # 굉장히 올바른 문자열인지 확인
    # '('가 모두 나온 후 ')'가 나와야 함

    if len(string) == 0:
        return False

    open_cnt = string.count('(')
    close_cnt = string.count(')')

    if open_cnt != close_cnt:
        return False

    # 열린 괄호 다 나오고 나서 닫힌 괄호가 나와야된다
    for i in range(len(string)-1):
        if string[i] == ')' and string[i+1] == '(':
            return False

    return True

def dfs(r, c, path):
    global max_length

    # 현재 경로가 굉장히 올바른 문자열인지 확인
    curr_str = ''.join(path)
    if is_super_valid(curr_str):
        max_length = max(max_length, len(curr_str))

    # 탐색 시작
    for i in range(4):
        rr = r + dr[i]
        cc = c + dc[i]

        # 범위내, 미방문
        if 0 <= rr < N and 0 <= cc < N and not visited[rr][cc]:
            # 방문 처리, 이동 경로에 추가, 재귀, 백트래킹(경로에서 제외, 방문처리 해제)
            visited[rr][cc] = True
            path.append(matrix[rr][cc])
            dfs(rr, cc, path)
            path.pop()
            visited[rr][cc] = False


N = int(input())
matrix = [list(input()) for _ in range(N)]

# 상 하 좌 우
dr = [-1, 1, 0, 0]
dc = [0, 0, -1, 1]

max_length = 0
visited = [[False] * N for _ in range(N)]

# 시작점 0,0에서 시작
visited[0][0] = True
dfs(0, 0, [matrix[0][0]])

print(max_length)