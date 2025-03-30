import java.util.*;
public class validParenthesis {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a string: ");
        String input = scanner.nextLine();
        boolean isValid = isValidParentheses(input);
        System.out.println("The input string is " + (isValid? "valid" : "invalid"));
        scanner.close();
    }
    public static boolean isValidParentheses(String s) {
        Stack<Character> stack = new Stack<>();

        // Traverse through the string
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                // Push opening brackets onto the stack
                stack.push(c);
            } else {
                if (stack.isEmpty()) {
                    return false;
                }
                char top = stack.pop();
                if ((c == ')' && top != '(') || 
                    (c == '}' && top != '{') || 
                    (c == ']' && top != '[')) {
                    return false;
                }
            }
        }

        return stack.isEmpty();
    }
}
