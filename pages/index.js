import { useSession, signIn, signOut } from "next-auth/client";
import { useState } from "react";
import Landing from "../components/Layout/landing";
import SignIn from "../components/Elements/Blocks/signin";
import SignUp from "../components/Elements/Blocks/signup";
import LoginButton from "../components/Elements/Buttons/login";
import UserLayout from "../components/Layout/userlayout";
import Dashboard from "../components/Sections/dashboard";
import { useRouter } from "next/router"
import Animation from "../components/Elements/Blocks/animation";

export default function Component() {
  const [session, loading] = useSession();
  const [view, setView] = useState("sign-in");
  const router = useRouter();
  const [duration, setDuration] = useState(true);

  setTimeout(() => setDuration(false), [2500])

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  if (duration) return (
    <Animation />
  )

  if (session) {
    return (
      <UserLayout page={router.pathname} handleSignOut={handleSignOut}>
        <Dashboard userImage={session.user.image} />
      </UserLayout >
    );
  }
  return (
    <Landing>
      <section className="max-w-sm">
        <div>
          <p className="font-montserrat text-2xl text-center md:text-left md:text-4xl font-bold">
            {view === "sign-in" ? "Sign In" : "Create an account"}
          </p>
          <p className="font-lato text-center md:text-left">
            {view === "sign-in"
              ? "Sign in to your account"
              : "Create an account to use dashboard"}
          </p>
        </div>
        <div className="mt-6 flex w-full gap-x-6">
          <LoginButton icon="../google-icon 1.svg" onClick={handleSignIn}>
            Sign in with Google
          </LoginButton>
          <LoginButton icon="../apple 1.svg">Sign in with Apple</LoginButton>
        </div>
        {view === "sign-in" ? <SignIn /> : <SignUp />}
        <div>
          {view === "sign-in" ? (
            <p className="text-secondaryText font-lato mt-5 text-center">
              Don&apos;t have an account?{" "}
              <button
                onClick={() => setView("sign-up")}
                className="text-link hover:underline"
              >
                Register here
              </button>
            </p>
          ) : (
            <p className="text-secondaryText font-lato mt-5 text-center">
              Already have an account?{" "}
              <button
                onClick={() => setView("sign-in")}
                className="text-link hover:underline focus:outline-none"
              >
                Sign in here
              </button>
            </p>
          )}
        </div>
      </section>
    </Landing>
  );
}
