import TopNavbar from "../../component/TopNavbar";
import Announcebar from "../../component/Announcebar";
import FooterBar from "../../component/FooterBar";
import {type FormEvent, useContext, useEffect, useState} from "react";
import {signInWithEmailAndPassword, signInWithGoogle} from "../../../authService/FirebaseAuthService.ts";
import {useNavigate, useRouter} from "@tanstack/react-router";
import {LoginUserContext} from "../../../context/LoginUserContext.tsx";
import {GoogleLoginButton} from "react-social-login-buttons";

export default function LoginPage() {
  const router = useRouter();
  const navigate = useNavigate({from: "/login"});
  const loginUser = useContext(LoginUserContext);

  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const handleSignInWithEmailAndPassword= async (event: FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    const target=event.target as typeof event.target &{
      email: {value: string};
      password: {value: string};
    }
    const email=target.email.value;
    const password=target.password.value;
    const loginResult = await signInWithEmailAndPassword(email, password);

    if (loginResult){
      router.history.back();
    } else {
      setIsLoginFailed(true);
    }
  }

  useEffect(() => {
    if (loginUser){
      navigate({to:"/"});
    }
  }, [loginUser]);

  return (
    <div>
      <Announcebar/>
      <TopNavbar/>
      <div className="flex justify-center mx-5 my-15 text-primary">
        <form
          className="fieldset bg-base-200 border-base-300 rounded-box w-3xl border px-4 py-10 text-2xl"
          onSubmit={handleSignInWithEmailAndPassword}
        >
          {
            isLoginFailed &&
              <div role="alert" className="alert alert-error">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>Invalid email address / password</span>
              </div>
          }


          <legend className="fieldset-legend text-primary">
            My Account Login
          </legend>

          <label className="label">Email address</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email address"
            name="email"
          />

          <label className="label">Password</label>
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            name="password"
          />

          <button
            className="btn btn-neutral mt-4 text-2xl"
            style={{backgroundColor: '#304d6e',}}
            type="submit"
          >
            Login
          </button>
          <div className="divider">OR</div>
          <GoogleLoginButton onClick={signInWithGoogle} align={"center"} style={{color: '#304d6e'}}/>
        </form>
      </div>
      <FooterBar/>
    </div>
  )
}