import PropTypes from "prop-types";

const Type = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start gap-[0.925rem] text-left text-[0.925rem] text-gray-900 font-abel ${className}`}
    >
      <div className="w-[14.456rem] relative h-[4.394rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-xs-1 bg-base-50 box-border w-[14.456rem] h-[4.394rem] border-[1.9px] border-solid border-blue-500" />
        <img
          className="absolute top-[0.925rem] left-[0.925rem] w-[0.925rem] h-[0.925rem]"
          alt=""
          src="/radio-button.svg"
        />
        <img
          className="absolute top-[0.813rem] left-[10.756rem] w-[2.775rem] h-[2.775rem] object-cover"
          alt=""
          src="/visa@2x.png"
        />
        <div className="absolute top-[0.694rem] left-[2.775rem] tracking-[0.01em] leading-[165%]">
          **** 8304
        </div>
        <div className="absolute top-[2.2rem] left-[2.775rem] flex flex-row items-center justify-start gap-[0.462rem] text-gray-500">
          <div className="relative tracking-[0.01em] leading-[165%]">Visa</div>
          <div className="w-[0.231rem] relative rounded-[50%] bg-gray-400 h-[0.231rem]" />
          <div className="relative tracking-[0.01em] leading-[165%]">Edit</div>
        </div>
      </div>
      <div className="w-[14.456rem] relative h-[4.394rem]">
        <div className="absolute top-[0rem] left-[0rem] rounded-xs-1 bg-base-50 box-border w-[14.456rem] h-[4.394rem] border-[0.9px] border-solid border-gray-200" />
        <img
          className="absolute top-[0.925rem] left-[0.925rem] w-[0.925rem] h-[0.925rem]"
          alt=""
          src="/radio-button1.svg"
        />
        <img
          className="absolute top-[0.813rem] left-[11.213rem] w-[2.775rem] h-[2.775rem] overflow-hidden"
          alt=""
          src="/paypal.svg"
        />
        <div className="absolute top-[0.694rem] left-[2.775rem] tracking-[0.01em] leading-[165%]">
          **** 8304
        </div>
        <div className="absolute top-[2.2rem] left-[2.775rem] flex flex-row items-center justify-start gap-[0.462rem] text-gray-500">
          <div className="relative tracking-[0.01em] leading-[165%]">
            Paypal
          </div>
          <div className="w-[0.056rem] relative box-border h-[0.75rem] hidden border-r-[0.9px] border-solid border-gray-200" />
          <div className="w-[0.231rem] relative rounded-[50%] bg-gray-400 h-[0.231rem]" />
          <div className="relative tracking-[0.01em] leading-[165%]">Edit</div>
        </div>
      </div>
      <div className="w-[4.394rem] relative h-[4.394rem] text-center text-blue-500">
        <div className="absolute top-[0rem] left-[0rem] rounded-xs-1 bg-base-50 box-border w-[4.394rem] h-[4.394rem] border-[0.9px] border-solid border-gray-200" />
        <div className="absolute top-[0.694rem] left-[0.463rem] flex flex-col items-center justify-start gap-[0.118rem]">
          <img
            className="w-[1.388rem] relative h-[1.388rem]"
            alt=""
            src="/vuesaxlinearaddsquare.svg"
          />
          <div className="w-[3.469rem] relative tracking-[0.01em] leading-[165%] inline-block">
            New
          </div>
        </div>
      </div>
    </div>
  );
};

Type.propTypes = {
  className: PropTypes.string,
};

export default Type;
