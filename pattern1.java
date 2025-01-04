public class pattern1 {
    public static void main(String[] args){
        System.out.println("Pattern 1:");
        for(int i = 0; i < 5; i++){
            for(int j = 0; j < 5; j++){
                if(i == j || i + j == 4){
                    System.out.print("* ");
                }
                else{
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
        System.out.println();
        System.out.println("Pattern 2:");
        for(int i = 0; i < 5; i++){
            for(int j = 0; j < 5; j++){
                if(i == j || i + j == 4){
                    System.out.print(" *");
                }
                else{
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }
}