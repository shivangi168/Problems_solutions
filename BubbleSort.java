import java.util.*;

public class BubbleSort {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        System.out.println("Enter the array length:");
        int n = scn.nextInt();
        int[] arr = new int[n];

        for (int i = 0; i < n; i++) { // Changed i <= n to i < n
            System.out.println("Enter element at index " + i + ":");
            arr[i] = scn.nextInt();
        }

        BubbleSort(arr, n);

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        scn.close();
    }

    // **Fix 2: Adjusted loop conditions in BubbleSort**
    public static int[] BubbleSort(int[] arr, int n) {
        for (int i = 0; i < n; i++) { // Changed i <= n to i < n
            for (int j = 0; j < n - i - 1; j++) { // Changed j <= n - i to j < n - i - 1
                if (isSmaller(arr, j + 1, j)) {
                    SwapElements(arr, j + 1, j);
                }
            }
        }
        return arr;
    }

    public static boolean isSmaller(int[] arr, int i, int j) {
        System.out.println("Comparing " + arr[i] + " and " + arr[j]);
        return arr[i] < arr[j];
    }

    public static void SwapElements(int[] arr1, int i, int j) {
        System.out.println("Swapping " + arr1[i] + " and " + arr1[j]);

        int temp = arr1[i];
        arr1[i] = arr1[j];
        arr1[j] = temp;
    }
}
