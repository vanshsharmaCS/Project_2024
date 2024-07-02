const Desktop4 = () => {
  return (
    <div className="w-full relative h-[62.125rem] overflow-hidden bg-[url('/public/desktop--9@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[2rem] text-saddlebrown-900 font-kaisei-harunoumi">
      <img
        className="absolute h-[26.81%] w-[26.25%] top-[-0.88%] right-[73.75%] bottom-[74.06%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.6]"
        alt=""
        src="/data-transfer.svg"
      />
      <div className="absolute h-[11.57%] top-[5.13%] left-[calc(50%_-_218px)] text-[5.313rem] font-lobster-two text-base-50 inline-block w-[27.25rem]">
        Our Team
      </div>
      <img
        className="absolute h-[10.06%] w-[6.94%] top-[18.91%] right-[53.89%] bottom-[71.03%] left-[39.17%] max-w-full overflow-hidden max-h-full"
        alt=""
      />
      <div className="absolute h-[38.33%] w-[32.78%] top-[15.09%] right-[4.1%] bottom-[46.58%] left-[63.13%] bg-gainsboro" />
      <div className="absolute h-[35.41%] w-[29.93%] top-[53.42%] right-[67.57%] bottom-[11.17%] left-[2.5%] bg-gainsboro" />
      <div className="absolute top-[13.063rem] left-[2.25rem] inline-block w-[52.813rem] h-[20.125rem]">
        <p className="m-0 whitespace-pre-wrap"> John Doe</p>
        <ul className="m-0 font-inherit text-inherit pl-[1.343rem]">
          <li>CEO</li>
          <li>
            John Doe leads our strategic initiatives with over 15 years of
            experience in business management and innovation.
          </li>
        </ul>
      </div>
      <div className="absolute top-[36.125rem] left-[32.688rem] inline-block w-[55.875rem] h-[20.75rem]">
        <p className="m-0">Jane Smith</p>
        <ul className="m-0 font-inherit text-inherit pl-[1.343rem]">
          <li>Chief Operating Officer</li>
          <li>
            Jane Smith oversees daily operations, ensuring seamless execution of
            our projects and client satisfaction.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Desktop4;
