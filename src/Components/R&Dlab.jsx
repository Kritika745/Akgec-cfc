import { rndlab1 } from "../constants/machine"

const RDlab = () => {
  return (
    <>
      <section className="lg:mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto w-full text-center">
            <p className="mt-4 w-full text-base leading-relaxed text-gray-900">
              R&D centre is established to boast advanced manufacturing and
              materials processing equipment, including state-of-the-art metal
              3D printer, a high-capacity sand blasting machine, and an inert
              gas muffle furnace. It is designed to serve as a hub for
              cutting-edge training, innovative research, and specialized
              consultancy services.
            </p>
            <p className="mt-4 w-full text-base leading-relaxed text-gray-900">
              The metal 3D printing enables precise and rapid prototyping of
              complex metal parts, pushing the boundaries of design and
              engineering. Complementing this is the sand blasting machine,
              which ensures superior surface finishing and preparation, crucial
              for various industrial applications. The inert gas muffle furnace
              provides a controlled environment for heat treatment, allowing
              researchers to experiment with new materials and improve existing
              processes.
            </p>
            <p className="mt-4 w-full text-base leading-relaxed text-gray-900">
              Together, these facilities empower the facility to offer
              comprehensive training programs for industry professionals,
              facilitate ground breaking research in material science and
              engineering, and provide expert consultancy for optimization of
              manufacturing processes and product development strategies.
            </p>
          </div>
        </div>
      </section>

      {rndlab1.map((item) => (
        <section key={item["Metal 3D Printer (SLM 280)"].title}>
          <div className="px-2 lg:flex lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
              <div className="my-10 lg:my-0 lg:px-10">
                <h1 className=" text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-5xl underline">
                  {item["Metal 3D Printer (SLM 280)"].maintitle}
                </h1>
                <li className=" text-3xl underline font-semibold tracking-tight text-black/80 mt-4 md:text-4xl lg:text-2xl">
                  {item["Metal 3D Printer (SLM 280)"].maintitle}
                </li>
                <p className="mt-1 max-w-xl text-base leading-relaxed text-gray-900">
                  {item["Metal 3D Printer (SLM 280)"].description1}
                </p>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-900">
                  {item["Metal 3D Printer (SLM 280)"].description2}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <img
                src={item["Metal 3D Printer (SLM 280)"].image3}
                alt="ManWith Laptop"
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          </div>

          {/* table */}
          <h1 className="text-3xl lg:ml-8 mt-7 font-bold underline">
            Specifications :
          </h1>
          <div className="mt-6 flex flex-col overflow-hidden">
            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="divide-x divide-gray-200">
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          <span>Employee</span>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          Title
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {Object.entries(
                        rndlab1[0]["Metal 3D Printer (SLM 280)"].specifications
                      ).map(([key, value]) => (
                        <tr key={key} className="divide-x divide-gray-200">
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {key}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900">{value}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
 
              <hr className="mt-8 w-[80%] m-auto border-black" />
          {/* machine 2 */}
          <h1 className=" text-3xl font-bold tracking-tight mt-3 text-black md:text-4xl lg:text-5xl underline">
                  {item["Post-processing"].title}
            </h1>
          <div className=" w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:space-y-0 lg:grid-cols-3">
              <div
                className="  flex items-center justify-center sm:flex-row gap-6 w-auto rounded-md md:aspect-auto md:h-[400px]"
              >
                <img
                  src={"https://ucarecdn.com/8280ed37-3b8b-4a67-b913-516a2eaa4aa8/-/preview/1000x666/"}
                  alt="AirMax Pro"
                  className="z-0 h-full w-[80%] rounded-md object"
                />
                <img
                  src={"https://ucarecdn.com/816778f0-d691-45c3-8a9c-0384b0ee8e30/-/preview/666x1000/"}
                  alt="AirMax Pro"
                  className="z-0 h-full w-full rounded-md object"
                />
                <img
                  src={"https://ucarecdn.com/c14b8a3b-dc0f-4703-92e4-f5db012d7ba7/-/preview/666x1000/"}
                  alt="AirMax Pro"
                  className="z-0 h-full w-full rounded-md object"
                />
              </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full text-center">
              <h1 className="text-3xl mt-7 font-bold mb-4 underline">
                Description
              </h1>
              <p className="mt-4 w-full text-base leading-relaxed text-gray-900">
                {item["Post-processing"].description1}
              </p>
              <p className="mt-4 w-full text-base leading-relaxed text-gray-900">
                {item["Post-processing"].description2}
              </p>
            </div>
          </div>

          <h1 className="text-3xl lg:ml-8 mt-7 font-bold underline">
            Specifications :
          </h1>
          <div className="mt-6 flex flex-col overflow-hidden">
            <div className="-mx-4 -my-2 sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="divide-x divide-gray-200">
                        <th
                          scope="col"
                          className="px-4 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          <span>Employee</span>
                        </th>
                        <th
                          scope="col"
                          className="px-12 py-3.5 text-left text-sm font-normal text-gray-500"
                        >
                          Title
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {Object.entries(
                        rndlab1[0]["Post-processing"].specifications
                      ).map(([key, value]) => (
                        <tr key={key} className="divide-x divide-gray-200">
                          <td className="whitespace-nowrap px-4 py-4">
                            <div className="flex items-center">
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {key}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-12 py-4">
                            <div className="text-sm text-gray-900">{value}</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* <img
            src={item["Post-processing"].image2}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object"
          /> */}
        </section>
      ))}
    </>
  );
}

export default RDlab