"use client"
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className="p-5 shadow-sm flex justify-between">
        <div className="flex items-center gap-8">
        <Image src='/2.png' alt='logo' width={200} height={130} />
        <div className="md:flex items-center gap-6 font-semibold hidden ">
            <h2 className="hover:scale-105 hover:text-primary cursor-pointer  ">Home</h2>
            <h2 className="hover:scale-105 hover:text-primary cursor-pointer  ">Services</h2>
            <h2 className="hover:scale-105 hover:text-primary cursor-pointer  ">About Us</h2>
        </div>
        
        </div>
        <div className="mt-4">
            <Button onClick={()=>signIn('descope')} >Login / SignUp</Button>
        </div>
    </div>
  )
}

export default Header