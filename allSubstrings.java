import java.util.*;
public class allSubstrings {
    public static void main(String[] args) {
        String str = "abc";
        List<String> substringss = getSubstrings(str);
        System.out.println("All substrings of " + str + ":" +  substringss);
        
    }
    public static List<String> getSubstrings(String str) {
        List<String> substrings = new ArrayList<>();
        for(int i=0;i<str.length();i++) {
            for(int j=i+1;j<=str.length();j++) {
                substrings.add(str.substring(i, j));

            }
        }
        return substrings;
    }
            
}
