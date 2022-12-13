#include <stdio.h>
#define P printf("%d %d\n", a, b)
void swap1(int a, int b)
{
    int t = a;
    a = b;
    b = t;
    P;
}

// aba + 'a^b'
void swap2(int a, int b)
{
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
    P;
}

int main()
{
    int a = 3, b = 4;
    swap1(a, b);
    swap2(a, b);
    return 0;
}

