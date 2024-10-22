def use_coupon(idx):
    return [infos[i][0] + infos[i][1] if i != idx else infos[i][0]//2 + infos[i][1] for i in range(N)]

def presents(infos):
    max_cnt = 0
    
    for i in range(N):
        costs = use_coupon(i)
        costs.sort()
        total_cost = 0
        cnt = 0

        for cost in costs:
            # 지금 가격을 더해도 예산을 벗어나지 않으면 더해주기
            if cost + total_cost <= B:
                total_cost += cost
                cnt += 1
            else:
                break

        max_cnt = max(max_cnt, total_cost)

    return max_cnt

N, B = map(int, input().split())
infos = []
for _ in range(N):
    p, s = map(int, input().split())
    infos.append([p, s])

ans = presents(infos)
print(ans)