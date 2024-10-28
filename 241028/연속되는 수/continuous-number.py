def find_max_count(numbs):
    numbs_set = set(numbs)
    max_length = 0 # 최고 연속 길이 출력해줄 변수

    for n in numbs_set:
        new_numbs = [x for x in numbs if x != n]

        cnt = 1 
        max_cnt = 1 # 현재로서 가장 긴 개수 저장할 변수 (나중에 max_length랑 최댓값 비교, 갱신)
        for i in range(1, len(new_numbs)):
            # 앞의 숫자와 동일한 숫자라면 카운팅
            if new_numbs[i] == new_numbs[i-1]:
                cnt += 1
            else:
                cnt = 1
        
            max_cnt = max(max_cnt, cnt)
        max_length = max(max_length, max_cnt)
    
    return max_length

N = int(input())
numbs = []

for _ in range(N):
    n = int(input())
    numbs.append(n)

print(find_max_count(numbs))