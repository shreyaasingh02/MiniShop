import java.io.*;

public class LoginForm {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        System.out.print("Enter your Name: ");
        String name = br.readLine();

        System.out.print("Enter your Email: ");
        String email = br.readLine();

        System.out.println("\nWelcome, " + name + "!");
        System.out.println("You are successfully logged in with email: " + email);
    }
}
