def calc_arr(arr):
    cnt = arr[0] # 처음은 항상 숫자

    # 배열의 홀수번째 친구들은 항상 연산자
    for i in range(1, len(arr)-1, 2):
        if arr[i] == '+':
            cnt += arr[i+1]
        if arr[i] == '-':
            cnt -= arr[i+1]
        if arr[i] == 'x':
            cnt *= arr[i+1]
    
    return cnt

def find_max_min(r, c, arr):
    global max_calc, min_calc
    
    # 마지막 점에 도착한 경우 최댓값, 최솟값 갱신해주기
    if r == N-1 and c == N-1:
        max_calc = max(max_calc, calc_arr(arr))
        min_calc = min(min_calc, calc_arr(arr))
        
    # 하, 우 탐색
    for d in ((1, 0), (0, 1)):
        rr = r + d[0]
        cc = c + d[1]
        # 범위내, 미방문
        if 0 <= rr < N and 0 <= cc < N and not visited[rr][cc]:
            # 방문 처리, 배열에 삽입, 백트래킹 재귀, 배열에서 빼기, 방문 해제
            visited[rr][cc] = True
            arr.append(int(matrix[rr][cc]) if matrix[rr][cc].isdigit() else matrix[rr][cc])
            find_max_min(rr, cc, arr)
            arr.pop()
            visited[rr][cc] = False


N = int(input())
matrix = [list(map(str, input().split())) for _ in range(N)]

max_calc = 0
min_calc = float('inf')

visited = [[False] * N for _ in range(N)]

visited[0][0] = True
find_max_min(0, 0, [int(matrix[0][0])])

print(max_calc, min_calc)