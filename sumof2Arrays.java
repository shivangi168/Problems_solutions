import java.util.*;
public class sumof2Arrays {
    public static void main(String[] args) {
        int[] arr1 = {1, 2, 3, 4, 5};
        int[] arr2 = {6, 7, 8, 9, 10};

        int[] result = sumArrays(arr1, arr2);
        if (result[0] == 0) {
            result = Arrays.copyOfRange(result, 1, result.length);
        }
        for (int num : result) {
            System.out.print(num + " ");
        }
    }

    public static int[] sumArrays(int[] arr1, int[] arr2) {
        int maxLength = Math.max(arr1.length, arr2.length) + 1; 
        int[] result = new int[maxLength];

        int i = arr1.length - 1;
        int j = arr2.length - 1;
        int carry = 0;

        for (int k = result.length - 1; k >= 0; k--) {
            int sum = carry;

            if (i >= 0) {
                sum += arr1[i--];
            }

            if (j >= 0) {
                sum += arr2[j--];
            }

            result[k] = sum % 10;
            carry = sum / 10;
        }
        return result;
    }
}
