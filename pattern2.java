public class pattern2 {
    public static void main(String[] args){

        int n = 5;
        for(int i=0;i<=n;i++){
            for(int j=n-1;j>=0;j--){
                if(j<=n-i-1){
                    System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }

         System.out.println();

        for(int i=0;i<n;i++){
            for(int j=n-1;j>=0;j--){
                if(j>=n-i-1){
                    System.out.print("*");
                }
                else{
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
        System.out.println();


        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 10; j++) {
                if (j<i) {
                    System.out.print("*");
                } else {
                    System.out.print(" ");
                }
            }
            System.out.println();
        }
    }
}