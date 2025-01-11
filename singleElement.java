import java.util.*;
public class singleElement{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array:");
        int n = sc.nextInt();

        System.out.println("Enter the elements of the array:");
        int[] arr = new int[n];
        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }
        
        int singleElement = findSingleElement(arr, n);
        System.out.println("The single element is: " + singleElement);
        sc.close();
    }
    
    public static int findSingleElement(int[] arr,int n){
    

        for(int i=0;i<n-1;i+=2){
            if(arr[i] != arr[i+1]){
               return arr[i];
            }
        }
        return arr[n-1];
      
    }
    
}