import LandingPage from "@/components/LandingPage";
import Logo from "@/components/Logo";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="auth-page px-4">
      <LandingPage />
      <div className="md:w-fit w-full flex justify-center items-center">
        <SignIn />
      </div>
    </main>
  );
};

export default SignInPage;
