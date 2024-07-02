import Component from "./Component";
import PropTypes from "prop-types";

const GroupComponent = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[17.938rem] left-[48.625rem] w-[32rem] h-[30.438rem] text-center text-[1.875rem] text-saddlebrown-300 font-inter ${className}`}
    >
      <div className="absolute top-[0rem] left-[2.688rem] uppercase font-medium inline-block w-[26.625rem] h-[5.244rem] [text-shadow:1px_0_0_#946f13,_0_1px_0_#946f13,_-1px_0_0_#946f13,_0_-1px_0_#946f13]">
        COME VISIT US
      </div>
      <div className="absolute top-[5.244rem] left-[4.188rem] text-[1.188rem] uppercase font-light inline-block w-[23.688rem] h-[6.525rem] [text-shadow:1px_0_0_#946f13,_0_1px_0_#946f13,_-1px_0_0_#946f13,_0_-1px_0_#946f13]">
        <p className="[margin-block-start:0] [margin-block-end:5px]">{`10700 Academy Rd NE,
	Albuquerque,
	New York
, UNITED STATES
	(505) 299-5051`}</p>
      </div>
      <div className="absolute top-[14.213rem] left-[0rem] text-[1.188rem] uppercase font-light inline-block w-[32rem] h-[16.225rem] [text-shadow:1px_0_0_#946f13,_0_1px_0_#946f13,_-1px_0_0_#946f13,_0_-1px_0_#946f13]">
        <p className="[margin-block-start:0] [margin-block-end:5px]">
          1481 Front,Windsor
        </p>
        <p className="[margin-block-start:0] [margin-block-end:5px]">{`Ontario,CANADA
	(519) 734-6500`}</p>
      </div>
      <div className="absolute top-[11.744rem] left-[14.219rem] bg-saddlebrown-300 box-border w-[3.563rem] h-[0.063rem] border-t-[1px] border-solid border-darkgoldenrod-300" />
      <Component />
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
