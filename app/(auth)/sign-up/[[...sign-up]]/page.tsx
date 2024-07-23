import LandingPage from "@/components/LandingPage";
import Logo from "@/components/Logo";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="auth-page px-4">
      <LandingPage />
      <div className="md:w-fit w-full flex justify-center items-center">
        <SignUp />
      </div>
    </main>
  );
};

export default SignUpPage;
