const advtoolroom = [
  {
    name: "CNC HMC",
    brief:"Engine block, Cylinder, and housing of different component machining.",
    description:
    "HMC( horizontal machining center )with a horizontal spindle. It has an automatic indexing rotary and 3 to 5 motion coordinates. The machine is having three linear motion coordinates plus one rotary motion coordinate.",
    image:""
  },
  {
    name: "CNC VMC",
    brief:"All types of Die and mould machining, Drilling, Shaping, Cutting, Tapping, Boring on any component",
    description:
    "VMC(vertical machining center)with the spindle axis perpendicular to the worktable. It can complete the processes of milling, boring, drilling, tapping and cutting threads. The VMC is having three-axis and two-linkage",
    image:"https://ucarecdn.com/8b6005d3-b9c1-4c5b-876c-a38df9e70be2/-/preview/1000x666/"
  },
  {
    name:"CNC Turn Mill ",
    brief:" Milling, Drilling, Tapping, and ofcourse, Turning",
    description:"CNC turning centres are advanced computer numerically controlled machines. Which have 3, 4, or even 5 axes, along with a multitude of cutting capabilities, including milling, drilling, tapping, and ofcourse, turning.",
    image:"https://ucarecdn.com/42287580-35c6-460a-a72b-57141a2025db/-/preview/1000x666/"
  },
  {
    name: "EDM Wirecut & Wire drill",
    brief:"Cutting of any type of profile on any metal and alloys.",
    description:
      "Wire electrical discharge machining is a non-contact subtractive manufacturing process that uses an electrically charged thin wire with a dielectric fluid to cut a metal part into different shapes. The process produces small chips and precise cut lines by melting or vaporizing the material rather than cutting it.",
    image:'https://ucarecdn.com/c7521c13-5cce-40be-8b47-fff0f1983e3a/-/preview/666x1000/'
    
  },
  {
    name:"CNC Laser Cutting",
     brief:"Focused high-power laser beam is used to cut, inscribe, or engrave a metal surface to get the desired shapes.",
     description:"They are specially used to cut intricate shapes and minute holes with a high level of accuracy.",
     image:"https://ucarecdn.com/b8dc0d38-867f-4d05-853e-57aea0e50eab/-/preview/1000x666/"
  },
  {
    name:"CNC Abrasive Water Jet Cutting",
    brief:"The An Innovative 3015 B Water Jet Cutting machine offers precise, versatile cutting for materials up to 200 mm thick, with a 3000 x 1500 mm area and 15 m/min speed.",
    description:"A CNC waterjet cutting machine swiftly and accurately cuts through metal, plastic, and other materials using high-pressure water. Abrasive material can be added to enhance speed while maintaining precision in the cutting process.",
    image:"https://ucarecdn.com/1cff8c49-62ab-4ee7-bcaf-8abd674cf366/-/preview/1000x666/"
  },
  { 
    name: "Double Column Band Saw",
    brief:"cutting of solid rod,  hollow pipe, in round and square cross section. ",
    description:
      "Focused to cut materials which are difficult to machine, such as Inconel, Hastelloy, Titanium, Stainless Steel, etc., as well as any mild steel, taking into account the needs of solidity and hardness for the cut of this kind of materials",
     image:"https://ucarecdn.com/2f6f908d-89f3-465b-bc8d-35e5d99babf2/-/preview/1000x666/"
  },
  {
    name:"CNC Hydraulic Press Brake",
    brief:"The Hindustan Hydraulic CNC Bending Swift 100-31 is a high-precision machine with a 3200 mm length, 100-ton force, and 10 mm/s speed for versatile bending in various industries.",
    description:"The Hindustan Hydraulic CNC Bending Swift 100-31 offers efficient, precise bending with a 3200 mm length, 100-ton force, and 10 mm/s speed. It handles up to 10 mm thick sheets, ensuring accuracy and repeatability for automotive, aerospace, and metal fabrication applications.",
    image:"https://ucarecdn.com/ba2c2ef9-730a-4236-86c9-50e9841124c2/-/preview/1000x666/"
  },  
  {
    name:"CNC 5-Axis Machining center ",
    brief:"The CNC 5-Axis C600 is a high-precision machining center with a 600 mm table, 12,000 RPM spindle, and advanced CNC controls for complex manufacturing in aerospace, automotive, and medical industries.",
    description:"The Mazak CNC 5-Axis C600 features simultaneous five-axis machining, a 12,000 RPM spindle, and a 600 mm table. Ideal for aerospace, automotive, and medical industries, it offers high precision, versatility, and productivity for complex tasks.",
    image:"https://ucarecdn.com/fd9a0a03-1110-412a-b7cc-d52149c9311f/-/preview/432x369/"
  }
];

