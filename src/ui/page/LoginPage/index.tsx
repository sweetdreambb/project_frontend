import TopNavbar from "../../component/TopNavbar";
import Announcebar from "../../component/Announcebar";
import FooterBar from "../../component/FooterBar";
import type {SyntheticEvent} from "react";

export default function LoginPage() {
  const handleSignInWithEmailAndPassword=(event:SyntheticEvent)=>{
    event.preventDefault();
    const target=event.target as typeof event.target &{
      email: {value: string};
      password: {value: string};
    }
    const email=target.email.value;
    const password=target.password.value;
    console.log(email);
    console.log(password);
  }

  return (
    <div>
      <Announcebar/>
      <TopNavbar/>
      <div className="flex justify-center mx-5 my-15 text-primary">
        <form
          className="fieldset bg-base-200 border-base-300 rounded-box w-3xl border px-4 py-10 text-2xl"
          onSubmit={handleSignInWithEmailAndPassword}
        >
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
        </form>
      </div>
      <FooterBar/>
    </div>
  )
}