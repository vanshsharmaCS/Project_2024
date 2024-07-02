import ContactFormContainer from "../components/ContactFormContainer";
import GroupComponent from "../components/GroupComponent";
import TablaIcon from "../components/TablaIcon";

const Desktop3 = () => {
  return (
    <div className="w-full relative h-[64rem] overflow-hidden bg-[url('/public/desktop--4@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[1.25rem] text-gray1-200 font-space-grotesk">
      <img
        className="absolute top-[-8.625rem] left-[63.125rem] w-[29.594rem] h-[23.188rem] overflow-hidden object-contain opacity-[0.2]"
        alt=""
        src="/sitar1@2x.png"
      />
      <div className="absolute top-[53.881rem] left-[calc(50%_+_566.1px)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_14.5px_rgba(255,_255,_255,_0.57)_inset] rounded-31xl [background:radial-gradient(50%_50%_at_50%_50%,_#ffebb9_8.17%,_#ffb203_51.24%,_#644117)] w-[71.694rem] h-[44.319rem] [transform:_rotate(179.6deg)] [transform-origin:0_0] mix-blend-soft-light" />
      <ContactFormContainer />
      <div className="absolute top-[40.25rem] left-[14.125rem] w-[34.5rem] h-[5.938rem]">
        <div className="absolute top-[0rem] left-[0rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_3px_7.2px_rgba(0,_0,_0,_0.25)_inset] rounded-lg bg-whitesmoke w-[34.5rem] h-[5.938rem]" />
        <div className="absolute top-[1.056rem] left-[1.719rem] inline-block w-[6.006rem] h-[2.113rem]">
          Message
        </div>
      </div>
      <div className="absolute top-[48.375rem] left-[22.688rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0),_0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_0px_6px_rgba(255,_255,_255,_0.25)_inset] rounded-lg [background:linear-gradient(199.39deg,_rgba(231,_245,_60,_0.72),_rgba(135,_143,_35,_0.32))] w-[11.875rem] h-[3.438rem] overflow-hidden flex flex-row items-center justify-center py-[0.375rem] px-[1.5rem] box-border text-gray1-300">
        <div className="relative font-medium">Submit</div>
      </div>
      <GroupComponent />
      <TablaIcon
        tabla="/tabla3.svg"
        propTop="47.125rem"
        propLeft="calc(50% + 551px)"
        propWidth="9.375rem"
        propHeight="11.5rem"
        propOpacity="0.7"
      />
      <TablaIcon
        tabla="/tabla4.svg"
        propTop="52.25rem"
        propLeft="77.25rem"
        propWidth="4.375rem"
        propHeight="5.688rem"
        propOpacity="unset"
      />
      <div className="absolute top-[11.188rem] left-[52.625rem] text-[1.875rem] uppercase font-light font-inter text-darkgoldenrod-300 text-center inline-block w-[43.075rem] h-[2.625rem] [transform:_rotate(89.9deg)] [transform-origin:0_0]">
        _____________________________________
      </div>
      <div className="absolute top-[2.125rem] left-[0.75rem] text-[2.5rem] leading-[2.5rem] font-moul text-center flex items-center w-[18.125rem] h-[4.375rem] text-darkgoldenrod-100">
        <span className="w-full">
          <span> SUR</span>
          <span className="text-black">Raag</span>
        </span>
      </div>
    </div>
  );
};

export default Desktop3;
