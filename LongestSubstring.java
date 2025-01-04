import java.util.HashSet;

public class LongestSubstring {
    public static void main(String[] args) {
        String str = "abcabcbb";
        int length = findLongestSubstringLength(str);
        System.out.println("The length of the longest substring without repeating characters is: " + length);
    }

    public static int findLongestSubstringLength(String s) {
        int maxLength = 0;
        int left = 0; 
        HashSet<Character> set = new HashSet<>();

        for (int right = 0; right < s.length(); right++) {
            char currentChar = s.charAt(right);

            while (set.contains(currentChar)) {
                set.remove(s.charAt(left));
                left++;
            }

            set.add(currentChar);

            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
