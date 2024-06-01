import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../constants';
import Infra from '../Components/infrastructure';

const CentreOfExcellence = () => {

  const { id } = useParams();
  console.log(id);
  const getBgImage = (id) => {
    if (id === 'AdvToolRoom') {
      return {
        bgImage: '/public/adv/IMG_1607.JPG',
        title: 'Advanced Tool Room',
        desc: 'Description for Advanced Tool Room',
        desc2: 'Description for Advanced Tool Room'
      };
    } else if (id === 'R&DLab') {
      return {
        bgImage: '/public/material/IMG_1730.JPG',
        title: 'R&D Lab',
        desc: 'Description for R&D Lab',
        desc2: 'Description for R&D Lab'
      };
    } else if (id === 'Material') {
      return {
        bgImage: '/public/rnd/IMG_1607.JPG',
        title: 'Material',
        desc: 'Description for Material',
        desc2: 'Description for Material'
      };
    }  else {
      return {
        bgImage: '/public/IMG_1616.JPG',
        title: 'Default Title',
        desc: 'Default Description',
        desc2: 'Default Description'
      };
    }
  }

  const bgImage = getBgImage(id);

  const advtoolroom = [
    { 
      name: "Double Column Band Saw",
      brief:"cutting of solid rod,  hollow pipe, in round and square cross section. ",
      description:
        "Focused to cut materials which are difficult to machine, such as Inconel, Hastelloy, Titanium, Stainless Steel, etc., as well as any mild steel, taking into account the needs of solidity and hardness for the cut of this kind of materials",
       image:"/public/IMG_1695.JPG"
    },
    {
      name: "CNC EDM Wirecut & Wire drill",
      brief:"Cutting of any type of profile on any metal and alloys. Manufacturing of Die, Fixtures, and gauges, Cutting tools with high precision.",
      description:
        "Wire electrical discharge machining is a non-contact subtractive manufacturing process that uses an electrically charged thin wire with a dielectric fluid to cut a metal part into different shapes. The process produces small chips and precise cut lines by melting or vaporizing the material rather than cutting it.",
      img:'/public/adv/IMG_1585.JPG'
    
    },
    {
      name: "CNC VMC",
      brief:"All types of Die and mould machining, Drilling, Shaping, Cutting, Tapping, Boring on any component",
      description:
        "VMC(vertical machining center)with the spindle axis perpendicular to the worktable. It can complete the processes of milling, boring, drilling, tapping and cutting threads. The VMC is having three-axis and two-linkage",
      image:"/public/adv/IMG_1777.JPG"
    },
    {
      name: "CNC HMC",
      brief:"Engine block, Cylinder, and housing of different component machining.",
      description:
        "HMC( horizontal machining center )with a horizontal spindle. It has an automatic indexing rotary and 3 to 5 motion coordinates. The machine is having three linear motion coordinates plus one rotary motion coordinate.",
        image:"/public/IMG_1695.JPG"
    },
    {
      name:"CNC Laser Cutting",
       brief:"Focused high-power laser beam is used to cut, inscribe, or engrave a metal surface to get the desired shapes.",
       description:"They are specially used to cut intricate shapes and minute holes with a high level of accuracy."
    },
    {
      name:"CNC Turn Mill ",
      brief:" Milling, Drilling, Tapping, and ofcourse, Turning",
      description:"CNC turning centres are advanced computer numerically controlled machines. Which have 3, 4, or even 5 axes, along with a multitude of cutting capabilities, including milling, drilling, tapping, and ofcourse, turning.",
      image:"/public/IMG_1695.JPG"
    },
    {
      name:"CNC Abrasive Water Jet Cutting",
      brief:"The An Innovative 3015 B Water Jet Cutting machine offers precise, versatile cutting for materials up to 200 mm thick, with a 3000 x 1500 mm area and 15 m/min speed.",
      description:"A CNC waterjet cutting machine swiftly and accurately cuts through metal, plastic, and other materials using high-pressure water. Abrasive material can be added to enhance speed while maintaining precision in the cutting process.",
      image:"/public/adv/IMG_1786.JPG"
    },
    {
      name:"CNC Bending Swift",
      brief:"The Hindustan Hydraulic CNC Bending Swift 100-31 is a high-precision machine with a 3200 mm length, 100-ton force, and 10 mm/s speed for versatile bending in various industries.",
      description:"The Hindustan Hydraulic CNC Bending Swift 100-31 offers efficient, precise bending with a 3200 mm length, 100-ton force, and 10 mm/s speed. It handles up to 10 mm thick sheets, ensuring accuracy and repeatability for automotive, aerospace, and metal fabrication applications.",
      image:"/public/IMG_1695.JPG"
    },
    {
      name:"CNC 5-Axis Machining center ",
      brief:"The CNC 5-Axis C600 is a high-precision machining center with a 600 mm table, 12,000 RPM spindle, and advanced CNC controls for complex manufacturing in aerospace, automotive, and medical industries.",
      description:"The Mazak CNC 5-Axis C600 features simultaneous five-axis machining, a 12,000 RPM spindle, and a 600 mm table. Ideal for aerospace, automotive, and medical industries, it offers high precision, versatility, and productivity for complex tasks.",
      image:"/public/adv/IMG_1806.JPG"
    },
    {
      name:"EDM Drilling Machine(Smart Drill)",
      brief:"",
      description:"",
      image:"/public/adv/IMG_1610.JPG"
    },
];


  const rnd =[
    {
     name:"Metal 3d printer (SLM 280)",
     brief:"The SLM 280 Single Laser Machine is an advanced additive manufacturing system with a 280 x 280 x 365 mm build envelope and 400W fiber laser, ideal for precise metal powder melting in various industries.",
     description:"The SLM 280 Single Laser Machine features a 280 x 280 x 365 mm build envelope and 400W fiber laser for precise additive manufacturing. It processes aluminum, titanium, stainless steel, and cobalt-chromium alloys, perfect for aerospace, automotive, medical, and tooling applications.",
     image:"/public/rnd/IMG_1669.JPG"
    },
    {
      name:"Post-processing",
      brief:"Sand blasting, hot air ovens, and inert gas muffle furnaces enhance post-processing in additive manufacturing, offering precise finishes and controlled heating for diverse industries.",
      description:"Sand blasting enhances surface roughness, while the hot air oven dries metal powder with precise temperature control up to 200°C. The Inert Gas Muffle Furnace provides controlled heating up to 1200°C in an inert atmosphere, ideal for sintering and heat treatment. These machines cater to diverse industry needs with their reliability and efficiency in post-processing for additive manufacturing.",
      image:"/public/rnd/IMG_1650.JPG"
    },
    
  ];


  const material=[
    {
      name:"Spectrometer (SPECTROMAXx LMA10)",
      brief:"Precision-engineered OES analyzer delivering rapid, reliable multi-element analysis for stringent quality standards in metal processing.",
      description:"The SPECTROMAXxLMX10 provides precise elemental analysis for metals like Iron & Steel, Aluminium, Copper, and Nickel alloys. With advanced optics and user-friendly software, it's a top choice for quality control in foundries and metal processing, ensuring reliable results with outstanding repeatability.",
      image:"/public/material/IMG_1738.JPG"

    },
    {
      name:"Metallurgical Microscope (Stand Axio Observer 7)",
      brief:"Advanced inverted microscope with ZEISS optics, motorized components, and dedicated software for precise metal analysis and material characterization.",
      description:"The Axio Observer 7 by ZEISS is a fully motorized inverted microscope for metals, offering reliable results with five objective options (50X-1000X), advanced features like Extended Depth of Field (EDF), and dedicated software modules for precise analysis of metallic materials.",
      image:"/public/material/IMG_1730.JPG"
    },
   {
      name:"Digital Microscope (Smart zoom 5)",
      brief:"Fully automated digital microscope offering high-quality, reproducible QA/QC measurements across industries with versatile magnification options and advanced imaging capabilities.",
      description:"The ZEISS Smartzoom 5: a smart digital microscope for versatile quality control across industries. Automated with magnifications from 34X to 335X, it offers fast, reliable measurements and advanced imaging capabilities like extended depth of field and 3D imaging.",
      image:"/public/IMG_1695.JPG"
    },
    {
      name:"Hardness Testing Machines",
      brief:"It provides a comprehensive range of hardness testing machines for accurate and reliable results across various industries.",
      description:"Introducing FIE's range of hardness testing machines: B3000 TSFA for large components, RASN TSFA for diverse materials, and MV1TS for micro-indentation testing. With advanced features and user-friendly interfaces, they ensure precise results for automotive, aerospace, manufacturing, and research applications.",
      image:"/public/material/IMG_1693.JPG"
    },
    {
      name:"Fatigue Testing Machine (Fatigue Pro-200)",
      brief:"The FIE Pro-200 Fatigue Testing Machine offers high-performance durability testing up to 200 kN capacity, ideal for assessing material fatigue in automotive, aerospace, and structural engineering.",
      description:"The FIE Pro-200 Fatigue Testing Machine offers a high-performance solution with a maximum load capacity of 200 kN. Its versatility in cyclic testing, including adjustable frequency and amplitude, makes it ideal for evaluating material fatigue in automotive, aerospace, and structural engineering applications.",
      image:"/public/IMG_1695.JPG"
    },
    {
      name:"Universal Testing Machine (UTES HGFL TS)",
      brief:"The FIE UTES HGFL TS Universal Testing Machine offers a robust 1000 kN capacity with digital extensometers for precise material testing in various industries.",
      description:"Introducing the FIE UTM UTES HGFL TS: a robust 1000 kN Universal Testing Machine with digital extensometers for precise measurements. Ideal for tensile, compression, and flexural testing in construction, manufacturing, and research, delivering reliable results for material characterization.",
      image:"/public/IMG_1695.JPG"
    },
    {
      name:"Impact Testing Machine (IT 30 AUTO)",
      brief:"The Impact Testing Machine offers robust material toughness assessment with a 300 Joules capacity, suitable for testing metals, plastics, and composites across industries.",
      description:"The FIE Auto Impact 30 Impact Testing Machine is a robust solution for assessing material toughness with a capacity of 300 Joules. Its key parameters include a pendulum capacity of 300 Joules and a test height of 0-500 mm",
      image:"/public/material/IMG_1614.JPG",
    },
    {
      name:"Thermal Imager (KT -400)",
      brief:"The Sonel KT400 Thermal Imager is a versatile tool with a temperature range from -20°C to 400°C, offering high-resolution thermal imaging for predictive maintenance and quality control across various industries.",
      description:"The Sonel KT400 is a versatile thermal imaging camera, featuring a temperature range of -20°C to 400°C, with a resolution of 384 x 288 pixels and a thermal sensitivity of 0.08°C. It's perfect for detecting anomalies in electrical, mechanical, and building inspections, aiding in predictive maintenance and quality control.",
      image:"/public/IMG_1695.JPG"
    },
    {
      name:"Sample Preparation Machine",
      brief:"Metatech's sample prep equipment: Autopol Dual II for grinding & polishing, Automount Hot Mounting Press for uniform encapsulation, and Oscicut Sample Cutting for accurate sectioning, offering efficient solutions for metallography and material analysis in diverse industries.",
      description:"Introducing Metatech's cutting-edge sample preparation equipment: the Autopol Dual II for precise grinding and polishing, the Automount Hot Mounting Press for efficient sample mounting, and the Oscicut Sample Cutting machine for accurate sectioning. Essential for metallography and quality control in industries like aerospace and automotive.",
      image:"/public/material/IMG_1631.JPG"
    },
    {
      name:"Salt Spray Testing Chamber (SST/HMI-480)",
      brief:"Salt Spray Corrosion Testing Machine: 1000-liter capacity for precise corrosion resistance evaluation in automotive, aerospace, and marine industries.",
      description:"Introducing the SRI-1000 Salt Spray Corrosion Testing Machine by SRI Equipment: with a 1000-liter capacity and precise temperature/humidity control, ideal for corrosion resistance evaluation in automotive, aerospace, and marine industries. ",
      image:"/public/IMG_1695.JPG"
    },
  ];


  const iiot= [
    {
      name: "Industrial Internet of Things",
      brief:"IIoT in tool rooms enables remote monitoring, boosts productivity, and drives efficient manufacturing.",
      description:
        "IIoT in tool rooms enables remote monitoring and predictive maintenance, optimizing workflows for efficient manufacturing operations. Real-time data collection and connectivity drive reduced downtime and enhanced productivity, facilitating smarter manufacturing processes. ",
      image:"/public/IMG_1695.JPG"
    },
  ];
  
  return (
    <>
      <div
        className="bg-fixed bg-center bg-cover h-screen"
        style={{ backgroundImage: `url('${bgImage.bgImage}')` }}
      >
        <div className="flex items-center justify-center h-full">
          <div className="bg-black bg-opacity-65 text-white p-10 h-[100%] w-[100%] rounded-lg shadow-md text-center">
            <div className="relative w-[100%] h-[100%] ">
              <div className="absolute bg-yellow-300 bg-opacity-35 h-32 bottom-44 w-[30%] left-0">
                <hr className="border-1" />
                <div className="flex flex-col items-center justify-center h-[100%] w-[100%] ">
                  <h1 className="text-4xl font-medium">{bgImage.title}</h1>
                  <div className="flex items-center justify-center gap-1">
                    <h2 className="text-md">{bgImage.desc}</h2>
                    <hr className="transform rotate-90 border-yellow-300 w-4" />
                    <h2 className="text-md">{bgImage.desc2}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Infra  advtoolroom={advtoolroom}/>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Our Center</h1>
        <ul className="list-disc text-left text-black h-96 w-full">
          {data['Advance Tool Room'].map((item) =>{
              <div className='text-black h-96 w-full' key={item.name}>
                harsh
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>;
          })}
        </ul>
      </div>
    </>
  );
}

export default CentreOfExcellence
