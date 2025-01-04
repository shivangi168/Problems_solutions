import java.util.*;

public class RemoveDuplicates {
    public static void main(String[] args) {
        String[] inputArray = {"apple", "banana", "apple", "orange", "banana", "grape"};

        String[] uniqueArray = removeDuplicates(inputArray);

        System.out.println("Array after removing duplicates: " + Arrays.toString(uniqueArray));
    }

    public static String[] removeDuplicates(String[] array) {
        Set<String> set = new HashSet<>();

        for (String element : array) {
            set.add(element);
        }

        return set.toArray(new String[0]);
    }
}
