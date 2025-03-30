import java.util.*;
public class reverseArray {
    public static void main(String[] args){
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int n = scn.nextInt();
        System.out.println("Enter the elements of the array:");
        int[] arrayA = new int[n];

        for(int i=0;i<n;i++){
            arrayA[i] = scn.nextInt();
        }


        int[] arrayB = getReversedArray(arrayA);

        for(int i=0;i<arrayB.length ; i++){
            System.out.print(arrayB[i] + " ");
        } 


        System.out.println("this is the reversed array" + arrayB);   
        System.out.println("This is the reversed array: " + Arrays.toString(arrayB));
 
        scn.close(); 



    }
    // public static int[] getReversedArray(int[] A){
    //     int n = A.length;
    //     int[] tempArr = new int[n];
    //     for(int i=0; i<n;i++){
    //         tempArr[i] = A[n-i-1];
    //     }
    //     return tempArr;
    // }
    public static int[] getReversedArray(int[] A){
        int l = 0;
        int r = A.length-1;
        while(l<r){
            int temp = A[l];
            A[l] = A[r];
            A[r] = temp;
            l++;
            r--;
        }
        return A;
       
    }
    
}
