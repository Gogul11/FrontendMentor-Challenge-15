import React, { useState, useEffect } from "react";
import { patternDividerDesk, patternDividerMobile } from "../img";

export default function Advice(props){

    const [pattern, setPattern] = useState("");

    useEffect(() => {
        const setPatternBasedOnWidth = () => {
            const patternToUse = window.innerWidth > 640 ? patternDividerDesk : patternDividerMobile;
            setPattern(patternToUse);
        };
        setPatternBasedOnWidth();
        window.addEventListener("resize", setPatternBasedOnWidth);
        return () => {
            window.removeEventListener("resize", setPatternBasedOnWidth);
        };
    }, []);

        return(
            <div>
                <p className="advice-num">
                    ADVICE #{props.no}
                </p>

                <div className="advice">
                    <p>"{props.advice}"</p>
                </div>

                <img src={pattern} className="pattern" alt="Pattern-divider" />
            </div>
        )
}