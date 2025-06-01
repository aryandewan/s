"use client"

import React from 'react'
import mono from "@/app/fonts";
import {useRouter} from "next/navigation";

const Main = () => {
    const router = useRouter()

    const generate = () => {
        router.push("/generate")
    }

    return (
        <section className={`min-h-dvh w-full ${mono.className} flex items-center justify-center bg-black`}>
            <div className="flex items-center justify-center w-full">
                <form action={generate} className="flex flex-col items-center justify-center gap-10 w-full p-2">
                    <h1 className="text-lg text-white">Welcome to Beautiful-S!</h1>
                    <textarea placeholder="Enter a Prompt to Generate an Image" className="bg-[#1a1a1a] w-full md:w-1/2 h-36 p-5 rounded-4xl outline-none resize-none text-white"/>
                    <button className="bg-white text-black w-full md:w-1/2 h-16 p-5 rounded-4xl outline-none cursor-pointer">Generate</button>
                </form>
            </div>
        </section>
    )
}
export default Main
