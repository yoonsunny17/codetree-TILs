n = int(input())
numbs = list(map(int, input().split()))

new_numbs = [elem ** 2 for elem in numbs]

print(" ".join(map(str, new_numbs)))