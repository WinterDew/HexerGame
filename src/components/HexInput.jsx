import React, { useState } from "react";
import isValidColor from "../services/isValidColor";
import { useToast } from "./Toast";

const HexInput = ({updateGuess}) => {
    const [inputVal, setInputVal] = useState("");
    const {triggerToast} = useToast();

    function handleSubmit(){

        if(!isValidColor(inputVal.toLowerCase())){
            // console.log(inputVal);
            triggerToast("Invalid hex color code. Please enter a valid 6-character hex code");
            setInputVal("");
            return;
        }
        updateGuess(inputVal);
        setInputVal("");

        
    }
    function handleChange(e){
        if(e.target.value.length <= 6){
            setInputVal(e.target.value.toUpperCase());
        }
    }

    return (
        <div className="flex items-center space-x-2 join">
        <div
            className="text-xl font-semibold join-item bg-primary h-12 m-0 
                    flex items-center justify-center px-5 rounded-l-md text-base-100"
        >
            #
        </div>
        <input
            type="text"
            className="join-item input input-bordered w-full tracking-widest md:tracking-[1em] text-center"
            placeholder="A1B2C3"
            value={inputVal}
            onKeyDown={(e) => {
            if (e.key == "Enter") {
                handleSubmit();
            }
            }}
            onChange={handleChange}
        />
        <button
            className="btn btn-primary join-item text-base text-base-100 rounded-r-md"
            onClick={handleSubmit}
        >
            Submit
        </button>
        </div>
    );
};

export default HexInput;
