import java.util.Arrays;

public class RoateeArray {

    public static void rotateLeft(int[] arr, int k) {
        int n = arr.length;
        k = k % n; 

        reverse(arr, 0, n - k - 1);

        reverse(arr, n - k, n - 1);

        reverse(arr, 0, n - 1);
    }

    private static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7};
        int k = 3;

        System.out.println("Original Array: " + Arrays.toString(arr));
        rotateLeft(arr, k);
        System.out.println("Array after Left Rotation by " + k + ": " + Arrays.toString(arr));
    }
}
