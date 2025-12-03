import { Toaster } from 'react-hot-toast'

export default function Bare({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-dvh border justify-center items-center">
      <main className="flex flex-col container bg-white/50 items-center m-5 py-10 px-5 rounded-4xl shadow-lg w-130">
        {children}
      </main>
    </div>
  )
}