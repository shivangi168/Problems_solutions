import java.util.*;

public class quickSort {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter the number of elements: ");
        int n = scn.nextInt();
        int[] arr = new int[n];
        System.out.println("Enter the elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }
        quickSortt(arr, 0, n - 1);
        System.out.println("Sorted array:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
        scn.close();
    }

    public static void quickSortt(int[] arr, int lo, int hi) {

        if (lo >= hi) {
            return;
        }
        int pivot = arr[hi];

        int pivotIndex = partitionArray(arr, pivot, lo, hi);
        quickSortt(arr, lo, pivotIndex - 1);
        quickSortt(arr, pivotIndex + 1, hi);

    }

    public static int partitionArray(int[] arr, int pivot, int lo, int hi) {
        int i = lo;
        int j = lo;

        while (i <= hi) {
            if (arr[i] <= pivot) {
                swapElements(arr, i, j);
                i++;
                j++;
            } else {
                i++;

            }

        }
        return j - 1;

    }

    public static void swapElements(int[] arr, int i, int j) {
        System.out.println("swapping elements" + arr[i] + "with" + arr[j]);
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

}