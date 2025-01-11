import java.util.*;
public class leastFrequentElement{
    public static int INT_MAX = 1000000000;

    public static void main(String[] args) throws Exception{
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the size of the array:");
        int n = sc.nextInt();

        System.out.println("Enter the elements of the array:");
        int[] arr = new int[n];
        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }
        int leastFrequent = findLeastFrequent(arr,n);
        System.out.println("The least frequent element is: " + leastFrequent);
        sc.close();
    }
    
    public static int findLeastFrequent(int[] arr,int n){
        int minCount = INT_MAX;
        int leastFrequentElement = -1;
        for(int i=0;i<n;i++){
            int count=0;
            for(int j=0;j<arr.length;j++){
                if(arr[i]==arr[j]){
                    count++;
            }
                if(count<minCount){
                    minCount=count;
                    leastFrequentElement=arr[i];
                }
            }
        }
        
        
      
        return leastFrequentElement;
    }

}