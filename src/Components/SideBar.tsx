import React from "react";
import Logo from "./Logo";

export default function SideBar() {
    return (
        <>
            <div className="flex flex-col justify-start items-center w-[18vw] min-w-[200px] h-screen bg-[#FFF5CA] rounded-r-3xl border-2 border-black">
                <Logo />
                <ul className="flex flex-col justify-center items-center mt-[1em] w-[100%]">
                    <li className="w-[100%] flex justify-center items-center  mt-[0.5em]">
                        <button className="cursor-pointer w-[80%] h-14 flex items-center justify-center">
                            <img className="w-[30px] h-[30px] opacity-70 mr-2" src="https://placehold.co/30x30" /><h2 className="opacity-70 text-black text-4xl font-normal font-display text-center mt-1.5 mr-3">Learn</h2>
                        </button>
                    </li>
                    <li className="w-[100%] min-w-[200px] flex justify-center items-center  mt-[0.5em]">
                        <button className="cursor-pointer w-[80%] h-14 rounded-[15px] flex items-center justify-center">
                            <img className="w-[30px] h-[30px] opacity-70 mr-2" src="https://placehold.co/30x30" /><h2 className="opacity-70 text-black text-4xl font-normal font-display text-center mt-1.5 mr-3">Your scribbles</h2>
                        </button>
                    </li>
                    <li className="w-[100%] flex justify-center items-center mt-[0.5em]">
                        <button className="cursor-pointer w-[80%] h-14 bg-[#5494ff]/60 rounded-[15px] border-2 border-[#5494ff] flex items-center justify-center">
                            <img className="w-[30px] h-[30px] opacity-70 mr-2" src="https://placehold.co/30x30" /><h2 className="opacity-70 text-black text-4xl font-normal font-display text-center mt-1.5 mr-3">New entry</h2>
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}