def change(numb, base):
    # numb가 0이면 0
    if numb.isdigit() and int(numb) == 0:
        return 0

    val = 0
    power = 0
    for digit in reversed(numb):
        # digit이 원래 숫자면 그대로 진행
        if digit.isdigit():
            digit_val = int(digit)
        # 알파벳이면 숫자로 변환
        else:
            digit_val = ord(digit) - ord('a') + 10

        # 만약에 진법보다 더 큰 수가 있으면 변환 불가
        if digit_val >= base:
            return None

        val += digit_val * (base ** power)
        power += 1 # 거듭제곱 수 갱신

        # 범위 벗어나면 안됨
        if val >= 2 ** 63:
            return None

    return val

def solution(num1, num2):
    possible = [] # 가능한 진법들 저장할 리스트

    # a진법과 b진법은 달라야 한다
    for a in range(2, 37):
        for b in range(2, 37):
            if a == b:
                continue

            # num1을 10진법으로 변환, num2를 10진법으로 변환
            val1 = change(num1, a)
            val2 = change(num2, b)

            # 둘 다 유효한 값이고, 서로 같으면 결과 추가
            if val1 is not None and val2 is not None and val1 == val2:
                possible.append([val1, a, b])

    if len(possible) == 0:
        return 'none'
    elif len(possible) == 1:
        return f'{possible[0][0]} {possible[0][1]} {possible[0][2]}'
    else:
        return 'many'

num1, num2 = input().strip().split()

print(solution(num1, num2))