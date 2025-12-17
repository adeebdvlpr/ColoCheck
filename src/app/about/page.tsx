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
            <p className="max-w-7xl tracking-wide text-base leading-7 pt-10 font-normal mb-4 px-35 text-slate-400" >
              ColoCheck is an educational risk assessment tool designed to help individuals better understand factors that may influence colorectal cancer risk and explore screening options in a clear, approachable way. 
              While organizations such as the CDC and the American Cancer Society provide accurate, evidence-based information, their resources can often feel overwhelming or difficult to navigate—particularly for younger adults seeking straightforward guidance. 
              At the same time, many commercial screening tools prioritize promoting specific products rather than helping users objectively compare options. ColoCheck was created to address this gap by offering a neutral, 
              user-friendly experience focused on clarity and education.
            </p>
            <p className="max-w-7xl tracking-wide text-base leading-7 pt-10  font-normal mb-4 px-35 text-slate-400">
              The platform combines publicly available medical guidelines with a structured, step-by-step assessment to present accessible, evidence-based information. 
              ColoCheck does not diagnose medical conditions or replace professional medical advice. Instead, it serves as a starting point for awareness and screening readiness, 
              helping users feel more informed and prepared for conversations with healthcare providers. No personal medical data is collected or stored, ensuring privacy remains central to the experience.
            </p>
            <p className="max-w-7xl tracking-wide text-base leading-7 pt-10 font-normal mb-4 px-35 text-slate-400">
              This project is also shaped by personal experience. As a young adult living with Crohn’s disease, 
              I have firsthand insight into how confusing and intimidating colorectal cancer screening can feel, especially when guidance is overly clinical or unclear. 
              Despite rising rates of colorectal cancer among younger populations, screening is still commonly associated only with colonoscopies—an invasive procedure many people delay due to fear or lack of awareness of alternatives. 
              Clear, accessible information about screening options can play an important role in encouraging earlier engagement.
            </p>
            <p className="max-w-7xl tracking-wide text-base leading-7 pt-10  font-normal mb-4 px-35 text-slate-400">
              ColoCheck is further motivated by the experience of seeing a close family member diagnosed with late-stage colorectal cancer—an outcome that may have been different with earlier screening. 
              That reality underscores the importance of accessible, understandable information. By simplifying complex guidance and presenting it responsibly, ColoCheck aims to empower individuals—especially younger adults—to take proactive, 
              informed steps toward screening and prevention.
            </p>
            <p className="max-w-7xl tracking-wide text-xl leading-7 pt-10 font-normal mb-4 px-35 text-red-400">
              Medical Disclaimer
            </p>
            <p className="max-w-7xl tracking-wide text-base leading-7 pt-0 pb-30 font-normal mb-4 px-35 text-red-400">
            ColoCheck is an educational tool intended for informational purposes only. It does not provide medical diagnoses, treatment recommendations, or professional medical advice. The information presented is based on publicly available guidelines and should not be used as a substitute for consultation with a qualified healthcare professional. Users should always seek the advice of a physician or other licensed healthcare provider with any questions regarding medical conditions or screening decisions.
            </p>
          
          </div>

        </div>
      </section>
    )
  };     