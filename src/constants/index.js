const advtoolroom = [
  {
    name: "CNC HMC",
    brief: "Machining of engine blocks, cylinders, and housings with precision and efficiency.",
    description: "HMC (Horizontal Machining Center) with a horizontal spindle, automatic indexing rotary, and 3 to 5 motion coordinates. It features three linear motion coordinates plus one rotary motion coordinate, ensuring precise and efficient machining operations.",
    image: "https://ucarecdn.com/80653ba2-2ff6-4519-9aa4-3e0c90f27fda/-/preview/1000x666/"
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
    name: "EDM Wirecut",
    brief: "Precise cutting of profiles on various metals and alloys with high accuracy.",
    description: "Wire EDM uses a thin, electrically charged wire with dielectric fluid to cut metal parts into various shapes. It produces precise cuts by melting or vaporizing the material. This method is ideal for complex profiles and high-precision applications in manufacturing.",
    image: "https://ucarecdn.com/484a66cb-a86c-4de6-8fe2-59ab540cd97c/-/preview/1000x666/"
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
    image: "https://ucarecdn.com/b76187be-0f0e-4737-b0c4-0a46c11cd1a8/-/crop/5184x2495/0,0/-/preview/3000x3000/"
  },
  {
    name: "CNC Hydraulic Press Brake",
    brief: "Precision bending for automotive, aerospace, and metal industries applications.",
    description: "It offers precise bending for up to 10 mm thick sheets, ensuring accuracy for automotive, aerospace, and metal fabrication industries. This machine combines strength and precision for high-quality results in various applications.",
    image: "https://ucarecdn.com/dccbc714-ddc1-4486-a540-cb277b987076/-/crop/4425x2158/472,169/-/preview/3000x3000/"
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
    brief: "The FIE UTES HGFL TS Universal Testing Machine offers a robust 1000 kN capacity for material testing.",
    description: "The FIE UTM UTES HGFL TS: a robust 1000 kN Universal Testing Machine with digital extensometers for precise measurements. Ideal for tensile, compression, and flexural testing in construction, manufacturing, and research, delivering reliable results for material characterization.",
    image: "https://ucarecdn.com/21720c1c-615d-4bf0-83d1-7f26a113faad/-/crop/5184x2411/0,0/-/preview/3000x3000/"
  },
  {
    name: "Fatigue Testing",
    brief: "Fatigue tests measure fatigue life of material under cyclic loading reduction. ",
    description: "The FIE Pro-200 Fatigue Testing Machine offers a high-performance solution with a maximum load capacity of 200 kN. Its versatility in cyclic testing, including adjustable frequency and amplitude, makes it ideal for evaluating material fatigue in automotive, aerospace, and structural engineering applications.",
    image: "https://ucarecdn.com/38dd0fe0-429e-4186-ba25-6036d9290c72/-/preview/1000x666/"
  },
  {
    name: "Impact Testing Machine (IT 30 AUTO)",
    brief: "The Impact Testing Machine offers robust material toughness assessment with a 300 Joules capacity.",
    description: "Resistance of a metal to impacts is evaluated in terms of impact strength. A metal may possess satisfactory ductility under static loads but may fail under dynamic loads or impact. The impact strength of a metal is determined by measuring the energy absorbed in the fracture.",
    image: "https://ucarecdn.com/5a16d0b4-d73c-46f0-ab94-0cb6ae7200b4/-/preview/1000x666/"
  },
  {
    name: "Micro-Vickers Hardness",
    brief: "Standard test method for micro dentation harness (10gf to 1000gf) of all the metals and care depth hardness.",
    description: "Hardness Test is defined as the resistance to indentation, and it is determined by measuring the permanent depth of the indentation. The Vickers method is based on an optical measurement system. It specifies a range of light loads to make an indentation which is measured and converted to a hardness value.",
    image: "https://ucarecdn.com/725407b0-f661-4529-9b5e-797432131f2c/-/crop/1988x974/0,0/-/preview/3000x3000/"
  },
  {
    name: "Brinell Hardness",
    brief: "Provides comprehensive hardness testing machines for accurate and reliable results across industries.",
    description: "Hardness Test is defined as the resistance to indentation, and it is determined by measuring the permanent depth of the indentation. It applies a predetermined test load to a carbide ball of fixed diameter. It is measured with a 2.5, 5, or 10mm diameter indenter with measuring force ranges from 62.5kg to 3000kg.",
    image: "https://ucarecdn.com/b696a1c9-6fb3-48b9-9d52-24c4924ea986/-/crop/3300x1826/0,0/-/preview/3000x3000/"
  },
  {
    name: "Rockwell Hardness",
    brief: "Hardness Test is defined as the resistance to indentation, determined by measuring the permanent depth.",
    description: "The Rockwell method measures the permanent depth of indentation produced by a force/load on an indenter. First, a preload or minor test force is applied to a sample using a diamond or ball indenter. Then the baseline depth of indentation is measured The Rockwell hardness value is then determined.",
    image: "https://ucarecdn.com/e3592224-96a7-46c2-b49a-ada2575bd226/-/preview/1000x745/"
  },
  {
    name: "Optical Emission Spectrometer (OES)",
    brief: "Precision-engineered OES analyzer delivering rapid, reliable multi-element analysis for quality standards.",
    description: "The SPECTROMAXxLMX110 provides precise elemental analysis for metals like Iron & Steel, Aluminium, Copper, and Nickel alloys. With advanced optics and user-friendly software, it's a top choice for quality control in foundries and metal processing, ensuring reliable results with outstanding repeatability.",
    image: "https://ucarecdn.com/36b464fc-d2a1-4af6-9b62-bf7177d96f9c/-/preview/1000x491/"
  },
  {
    name: "Digital Microscope (Smart zoom 5)",
    brief: "Fully automated digital microscope offering high-quality, reproducible QA/QC measurements.",
    description: "The digital microscope uses optics and a digital camera to output an image to a monitor, sometimes by means of software running on a computer. It offers versatile magnification options and advanced imaging capabilities, making it ideal for various industries.",
    image: "https://ucarecdn.com/fa1566a3-fa0b-41a8-886e-74bebd379652/-/crop/6000x3122/0,624/-/preview/3000x3000/"
  },
  {
    name: "Metallurgical Microscope (Stand Axio Observer 7)",
    brief: "It is for precise metal analysis and material characterization.",
    description: "The Axio Observer 7 by ZEISS is a fully motorized inverted microscope for metals, offering reliable results with five objective options (50X-1000X), advanced features like Extended Depth of Field (EDF), and dedicated software modules for precise analysis of metallic materials. It is ideal for detailed and accurate metal analysis and characterization.",
    image: "https://ucarecdn.com/61860924-bf4e-4bd8-9dd6-7b32c375baa0/-/crop/6000x2644/0,790/-/preview/3000x3000/"
  },
  {
    name: "Salt Spray Testing Chamber (SST/HMI-1000)",
    brief: "Salt Spray Corrosion Testing Machine: 1000-liter capacity for corrosion resistance evaluation.",
    description: "A Salt Spray Testing Chamber is used to evaluate the corrosion resistance of materials and coatings by exposing them to a saline fog environment. It is crucial for assessing the durability and lifespan of materials in automotive, aerospace, and marine industries.",
    image: "https://ucarecdn.com/255c369b-4655-4c98-b03c-39cbe51a39c6/-/preview/1000x666/"
  },
  {
    name: "Sample Preparation Machine",
    brief: "Metatech's sample preparation equipment: Autopol Dual II, Automount Hot Mounting Press, and Oscicut abrasive cutter Sample Cutting.",
    description: "Abrasive Cutting, Hot Mounting, Specimen Grinding & Polishing - These processes are essential for preparing samples for further analysis and testing. Metatech's equipment ensures uniform encapsulation and accurate sectioning for efficient metallography and material analysis in diverse industries.",
    image: "https://ucarecdn.com/5744a99b-bb39-4e0e-89ce-500d8b740f5e/-/preview/1000x666/"
  },
  {
    name: "Thermal Imager (KT -400)",
    brief: "The Sonel KT400 Thermal Imager offers high-resolution imaging for contactless temperature maintenance.",
    description: "The Sonel KT400 Thermal Imager is a versatile tool with a temperature range from -20°C to 650°C, offering high-resolution thermal imaging for predictive maintenance and quality control. It's perfect for detecting anomalies in electrical, mechanical, and building inspections.",
    image: "https://ucarecdn.com/b5940b1e-5f2f-4dd0-8b17-e9e17240be85/-/crop/5184x2369/0,506/-/preview/3000x3000/"
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