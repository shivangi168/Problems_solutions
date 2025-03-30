import java.util.*;

public class moveNegative {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = scn.nextInt();
        int[] arr = new int[size];
        System.out.println("Enter the elements of the array:");
        for (int i = 0; i < size; i++) {
            arr[i] = scn.nextInt();
        }
        moveNegatives(arr);
        System.out.println("Array after moving negative elements to the end:");
        for (int i : arr) {
            System.out.print(i + " ");
        }
        scn.close();

    }

    public static void swap(int[] array, int i, int j) {

        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    public static void moveNegatives(int[] array) {
        int low = 0;
        int high = array.length - 1;
        while (low < high) {
            if (array[low] <= 0) {
                low++;
            } else {
                swap(array, low, high--);

            }

        }

    }

}
