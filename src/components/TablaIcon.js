import { useMemo } from "react";
import PropTypes from "prop-types";

const TablaIcon = ({
  className = "",
  tabla,
  propTop,
  propLeft,
  propWidth,
  propHeight,
  propOpacity,
}) => {
  const tablaIconStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
      width: propWidth,
      height: propHeight,
      opacity: propOpacity,
    };
  }, [propTop, propLeft, propWidth, propHeight, propOpacity]);

  return (
    <img
      className={`absolute top-[3.625rem] left-[calc(50%_-_40px)] w-[7.125rem] h-[6.688rem] overflow-hidden ${className}`}
      alt=""
      src={tabla}
      style={tablaIconStyle}
    />
  );
};

TablaIcon.propTypes = {
  className: PropTypes.string,
  tabla: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propOpacity: PropTypes.any,
};

export default TablaIcon;
