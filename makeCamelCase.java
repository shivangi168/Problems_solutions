import java.util.*;

public class makeCamelCase {
    public static void main(String[] args){
    Scanner scn = new Scanner(System.in);

    System.out.println("Enter the sentence:");
    String sentence = scn.nextLine();
    String camelCaseSentence = convertToCamelCase(sentence);
    System.out.println("CamelCase sentence: " + camelCaseSentence);


    scn.close();

    }
    public static String convertToCamelCase(String senetence){
        String resulatntString = "";

        for(int i=0;i<senetence.length();i++){
            if(senetence.charAt(i) == ' '){
                resulatntString = resulatntString+Character.toUpperCase(senetence.charAt(i+1));
                i++;
            }
            else{
                resulatntString = resulatntString+senetence.charAt(i);
            }
        }
        return resulatntString;

    }
    
}
