import java.util.Scanner;

public class DiamondPattern {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);

        System.out.println("Enter the number of rows for the diamond:");
        int rows = scn.nextInt();

        // Upper part of the diamond
        for (int i = 1; i <= rows; i++) {
            // Print spaces
            for (int j = rows - i; j > 0; j--) {
                System.out.print(" ");
            }
            // Print stars
            for (int k = 1; k <= (2 * i - 1); k++) {
                System.out.print("*");
            }
            // Move to the next line
            System.out.println();
        }

        // Lower part of the diamond
        for (int i = rows - 1; i >= 1; i--) {
            // Print spaces
            for (int j = rows - i; j > 0; j--) {
                System.out.print(" ");
            }
            // Print stars
            for (int k = 1; k <= (2 * i - 1); k++) {
                System.out.print("*");
            }
            // Move to the next line
            System.out.println();
        }

        scn.close();
    }
}
