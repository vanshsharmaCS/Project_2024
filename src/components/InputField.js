import PropTypes from "prop-types";

const InputField = ({ className = "", label, placeholder }) => {
  return (
    <div
      className={`w-[16.881rem] flex flex-col items-start justify-start gap-[0.462rem] text-left text-[1rem] text-gray-900 font-button-big-bold ${className}`}
    >
      <b className="self-stretch relative tracking-[0.01em] leading-[165%]">
        {label}
      </b>
      <div className="self-stretch rounded-xs-1 bg-base-50 flex flex-row items-start justify-start py-[0.637rem] px-[0.925rem] text-gray-500 border-[0.9px] border-solid border-gray-200">
        <div className="flex-1 relative tracking-[0.01em] leading-[165%] font-medium">
          {placeholder}
        </div>
      </div>
    </div>
  );
};

InputField.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputField;
