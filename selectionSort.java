import java.util.*;

public class selectionSort {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter the number of elements: ");
        int n = scn.nextInt();
        int[] arr = new int[n];
        for (int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }
        for (int i = 0; i < n - 1; i++) {
            int min = i;
            for (int j = i + 1; j < n; j++) {
                if (isSmaller(arr, j, min)) {
                    min = j;
                }
            }
            swapElements(arr, i, min);
        }
        System.out.println("Sorted array: ");
        for (int i = 0; i < n; i++) {
            System.out.print(arr[i] + " ");
        }
        scn.close();

    }

    public static boolean isSmaller(int arr[], int i, int j) {
        System.out.println("Comparing " + arr[i] + " and " + arr[j] + "...");

        if (arr[i] < arr[j]) {
            System.out.println(arr[j] + " is smaller than " + arr[i] + ". Swapping them.");
            return true;
        } else {
            return false;
        }
    }

    public static void swapElements(int[] arr1, int i, int j) {
        System.out.println("Swapping " + arr1[i] + " and " + arr1[j]);
        int temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;

    }

}
