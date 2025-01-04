import java.util.*;
public class ReverseNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int number = scanner.nextInt();
        
        int reversedNumber = 0;
        while(number!=0) {
            int rem = number % 10;
            reversedNumber = reversedNumber * 10 + rem;
            number = number / 10;
        }
       
        System.out.println("Reversed number: " + reversedNumber);
    }
    
}
