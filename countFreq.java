import java.util.*;
public class countFreq {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the length of the array: ");
        int length = scanner.nextInt();

        int[] array = new int[length];
        System.out.println("Enter the elements of the array:");
        for (int i = 0; i < length; i++) {
            array[i] = scanner.nextInt();
        }
        System.out.println("This is the target in the arra to be found of the array:");
        int target = scanner.nextInt();
        int frequencyArray = getFrequencyArray(array,target);
        System.out.println("Frequency array: " + frequencyArray);
        scanner.close();
    }
    public static int getFrequencyArray(int[] array , int target) {
        int n = array.length;
        int count = 0;
        for(int i=0; i<n;i++){
            if(array[i] == target){
                count++;
            } 
          }
        
        return count;
    }
    
}
