public class searchWord {
    public static void main(String[] args) {
        String[] words = {"apple", "banana", "cherry", "date", "elderberry"};
        String searchWord = "cherry";

        int index = findWordIndex(words, searchWord);
        if (index != -1) {
            System.out.println("The word \"" + searchWord + "\" is found at index: " + index);
        } else {
            System.out.println("The word \"" + searchWord + "\" is not found in the array.");
        }
    }

    public static int findWordIndex(String[] array, String word) {
        for (int i = 0; i < array.length; i++) {
            if (array[i].equals(word)) {
                return i;
            }
        }
        return -1;
    }
}
