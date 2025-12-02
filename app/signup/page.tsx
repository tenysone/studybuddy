import Link from "next/link";

export default function Login() {
  return (
   <> 
      <section>
        <h1>Sign Up</h1>
        <div>
          <Link href="/">Home</Link> <br />
          <Link href="./login">Login</Link>
        </div>

      </section>
   </>
  );
}