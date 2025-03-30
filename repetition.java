import java.util.*;

public class repetition {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        String str = scn.nextLine();
        getlongestStr(str);
    }

    public static void getlongestStr(String str) {
        int count = 1;
        int maxCount = 1;
        for (int i = 1; i < str.length(); i++) {
            if (str.charAt(i) == str.charAt(i - 1)) {
                count++;
                System.out.println("this is the normal count" + count);
            } else {
                maxCount = Math.max(maxCount, count);
                count = 1;
            }
            maxCount = Math.max(maxCount, count);

        }
        System.out.println("The longest string length is " + maxCount);

    }

}
