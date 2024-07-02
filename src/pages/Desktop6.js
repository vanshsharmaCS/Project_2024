import GroupComponent1 from "../components/GroupComponent1";
import StateDefaultSize from "../components/StateDefaultSize";

const Desktop6 = () => {
  return (
    <div className="w-full relative h-[62.125rem] overflow-hidden bg-[url('/public/desktop--9@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-[5.313rem] text-base-50 font-lobster-two">
      <img
        className="absolute h-[26.81%] w-[26.25%] top-[-0.88%] right-[73.75%] bottom-[74.06%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.6]"
        alt=""
        src="/data-transfer.svg"
      />
      <GroupComponent1 />
      <StateDefaultSize
        button="Pay $51.00"
        showButton
        stateDefaultSize48Width="16.938rem"
        stateDefaultSize48BackgroundColor="#5f4401"
        stateDefaultSize48Padding="0.637rem 1.387rem"
        stateDefaultSize48Position="absolute"
        stateDefaultSize48Top="51rem"
        stateDefaultSize48Left="35.5rem"
        stateDefaultSize48Height="unset"
      />
      <div className="absolute h-[11.57%] top-[3.62%] left-[calc(50%_-_274px)] inline-block w-[34.938rem]">
        Payment details
      </div>
    </div>
  );
};

export default Desktop6;
