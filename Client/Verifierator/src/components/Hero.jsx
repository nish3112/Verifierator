import styles from "../style";
import lp from "../assets/laptop.json";
import Lottie from "lottie-react";
import Typewriter from "typewriter-effect";

const Hero = () => {

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
        
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">          
          <Typewriter loop={true} onInit={(typewriter)=>{
            typewriter.typeString("Trust, but verify with us!").pauseFor(0).start();
        }}
        /></h1>
        </div>

        
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        An IMEI verifier is a tool used to check the validity of an International Mobile Equipment 
        Identity (IMEI) number. The IMEI is a unique identification number assigned to each mobile 
        device and can be used to track, block, or unlock the device. Verifying the IMEI ensures 
        that the device is not counterfeit, stolen, or blacklisted.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <Lottie animationData={lp} loop={true} className="w-[100%] h-[100%] relative z-[5]" />
       

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

    </section>
  );
};

export default Hero;
