import java.util.*;
public class maxMin {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of the array: ");
        int size = sc.nextInt();
        int[] arr = new int[size];
        System.out.println("Enter the elements of the array: ");    
        for (int i = 0; i < size; i++) {
            arr[i] = sc.nextInt();
        }
         maxSubArraySum(arr);
    }
    public static void maxSubArraySum(int[] nums) {
        int minSum = nums[0];
        int maxSum = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            if(nums[i]> maxSum){
                maxSum = nums[i];
            }
            if(nums[i]< minSum){
                minSum = nums[i];
            }
            
        }
        System.out.println("Maximum: "+maxSum);
        System.out.println("Minimum: "+minSum);
        
    }
    
}
