const advtoolroom = [
  {
    name: "CNC HMC",
    brief: "Machining of engine blocks, cylinders, and housings with precision and efficiency.",
    description: "HMC (Horizontal Machining Center) with a horizontal spindle, automatic indexing rotary, and 3 to 5 motion coordinates. It features three linear motion coordinates plus one rotary motion coordinate, ensuring precise and efficient machining operations.",
    image: "https://ucarecdn.com/96824a7e-4f71-404b-acf9-6c46d7243eb1/-/preview/1000x666/"
  },
  {
    name: "CNC VMC",
    brief: "Milling, drilling, shaping, cutting, tapping, and boring with high precision and accuracy.",
    description: "VMC (Vertical Machining Center) with the spindle axis perpendicular to the worktable. It handles milling, boring, drilling, tapping, and cutting threads with three-axis and two-linkage capabilities, offering versatility and precision in machining tasks.",
    image: "https://ucarecdn.com/8b6005d3-b9c1-4c5b-876c-a38df9e70be2/-/preview/1000x666/"
  },
  {
    name: "CNC Turn Mill",
    brief: "Advanced milling, drilling, tapping, and turning capabilities for various applications.",
    description: "CNC turning centers with advanced numerical control and 3 to 5 axes. They offer a multitude of cutting capabilities, including milling, drilling, tapping, and turning. These centers provide high precision and efficiency for various machining tasks.",
    image: "https://ucarecdn.com/42287580-35c6-460a-a72b-57141a2025db/-/preview/1000x666/"
  },
  {
    name: "EDM Wirecut & Wire Drill",
    brief: "Precise cutting of profiles on various metals and alloys with high accuracy.",
    description: "Wire EDM uses a thin, electrically charged wire with dielectric fluid to cut metal parts into various shapes. It produces precise cuts by melting or vaporizing the material. This method is ideal for complex profiles and high-precision applications in manufacturing.",
    image: "https://ucarecdn.com/c7521c13-5cce-40be-8b47-fff0f1983e3a/-/preview/666x1000/"
  },
  {
    name: "CNC Laser Cutting",
    brief: "High-accuracy laser cutting, engraving, and inscribing for detailed work.",
    description: "CNC laser cutting machines use a high-power laser beam to cut intricate shapes and minute holes with high accuracy. Ideal for detailed and precise work. This technology ensures minimal material waste, making it suitable for various applications.",
    image: "https://ucarecdn.com/b8dc0d38-867f-4d05-853e-57aea0e50eab/-/preview/1000x666/"
  },
  {
    name: "CNC Abrasive Water Jet Cutting",
    brief: "Versatile cutting of thick materials with high precision and speed.",
    description: "CNC waterjet cutting uses a high-pressure water stream, with or without abrasive, to cut through various materials. It maintains high accuracy and speed for diverse projects, allowing for precise cuts on thick materials and complex shapes, enhancing manufacturing efficiency.",
    image: "https://ucarecdn.com/1cff8c49-62ab-4ee7-bcaf-8abd674cf366/-/preview/1000x666/"
  },
  {
    name: "Double Column Band Saw",
    brief: "Cutting solid rods and hollow pipes in various shapes with precision.",
    description: "Specialized for cutting materials like Inconel, Hastelloy, Titanium, Stainless Steel, and mild steel. Ensures precision for materials with high solidity and hardness. It is designed to handle tough and durable materials efficiently, meeting various industry requirements.",
    image: "https://ucarecdn.com/2f6f908d-89f3-465b-bc8d-35e5d99babf2/-/preview/1000x666/"
  },
  {
    name: "CNC Hydraulic Press Brake",
    brief: "Precision bending for automotive, aerospace, and metal industries applications.",
    description: "It offers precise bending for up to 10 mm thick sheets, ensuring accuracy for automotive, aerospace, and metal fabrication industries. This machine combines strength and precision for high-quality results in various applications.",
    image: "https://ucarecdn.com/ba2c2ef9-730a-4236-86c9-50e9841124c2/-/preview/1000x666/"
  },
  {
    name: "CNC 5-Axis Machining Center",
    brief: "Complex manufacturing with advanced CNC controls and precision for diverse industries.",
    description: "It allows processing of parts in multiple directions with X, Y, Z linear axes and A, B rotational axes, enabling complex manufacturing in aerospace, automotive, and medical industries. It provides unmatched versatility and precision for various applications.",
    image: "https://ucarecdn.com/fd9a0a03-1110-412a-b7cc-d52149c9311f/-/preview/432x369/"
  }
];

