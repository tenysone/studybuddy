import Bare from "../templates/Bare";
import FormSignup from "../components/forms/FormSignup";

export default function Login() {
  return (
    <Bare>
      <div className="font-sans text-bold text-5xl mt-10">
        Signup
      </div>
      <div>
        <FormSignup />
      </div>
    </Bare>
  );
}