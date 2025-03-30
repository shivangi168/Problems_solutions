public class StringRotation {
    public static void main(String[] args) {
        String s1 = "abcde";
        String s2 = "edbca";

        boolean isRotation = checkRotation(s1, s2);
        System.out.println("Is \"" + s2 + "\" a rotation of \"" + s1 + "\"? " + isRotation);
    }

    public static boolean checkRotation(String s1, String s2) {
        if (s1 == null || s2 == null || s1.length() != s2.length()) {
            return false;
        }

        String concatenated = s1 + s1;

        return concatenated.contains(s2);
    }
}
