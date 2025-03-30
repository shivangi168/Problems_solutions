import java.util.*;
public class missingNumber {
    public static void main(String[] args){

    Scanner sc = new Scanner(System.in);

    System.out.print("Enter the size of the array: ");
    int size = sc.nextInt();
    int[] arr = new int[size];
    System.out.println("Enter the elements of the array: ");    
    for (int i = 0; i < size; i++) {
        arr[i] = sc.nextInt();
    }
    
    int missing = findMissing(arr, size);


    System.out.println("The missing number is: " + missing);
    sc.close();
}

public static int findMissing(int[] arr, int size) {
    int sum = (size * (size + 1)) / 2;
    int actualSum = 0;
    for (int i = 0; i < size; i++) {
        actualSum += arr[i];
    }
    return sum - actualSum;
}
    
}
