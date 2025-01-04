import java.util.*;
public class countVowels {
    public static void main(String[] args) {
        Scanner scn = new Scanner(System.in);
        System.out.println("Enter the string");
        String str = scn.nextLine();
        int vowelCount = countVowelss(str);
        System.out.println("The vowel count in the string is: " + vowelCount);
        scn.close();

    }
    public static int countVowelss(String str) {
        int count = 0;
        String vowels = "aeiouAEIOU";
        for(int i = 0; i < str.length(); i++) {
            if(vowels.contains(String.valueOf(str.charAt(i)))) {
                count++;
            }
        }
        return count;
    }
    
}
