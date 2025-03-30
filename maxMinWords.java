import java.util.*;
public class maxMinWords {
    public static void main(String[] args){
    Scanner scn = new Scanner(System.in);

    System.out.println("Enter the sentence:");
    String sentence = scn.nextLine();
    String[] newWordsArray = new String[100];

    getMaxMinWords(sentence, newWordsArray);

    scn.close();

    }
    public static void getMaxMinWords(String sentence, String[] newWordsArray){

        // String word = "", small = "", large="";  
        // String[] words = new String[100];  
        // int length = 0;  
          
        // sentence = sentence + " ";  
          
        // for(int i = 0; i < sentence.length(); i++){  
        //     if(sentence.charAt(i) != ' '){  
        //         word = word + sentence.charAt(i);  
        //     }  
        //     else{  
        //         words[length] = word;  
        //         length++;  
        //         word = "";  
        //     }  
        // }  
          
        // small = large = words[0];  
          
        // for(int k = 0; k < length; k++){  
              
       
        //     if(small.length() > words[k].length())  
        //         small = words[k];  
   
          
        //     if(large.length() < words[k].length())  
        //         large = words[k];  
        // }  
          
        // System.out.println("Smallest word: " + small);  
        // System.out.println("Largest word: " + large);
    
            String newSentence = sentence + "";
            String smallestWord = "";
            String largestWord = "";
            int length = 0;
            String tempWord = "";
    
    
            for(int i=0;i<newSentence.length();i++){
                if(newSentence.charAt(i) != ' '){
                    tempWord = tempWord + newSentence.charAt(i);
                }
                else {
                    newWordsArray[length] = tempWord;
                    length++;
                    tempWord = "";
            }
        }
        smallestWord = newWordsArray[0];
        largestWord = newWordsArray[0];


        for(int j=0;j<length;j++){
            if(smallestWord.length() > 0 && smallestWord.length() > newWordsArray[j].length()){
                smallestWord = newWordsArray[j];
            }
            if(largestWord.length() > 0 && largestWord.length() < newWordsArray[j].length()){
                largestWord = newWordsArray[j];
            }

        }
        System.out.println("This is smallest word in the sentence:" + smallestWord  + "and the length of word is" + smallestWord.length());
        System.out.println("This is smallest word in the sentence:" + largestWord  + "and the length of word is" + largestWord.length());



    }
    }

