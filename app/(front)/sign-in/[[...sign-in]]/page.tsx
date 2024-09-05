import AuthForm from "@/components/auth-form";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return <SignIn path="/sign-in" />;
};
export default SignInPage;
