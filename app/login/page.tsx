import Link from "next/link";

export default function Login() {
  return (
   <> 
      <section>
        <h1>Login</h1>
        <div>
          <Link href="/">Home</Link> <br />
          <Link href="./signup">Sign up</Link>
        </div>

      </section>
   </>
  );
}
