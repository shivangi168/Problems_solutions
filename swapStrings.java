import java.util.*;
public class swapStrings {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the first string: ");
        String str1 = scanner.nextLine();
        System.out.print("Enter the second string: ");
        String str2 = scanner.nextLine();
        SwapStringss(str1,str2);
        scanner.close();
    }

    public static void SwapStringss(String str1,String str2){


         
        System.out.println("Strings before swapping: " + str1 + " " + str2);  
          
        str1 = str1 + str2;  
        str2 = str1.substring(0, (str1.length() - str2.length()));  
        str1 = str1.substring(str2.length());  
          
        System.out.println("Strings after swapping: " + str1 + " " + str2);  
        // Good Morning

        // str1 = str1 + str2; //GoodMorning

        // str1 = str1.substring(0, str1.length() - str2.length()); //Morning
        // str2 = str1.substring(str2.length()); //Good



    }
}
