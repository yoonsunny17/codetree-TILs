def count_arrangements(N, K, conditions):
    # 학생들의 배치를 나타내는 리스트 초기화
    arrangement = [-1] * N
    count = 0  # 가능한 경우의 수를 세는 변수
    
    def check_valid():
        # 현재 배치가 모든 조건을 만족하는지 확인
        for c, a, b in conditions:
            if c == 'S':  # S 조건은 같은 문자여야 함
                if arrangement[a] != arrangement[b]:
                    return False
            elif c == 'D':  # D 조건은 다른 문자여야 함
                if arrangement[a] == arrangement[b]:
                    return False
        return True
    
    def backtrack(student_index):
        nonlocal count
        if student_index == N:
            # 모든 학생에게 문자를 할당했을 때 조건을 확인
            if check_valid():
                count += 1
            return
        
        # 각 학생에게 'A', 'B', 'C' 중 하나를 할당
        for letter in range(3):
            arrangement[student_index] = letter
            backtrack(student_index + 1)
            arrangement[student_index] = -1  # 백트래킹: 원상복구
    
    # 백트래킹 시작
    backtrack(0)
    return count

N, K = map(int, input().split())
conditions = []
for _ in range(K):
    c, a, b = input().split()
    conditions.append((c, int(a)-1, int(b)-1))

# 가능한 경우의 수 출력
print(count_arrangements(N, K, conditions))