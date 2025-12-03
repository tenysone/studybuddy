import Bare from "../templates/Bare";
import FormLogin from "../components/forms/FormLogin";
import Logo from "../components/Logo";

export default function Login() {
  return (
    <Bare>
      <Logo />
      <div className="font-sans font-semibold text-2xl mt-10 mb-5">
        Login to your Account
      </div>
      <div>
        <FormLogin />
      </div>
    </Bare>
  );
}