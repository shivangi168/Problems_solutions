public class SubsequencesGenerator {
    public static void main(String[] args) {
        String str = "abc";
        System.out.println("All Subsequences:");
        generateSubsequences(str, 0, "");
    }

    public static void generateSubsequences(String str, int index, String current) {
        if (index == str.length()) {
            System.out.println(current);
            return;
        }

        generateSubsequences(str, index + 1, current + str.charAt(index));

        generateSubsequences(str, index + 1, current);
    }
}
