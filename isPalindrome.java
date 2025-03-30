import java.util.*;

public class isPalindrome {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();
        int a = 0;
        int b = input.length() - 1;
        
        boolean isPalindromee = isPalindromes(input,a,b);
        
        if (isPalindromee) {
            System.out.println("The string is a palindrome.");
        } else {
            System.out.println("The string is not a palindrome.");
        }
        scanner.close();
    }

    // Recursive approach to check if a string is a palindrome

    public static boolean isPalindromes(String input ,int a, int b) {
      
        if(a >= b){
            return true;
        }
        if(input.charAt(a) != input.charAt(b)){
            return false;
        }
        return isPalindromes(input,a+1,b-1);
    }
    
    // public static boolean isPalindrome(String input) {

    //     String cleanedInput = input.replaceAll("[^a-zA-Z0-9]", "").toLowerCase();
    //     int a = 0;
    //     int n = cleanedInput.length();


    //     for(int i=0;i<cleanedInput.length()/2; i++) {
    //         if(cleanedInput.charAt(i) != cleanedInput.charAt(n-i-1)) {
    //             return false;

    //     }

    //     // while(a < b) {
    //     //     if(a!= b && 
    //     //     cleanedInput.charAt(a)!= cleanedInput.charAt(b)) {
    //     //         return false;
    //     //     }
    //     //     a++;
    //     //     b--;
    //     }
        
    //     return true;
    // }

    
}
