package com.itheima.datastructure.stack;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

import org.checkerframework.checker.units.qual.s;

public class F {

    public static void main(String[] args) {
        // System.out.println(infixToSuffix("a+b"));
        System.out.println(infixToSuffix("a+b-c"));
        System.out.println(infixToSuffix("a+b*c"));
        System.out.println(infixToSuffix("a*b-c"));
        System.out.println(infixToSuffix("(a+b)*c"));
        System.out.println(infixToSuffix("(a+b*c-d)*e"));
        System.out.println(infixToSuffix("a*(b+c)"));
    }

    public static String infixToSuffix(String str) {
        StringBuffer sb = new StringBuffer();
        // LinkedList<Character> stackNum = new LinkedList<>();
        LinkedList<Character> stackSymbol = new LinkedList<>();
        char[] chars = str.toCharArray();
        for (char c : chars) {
            int priority = priorityMap.getOrDefault(c, -1);
            if (priority < 0) {
                sb.append(c);
            }else if(priority ==0){
                stackSymbol.push(c);
            }else if(priority == 999){
                while(!stackSymbol.isEmpty()){
                    char top = stackSymbol.poll();
                    if(top == '('){
                        break;
                    }
                    sb.append(top);
                }
            }
            else{
                if(stackSymbol.isEmpty()){
                    stackSymbol.push(c);
                    continue;
                }
                int priorityStack = priorityMap.get(stackSymbol.peek());
                if(priority > priorityStack){
                    stackSymbol.push(c);
                }else{
                    while(!stackSymbol.isEmpty()){
                        char top = stackSymbol.poll();
                        sb.append(top);
                        if(stackSymbol.isEmpty() || priority > priorityMap.get(stackSymbol.peek())){
                            stackSymbol.push(c);
                            break;
                        }
                    }
                }
            }
        }
        while(!stackSymbol.isEmpty()){
            sb.append(stackSymbol.poll());
        }
        return sb.toString();
    }

    static HashMap<Character, Integer> priorityMap = new HashMap<>() {
        {
            put('(', 0);
            put('+', 1);
            put('-', 1);
            put('*', 2);
            put('/', 2);
            put(')', 999);
        }
    };

}
