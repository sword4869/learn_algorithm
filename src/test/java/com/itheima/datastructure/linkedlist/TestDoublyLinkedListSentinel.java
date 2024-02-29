package com.itheima.datastructure.linkedlist;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

class TestDoublyLinkedListSentinels {

    private DoublyLinkedListSentinels getList() {
        DoublyLinkedListSentinels list = new DoublyLinkedListSentinels();
        list.addLast(1);
        list.addLast(2);
        list.addLast(3);
        list.addLast(4);
        return list;
    }

    @Test
    @DisplayName("测试 get")
    public void test3() {
        DoublyLinkedListSentinels list = getList();
        assertEquals(1, list.get(0));
        assertEquals(3, list.get(2));
        assertEquals(4, list.get(3));
        assertThrows(IllegalArgumentException.class, () -> list.get(10));

    }

    @Test
    @DisplayName("测试 addFirst")
    void addFirst() {
        DoublyLinkedListSentinels list = new DoublyLinkedListSentinels();
        list.addFirst(1);
        list.addFirst(2);
        list.addFirst(3);
        list.addFirst(4);

        assertIterableEquals(List.of(4, 3, 2, 1), list);
    }


    @Test
    @DisplayName("测试 addLast")
    public void test2() {
        DoublyLinkedListSentinels list = getList();
        list.forEach(System.out::println);
        assertIterableEquals(List.of(1, 2, 3, 4), list);
    }


    @Test
    @DisplayName("测试 insert")
    void insert() {
        DoublyLinkedListSentinels list = getList();
        list.insert(0, 5);
        assertIterableEquals(List.of(5, 1, 2, 3, 4), list);

        list = getList();
        list.insert(2, 5);
        assertIterableEquals(List.of(1, 2, 5, 3, 4), list);

        list = getList();
        list.insert(4, 5);
        assertIterableEquals(List.of(1, 2, 3, 4, 5), list);
        assertThrows(IllegalArgumentException.class, () -> getList().insert(7, 7));
    }

    @Test
    @DisplayName("测试 removeFirst")
    void removeFirst() {
        DoublyLinkedListSentinels list = getList();

        list.removeFirst();
        assertIterableEquals(List.of(2, 3, 4), list);
        list.removeFirst();
        assertIterableEquals(List.of(3, 4), list);
        list.removeFirst();
        assertIterableEquals(List.of(4), list);
        list.removeFirst();
        assertIterableEquals(List.of(), list);
        assertThrows(IllegalArgumentException.class, list::removeFirst);
    }


    @Test
    @DisplayName("测试 removeLast")
    void removeLast() {
        DoublyLinkedListSentinels list = getList();
        list.removeLast();
        assertIterableEquals(List.of(1, 2, 3), list);
        list.removeLast();
        assertIterableEquals(List.of(1, 2), list);
        list.removeLast();
        assertIterableEquals(List.of(1), list);
        list.removeLast();
        assertIterableEquals(List.of(), list);
        assertThrows(IllegalArgumentException.class, list::removeLast);
    }

    @Test
    void remove() {
        DoublyLinkedListSentinels list = getList();
        list.remove(2);
        assertIterableEquals(List.of(1, 2, 4), list);

        DoublyLinkedListSentinels list2 = getList();
        list2.remove(0);
        assertIterableEquals(List.of(2, 3, 4), list2);

        list2 = getList();
        list2.remove(3);
        assertIterableEquals(List.of(1,2,3), list2);

        assertThrows(IllegalArgumentException.class, () -> list.remove(10));

        assertThrows(IllegalArgumentException.class, () -> new DoublyLinkedListSentinels().remove(0));
    }

}