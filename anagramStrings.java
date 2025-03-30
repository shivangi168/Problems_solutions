import java.util.*;
public class anagramStrings {
    public static void main(String[] args) throws Exception {

        // ip1 = silent
        // ip2= listen
        // op -yes (same frequencey and char count)

        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the first string: ");
        String str1 = scanner.nextLine();
        System.out.print("Enter the second string: ");
        String str2 = scanner.nextLine();

        if(equals(str1, str2)){
            System.out.println("The strings are anagrams.");
        }
        else{
            System.out.println("The strings are not anagrams.");
        }
        scanner.close();

    }
    public static boolean equals(String str1, String str2) {

       if(str1.length()!= str2.length()){
        return false;
       }

       HashMap<Character, Integer> charCount = new HashMap<>();

       for (char c : str1.toCharArray()) {
           charCount.put(c, charCount.getOrDefault(c, 0) + 1);
       }

       for (char c : str2.toCharArray()) {
           if (!charCount.containsKey(c) || charCount.get(c) == 0) {
               return false; 
           }
           charCount.put(c, charCount.get(c) - 1);
       }

       for (int count : charCount.values()) {
           if (count != 0) {
               return false;
           }
       }
       return true;


    //    char[] a = str1.toCharArray();
    //    char[] b = str2.toCharArray();

    //    Arrays.sort(a);
    //    Arrays.sort(b);

    //    return Arrays.equals(a, b);

    }
    
}
