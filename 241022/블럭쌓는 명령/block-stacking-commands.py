N, K = map(int, input().split())
steps = [0] * (N+1) # 인덱스 1부터 시작

# 범위 시작점에 +1, 끝점 다음 위치에 -1
for _ in range(K):
    a, b = map(int, input().split())
    steps[a-1] += 1 # 시작점
    steps[b] -= 1 # 끝점 다음 위치

# 누적 합 계산
for i in range(1, N):
    steps[i] += steps[i-1]

steps = steps[:-1] # 마지막 원소 제거
steps.sort()
mid = (1+N)//2 - 1

print(steps[mid])