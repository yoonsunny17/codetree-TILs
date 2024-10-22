N, K = map(int, input().split())
steps = [0] * N
for _ in range(K):
    a, b = map(int, input().split())

    for i in range(a-1, b):
        steps[i] += 1

steps.sort()
print(steps[(1+N)//2-1])