'''
1. 수열 b 길이만큼 구간별로 체크해본다
2. 수열 b에서 최솟값을 빼서, 최솟값에서부터 각각의 수가 얼마나 차이나는지 체크한다.
3. 1번에서 자른 a의 구간에서, 구간의 최솟값을 뺐을 때 그 리스트가 2와 동일한 구성인지 확인한다
'''

N = int(input())
a = list(int(input()) for _ in range(N))
M = int(input())
b = list(int(input()) for _ in range(M))

check_b = []
min_b = min(b)
for i in b:
    check_b.append(i-min_b)

cnt = 0
index_lst = []

for idx in range(N-M+1):
    check = a[idx:idx+M]
    min_check = min(check)
    tmp = []
    for i in check:
        tmp.append(i-min_check)
    
    sorted_tmp = sorted(tmp)
    sorted_check_b = sorted(check_b)
    if sorted_check_b == sorted_tmp:
        cnt += 1
        index_lst.append(idx)

print(cnt)
for i in index_lst:
    print(i+1)