import java.util.*;

public class oddFrequency {
    public static void main(String[] args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter a string:");
        int input = scanner.nextInt();
        int[] arr = new int[input];
        System.out.println("Enter the elements of the array: ");
        for (int i = 0; i < input; i++) {
            arr[i] = scanner.nextInt();
        }
        System.out.println("The character with odd frequency is: " + findOddFrequency(input, arr));
        scanner.close();
    }

    public static int findOddFrequency(int size, int[] arr) {
        for (int i = 0; i < size; i++) {
            int result = 0;
    
            for (int j = 0; j < size; j++) {
                if (arr[i] == arr[j]) {
                    result++;
                }
            }
    
            if (result % 2 != 0) {
                return arr[i];
            }
        }
    
        return -1;
     
    }
}