import java.util.*;

public class mostFrequent {
    public static void main(String[] args) throws Exception {
        Scanner scn = new Scanner(System.in);
        int size = scn.nextInt();
        int[] arr = new int[size];
        for (int i = 0; i < size; i++) {
            arr[i] = scn.nextInt();
        }
        int result = mostFrequnecyElement(arr, size);
        System.out.println("Most frequent element: " + result);
        scn.close();
    }

    public static int mostFrequnecyElement(int[] arr, int n) {
        int res = arr[0];
        int max_count = 1;
        int curr_count = 1;

        Arrays.sort(arr);
        for (int i = 1; i < n; i++) {
            if (arr[i] == arr[i - 1]) {
                curr_count++;
            } else {
                curr_count = 1;
            }
            if (max_count < curr_count) {
                max_count = curr_count;
                res = arr[i - 1];
            }

        }
        return res;
    }

}
