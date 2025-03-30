public class isSubsequence {
    public static void main(String[] args) {
        String s1 = "abc";
        String s2 = "ahbgdc";

        boolean isSubsequence = checkSubsequence(s1, s2);
        System.out.println("\"" + s1 + "\" is a subsequence of \"" + s2 + "\": " + isSubsequence);
    }

    public static boolean checkSubsequence(String s1, String s2) {
        int i = 0; 
        int j = 0; 

        while (i < s1.length() && j < s2.length()) {
            if (s1.charAt(i) == s2.charAt(j)) {
                i++;
            }
            j++;
        }

        return i == s1.length();
    }
}
