import React from 'react'
import { SignIn } from '@clerk/nextjs'

export default function Login() {
   return(
    <>
        <section className="flex flex-col justify-center items-center" >
            <h1>Sign in</h1>
            <SignIn   appearance={{
      elements: {
        rootBox: 'p-4 max-h-24',
        internal: 'hidden'
      }
    }} />
        </section>
        
    </>
   )
}
