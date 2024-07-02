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
      <div className="absolute h-[36.23%] w-[29.44%] top-[5.37%] right-[4.86%] bottom-[58.4%] left-[65.69%] bg-gainsboro" />
      <div className="absolute h-[37.01%] w-[29.58%] top-[52.15%] right-[64.38%] bottom-[10.84%] left-[6.04%] bg-gainsboro" />
      <div className="absolute top-[6.5rem] left-[1.875rem] inline-block w-[57.25rem] h-[20.125rem]">
        <p className="m-0">Michael Brown</p>
        <ul className="m-0 font-inherit text-inherit pl-[1.343rem]">
          <li>Head of Marketing</li>
          <li>
            Michael Brown crafts compelling campaigns that resonate with our
            audience, leveraging his expertise in digital marketing.
          </li>
        </ul>
      </div>
      <div className="absolute top-[34.938rem] left-[35.813rem] inline-block w-[50.313rem] h-[23rem]">
        <p className="m-0">John Doe</p>
        <ul className="m-0 font-inherit text-inherit pl-[1.343rem]">
          <li>CEO</li>
          <li>
            John Doe leads our strategic initiatives with over 15 years of
            experience in business management and innovation.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Desktop5;
