from itertools import product

def backtracking(value, lst):
    for i in lst:
        # c, int(a), int(b) = i
        c, a, b = i
        a, b = int(a), int(b)
        # 달라야 할때
        if c == 'D':
            # 같으면 땡
            if value[a-1] == value[b-1]:
                return False

        # 같아야 할때
        if c == 'S':
            # 다르면 땡
            if value[a-1] != value[b-1]:
                return False
    return True

N, K = map(int, input().split())
lst = []
for _ in range(K):
    c, a, b = map(str, input().split())
    lst.append([c, a, b])

cnt = 0
for value in product(['A', 'B', 'C'], repeat=N):
    if backtracking(value, lst):
        cnt += 1
print(cnt)