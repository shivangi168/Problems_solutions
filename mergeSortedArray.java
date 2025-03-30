import java.util.*;
public class mergeSortedArray {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter the size of the first array: ");
        int n = scn.nextInt();
        int[] arr1 = new int[n];
        System.out.println("Enter the elements of the first array:");
        for (int i = 0; i < n; i++) {
            arr1[i] = scn.nextInt();
        }
        
        System.out.print("Enter the size of the second array: ");
        int m = scn.nextInt();
        int[] arr2 = new int[m];
        System.out.println("Enter the elements of the second array:");
        for (int i = 0; i < m; i++) {
            arr2[i] = scn.nextInt();
        }
        
        int[] mergedArray = mergeArrays(arr1, arr2);
        
        System.out.println("Merged array:");
        for (int num : mergedArray) {
            System.out.print(num + " ");
        }
    }

    public static int[] mergeArrays(int[] arr1, int[] arr2) {
        int[] mergedArray = new int[arr1.length + arr2.length];
        int i = 0, j = 0, k = 0;
        
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                mergedArray[k++] = arr1[i++];
            } else {
                mergedArray[k++] = arr2[j++];
            }
        }
        
        while (i < arr1.length) {
            mergedArray[k++] = arr1[i++];
        }
        
        while (j < arr2.length) {
            mergedArray[k++] = arr2[j++];
        }
        
        return mergedArray;
    }
    
    
}
