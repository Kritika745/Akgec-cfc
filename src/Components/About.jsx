const About = () => {
  return (
    <>
      <div className="h-20"></div>
      <div className="flex items-start mt-16 justify-center w-full min-h-screen pr-28 pl-28">
        <div className=" w-[50%]  h-[70vh] flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-3">
            <img src="/logo.png" className="w-80" alt="" />
            <h1 className="text-6xl font-semibold">
              COMMON <br />{" "}
              <span className="text-[#58BBEB] font-bold">FACILITY</span> <br />
              <span className="text-[#213C70]">CENTRE</span>
            </h1>
          </div>
          <div className="flex items-center justify-center mt-10 gap-5">
              <button className="p-3 bg-blue-500 text-lg pr-6 pl-6">akgeccfc@akgec.ac.in</button>
              <button className="p-3 bg-blue-500 text-lg pr-6 pl-6">akgeccfc@akgec.ac.in</button>
          </div>
        </div>
        <div className=" w-[50%] bg-red-400 h-[70vh]"></div>
      </div>
    </>
  );
};

export default About;
