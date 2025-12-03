import Bare from "../templates/Bare";
import FormSignup from "../components/forms/FormSignup";
import Logo from "../components/Logo";

export default function Login() {
  return (
    <Bare>
      <Logo />
      <div className="font-sans font-semibold text-2xl mt-10 mb-5">
        Create an Account
      </div>
      <div>
        <FormSignup />
      </div>
    </Bare>
  );
}