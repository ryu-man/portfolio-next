const Stats = () => {
  return (
    <div className="sd:text-8xl flex w-full flex-wrap justify-between py-8 text-3xl">
      <div className="sd:flex-row flex flex-col items-center gap-2">
        <div className="font-bold">4</div>
        <div className="sd:text-end w-min text-center text-sm text-wrap">
          Years of expiernce
        </div>
      </div>

      <div className="sd:flex-row flex flex-col items-center gap-2">
        <div className="font-bold">26</div>
        <div className="sd:text-end w-min text-center text-sm text-wrap">
          Projects Compoleted
        </div>
      </div>

      <div className="sd:flex-row flex flex-col items-center gap-2">
        <div className="font-bold">4</div>
        <div className="sd:text-end w-min text-center text-sm text-wrap">
          Modern Frameworks
        </div>
      </div>

      <div className="sd:flex-row flex flex-col items-center gap-2">
        <div className="font-bold">500</div>
        <div className="sd:text-end w-min text-center text-sm text-wrap">
          Code commits
        </div>
      </div>
    </div>
  );
};

export default Stats;
