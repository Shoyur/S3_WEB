public class App {
    public static  void printString(String string) {
       try{
        Thread.sleep((long) Math.floor(Math.random() * 100) + 1);
        System.out.println(string);
       }catch (InterruptedException e){}
      }
      
      public static void printAll(){
        printString("A");
        printString("B");
        printString("C");
      }
      
    public static void main(String[] args) throws Exception {
        printAll();
        System.out.println("APRÈS");
    }
}
