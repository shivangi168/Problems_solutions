public class MaxSubArray {
    public static int maxSubArray(int[] nums) {
        int currentSum = nums[0];
        int maxSum = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            
            maxSum = Math.max(maxSum, currentSum);
        }
        
        return maxSum;
    }
    
    public static void main(String[] args) {
        int[] nums1 = {-2, 1, -3, 4, -1, 2, 1, -5, 4};
        System.out.println("Maximum Subarray Sum (Example 1): " + maxSubArray(nums1)); // Output: 6
        
        int[] nums2 = {1};
        System.out.println("Maximum Subarray Sum (Example 2): " + maxSubArray(nums2)); // Output: 1
        
        int[] nums3 = {5, 4, -1, 7, 8};
        System.out.println("Maximum Subarray Sum (Example 3): " + maxSubArray(nums3)); // Output: 23
        
        int[] nums4 = {-3, -2, -1};
        System.out.println("Maximum Subarray Sum (All Negatives): " + maxSubArray(nums4)); // Output: -1
        
        int[] nums5 = {0, 0, 0, 0};
        System.out.println("Maximum Subarray Sum (All Zeros): " + maxSubArray(nums5)); // Output: 0
    }
}
