"use client"
import GlobalApi from '@/app/_services/GlobalApi';
import { signIn, useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'
import BusinessInfo from '../_components/BusinessInfo';

function BusinessDetail({params}) {
    const {data,status} = useSession();
    const [business,setBusiness]= useState([]);

    
    useEffect(()=>{
        params&&getBusinessById();
    },[params])  
    
    
    useEffect(()=>{
         checkUserAuth();
    },[]);

    const getBusinessById =()=>{
        GlobalApi.getBusinessById(params.businessId).then(resp=>{
            setBusiness(resp.businessList);
        })
    } 

    const checkUserAuth=()=>{
        if(status=='loading')
            {
                return <p>Loading...</p>
            }
               if(status=='unauthenticated')
                {
                   signIn('descope') ;
                } 
            
    }

 
  return status == 'authenticated' &&business&& (
    <div className='py-8 md:py-20 px-10 md:px-36'>
         <BusinessInfo business={business}/>
    </div>
  )
}

export default BusinessDetail