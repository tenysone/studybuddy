import Link from "next/link";
import Logo from "./Logo"

export default function Header({ className }: { className?: string } = {}) {
  return (
    <header className={`bg-transparent fixed top-0 left-0 right-0 z-50 ${className || ''}`}>
      <div className="container flex items-center justify-between mx-auto p-5">
        {/** Logo */}
        <Logo />

        {/** Action or buttons */}
        <div className="flex gap-3">
          <Link href="/login" className="button button--default">Login</Link>
          <Link href="/signup" className="button button--default">Signup</Link>
        </div>
      </div>
    </header>
  )
}