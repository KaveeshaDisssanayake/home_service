"use client"
import { Button } from '@/components/ui/button'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect } from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'



function Header() {

  const {data}= useSession();

  useEffect(()=>{
   console.log(data);
  },[data])
  return (
    <div className="p-5 shadow-sm flex justify-between">
        <div className="flex items-center gap-8">
    <Link href={'/'}><Image src='/2.png' alt='logo' width={200} height={130} /></Link>    
        <div className="md:flex items-center gap-6 font-semibold hidden ">
         <Link href={'/'}><h2 className="hover:scale-105 hover:text-primary cursor-pointer  ">Home</h2></Link>   
            <h2 className="hover:scale-105 hover:text-primary cursor-pointer  ">Services</h2>
            <h2 className="hover:scale-105 hover:text-primary cursor-pointer  ">About Us</h2>
        </div>
        
        </div>
        <div className="mt-4">
          {data?.user?
          
           <DropdownMenu>
           <DropdownMenuTrigger asChild >
           <Image src={data?.user?.image} alt='user' 
          className='rounded-full' width={40} height={40}
           />
           </DropdownMenuTrigger>
           <DropdownMenuContent>
             <DropdownMenuLabel>My Account</DropdownMenuLabel>
             <DropdownMenuSeparator />
             <DropdownMenuItem>
              
              <Link href={'/mybooking'}>My Bookings</Link>
              </DropdownMenuItem>
             <DropdownMenuItem onClick={()=>signOut()} >Log Out</DropdownMenuItem>
             
           </DropdownMenuContent>
         </DropdownMenu>
         
          :
          
          <Button onClick={()=>signIn('descope')} >Login / SignUp</Button>
        }
            
        </div>
    </div>
  )
}

export default Header