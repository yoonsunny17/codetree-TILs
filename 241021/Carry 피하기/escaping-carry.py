'''
1. 숫자들을 문자열로 변환해서 자리별로 확인할 수 있도록 한다.
2. 백트래킹을 통해 가능한 모든 숫자의 조합을 탐색하고, 각 자리에 대한 합을 계산한다.
3. 한 자리라도 10 이상이 되는 겨우 바로 중단. 다음 탐색 시작한다.
4. 유효한 조합 중 가장 많은 숫자 선택할 수 있는 경우 찾는다.
'''

def can_add_without_carry(numbs):
    # 모든 숫자를 자리수별로 더해서 carry가 발생하지 않는지 확인
    max_len = max(len(numb) for numb in numbs) # 가장 긴 숫자 자리수
    sums = [0] * max_len # 각 자리의 합 저장할 리스트

    for numb in numbs:
        # 각 숫자를 1의 자리부터 거꾸로 더하기
        for i, digit in enumerate(reversed(numb)):
            sums[i] += int(digit)
            # 만약 10 이상이면 carry 발생
            if sums[i] >= 10:
                return False
    
    return True

def backtracking(numbs, idx, selected):
    # 종료 조건: 모든 숫자 확인 후
    if idx == len(numbs):
        return len(selected)
    
    # 선택할 수 있는 최대 개수를 저장할 변수
    max_cnt = len(selected)

    # 1. 현재 숫자를 선택하지 않는 경우
    max_cnt = max(max_cnt, backtracking(numbs, idx+1, selected))

    # 2. 현재 숫자를 선택하는 경우
    new_selected = selected+[numbs[idx]]
    if can_add_without_carry(new_selected):
        max_cnt = max(max_cnt, backtracking(numbs, idx+1, new_selected))
    
    return max_cnt



n = int(input())
numbs = [input().strip() for _ in range(n)]

# 백트래킹으로 최대 선택 가능한 숫자 개수 세기
rlt = backtracking(numbs, 0, [])
print(rlt)