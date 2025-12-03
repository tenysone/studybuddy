import Header from '@/app/components/Header'
import Footer from '@/app/components/Footer'

export default function ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-dvh border">
      <Header />
      {/* study wth dis means smth abt class templates(?) */}
      <main className={`container mx-auto p-5 pt-24 flex-1 ${className || ''} relative z-0 pb-24 field-sizing-fixed`}> 
        {children}
      </main>
      <Footer />
    </div>
  )
}