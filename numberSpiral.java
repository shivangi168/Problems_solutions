import java.io.*;
import java.util.*;

public class numberSpiral {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int t = Integer.parseInt(br.readLine());  // Number of test cases

        while (t-- > 0) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            long y = Long.parseLong(st.nextToken());
            long x = Long.parseLong(st.nextToken());

            long maxVal = Math.max(y, x);  // Maximum of row and column
            long diagonalValue = (maxVal - 1) * (maxVal - 1);

            long result;
            if (maxVal % 2 == 0) {
                if (x == maxVal) {
                    result = diagonalValue + y;
                } else {
                    result = maxVal * maxVal - (x - 1);
                }
            } else {
                if (y == maxVal) {
                    result = diagonalValue + x;
                } else {
                    result = maxVal * maxVal - (y - 1);
                }
            }

            sb.append(result).append("\n");
        }

        System.out.print(sb);
    }
}
