import { useMemo } from "react";
import PropTypes from "prop-types";

const Property1Default = ({
  className = "",
  pageTitle,
  property1DefaultWidth,
  property1DefaultBorderBottom,
  property1DefaultPadding,
  property1DefaultHeight,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      width: property1DefaultWidth,
      borderBottom: property1DefaultBorderBottom,
      padding: property1DefaultPadding,
      height: property1DefaultHeight,
    };
  }, [
    property1DefaultWidth,
    property1DefaultBorderBottom,
    property1DefaultPadding,
    property1DefaultHeight,
  ]);

  return (
    <div
      className={`w-[130px] box-border flex flex-row items-center justify-center p-2.5 text-center text-5xl text-black font-product-sans border-b-[5px] border-dashed border-black ${className}`}
      style={property1DefaultStyle}
    >
      <b className="relative leading-[40px]">{pageTitle}</b>
    </div>
  );
};

Property1Default.propTypes = {
  className: PropTypes.string,
  pageTitle: PropTypes.string,

  /** Style props */
  property1DefaultWidth: PropTypes.any,
  property1DefaultBorderBottom: PropTypes.any,
  property1DefaultPadding: PropTypes.any,
  property1DefaultHeight: PropTypes.any,
};

export default Property1Default;
