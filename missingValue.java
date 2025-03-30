import java.util.*;
public class missingValue {
    public static void main(String[] args){
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter the length of array");
        int n = scn.nextInt();
        int[] arr = new int[n];


        for(int i=0;i<n-1;i++){
            arr[i] = scn.nextInt();
        }
        findMising(arr,n);
    }
    public static void findMising(int[] arr , int n){
        int sum = (n*(n+1))/2;
        System.out.println("sum final" + sum);

        int tempSum = 0;
        for(int i=0;i<arr.length;i++){

            tempSum += arr[i];
            System.out.println("sum" + tempSum);
        }

        int res = sum - tempSum;
        System.out.println("The missing number in the array is " + sum);
        System.out.println("The array sum in the array" + tempSum);

        System.out.println("The missing number in the array is " + res);


    }
    
}
