const About = () => {
  return (
    <div
      className="bg-fixed bg-center bg-cover h-[65vh]"
      style={{ backgroundImage: "url('/bg-1.svg')" }}
    >
      <div className="flex items-center justify-center h-full">
        <div className="bg-black bg-opacity-45 text-white p-10 h-[100%] w-[100%] rounded-lg shadow-md text-center">
          <h1 className="text-3xl mb-4">More About Us</h1>
          {/* <p className="text-lg">This is some content about us.</p> */}
          <div className="w-full flex items-center justify-center ">
            <hr className="w-[8%]" />
          </div>
          <img src="./image-7.svg" alt="" className="m-auto w-[40vw] mt-12" />
          <div className="flex items-center justify-center m-auto gap-24 text-[#CACBCB] ">
             <h1 className="w-20">Design & Manufacturing</h1>
             <h1>Skilling</h1>
             <h1>Testing</h1>
             <h1>Prototyping</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
