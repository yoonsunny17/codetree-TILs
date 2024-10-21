'''
1. a, b에서 각 자리 숫자를 하나씩 바꿔본다
2. 바꾼 수를 10진수로 각자 나타낸다
3. a에서 바꿔서 가능한 모든 숫자 리스트와, b에서 바꿔서 가능한 모든 숫자 리스트를 비교한다.
'''
# 이진법 숫자 한자리씩 바꿔주는 로직
def changed_numb_a(a):
    lst = []

    for i in range(len(a)):
        modified = list(a)
        modified[i] = '1' if modified[i] == '0' else '0'
        lst.append(int(''.join(modified),2))

    return lst

# 삼진법 숫자 한자리씩 바꿔주는 로직
def changed_numb_b(b):
    lst = []

    for i in range(len(b)):
        for new_digit in '012':
            modified = list(b)
            if modified[i] != new_digit:
                modified[i] = new_digit
                lst.append(int(''.join(modified), 3))

    return lst

a = input()
b = input()

changed_a_lst = changed_numb_a(a)
changed_b_lst = changed_numb_b(b)

# 두 집합의 교집합인 숫자가 정답이다
for numb in changed_a_lst:
    if numb in changed_b_lst:
        print(numb)