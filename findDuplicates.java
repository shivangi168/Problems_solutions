import java.util.Scanner;

public class findDuplicates {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter the size of the array:");
        int n = scn.nextInt();
        int[] arr = new int[n];

        System.out.println("Enter the elements of the array:");
        for (int i = 0; i < n; i++) {
            arr[i] = scn.nextInt();
        }

        int[] duplicates = findDuplicates(arr);

        System.out.println("Duplicates:");
        boolean hasDuplicates = false;
        for (int j = 0; j < duplicates.length; j++) {
            if (duplicates[j] != 0) { // Skip uninitialized values
                System.out.print(duplicates[j] + " ");
                hasDuplicates = true;
            }
        }

        if (!hasDuplicates) {
            System.out.println("No duplicates found.");
        }

        scn.close();
    }

    public static int[] findDuplicates(int[] arr) {
        int[] duplicates = new int[arr.length];
        int k = 0;

        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] == arr[j]) {
                    boolean alreadyAdded = false;

                    for (int l = 0; l < k; l++) {
                        if (duplicates[l] == arr[i]) {
                            alreadyAdded = true;
                            break;
                        }
                    }

                    if (!alreadyAdded) {
                        duplicates[k++] = arr[i];
                    }
                    break; 
                }
            }
        }

        return duplicates; 
    }
}
