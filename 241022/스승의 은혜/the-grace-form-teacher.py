# 쿠폰 적용해야하는 상품만 반값으로 넣고 아니면 원래 가격대로 더한다
def use_coupon(idx):
    return [infos[i][0] + infos[i][1] if i != idx else infos[i][0]//2 + infos[i][1] for i in range(N)]

def presents(infos):
    max_cnt = 0
    
    for i in range(N):
        # 각 선물들에 대해 쿠폰 적용 후 한 상품에 대해 드는 가격 받아온다
        costs = use_coupon(i)
        costs.sort() # 저렴한 것부터 오름차순 정렬
        total_cost = 0
        cnt = 0

        for cost in costs:
            # 지금 가격을 더해도 예산을 벗어나지 않으면 더해준다
            if cost + total_cost <= B:
                total_cost += cost
                cnt += 1
            # 지금 가격을 더했을 때 예산을 벗어난다면 그만
            else:
                break

        max_cnt = max(max_cnt, cnt)

    return max_cnt

N, B = map(int, input().split())
infos = []
for _ in range(N):
    p, s = map(int, input().split())
    infos.append([p, s])

ans = presents(infos)
print(ans)