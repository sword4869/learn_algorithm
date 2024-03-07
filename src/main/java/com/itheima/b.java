package com.itheima;
public class b {
    public static void main(String[] args) {
        Integer i1 = 40;
        Integer i2 = Integer.valueOf(40);

        Boolean b1 = true;
        Boolean b2 = Boolean.valueOf(true);
        System.out.println(i1 == i2);
        System.out.println(b1 == b2);

        Boolean b3 = new Boolean(true);
        System.out.println(b1 == b3);
        System.out.println(b2 == b3);


    }
}
