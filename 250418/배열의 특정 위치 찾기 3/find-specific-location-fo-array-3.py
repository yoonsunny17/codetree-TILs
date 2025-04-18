lst = list(map(int, input().split()))

ans = 0
for i in range(len(lst)):
    if lst[i] == 0:
        ans += (lst[i-1] + lst[i-2] + lst[i-3])
        break
        
print(ans)