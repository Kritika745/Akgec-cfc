import { advancetoolroom, rndlab } from "../constants/machine"

const RDlab = () => {
  return (
    <>
    <section className="lg:mb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full text-center">
        <p className="mt-4 w-full text-base leading-relaxed text-gray-900">
           R&D centre is established to boast advanced manufacturing and materials processing equipment, including state-of-the-art metal 3D printer, a high-capacity sand blasting machine, and an inert gas muffle furnace. It is designed to serve as a hub for cutting-edge training, innovative research, and specialized consultancy services.
           </p>
           <p className="mt-4 w-full text-base leading-relaxed text-gray-900">
           The metal 3D printing enables precise and rapid prototyping of complex metal parts, pushing the boundaries of design and engineering. Complementing this is the sand blasting machine, which ensures superior surface finishing and preparation, crucial for various industrial applications. The inert gas muffle furnace provides a controlled environment for heat treatment, allowing researchers to experiment with new materials and improve existing processes.
           </p>
           <p className="mt-4 w-full text-base leading-relaxed text-gray-900">
           Together, these facilities empower the facility to offer comprehensive training programs for industry professionals, facilitate ground breaking research in material science and engineering, and provide expert consultancy for optimization of manufacturing processes and product development strategies.
           </p>
        </div>

        {/* <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
          <Lock className="h-4 w-4 text-gray-600" />
          <span className="ml-2 text-sm text-gray-600">
            Your data is complely secured with us. We don&apos;t share with anyone.
          </span>
        </div> */}
      </div>
    </section>

     {
        rndlab.map((item) =>(
            <section key={item["Metal 3D Printer (SLM 280)"].title}>
            <div className="px-2 lg:flex lg:flex-row lg:items-center">
              <div className="w-full lg:w-1/2">
                <div className="my-10 lg:my-0 lg:px-10">
                <h1 className=" text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl underline">
                  {
                    item["Metal 3D Printer (SLM 280)"].title
                  }
                </h1>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-900">
                    {
                        item["Metal 3D Printer (SLM 280)"].description1
                    }
                  </p>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-900">
                  {
                        item["Metal 3D Printer (SLM 280)"].description2
                    }
                  </p>
                  
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img
                  src="/adv/IMG_1786.JPG"
                  alt="ManWith Laptop"
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
            </div>
          </section>
        ))
     }
    </>
  )
}

export default RDlab