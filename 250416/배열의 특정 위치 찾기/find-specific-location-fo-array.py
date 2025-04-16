arr = list(map(int, input().split()))

sum1 = 0
for i in range(1, 10, 2):
    sum1 += arr[i]

sum2 = 0
for i in range(2, 10, 3):
    sum2 += arr[i]

print(f'{sum1} {sum2/3:.1f}')