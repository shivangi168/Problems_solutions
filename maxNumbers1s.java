import java.util.*;

public class maxNumbers1s {
    public static void main(String[] args) {

        // Input matrix : 0 1 1 1
        // 0 0 1 1
        // 1 1 1 1
        // 0 0 0 0
        // Output: 2
        // Explanation: Row = 2 has maximum number of 1s, that is 4.

        Scanner scn = new Scanner(System.in);
        System.out.print("Enter the number of rows: ");
        int rows = scn.nextInt();
        System.out.println("Enter the number of columns: ");
        int colm = scn.nextInt();

        int[][] matrix = new int[rows][colm];
        System.out.println("Enter the elements of the matrix:");

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < colm; j++) {
                matrix[i][j] = scn.nextInt();
            }
        }

        System.out.println(getMaxonesRowsIndex(matrix));
        scn.close();

    }

    public static int getMaxonesRowsIndex(int[][] matrix) {
        int maxcount = 0;
        int maxIndex = 0;

        for (int i = 0; i < matrix.length; i++) {
            int count = 0;
            for (int j = 0; j < matrix.length; j++) {
                if (matrix[i][j] == 1) {
                    count++;
                }
                if (count > maxcount) {
                    maxcount = count;
                    maxIndex = i;
                }
            }
        }
        return maxIndex;

    }

}
