from itertools import combinations_with_replacement, permutations

def first_play(N, cnt, selected):
    if cnt == N:
        print(*selected)
        return

    for i in range(1, 7):
        selected.append(i)
        first_play(N, cnt+1, selected)
        selected.pop()


N, M = map(int, input().split())

if M == 1:
    first_play(N, 0, [])

elif M == 2:
    for val in combinations_with_replacement(range(1, 7), N):
        print(*val)
    
elif M == 3:
    for val in permutations(range(1, 7), N):
        print(*val)