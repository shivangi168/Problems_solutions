import java.util.*;

public class sort123array {
    public static void main(String[] args){
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = scn.nextInt();

        int[] arr = new int[size];
        System.out.println("Enter the elements of the array:");
        for(int i = 0; i < size; i++){
            arr[i] = scn.nextInt();
        }
        getSortedArr(arr, size);
        System.out.println("Sorted array: ");
        for(int i = 0; i < size; i++){
            System.out.print(arr[i] + " ");
        }
        
        scn.close();
    }
    public static void getSortedArr(int[] arr,int n){
        // 0,1,0,1 ,1,2,1,1,2,1,0
        int a1 = 0, a2 = 0, a3 = 0;
        for(int i=0;i<n;i++){
            if(arr[i] == 0){
                a1++;
            }
            else if(arr[i] == 1){
                a2++;
            }
            else{
                a3++;
            }
        }
        int idx = 0;
        for(int i=0;i<a1;i++){
            arr[idx++] = 0;
        }
        for(int i=0;i<a2;i++){
            arr[idx++] = 1;
        }
        for(int i=0;i<a3;i++){
            arr[idx++] = 2;
        }
    }
}