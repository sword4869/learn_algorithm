package com.itheima.datastructure.stack;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

public class TestArrayStack {

    @Test
    public void push() {
        Stack2Array<Object> stack = new Stack2Array<>(3);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        assertFalse(stack.push(4));

        assertIterableEquals(List.of(3, 2, 1), stack);
    }

    @Test
    public void pop() {
        Stack2Array<Object> stack = new Stack2Array<>(3);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        assertEquals(3, stack.pop());
        assertEquals(2, stack.pop());
        assertEquals(1, stack.pop());
        assertNull(stack.pop());
    }

    @Test
    public void pop2() {
        Stack2Array<Object> stack = new Stack2Array<>(3);
        stack.push(1);
        stack.push(2);
        stack.push(3);
        assertEquals(3, stack.pop());
        stack.push(4);
        assertIterableEquals(List.of(4, 2, 1), stack);
    }
}
