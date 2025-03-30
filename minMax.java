import java.util.*;

public class minMax {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        System.out.print("Enter the number of elements in the array: ");
        int n = scn.nextInt();

        int[] arr = new int[n];

        System.out.println("Enter " + n + " elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = scn.nextInt(); // Read each element
        }

        int minfound = getMinValue(arr, n);
        int maxfound = getMaxValue(arr, n);

        System.out.println("Minimum value in the array is: " + minfound);
        System.out.println("Maximum value in the array is: " + maxfound);

        scn.close();
    }

    // Function to find the minimum value in the array
    public static int getMinValue(int[] arr1, int n) {
        int minValue = arr1[0];
        for (int i = 1; i < n; i++) {
            if (arr1[i] < minValue) {
                minValue = arr1[i];
            }
        }
        return minValue;
    }

    public static int getMaxValue(int[] arr1, int n) {
        int maxValue = arr1[0];
        for (int i = 1; i < n; i++) {
            if (arr1[i] > maxValue) {
                maxValue = arr1[i];
            }
        }
        return maxValue;
    }
}
