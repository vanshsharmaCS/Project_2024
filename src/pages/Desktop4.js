import Team from "../components/TeamCard";

const Desktop4 = () => {
  return (
    <div className="w-full relative h-full overflow-hidden bg-[url('/public/desktop--9@3x.png')] bg-cover bg-no-repeat bg-[top] ">
      <img
        className="absolute h-[26.81%] w-[26.25%] top-[-0.88%] right-[73.75%] bottom-[74.06%] left-[0%] max-w-full overflow-hidden max-h-full opacity-[0.6]"
        alt=""
        src="/data-transfer.svg"
      />
      <div className=" mt-10 text-[5.313rem] text-center font-lobster-two text-base-50  w-full">
        Our Team
      </div>
      <Team/>
    </div>
  );
};

export default Desktop4;
