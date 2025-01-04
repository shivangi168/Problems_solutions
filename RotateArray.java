import java.util.*;
public class RotateArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        
        // Rotate array to the right by k positions
        rotate(arr);
        
        // Print the rotated array
        System.out.println("Rotated Array:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }
    public static int[] rotate(int[] arr){
        int i = 0;
        int j = arr.length - 1;

        while(i!=j){
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
        }
        return arr;
    }
    
}
