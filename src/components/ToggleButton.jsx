import play from "../assets/play-button.svg";
import reset from "../assets/reset.svg";

import React from 'react'

export default function ToggleButton() {
    return (
        <button className="px-4 py-2 text-slate-800 flex justify-center mx-auto bg-slate-300 rounded hover:bg-slate-200 ">
            <span className="mr-3 txt-lg" mr-3 text-lg>
                Start
            </span>
            <img src={play} alt="" className="w-5 pt-0.5"/>
        </button> 
  )
}
