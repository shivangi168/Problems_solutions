import java.util.*;
public class IncreasingArray {
    public static void main(String[] args){
        Scanner scn = new Scanner(System.in);

        int n = scn.nextInt();
        int[] arr = new int[n];
        for(int i=0;i<n;i++){
            arr[i] = scn.nextInt();
        }
        IncreaseElement(arr);

    }
    public static void IncreaseElement(int[] arr){
        int count =0;
        for(int i=1;i<arr.length;i++){
            if(arr[i] < arr[i-1]){
                int temp = arr[i-1] - arr[i];
                count += temp;
                arr[i] = count+ arr[i];
            }

        }
        System.out.println("The value is "+ count);
    }
    
}
