import java.util.*;

public class majorityElement {
    public static void main(String[] args) {
        // Input : arr[] = {1, 1, 2, 1, 3, 5, 1}
        // Output : 1
        Scanner scn = new Scanner(System.in);
        System.out.print("Enter the number of elements: ");
        int n = scn.nextInt();
        int[] arr = new int[n];
        System.out.println("Enter the elements:");
        for (int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        int majorityElement = findMajorityElement(arr);

        if (majorityElement == -1) {
            System.out.println("There is no majority element.");
        } else {
            System.out.println("The majority element is: " + majorityElement);
        }
    }

    public static int findMajorityElement(int[] arr) {
        int target = arr.length / 2;
        int majorityElement = -1;

        for (int i = 0; i < arr.length; i++) {
            int count = 0;
            for (int j = 0; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    count++;
                }
            }

            if (count > target) {
                return arr[i];
            }
        }

        return -1;
    }
}
