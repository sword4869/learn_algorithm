/**
 * 仅仅是while中的`t > a[j]`和`t < a[j]`
 */ 

#include <stdio.h>

void select_descend(int a[], int length)
{
    int i, j, t;
    for (i = 1; i < length; i++)
    {
        t = a[i];
        j = i - 1;
        while (j >= 0 && t > a[j])
        {
            a[j + 1] = a[j];
            --j;
        }
        a[j + 1] = t;
    }
}

void select_ascend(int a[], int length)
{
    int i, j, t;
    for (i = 1; i < length; i++)
    {
        t = a[i];
        j = i - 1;
        while (j >= 0 && t < a[j])
        {
            a[j + 1] = a[j];
            --j;
        }
        a[j + 1] = t;
    }
}

int main()
{
    int a[] = {4, 0, 2, 3, 1};
    int length = sizeof(a)/sizeof(int);
    select_descend(a, length);

    for(int i = 0 ; i< length;i++)
    {
        printf("%d ", a[i]);
    }
    return 0;
}

