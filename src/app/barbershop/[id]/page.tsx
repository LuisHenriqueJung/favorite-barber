"use client";

import { db } from "@/app/_lib/prisma";
import { Barbershop } from "@prisma/client";

interface BarberShopProfileProps {
    params: {
        id?: string
    }
}



const BarbershopProfile = async ({ params} : BarberShopProfileProps) => {

    if(!params.id){
        return null
    }
    const barbershop: Barbershop = await db.barbershop.findUnique({
        where: {
            id: params.id
        },
        include: {
            services: true
        }
    })
    return ( 
        <div className="py-5">
            {barbershop.name}
        </div>
     );
}
 
export default BarbershopProfile;