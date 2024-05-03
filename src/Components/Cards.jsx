export default function Cards() {
  const max = 5;
  const min = 0;
  const className = [
    "bg-[#f9b234]",
    "bg-[#3ecd5e]",
    "bg-[#e44002]",
    "bg-[#952aff]",
    "bg-[#cd3e94]",
    "bg-[#4c49ea]",
  ];
  return (
    <>
      {/* --------------------------------Cards-------------------------------- */}
      <div className="group bg-black rounded-2xl shadow-lg relative overflow-hidden w-full">
        <div
          className={`${
            className[Math.floor(Math.random() * (max - min + 1) + min)]
          } h-32 w-32 z-0 flex absolute rounded-full top-[-75px] right-[-75px] transform group-hover:scale-[6.5] duration-300`}
        ></div>
        <div className="text-white px-4 py-6 flex flex-col gap-2 z-50 relative drop-shadow-md cursor-none select-none">
          <div className="font-semibold text-3xl tracking-wider">BCS-3D</div>
          <p className="font-poppins font-thin text-lg text-gray-400 group-hover:text-white">
            Swarnadip Dasgupta
          </p>
          <p className="pt-8">
            Class Duration:{"  "}
            <span className="text-[#f9b234] font-bold group-hover:text-white">
              10:45 - 12:30
            </span>
          </p>
        </div>
      </div>

      {/* --------------------------------Cards-------------------------------- */}
    </>
  );
}
