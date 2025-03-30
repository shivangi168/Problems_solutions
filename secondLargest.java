public class secondLargest {
    public static void main(String[] args) {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7, 8, 9 };
        int n = arr.length;
        int res = secondLargest(arr, n);
        System.out.println("Second largest element is " + res);

    }

    public static int secondLargest(int[] arr, int n) {
        int res = -1, largest = 0;

        for(int i=0 ;i<n ; i++) {
            if(arr[i] > largest) {
                res = largest;
                largest = arr[i];
            }
            else if(arr[i] > res && arr[i]!= largest) {
                res = arr[i];
            }
        }
       
        return res;
    }
    
}
