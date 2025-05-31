"use client"

import React, {useRef, useState} from 'react'
import mono from "@/app/fonts";
import Image from "next/image";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
gsap.registerPlugin(useGSAP)

const Page = () => {
    const ImageRef = useRef<HTMLImageElement>(null)
    const ShaktiRef = useRef<HTMLImageElement>(null)
    const [generated, setGenerated] = useState(false)

    const fadeOut = () => {
        gsap.to(ImageRef.current, {
            duration: 4,
            opacity: 0,
            delay: 2,
            onComplete: () => setGenerated(true),
        })
    }

    useGSAP(() => {
        const tl = gsap.timeline()
        tl.to(ImageRef.current, {
            filters: "blur(8px)",
            duration: 2,
        })
        tl.to(ImageRef.current, {
            filters: "blur(6px)",
            duration: 2,
        })
        tl.to(ImageRef.current, {
            filters: "blur(4px)",
            duration: 2,
        })
        tl.to(ImageRef.current, {
            filters: "blur(2px)",
            duration: 2,
        })
        tl.to(ImageRef.current, {
            filters: "blur(0px)",
            duration: 2,
            onComplete: () => fadeOut(),
        })
    }, [])

    return (
        <section className={`min-h-dvh w-full flex flex-col gap-10 items-center justify-center ${mono.className}`}>
            <div className="relative w-[200px] h-[320px] overflow-hidden">
                <Image
                    ref={ShaktiRef}
                    src="/images/Shakti.jpg"
                    alt="S"
                    width={500}
                    height={500}
                    quality={100}
                    className="h-full w-full object-cover"
                />
                <Image
                    ref={ImageRef}
                    src="/images/Pixel Shakti.jpg"
                    alt="Beautiful S"
                    width={500}
                    height={500}
                    quality={100}
                    className="h-full w-full object-cover absolute top-0 left-0 z-10"
                    style={{ filter: "blur(10px)" }}
                />
            </div>
            {!generated ? null : <Link href="/images/Shakti.jpg" download className="p-5 font-bold text-lg bg-white rounded-4xl text-black">Download</Link>}
        </section>
    )
}
export default Page
