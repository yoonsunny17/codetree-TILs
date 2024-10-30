def check(selected, now, a, b, same):
    # 둘중 하나라도 아직 알파벳 선택이 안되었으면 보류    
    if selected[a] == 0 or selected[b] == 0:
        return True

    # 같아야 하는데 달라
    if same and selected[a] != selected[b]:
        return False

    # 달라야 하는데 같아
    if not same and selected[a] == selected[b]:
        return False
    
    return True

def backtracking(depth, N, selected, conditions):
    # 모든 학생이 선택 완료했으면 끝
    if depth == N:
        return 1
    
    cnt = 0
    # 현재 학생(depth)에게 A, B, C중 하나 할당
    for choice in [1, 2, 3]:
        selected[depth] = choice

        # 현재 선택이 유효한지 체크
        flag = True
        for c, a, b in conditions:
            if not check(selected, depth, int(a)-1, int(b)-1, c=='S'):
                flag = False
                break

        if flag:
            cnt += backtracking(depth+1, N, selected, conditions)

        # 선택 취소
        selected[depth] = 0

    return cnt

N, K = map(int, input().split())
conditions = []
for _ in range(K):
    c, a, b = input().split()
    conditions.append([c, a, b])

# 0: 아직 선택안됨, 1:A 2:B 3:C
selected = [0] * N
rlt = backtracking(0, N, selected, conditions)
print(rlt)