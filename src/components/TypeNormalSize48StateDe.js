import { useMemo } from "react";
import PropTypes from "prop-types";

const TypeNormalSize48StateDe = ({
  className = "",
  label,
  placeholder,
  typeNormalSize48StateDeWidth,
  typeNormalSize48StateDeGap,
  typeNormalSize48StateDePosition,
  typeNormalSize48StateDeTop,
  typeNormalSize48StateDeRight,
  typeNormalSize48StateDeLeft,
  typeNormalSize48StateDeBackgroundColor,
}) => {
  const typeNormalSize48StateDeStyle = useMemo(() => {
    return {
      width: typeNormalSize48StateDeWidth,
      gap: typeNormalSize48StateDeGap,
      position: typeNormalSize48StateDePosition,
      top: typeNormalSize48StateDeTop,
      right: typeNormalSize48StateDeRight,
      left: typeNormalSize48StateDeLeft,
      backgroundColor: typeNormalSize48StateDeBackgroundColor,
    };
  }, [
    typeNormalSize48StateDeWidth,
    typeNormalSize48StateDeGap,
    typeNormalSize48StateDePosition,
    typeNormalSize48StateDeTop,
    typeNormalSize48StateDeRight,
    typeNormalSize48StateDeLeft,
    typeNormalSize48StateDeBackgroundColor,
  ]);

  return (
    <div
      className={`w-[216px] flex flex-col items-start justify-start gap-[8px] text-left text-base text-gray-900 font-button-big-bold ${className}`}
      style={typeNormalSize48StateDeStyle}
    >
      <b className="self-stretch relative tracking-[0.01em] leading-[165%]">
        {label}
      </b>
      <div className="self-stretch rounded-xl bg-base-50 flex flex-row items-start justify-start py-[11px] px-4 text-gray-500 border-[1px] border-solid border-gray-200">
        <div className="flex-1 relative tracking-[0.01em] leading-[165%] font-medium">
          {placeholder}
        </div>
      </div>
    </div>
  );
};

TypeNormalSize48StateDe.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,

  /** Style props */
  typeNormalSize48StateDeWidth: PropTypes.any,
  typeNormalSize48StateDeGap: PropTypes.any,
  typeNormalSize48StateDePosition: PropTypes.any,
  typeNormalSize48StateDeTop: PropTypes.any,
  typeNormalSize48StateDeRight: PropTypes.any,
  typeNormalSize48StateDeLeft: PropTypes.any,
  typeNormalSize48StateDeBackgroundColor: PropTypes.any,
};

export default TypeNormalSize48StateDe;
