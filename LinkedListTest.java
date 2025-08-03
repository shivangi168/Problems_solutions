public class LinkedListClass{
    private Node head;

    private class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            this.next = null;
        }
    }

    public void add(int data) {
        Node newNode = new Node(data);
        if (head == null) {
            head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    public void display() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " ");
            current = current.next;
        }
        System.out.println();
    }
    public void remove(int data) {
        if (head == null) return;

        if (head.data == data) {
            head = head.next;
            return;
        }

        Node current = head;
        while (current.next != null && current.next.data != data) {
            current = current.next;
        }

        if (current.next != null) {
            current.next = current.next.next;
        }
    }
    public boolean contains(int data) {
        Node current = head;
        while (current != null) {
            if (current.data == data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    public int size() {
        int count = 0;
        Node current = head;
        while (current != null) {
            count++;
            current = current.next;
        }
        return count;
    }
    public void clear() {
        head = null;
    }
    public boolean isEmpty() {
        return head == null;
    }
    public Node getHead() {
        return head;
    }
    public void setHead(Node head) {
        this.head = head;
    }
    public void reverse() {
        Node prev = null;
        Node current = head;
        Node next = null;
        while (current != null) {
            next = current.next; // Store next node
            current.next = prev; // Reverse the link
            prev = current; // Move prev to current
            current = next; // Move to next node
        }
        head = prev; // Update head to new first element
    }
    public static void main(String[] args) {
        LinkedListClass list = new LinkedListClass();
        list.add(1);
        list.add(2);
        list.add(3);
        list.display(); // Output: 1 2 3 

        list.remove(2);
        list.display(); // Output: 1 3 

        System.out.println(list.contains(1)); // Output: true
        System.out.println(list.contains(2)); // Output: false

        System.out.println("Size: " + list.size()); // Output: Size: 2

        list.reverse();
        list.display(); // Output: 3 1 

        list.clear();
        System.out.println("Is empty: " + list.isEmpty()); // Output: Is empty: true
    }
}