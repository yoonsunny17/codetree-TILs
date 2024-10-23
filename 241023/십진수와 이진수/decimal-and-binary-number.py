numb = input()

first_trans = int(numb, 2)

first_trans *= 17
lst = []
while first_trans >= 1:
    lst.append(first_trans % 2)
    first_trans = first_trans // 2

second_trans = ''.join(map(str, reversed(lst)))
print(int(second_trans))