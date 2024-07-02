import { useMemo } from "react";
import PropTypes from "prop-types";

const StateDefaultSize = ({
  className = "",
  button,
  showButton,
  stateDefaultSize48Width,
  stateDefaultSize48BackgroundColor,
  stateDefaultSize48Padding,
  stateDefaultSize48Position,
  stateDefaultSize48Top,
  stateDefaultSize48Left,
  stateDefaultSize48Height,
}) => {
  const stateDefaultSize48Style = useMemo(() => {
    return {
      width: stateDefaultSize48Width,
      backgroundColor: stateDefaultSize48BackgroundColor,
      padding: stateDefaultSize48Padding,
      position: stateDefaultSize48Position,
      top: stateDefaultSize48Top,
      left: stateDefaultSize48Left,
      height: stateDefaultSize48Height,
    };
  }, [
    stateDefaultSize48Width,
    stateDefaultSize48BackgroundColor,
    stateDefaultSize48Padding,
    stateDefaultSize48Position,
    stateDefaultSize48Top,
    stateDefaultSize48Left,
    stateDefaultSize48Height,
  ]);

  return (
    <div
      className={`w-[216px] rounded-xl bg-blue-500 flex flex-row items-start justify-center py-[11px] px-6 box-border text-left text-base text-base-50 font-button-big-bold ${className}`}
      style={stateDefaultSize48Style}
    >
      {showButton && (
        <b className="relative tracking-[0.01em] leading-[165%]">{button}</b>
      )}
    </div>
  );
};

StateDefaultSize.propTypes = {
  className: PropTypes.string,
  button: PropTypes.string,
  showButton: PropTypes.bool,

  /** Style props */
  stateDefaultSize48Width: PropTypes.any,
  stateDefaultSize48BackgroundColor: PropTypes.any,
  stateDefaultSize48Padding: PropTypes.any,
  stateDefaultSize48Position: PropTypes.any,
  stateDefaultSize48Top: PropTypes.any,
  stateDefaultSize48Left: PropTypes.any,
  stateDefaultSize48Height: PropTypes.any,
};

export default StateDefaultSize;
