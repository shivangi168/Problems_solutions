public class revereseRealPyramid {
    public static void main(String[] args){
        int n= 9;
        for(int i=1;i<=5;i++){
            for(int j=1;j<=n;j++){
                if(j>= 6-i && j<=4+i){
                    System.out.print(" ");

                }
                else{
                    System.out.print("*");
                }
            }
            System.out.println();
        }
    }
}
