
"use client"

import { useRouter } from "next/navigation";



function AboutPage() {
    const router = useRouter();

    return <section>
        <h1>About page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veritatis ut adipisci. Doloribus adipisci sapiente tempore iste. Cum earum, modi ratione illo odit similique culpa obcaecati, tempora, nulla saepe pariatur.</p>
        
        <button 
        onClick={() =>{
            alert('Ejecutando codigo');
             router.push('/')
        }}
        className="bg-sky-400 px-3 py-2 rounded-md">
            Click</button>
    </section>
}

export default AboutPage;