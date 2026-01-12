import Image from "next/image";
import Link from "next/link";
import LandingImage from "../images/LittleHomeOffice.svg";

export default function HomePage() {
  return(
    <section className="mx-auto mx-w-6xl px-4 py-16 sm:px-6 sm:py-20" >
      <div className="grid items-center gap-10 lg:grid-cols-2">
        {/* Ill put the text here -- LT side */}
        <div>
          <p className="mb-6 inline-flex rounded-full border border-slate-200 px-3 py-1 text-base">
            A simple way to understand your risk level
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Early awarness for Colorectal health, made clear
          </h1>

          <p className = "mt-6 pb-2 max-w-prose text-base leading-7 text-slate-400">
            Screening for Colorectal cancer can be intimidating - ColoCheck helps you understand your risk factors and next-steps with a short assessmenmt and easy to read results.
          </p>

          <div className= "mt-3 flex flex-wrap gap-3" >
            <Link href={"/assessment"}>
              <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 space-y-4">
                Start the assessment 
              </button>
            </Link>
            <Link href={"./about"}>
              <button className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 space-y-4">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* i need to come back to these pages at some point to complete -- this is the most complete ATP*/ }

        {/*Ill put the large image here */}
        <div className="relative overflow-hidden rounded-2xl  ">
          <div className="relative aspect-[4/3] w-full" >
            <Image className="objectContain"
            src={LandingImage}
            alt = "simple TSA Pre-Check image to improve UI on landin page"
            fill
            priority
            />
          </div>
        </div>
      </div>
    </section>
    // <main className="bg-white">
    //   <div className="min-h-screen  flex-row  justify-center p-8">
        
    //   </div>
      
      
    //   <p className="text-lg text-gray-600 max-w-xl text-center">
    //     A simple, evidence-based risk assessment tool for colorectal cancer screening.
    //   </p>
    // </main>
  )
};