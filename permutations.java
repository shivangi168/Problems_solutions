import java.util.*;

public class permutations {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter the number!");
        int n = scn.nextInt();
        scn.close();
        
        if (n == 1) {
            System.out.println(1);
            return;
        } else if (n == 2 || n == 3) {
            System.out.println("NO SOLUTION");
            return;
        }

        ArrayList<Integer> res = new ArrayList<>();

        for (int i = n; i >= 1; i--) {
            if (i % 2 == 0) {
                res.add(i);
            }
        }

        for (int i = n; i >= 1; i--) {
            if (i % 2 != 0) {
                res.add(i);
            }
        }

        for (int num : res) {
            System.out.print(num + " ");
        }
    }
}