const rnd = [
  {
    name: "Metal 3D Printer (SLM 280)",
    brief: "Additive manufacturing for aerospace, automotive, and medical industries applications.",
    description: "The SLM 280 features precise additive manufacturing for aluminum, titanium, stainless steel, and cobalt-chromium alloys, suitable for aerospace, automotive, medical, and tooling applications. This machine ensures high-quality and precise metal parts, enhancing production capabilities.",
    image: "https://ucarecdn.com/128b6d98-c469-4dec-b87b-1f86ed0c2e9d/-/preview/1000x666/"
  },
  {
    name: "Post-Processing",
    brief: "Enhancing finishes and controlled heating for diverse industry needs and applications.",
    description: "Sand blasting improves surface roughness, hot air ovens offer precise drying, and inert gas muffle furnaces provide controlled heating for sintering and heat treatment up to 1200°C. These processes ensure high-quality finishes and optimal material properties, catering to various industry requirements.",
    image: "https://ucarecdn.com/8280ed37-3b8b-4a67-b913-516a2eaa4aa8/-/preview/1000x666/"
  }
];

const material = [
  {
    name: "Universal Testing Machine (UTES HGFL TS)",
    brief: "The FIE UTES HGFL TS Universal Testing Machine offers a robust 1000 kN capacity for precise material testing.",
    description: "The FIE UTM UTES HGFL TS: a robust 1000 kN Universal Testing Machine with digital extensometers for precise measurements. Ideal for tensile, compression, and flexural testing in construction, manufacturing, and research, delivering reliable results for material characterization.",
    image: "https://ucarecdn.com/648ebbc0-629a-4549-b581-c0a54a9857f0/-/preview/306x400/"
  },
  {
    name: "Fatigue Testing",
    brief: "Fatigue tests measure reduction in material stiffness and strength under repeated loading.",
    description: "The FIE Pro-200 Fatigue Testing Machine offers a high-performance solution with a maximum load capacity of 200 kN. Its versatility in cyclic testing, including adjustable frequency and amplitude, makes it ideal for evaluating material fatigue in automotive, aerospace, and structural engineering applications.",
    image: "https://ucarecdn.com/4188117c-6edd-4971-8b43-5135befca028/-/preview/979x1000/"
  },
  {
    name: "Impact Testing Machine (IT 30 AUTO)",
    brief: "The Impact Testing Machine offers robust material toughness assessment with a 300 Joules capacity.",
    description: "Resistance of a metal to impacts is evaluated in terms of impact strength. A metal may possess satisfactory ductility under static loads but may fail under dynamic loads or impact. The impact strength of a metal is determined by measuring the energy absorbed in the fracture.",
    image: "https://ucarecdn.com/5a16d0b4-d73c-46f0-ab94-0cb6ae7200b4/-/preview/1000x666/"
  },
  {
    name: "Micro-Vickers Hardness",
    brief: "Provides comprehensive hardness testing machines for accurate and reliable results across industries.",
    description: "Hardness Test is defined as the resistance to indentation, and it is determined by measuring the permanent depth of the indentation. The Vickers method is based on an optical measurement system. It specifies a range of light loads to make an indentation which is measured and converted to a hardness value.",
    image: "https://ucarecdn.com/4a1209c2-8082-407d-8c4c-2f9f76725daa/-/preview/666x1000/"
  },
  {
    name: "Brinell Hardness",
    brief: "Provides comprehensive hardness testing machines for accurate and reliable results across industries.",
    description: "Hardness Test is defined as the resistance to indentation, and it is determined by measuring the permanent depth of the indentation. It applies a predetermined test load to a carbide ball of fixed diameter. It is measured with a 2.5, 5, or 10mm diameter indenter with measuring force ranges from 62.5kg to 3000kg.",
    image: "https://ucarecdn.com/8a888da9-7d15-4cc8-978d-53671d6d0dd9/-/preview/666x1000/"
  },
  {
    name: "Rockwell Hardness",
    brief: "Hardness Test is defined as the resistance to indentation, determined by measuring the permanent depth.",
    description: "The Rockwell method measures the permanent depth of indentation produced by a force/load on an indenter. First, a preload or minor test force is applied to a sample using a diamond or ball indenter. Then the baseline depth of indentation is measured The Rockwell hardness value is then determined.",
    image: "https://ucarecdn.com/c0b09aab-7c40-4443-8162-7fa246eff319/-/preview/666x1000/"
  },
  {
    name: "Optical Emission Spectrometer (OES)",
    brief: "Precision-engineered OES analyzer delivering rapid, reliable multi-element analysis for quality standards.",
    description: "The SPECTROMAXxLMX10 provides precise elemental analysis for metals like Iron & Steel, Aluminium, Copper, and Nickel alloys. With advanced optics and user-friendly software, it's a top choice for quality control in foundries and metal processing, ensuring reliable results with outstanding repeatability.",
    image: "https://ucarecdn.com/934c0ff8-33a3-4ca3-8637-4fbad2c5ff1e/-/preview/1000x666/"
  },
  {
    name: "Digital Microscope (Smart zoom 5)",
    brief: "Fully automated digital microscope offering high-quality, reproducible QA/QC measurements.",
    description: "The digital microscope uses optics and a digital camera to output an image to a monitor, sometimes by means of software running on a computer. It offers versatile magnification options and advanced imaging capabilities, making it ideal for various industries.",
    image: "https://ucarecdn.com/86f419bf-3dd1-44d9-bf5f-1ee14529e30c/-/preview/1000x666/"
  },
  {
    name: "Metallurgical Microscope (Stand Axio Observer 7)",
    brief: "It is for precise metal analysis and material characterization.",
    description: "The Axio Observer 7 by ZEISS is a fully motorized inverted microscope for metals, offering reliable results with five objective options (50X-1000X), advanced features like Extended Depth of Field (EDF), and dedicated software modules for precise analysis of metallic materials. It is ideal for detailed and accurate metal analysis and characterization.",
    image: "https://ucarecdn.com/86f419bf-3dd1-44d9-bf5f-1ee14529e30c/-/preview/1000x666/"
  },
  {
    name: "Salt Spray Testing Chamber (SST/HMI-480)",
    brief: "Salt Spray Corrosion Testing Machine: 1000-liter capacity for precise corrosion resistance evaluation.",
    description: "A Salt Spray Testing Chamber is used to evaluate the corrosion resistance of materials and coatings by exposing them to a saline fog environment. It is crucial for assessing the durability and lifespan of materials in automotive, aerospace, and marine industries.",
    image: "https://ucarecdn.com/69f6705f-5323-4865-aed3-f49ae19d92e9/-/preview/476x300/"
  },
  {
    name: "Sample Preparation Machine",
    brief: "Metatech's sample prep equipment: Autopol Dual II, Automount Hot Mounting Press, and Oscicut Sample Cutting.",
    description: "Abrasive Cutting, Hot Mounting, Specimen Grinding & Polishing - These processes are essential for preparing samples for further analysis and testing. Metatech's equipment ensures uniform encapsulation and accurate sectioning for efficient metallography and material analysis in diverse industries.",
    image: "https://ucarecdn.com/5744a99b-bb39-4e0e-89ce-500d8b740f5e/-/preview/1000x666/"
  },
  {
    name: "Thermal Imager (KT -400)",
    brief: "The Sonel KT400 Thermal Imager offers high-resolution imaging for predictive maintenance and quality control.",
    description: "The Sonel KT400 Thermal Imager is a versatile tool with a temperature range from -20°C to 400°C, offering high-resolution thermal imaging for predictive maintenance and quality control. It's perfect for detecting anomalies in electrical, mechanical, and building inspections.",
    image: "https://ucarecdn.com/ec0fd5cb-376f-4b3d-8a32-fe25c104c2a7/-/preview/207x264/"
  }
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