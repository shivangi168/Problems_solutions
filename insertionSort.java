import java.util.*;
public class insertionSort {
    public static void main(String[] args){
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter the size of the array:");
        int size = scn.nextInt();
        int[] arr1 = new int[size];
        System.out.println("Enter the elements of the array:");
        for(int i = 0; i < size;i++){
            arr1[i] = scn.nextInt();
        }
        for(int i= 0;i<size;i++){
            for(int j = i+1;j>=0;j--){
                if(isGreater(arr1,j,j+1)){
                    swapElements(arr1,j,j+1);
                }
                else{
                    break;  // If no swapping is needed, break the inner loop.
                }
            }
        }
        System.out.println("Sorted array: ");
        for(int i = 0; i < size; i++){
            System.out.print(arr1[i] + " ");
        }
    }
    public static void swapElements(int[] arr1, int i ,int j){
     System.out.println("Swapping " +  arr1[i]  + " and "+  arr1[j]);
     int temp = arr1[i];
     arr1[i] = arr1[j];
     arr1[j] = temp;

    }
    public static boolean isGreater(int[] arr1, int i,int j){
        System.out.println("comparing " + arr1[i] + " and "+ arr1[j]);

        if(arr1[i] > arr1[j]){
            return true;
        }
        return false;
    }
    
}
