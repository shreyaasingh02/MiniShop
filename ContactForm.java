import java.io.*;

public class ContactForm {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.print("Enter your Name: ");
        String name = br.readLine();

        System.out.print("Enter your Message: ");
        String message = br.readLine();

        System.out.println("\nThank you, " + name + "!");
        System.out.println("Your message was: " + message);
    }
}

