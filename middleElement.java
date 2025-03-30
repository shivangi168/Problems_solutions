import java.util.ArrayList;
import java.util.Scanner;

public class middleElement {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArrayList<Integer> numbers = new ArrayList<>();

        System.out.println("Enter the number of elements:");
        int n = scanner.nextInt();

        System.out.println("Enter " + n + " integers:");
        for (int i = 0; i < n; i++) {
            int num = scanner.nextInt();
            numbers.add(num);
        }
        ArrayList<Integer> result = new ArrayList<>();

        if (n % 2 == 0) {
            result.add(numbers.get(n / 2 - 1));
            result.add(numbers.get(n / 2));
        } else {
            result.add(numbers.get(n / 2));
        }
        System.out.println("Result");
        for (int num : result) {
            System.out.print(num + " ");
        }

        scanner.close();

    }

}
