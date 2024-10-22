'''
1. 학생들의 [선물 가격, 배송비]를 저장하고, 선물가격이 작은 순부터 정렬한다 (오름차순)
2. 순차적으로 쿠폰을 적용한다.
3. 쿠폰을 적용한 선물을 포함해서, 예산을 넘지 않고 최대 얼마나 살 수 있는지를 확인한다.
4. 최대 구입 가능한 수 중 최댓값 출력한다. 
'''

def buy_presents(idx, infos):
    cnt = 1
    sums = 0
    visited = [0] * N
    visited[idx] = 1 # 이미 구매함을 표시
    sums += sum(infos[idx])

    for i, info in enumerate(infos):
        if not visited[i]:
            # 가격을 더했는데 예산을 넘어가지 않는다면 더해줘
            if sums + sum(info) <= B:
                sums += sum(info)
                visited[i] = 1
                cnt += 1
            # 가격을 더했는데 예산을 넘어간다면 방문 처리만 하고 넘어가
            else:
                visited[i] = 1
                continue

    return cnt


N, B = map(int, input().split())
infos = []

max_cnt = 0

for _ in range(N):
    price, fee = map(int, input().split())
    infos.append([price, fee])

for idx, info in enumerate(infos):
    info[0] //= 2
    rlt = buy_presents(idx, infos)
    max_cnt = max(rlt, max_cnt)

print(max_cnt)