const rnd =[
  {
   name:"Metal 3d printer (SLM 280)",
   brief:"The SLM 280 Single Laser Machine is an advanced additive manufacturing system with a 280 x 280 x 365 mm build envelope and 400W fiber laser, ideal for precise metal powder melting in various industries.",
   description:"The SLM 280 Single Laser Machine features a 280 x 280 x 365 mm build envelope and 400W fiber laser for precise additive manufacturing. It processes aluminum, titanium, stainless steel, and cobalt-chromium alloys, perfect for aerospace, automotive, medical, and tooling applications.",
   image:"https://ucarecdn.com/128b6d98-c469-4dec-b87b-1f86ed0c2e9d/-/preview/1000x666/"
  },
  {
    name:"Post-processing",
    brief:"Sand blasting, hot air ovens, and inert gas muffle furnaces enhance post-processing in additive manufacturing, offering precise finishes and controlled heating for diverse industries.",
    description:"Sand blasting enhances surface roughness, while the hot air oven dries metal powder with precise temperature control up to 200°C. The Inert Gas Muffle Furnace provides controlled heating up to 1200°C in an inert atmosphere, ideal for sintering and heat treatment. These machines cater to diverse industry needs with their reliability and efficiency in post-processing for additive manufacturing.",
    image:"https://ucarecdn.com/8280ed37-3b8b-4a67-b913-516a2eaa4aa8/-/preview/1000x666/"
  },
  
];


