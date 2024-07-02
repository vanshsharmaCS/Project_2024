import PropTypes from "prop-types";

const ContactFormContainer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[16.438rem] left-[14.438rem] w-[24.875rem] h-[27.125rem] text-left text-[1.25rem] text-gray1-200 font-space-grotesk ${className}`}
    >
      <div className="absolute top-[8.938rem] left-[-0.312rem] shadow-[0px_0px_4px_rgba(0,_0,_0,_0.25),_0px_-1px_4px_rgba(0,_0,_0,_0.25)_inset] w-[34.5rem] h-[5rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-whitesmoke w-[34.5rem] h-[5rem]" />
        <div className="absolute top-[1.55rem] left-[1.544rem] inline-block w-[9.613rem] h-[1.725rem]">
          Your name
        </div>
      </div>
      <div className="absolute top-[16.25rem] left-[-0.312rem] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.16),_0px_2px_4px_rgba(0,_0,_0,_0.25)_inset] w-[34.5rem] h-[5rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-lg bg-whitesmoke w-[34.5rem] h-[5rem]" />
        <div className="absolute top-[1.55rem] left-[1.544rem] inline-block w-[13.388rem] h-[1.725rem]">
          Phone Number
        </div>
      </div>
      <b className="absolute top-[-5.25rem] left-[-1.437rem] text-[5.313rem] text-saddlebrown-300">
        CONTACT US
      </b>
      <div className="absolute top-[1.5rem] left-[-0.312rem] text-[1.5rem] font-medium text-darkgoldenrod-300 inline-block w-[29.688rem]">
        <p className="m-0">if you need some help or any</p>
        <p className="m-0">other questions, feel free to ask.</p>
      </div>
    </div>
  );
};

ContactFormContainer.propTypes = {
  className: PropTypes.string,
};

export default ContactFormContainer;
