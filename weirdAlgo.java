import java.util.*;

public class weirdAlgo {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter the number!");
        int n = scn.nextInt();
        ArrayList<Integer> res = new ArrayList<>();
        res.add(n);

        while (n != 1) {
            if (n % 2 == 0) {
                n = n / 2;
            } else {
                n = 3 * n + 1;

            }
            res.add(n);
        }
        System.out.println("Weird Algorithm Sequence: " + res);

    }
}
