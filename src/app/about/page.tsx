import Image from "next/image";
import AboutImage from "../images/ColoCheck_About.svg";


export default function About() { 
    return(
      <section className="">
        <div className="w-full grid grid-flow-row auto-rows-max ">
          <div className="grid items-center gap- lg:grid-cols-2 bg-[#DC776D] px-15" >
            <div className="">
              <h1 className="text-4xl text-white font-bold mb-4 pl-40">
                About ColoCheck
              </h1>
              
            </div>
              <div className="relative overflow-hidden rounded-2xl pt-5">
                <div className="relative aspect-[4/3] w-full" >
                  <Image className="objectContain"
                  src="/images/ColoCheck_About.svg"
                  alt = "simple TSA Pre-Check image to improve UI on landin page"
                  width={600} 
                  height={400}
                  priority
                  />
              </div>

            </div>  
          </div>
          {/* below is the words describing about */}
          <div>
            <p className="max-w-7xl tracking-wide text-base leading-7 pt-10 pb-30 text-white font-normal mb-4 px-35" >
            ColoCheck is an educational risk assessment tool designed to help individuals better understand factors that may influence their risk for colorectal cancer. By combining publicly available medical guidelines with a structured, step-by-step assessment, ColoCheck aims to provide users with clear, accessible information that can support more informed conversations with healthcare providers. This tool does not diagnose conditions or replace professional medical advice; instead, it serves as a starting point for awareness, screening readiness, and proactive health decision-making. ColoCheck was built with a focus on clarity, privacy, and evidence-based reasoning, ensuring that users can explore their results confidently and responsibly.


            
            </p>

          </div>

        </div>
      </section>
      // <main className="min-h-screen flex flex-col items-center justify-center p-8">
      //   <h1 className="text-4xl font-bold mb-4">
      //     ABOUT PAGE!
      //   </h1>
      //   <p className="text-lg text-gray-600 max-w-xl text-center">
      //     THE ABOUT PAGE FOR A simple, evidence-based risk assessment tool for colorectal cancer screening.
      //   </p>
      // </main>
    )
  };     