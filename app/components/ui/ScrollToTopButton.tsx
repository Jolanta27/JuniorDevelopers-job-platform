"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisisbility = () => {
            window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
        }
        window.addEventListener('scroll', toggleVisisbility);

        return () => {
            window.removeEventListener('scroll', toggleVisisbility);
        }
    }, []);

    const scrollTop = () => {
        isVisible && window.scrollTo({
            top: 0,
            behavior: "auto",
        })
    }
    return (
        <button className={`
            fixed bottom-4 right-4 rounded-full p-2 outline-none transition-opacity duration-200 bg-white
            ${isVisible ? "opacity-100" : "opacity-0"
        }`}>
            <ChevronUp className="w-6 h-6 text-black" onClick={scrollTop} />
        </button>
    )
}
export default ScrollToTopButton;