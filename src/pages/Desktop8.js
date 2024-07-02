import React from "react";

const Desktop8 = () => {
  return (
    <div className="w-full relative h-[62.125rem] overflow-hidden bg-[url('/public/desktop--9@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[1.25rem] text-saddlebrown-900 font-kaisei-harunoumi">
      <div className="absolute top-[3.938rem] left-[calc(50%_-_165px)] text-[5.313rem] font-lobster-two text-base-50 inline-block w-[23.438rem] h-[8.125rem] text-center">
        About Him
      </div>
      <img
        className="absolute h-[26.81%] w-[26.25%] top-[-0.88%] right-[73.75%] bottom-[74.06%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.6]"
        alt=""
        src="/data-transfer.svg"
      />
      <div className="flex flex-row items-start justify-center absolute top-[17.313rem] left-[50%] transform -translate-x-1/2 space-x-8 w-full px-8">
        <div className="flex flex-col space-y-8 w-[45%]">
          <div className="text-right">
            A Maestro of Hindustani Vocal Music hailing from Lucknow, Salman Usmani
            is a distinguished Hindustani vocalist trained in the revered Senia and
            Kirana gharanas under Ustad Gulshan Bharati and Pandit Kaivalya Kumar
            Gaura
          </div>
          <div className="text-right">
            Salman is not only a performer but also a dedicated educator
          </div>
          <div className="text-right">
            Salman Usmani's musical journey spans Sufi, ghazal, and Bollywood
            genres, reflecting his unwavering commitment to preserving and
            innovating within India's rich musical traditions
          </div>
        </div>
        <div className="absolute top-[7.625rem] left-[10.75rem] text-[1.45rem] uppercase font-light font-inter text-darkgoldenrod-300 text-center inline-block w-[60.95rem] h-[1.625rem] transform -rotate-90 transform-origin-0-0">
        _____________________________________
      </div>
        <div className="w-px bg-darkgoldenrod-300 h-full"></div>
        <div className="flex flex-col space-y-8 w-[45%]">
          <div>
            Renowned for his soulful performances and collaborations with AR Rahman's Sufi Band,
          </div>
          <div>
            As the founder of Bangalore's Sur Raag Music Academy, he passionately
            imparts his deep-rooted knowledge, shaping the next generation of
            Hindustani music aficionados.
          </div>
          <div>
            Salman Continues to Shape the Next Generation of Vocal Virtuosos with
            His Deep Commitment to Musical Excellence
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Desktop8;
