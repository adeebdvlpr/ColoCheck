"use client";

import { useMemo, useState } from "react";

type Answers = {
    age?: number,
    hasIBD?: boolean
};

type StepId = "intro" | "risk" | "review";


export function AssessmentWizard() {

    const [step, setStep] = useState<StepId>("intro");
    const [answers, setAnswer] = useState<Answers>({});

    const canGoNext = useMemo(() => {
        if (step === "intro") return true;
        if (step === "risk" ) return answers.age != null;
        return true;
    }, [step, answers] );

    {/* the next function is checking if canGoNext is false then BREAK there, otherwise...if step (s) is "risk" then 
    presseing the next button => takes you to the "risk" page, if s is set to "risk" page then pressing next => takes you to "
    review", & if you are on review....thats it
    THESE WILL NEED TO BE UPDATED WIHH ADDITIONAL STEPS FOR MORE ASSESSMENT OPAGEs*/}
    function next() {
        if (!canGoNext) return ;
        setStep((s) => (s === "intro" ? "risk": s === "risk" ? "review": "review"));
    };

    function back() {
        setStep((s) => (s === "review" ? "risk": s === "risk" ? "intro": "intro"));
    };

    {/* Next step, implementin the UI of the wizard, and setting the asnwers in the */}
    return(
        ""
    );

}