import java.util.*;
public class rotateNumber {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = scanner.nextInt();
        System.out.println("Enter the rotation number");
        
        int k = scanner.nextInt();
        scanner.close();

        int rotatedNum = rotateNumbers(num, k);
        System.out.println("Rotated number: " + rotatedNum);
        scanner.close();

    }
    public static int rotateNumbers(int num, int k) {

        int temp = num;
        int numberofDigits = 0;
        int remainder = 0;
        int rotateNumber = 0;
        

        while(temp > 0){
            temp = temp / 10;
            numberofDigits++;
        }
        k = k%numberofDigits;
        if(k <  0){
           k= k+numberofDigits;
        }
        int divisor  = 1;
        int multilplier = 1;

        for(int i = 1; i <= numberofDigits; i++){
            if(i<= k){
                divisor = divisor * 10;
            }
            else {
                multilplier = multilplier * 10;
            }
        }
        remainder = num%divisor;
        int quotiant = num/divisor;
        rotateNumber = remainder*multilplier + quotiant;
        return rotateNumber;
    }
      
}