import java.util.*;
public class partitionArray {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();
        int[] array = new int[size];
        System.out.println("Enter the elements of the array:");
        for (int i = 0; i < size; i++) {
            array[i] = scanner.nextInt();
        }
        int pivot = scanner.nextInt();
        int[] res = getArray(array, pivot, size);
        System.out.println("Array after partitioning: ");
        for (int num : res) {
            System.out.print(num + " ");
        }
        scanner.close();

    }
    public static int[] getArray(int[] arr , int pivot ,int n){
        int i = 0;
        int j = 0;
        while(i<n){
            if(arr[i] > pivot){
                i++;
            }
            else{ 
                swap(arr, i, j);
                j++;
                i++;
              }
        }
        return arr;
    }



    public static void swap(int[] array, int i,int j){
        System.out.println("swaping " +  array[i]  + " with " +  array[j] );
        int temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    
}