const material=[
  {
    name:"Universal Testing Machine (UTES HGFL TS)",
    brief:"The FIE UTES HGFL TS Universal Testing Machine offers a robust 1000 kN capacity with digital extensometers for precise material testing in various industries.",
    description:"Introducing the FIE UTM UTES HGFL TS: a robust 1000 kN Universal Testing Machine with digital extensometers for precise measurements. Ideal for tensile, compression, and flexural testing in construction, manufacturing, and research, delivering reliable results for material characterization.",
    image:"https://ucarecdn.com/648ebbc0-629a-4549-b581-c0a54a9857f0/-/preview/306x400/"
  },
  {
    name:"Fatigue Testing.",
    brief:"Fatigue tests are performed to measure the reduction in stiffness and strength of materials under repeated loading and to determine the total number of load cycles to failure. ",
    description:"The FIE Pro-200 Fatigue Testing Machine offers a high-performance solution with a maximum load capacity of 200 kN. Its versatility in cyclic testing, including adjustable frequency and amplitude, makes it ideal for evaluating material fatigue in automotive, aerospace, and structural engineering applications.",
    image:"https://ucarecdn.com/4188117c-6edd-4971-8b43-5135befca028/-/preview/979x1000/"
  },
  {
    name:"Impact Testing Machine (IT 30 AUTO)",
    brief:"The Impact Testing Machine offers robust material toughness assessment with a 300 Joules capacity, suitable for testing metals, plastics, and composites across industries.",
    description:"Resistance of a metal to impacts is evaluated in terms of impact strength. A metal may possess satisfactory ductility under static loads but may fail under dynamic loads or impact. The impact strength of a metal is determined by measuring the energy absorbed in the fracture",
    image:"https://ucarecdn.com/5a16d0b4-d73c-46f0-ab94-0cb6ae7200b4/-/preview/1000x666/",
  },
  {
    name:"Micro-Vickers Hardness",
    brief:"It provides a comprehensive range of hardness testing machines for accurate and reliable results across various industries.",
    description:"Hardness Test is defined as the resistance to indentation, and it is determined by measuring the permanent depth of the indentation. The Vickers method is based on an optical measurement system. it specifies a range of light loads using a diamond indenter to make an indentation which is measured and converted to a hardness value",
    image:"https://ucarecdn.com/4a1209c2-8082-407d-8c4c-2f9f76725daa/-/preview/666x1000/"
  },
  {
    name:"Brinell Hardness",
    brief:"It provides a comprehensive range of hardness testing machines for accurate and reliable results across various industries.",
    description:"Hardness Test is defined as the resistance to indentation, and it is determined by measuring the permanent depth of the indentation. The Brinell method applies a predetermined test load to a carbide ball of fixed diameter which is held for a predetermined time period and then removed. The resulting impression is measured with a specially designed Brinell microscope or optical system across at least two diameters. Brinell hardness is measured by 2.5, 5 or 10mm diameter indentor with measuring force ranges from 62.5kg to 3000kg.",
    image:"https://ucarecdn.com/8a888da9-7d15-4cc8-978d-53671d6d0dd9/-/preview/666x1000/"
  },
  {
    name:"Rockwell Hardness",
    brief:"Hardness Test is defined as the resistance to indentation, and it is determined by measuring the permanent depth of the indentation.",
    description:"The Rockwell method measures the permanent depth of indentation produced by a force/load on an indenter. First, a preload or minor test force is applied to a sample using a diamond or ball indenter. After holding the preliminary test force for a specified dwell time, the baseline depth of indentation is measured. After the preload, an additional load, call the major load, is added to reach the total required test load. The Rockwell hardness value",
    image:"https://ucarecdn.com/c0b09aab-7c40-4443-8162-7fa246eff319/-/preview/666x1000/"
  },
  {
    name:"Optical Emission Spectrometer (OES)",
    brief:"Precision-engineered OES analyzer delivering rapid, reliable multi-element analysis for stringent quality standards in metal processing.",
    description:"The SPECTROMAXxLMX10 provides precise elemental analysis for metals like Iron & Steel, Aluminium, Copper, and Nickel alloys. With advanced optics and user-friendly software, it's a top choice for quality control in foundries and metal processing, ensuring reliable results with outstanding repeatability.",
    image:"https://ucarecdn.com/934c0ff8-33a3-4ca3-8637-4fbad2c5ff1e/-/preview/1000x666/"
    
  },
  {
     name:"Digital Microscope (Smart zoom 5)",
     brief:"Fully automated digital microscope offering high-quality, reproducible QA/QC measurements across industries with versatile magnification options and advanced imaging capabilities.",
     description:"The digital microscope uses optics and a digital camera to output an image to a monitor, sometimes by means of software running on a computer.",
     image:"https://ucarecdn.com/86f419bf-3dd1-44d9-bf5f-1ee14529e30c/-/preview/1000x666/"
    },
    {
      name:"Metallurgical Microscope (Stand Axio Observer 7)",
      brief:"Advanced inverted microscope with ZEISS optics, motorized components, and dedicated software for precise metal analysis and material characterization.",
      description:"The Axio Observer 7 by ZEISS is a fully motorized inverted microscope for metals, offering reliable results with five objective options (50X-1000X), advanced features like Extended Depth of Field (EDF), and dedicated software modules for precise analysis of metallic materials.",
      image:"https://ucarecdn.com/86f419bf-3dd1-44d9-bf5f-1ee14529e30c/-/preview/1000x666/"
    },
  {
    name:"Salt Spray Testing Chamber (SST/HMI-480)",
    brief:"Salt Spray Corrosion Testing Machine: 1000-liter capacity for precise corrosion resistance evaluation in automotive, aerospace, and marine industries.",
    description:"A Salt Spray Testing Chamber is used to evaluate the corrosion resistance of materials and coatings by exposing them to a saline fog environment.",
    image:"https://ucarecdn.com/69f6705f-5323-4865-aed3-f49ae19d92e9/-/preview/476x300/"
  },
  {
    name:"Sample Preparation Machine",
    brief:"Metatech's sample prep equipment: Autopol Dual II for grinding & polishing, Automount Hot Mounting Press for uniform encapsulation, and Oscicut Sample Cutting for accurate sectioning, offering efficient solutions for metallography and material analysis in diverse industries.",
    description:"Abrasive Cutting, Hot Mounting, Specimen Grinding & Polishing - These processes are essential for preparing samples for further analysis and testing.",
    image:"https://ucarecdn.com/5744a99b-bb39-4e0e-89ce-500d8b740f5e/-/preview/1000x666/"
  },
  {
    name:"Thermal Imager (KT -400)",
    brief:"The Sonel KT400 Thermal Imager is a versatile tool with a temperature range from -20°C to 400°C, offering high-resolution thermal imaging for predictive maintenance and quality control across various industries.",
    description:"It's perfect for detecting anomalies in electrical, mechanical, and building inspections, aiding in predictive maintenance and quality control.",
    image:"https://ucarecdn.com/ec0fd5cb-376f-4b3d-8a32-fe25c104c2a7/-/preview/207x264/"
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


export { advtoolroom, rnd, material, iiot };