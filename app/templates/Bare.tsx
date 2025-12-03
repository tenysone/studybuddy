import Logo
 from "../components/Logo"
export default function Bare({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-dvh border justify-center items-center">
      <Logo />
      <main className="flex flex-col container bg-amber-50 items-center mt-5">
        {children}
      </main>
    </div>
  )
}