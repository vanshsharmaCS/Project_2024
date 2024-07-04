import TablaIcon from "../components/TablaIcon";

const Desktop5 = () => {
  return (
    <div className="w-full relative h-[64rem] overflow-hidden bg-[url('/public/desktop--4@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[2rem] text-saddlebrown-900 font-kaisei-harunoumi">
      <img
        className="absolute top-[-8.625rem] left-[63.125rem] w-[29.594rem] h-[23.188rem] overflow-hidden object-contain opacity-[0.2]"
        alt=""
        src="/sitar2@2x.png"
      />
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
      <div className="w-full relative h-full overflow-hidden bg-[url('/public/desktop--9@3x.png')] bg-cover bg-no-repeat bg-[top] ">
        <img
          className="absolute h-[26.81%] w-[26.25%] top-[-0.88%] right-[73.75%] bottom-[74.06%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.6]"
          alt=""
          src="/data-transfer.svg"
        />
        <div className=" mt-10 text-[5.313rem] text-center font-lobster-two text-base-50  w-full">
          What Our Students Say!
        </div>
      </div>
    </div>
  );
};

export default Desktop5;
