import InputField from "./InputField";
import TypeNormalSize48StateDe from "./TypeNormalSize48StateDe";
import Type from "./Type";
import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`absolute h-[76.06%] top-[19.82%] bottom-[4.12%] left-[calc(50%_-_576px)] w-[71.938rem] text-left text-[0.925rem] text-gray-900 font-abel ${className}`}
    >
      <img
        className="absolute h-[98.47%] w-[100.96%] top-[-4.89%] right-[-0.52%] bottom-[6.43%] left-[-0.43%] rounded-31xl max-w-full overflow-hidden max-h-full mix-blend-soft-light"
        alt=""
        src="/rectangle-1.svg"
      />
      <img
        className="absolute h-[88.62%] w-[88.18%] top-[0%] right-[5.04%] bottom-[11.38%] left-[6.78%] rounded-xs-1 max-w-full overflow-hidden max-h-full"
        alt=""
        src="/background.svg"
      />
      <div className="absolute h-[12.75%] w-[81.71%] top-[66.8%] right-[5.86%] bottom-[20.45%] left-[12.42%] bg-gray1-100 flex flex-row items-start justify-start gap-[1.387rem] text-[1rem] font-button-big-bold">
        <InputField label="Zip code" placeholder="Ex. 73923" />
        <InputField label="City" placeholder="Ex. New York" />
      </div>
      <div className="absolute h-[12.83%] w-[78.63%] top-[51.06%] right-[9.73%] bottom-[36.11%] left-[11.64%] bg-gray1-100 flex flex-col items-start justify-start gap-[0.462rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[165%]">
          Billing address
        </div>
        <div className="self-stretch rounded-xs-1 bg-base-50 flex flex-row items-center justify-start py-[0.637rem] pr-[0.693rem] pl-[0.925rem] gap-[0.693rem] text-gray-500 border-[0.9px] border-solid border-gray-200">
          <div className="flex-1 relative tracking-[0.01em] leading-[165%]">
            United States
          </div>
          <img
            className="w-[1.156rem] relative h-[1.156rem]"
            alt=""
            src="/vuesaxboldarrowdown.svg"
          />
        </div>
      </div>
      <TypeNormalSize48StateDe
        label="Card holder name"
        placeholder="Ex. Jane Cooper"
        typeNormalSize48StateDeWidth="78.19%"
        typeNormalSize48StateDeGap="0.462rem"
        typeNormalSize48StateDePosition="absolute"
        typeNormalSize48StateDeTop="calc(50% - 109.8px)"
        typeNormalSize48StateDeRight="10.12%"
        typeNormalSize48StateDeLeft="11.69%"
        typeNormalSize48StateDeBackgroundColor="rgba(255, 255, 255, 0)"
      />
      <div className="absolute h-[13.45%] w-[81.71%] top-[16.4%] right-[6.65%] bottom-[70.15%] left-[11.64%] bg-gray1-100 flex flex-col items-start justify-start gap-[0.462rem]">
        <div className="self-stretch relative tracking-[0.01em] leading-[165%]">
          Payment method
        </div>
        <Type />
      </div>
      <div className="absolute h-[4.55%] w-[81.71%] top-[1.59%] right-[5.86%] bottom-[93.86%] left-[12.42%] bg-gray1-100 flex flex-row items-center justify-between text-[1.25rem]">
        <div className="relative tracking-[0.01em] leading-[165%]">Payment</div>
        <img
          className="w-[1.156rem] relative h-[1.156rem]"
          alt=""
          src="/vuesaxlineararrowup.svg"
        />
      </div>
      <div className="absolute top-[2.875rem] left-[3.813rem] text-[1.875rem] uppercase font-light font-inter text-darkgoldenrod-300 text-center inline-block w-[65.563rem] h-[2.625rem]">
        ____________________________________________________________________________
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent1;
