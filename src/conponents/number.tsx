"use client"

import React, {useEffect, useState} from 'react'
import mono from "@/app/fonts";
import { useForm } from '@formspree/react';
import {X} from "lucide-react";
import {toast} from "sonner";

interface Props {
    setShowNumber: (value: boolean) => void;
}

const Number = ({setShowNumber}: Props) => {
    const [giveNumber, setGiveNumber] = useState(false)
    const [phase, setPhase] = useState(0)
    const yes = () => {
        setGiveNumber(true)
    }

    const no = () => {
        setPhase((prev) => Math.min(prev + 1, responses.length - 1))
    }

    const responses = [
        "Can I get your number?",
        "I'll send you Good Morning everyday 😁",
        "I'll have your pictures in my wallet 🫶",
    ];

    const widthYes = [
        "w-32",
        "w-48",
        "w-64",
    ]

    const widthNo = [
        "w-32",
        "w-16",
        "w-0",
    ]

    const [state, handleSubmit] = useForm("mkgbwavk");
    useEffect(() => {
        if (state.succeeded) {
            setShowNumber(false);
        }
    }, [state.succeeded]);

    return (
        <section className={`absolute h-dvh w-full top-0 left-0 flex items-center justify-center bg-black/50 backdrop-blur-lg z-100 ${mono.className}`}>
            <X className="absolute top-5 right-5 cursor-pointer text-white" onClick={() => setShowNumber(false)}/>
            <div className="flex flex-col items-center justify-center gap-10 w-[95%] p-10 bg-[#1a1a1a] rounded-4xl">
                {!giveNumber ?
                    <>
                        <h1 className="text-lg text-white text-center">{responses[phase]}</h1>
                        <div className="space-x-5">
                            <button onClick={yes} className={`bg-white text-black h-16 rounded-4xl outline-none cursor-pointer ${widthYes[phase]}`}>Yes</button>
                            <button onClick={no} className={`bg-white text-black h-16 rounded-4xl outline-none cursor-pointer ${widthNo[phase]}`}>No</button>
                        </div>
                    </>
                    :
                    <>
                        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-10 w-full p-2">
                            <input type="number" name="number" required className="bg-[#2b2b2b] w-full h-16 p-5 rounded-4xl outline-none text-white text-base" placeholder = "Your Number Please? ^^"/>
                            <button
                                type="submit"
                                className="bg-white text-black w-full h-16 p-5 rounded-4xl outline-none cursor-pointer"
                                onClick={() => {
                                    toast("Just wanted to let you know that I find you absolutely BEAUTIFUL and have a crush on you. I didn't know how to tell you that, so I thought about drawing you. I hope you like it! And, Thank you for your number! ^^",{
                                        duration: 20000,
                                    })
                                }}
                            >
                                Send
                            </button>
                        </form>
                    </>
                }
            </div>
        </section>
    )
}
export default Number
