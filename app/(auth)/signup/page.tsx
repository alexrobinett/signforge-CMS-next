import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
    <>
        <section className="flex flex-col justify-center items-center" >
            <h1>Sign Up</h1>
            <SignUp  appearance={{
      elements: {
        formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm normal-case',
        rootBox: 'p-4 max-h-24',
        internal: 'hidden'
      }
    }} />
        </section>
        
    </>
    
  ) 
}

