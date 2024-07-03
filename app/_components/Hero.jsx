import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function Hero() {
  return (
    <div className="flex items-center gap-3 flex-col justify-center pt-14 pb-7 ">
        <h2 className="font-bold text-[56px] text-center  ">Welcome To <span className="text-primary">HomeEase</span> 
            <br></br> Convenient, Reliable, Affordable</h2>
        <h2 className="text-[25px] text-gray-400">Find Home Services Near You</h2>
        <div className="mt-4 flex gap-4 items-center ">
            <Input placeholder="Search" className="rounded-full md:w-[350px]" />
            <Button className="rounded-full h-[46px] ">
                <Search className="h-5 w-4"/>
            </Button>
        </div>
    </div>
  )
}

export default Hero