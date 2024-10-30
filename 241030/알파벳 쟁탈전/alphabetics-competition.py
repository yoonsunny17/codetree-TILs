def dfs(student, values, conditions, N):
    # 모든 학생들에게 값을 할당했으면 끝
    if student == N:
        return 1
    
    cnt = 0
    # 현재 학생에게 A, B, C중 하나를 할당해줘
    for value in ['A', 'B', 'C']:
        values[student] = value
        flag = True

        # 현재까지 할당된 학생들에 대해 조건 확인해보기
        for c, a, b in conditions:
            a, b = int(a)-1, int(b)-1
            # 현재 검사하는 두 학생 모두에게 값이 할당되었을 때만 체크 가능
            if a <= student and b <= student:
                # 둘이 같아야 하는데 다르다면 끝
                if c == 'S' and values[a] != values[b]:
                    flag = False
                    break

                # 둘이 달라야 하는데 같다면 끝
                if c == 'D' and values[a] == values[b]:
                    flag = False
                    break
    
        # 현재까지 유효하다면 체크 계속 진행
        if flag:
            cnt += dfs(student+1, values, conditions, N)
    
    return cnt


N, K = map(int, input().split())
conditions = []
for _ in range(K):
    c, a, b = input().split()
    conditions.append([c, a, b])

# 각 학생의 값을 저장할 리스트
values = [None] * N
rlt = dfs(0, values, conditions, N)

print(rlt)