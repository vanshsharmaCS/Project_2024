import TablaIcon from "../components/TablaIcon";
import StateDefaultSize from "../components/StateDefaultSize";

const Desktop7 = () => {
  return (
    <div className="w-full relative h-[64rem] overflow-hidden bg-[url('/public/desktop--4@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[1.625rem] text-saddlebrown-900 font-kaisei-harunoumi">
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
      <img
        className="absolute top-[11.813rem] left-[1.563rem] w-[30.813rem] h-[46.188rem] object-contain"
        alt=""
        src="/vector-311.svg"
      />
      <img
        className="absolute h-[37.01%] w-[29.58%] top-[34.03%] right-[66.32%] bottom-[28.96%] left-[4.1%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/rectangle-11.svg"
      />
      <div className="absolute top-[17.5rem] left-[34.25rem] inline-block w-[53.063rem] h-[14.938rem]">
        <p className="m-0">
          Music Theory: Understanding fundamental concepts like notation,
          scales, chords, and form. This knowledge forms the basis for analyzing
          and composing music.
        </p>
        <p className="m-0">
          Composition and Arrangement: Learning techniques for creating and
          arranging music, from melody and harmony to orchestration, fostering
          creativity and expression
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">About the faculty-</p>
      </div>
      <div className="absolute top-[34.125rem] left-[46.875rem] text-[1.5rem] inline-block w-[36.75rem] h-[20.125rem]">
        <p className="m-0 whitespace-pre-wrap"> Michael Brown</p>
        <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
          <li>Head of Marketing</li>
          <li>
            Michael Brown crafts compelling campaigns that resonate with our
            audience, leveraging his expertise in digital marketing.
          </li>
        </ul>
      </div>
      <div className="absolute h-[11.23%] top-[1.66%] left-[calc(50%_-_182px)] text-[5.313rem] font-lobster-two text-peru inline-block w-[34.938rem]">
        Course details
      </div>
      <div className="absolute top-[12.938rem] left-[43.563rem] text-[2.25rem] font-lobster-two text-saddlebrown-700 inline-block w-[42.625rem] h-[6.5rem]">
        Tabla Tunes: Mastering the Rhythms
      </div>
      <div className="absolute top-[54.938rem] left-[49rem] w-[17.25rem] h-[4.313rem]">
        <StateDefaultSize
          button="Pay $51.00"
          showButton={false}
          stateDefaultSize48Width="17.25rem"
          stateDefaultSize48BackgroundColor="#5f4401"
          stateDefaultSize48Padding="0.637rem 1.387rem"
          stateDefaultSize48Position="absolute"
          stateDefaultSize48Top="0rem"
          stateDefaultSize48Left="0rem"
          stateDefaultSize48Height="4.313rem"
        />
      </div>
      <div className="absolute top-[55.875rem] left-[51.375rem] text-[1.25rem] text-base-50 inline-block w-[14.375rem] h-[2.438rem]">
        Proceed for payment
      </div>
      <div className="absolute top-[47.188rem] left-[35.063rem] text-saddlebrown-1000 inline-block w-[42.875rem] h-[6.375rem]">
        <p className="m-0">Reviews-...............................</p>
        <p className="m-0 whitespace-pre-wrap">{`             `}</p>
      </div>
    </div>
  );
};

export default Desktop7;
