public class StringCompression {
    public static void main(String[] args) {
        String input = "aaabbccc";
        String compressed = compressString(input);
        System.out.println("Compressed String: " + compressed);
    }

    public static String compressString(String s) {
        if (s == null || s.length() <= 1) {
            return s;
        }

        StringBuilder compressed = new StringBuilder();
        int count = 1; 

        for (int i = 1; i < s.length(); i++) {
            if (s.charAt(i) == s.charAt(i - 1)) {
                count++; 
            } else {
                compressed.append(s.charAt(i - 1));
                compressed.append(count);
                count = 1;
            }
        }

        compressed.append(s.charAt(s.length() - 1));
        compressed.append(count);

        return compressed.length() < s.length() ? compressed.toString() : s;
    }
}
