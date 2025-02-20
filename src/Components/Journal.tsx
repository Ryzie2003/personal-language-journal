import React from "react";
import SideBar from "./SideBar";
import Entry from "./Entry";

export default function Journal() {
    const entryArray = [<Entry class="relative w-[90%] h-[20vh] overflow-hidden bg-[#98bbea] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-2 border-[#080fea] text-left" title="Untitled" text="start typing here..."/>, <Entry class="w-[90%] h-[20vh] overflow-hidden text-left relative" title="Emilia Perez notes" text="Vivamus rutrum urna ac ex condimentum dictum. Suspendisse ut urna mauris. Vestibulum eleifend nisl eget nunc consectetur semper ut ac leo..."/>, <Entry class="w-[90%] h-[20vh] overflow-hidden text-left relative" title="Spanish class notes" text="ascascasc ascascasc"/>]    

    return (
        <>
            <div className="flex font-display bg-[#f7f7f7] flex items-center">
                <SideBar />
                <section className="h-[100vh] w-[18vw] flex items-center flex-col">
                    <h1 className="text-center text-black text-[3em] font-normal mt-[0.6em]"> Notes </h1>
                    {entryArray}
                </section>
                <section className="w-[62vw] h-[95vh] bg-white rounded-[20px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border border-black flex flex-col items-center">
                    <div id="font-styling" className="w-[40%] h-[2em] mt-[1.5em] bg-[#e1e1e1]/70 rounded-[10px] shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] flex flex-row items-center justify-center">
                        <select id="font-weight" className="flex justify-center items-center cursor-pointer">
                            <option value="" selected disabled hidden>Aa</option>
                            <option>Normal</option>
                            <option>Bold</option>
                            <option>Light</option>
                        </select>
                        <select id="font-family" className="flex justify-center items-center cursor-pointer ">
                            <option value="" selected disabled hidden>Roboto</option>
                            <option>Serif</option>
                            <option>Times New Roman</option>
                            <option>Random</option>
                        </select>
                        <select id="font-size" className="flex justify-center items-center cursor-pointer ">
                            <option value="26" selected>26</option>
                            <option>28</option>
                            <option>30</option>
                            <option>16</option>
                        </select>
                        <select id="font-color" className="flex justify-center items-center cursor-pointer">
                            <option value="" selected>black</option>
                            <option>Normal</option>
                            <option>Bold</option>
                            <option>Light</option>
                        </select>
                        <select id="entry-type" className="flex justify-center items-center cursor-pointer">
                            <option value="" selected>Default</option>
                            <option>Normal</option>
                            <option>Bold</option>
                            <option>Light</option>
                        </select>
                        <select id="entry-style" className="flex justify-center items-center cursor-pointer">
                            <option value="" selected disabled hidden>Text</option>
                            <option>Normal</option>
                            <option>Bold</option>
                            <option>Light</option>
                        </select>
                    </div>
                    <textarea name="entry-title" placeholder={entryArray[0].props.title} className="text-[3em] mt-[1.5em] w-[80%] h-[11vh] text-black font-normal font-['Roboto'] resize-none border-none outline-none" />
                    <textarea name="entry-text" placeholder={entryArray[0].props.text} className="text-[1.1em] mt-[0.5em] ml-[10px] w-[80%] h-[50vh] font-['Roboto'] resize-none border-none outline-none" />
                </section>
            </div>
        </>
    )
}