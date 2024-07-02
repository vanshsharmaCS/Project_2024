import PropTypes from "prop-types";

const Component = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[23.813rem] left-[4.188rem] box-border w-[24rem] h-[6.625rem] text-center text-[1.875rem] text-black font-inter border-[1px] border-solid border-darkgoldenrod-300 ${className}`}
    >
      <div className="absolute h-[63.11%] w-full top-[0%] left-[0%] uppercase font-medium inline-block">{` FOLLOW OUR SOCIALS `}</div>
      <img
        className="absolute h-[30.75%] w-[10.42%] top-[61.51%] right-[69.27%] bottom-[7.74%] left-[20.31%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/vector.svg"
      />
      <img
        className="absolute h-[34.62%] w-[12.24%] top-[60%] right-[40.89%] bottom-[5.38%] left-[46.88%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/bxlfacebook.svg"
      />
      <img
        className="absolute h-[38.49%] w-[11.72%] top-[61.51%] right-[14.32%] bottom-[0%] left-[73.96%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/radixiconsdiscordlogo.svg"
      />
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export default Component;
