#!/usr/bin/python3
charend = ", "
for i in range(0, 100):
    samuel = i % 10
    samuel1 = i / 10
    if i < 10 and samuel < samuel1:
        print("{}{}".format(0, i), end=charend)
    elif samuel < samuel1:
        if i == 89:
            charend = "\n"
        print(i, end=charend)
