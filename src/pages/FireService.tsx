import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";
import f5 from "../assets/f5.jpg";
import f6 from "../assets/f6.jpg";
import f7 from "../assets/f7.jpg";
import f8 from "../assets/f8.jpg";
import f9 from "../assets/f9.jpg";
import f10 from "../assets/f10.jpg";
import f11 from "../assets/f11.jpg";
import f12 from "../assets/f12.jpg";
import f13 from "../assets/f13.jpg";
import f14 from "../assets/f14.jpg";
import f15 from "../assets/f15.jpg";
import f16 from "../assets/f16.jpg";
import f17 from "../assets/f17.jpg";
import f18 from "../assets/f18.jpg";
import f19 from "../assets/f19.jpg";
import f20 from "../assets/f20.jpg";
import f21 from "../assets/f21.jpg";
import f22 from "../assets/f22.jpg";
import f23 from "../assets/f23.jpg";
import f24 from "../assets/f24.jpg";
import f25 from "../assets/f25.jpg";
import f26 from "../assets/f26.jpg";
import f27 from "../assets/f27.jpg";
import f28 from "../assets/f28.jpg";
import f29 from "../assets/f29.jpg";
import f30 from "../assets/f30.jpg";
import f31 from "../assets/f31.jpg";
import f32 from "../assets/f32.jpg";
import f33 from "../assets/f33.jpg";
import f34 from "../assets/f34.jpg";
import f35 from "../assets/f35.jpg";
import f36 from "../assets/f36.jpg";
import f37 from "../assets/f37.jpg";
import f38 from "../assets/f38.jpg";
import f39 from "../assets/f39.jpg";
import f40 from "../assets/f40.jpg";
import f41 from "../assets/f41.jpg";
import f42 from "../assets/f42.jpg";
import f43 from "../assets/f43.jpg";
import f44 from "../assets/f44.jpg";
import f45 from "../assets/f45.jpg";
import f46 from "../assets/f46.jpg";
import f47 from "../assets/f47.jpg";

interface FireItem {
  id: number;
  image: string;
  title: string;
  cardDescription?: string;
  description: string;
}

const imgs: Record<number, string> = {
  1: f1,
  2: f2,
  3: f3,
  4: f4,
  5: f5,
  6: f6,
  7: f7,
  8: f8,
  9: f9,
  10: f10,
  11: f11,
  12: f12,
  13: f13,
  14: f14,
  15: f15,
  16: f16,
  17: f17,
  18: f18,
  19: f19,
  20: f20,
  21: f21,
  22: f22,
  23: f23,
  24: f24,
  25: f25,
  26: f26,
  27: f27,
  28: f28,
  29: f29,
  30: f30,
  31: f31,
  32: f32,
  33: f33,
  34: f34,
  35: f35,
  36: f36,
  37: f37,
  38: f38,
  39: f39,
  40: f40,
  41: f41,
  42: f42,
  43: f43,
  44: f44,
  45: f45,
  46: f46,
  47: f47,
};

const fireItems: FireItem[] = [
  {
    id: 1,
    image: imgs[1],
    title: "Fire Fighting Equipments",
    description:
      "AVNYA Fire Solutions is a trusted firefighting contractor and fire safety equipment supplier in India, providing complete fire protection solutions for commercial, industrial, residential, healthcare, and educational facilities. We specialize in the supply, installation, testing, and maintenance of fire alarm systems, hydrants, sprinklers, fire extinguishers, smoke detectors, fire suppression systems, fire doors, and PPE. Our experienced team delivers customized, standards-compliant solutions tailored to every client's requirements. Partnering with leading manufacturers, we ensure high-quality, reliable, and cost-effective fire safety systems. From consultation and system design to installation, maintenance, and training, we provide end-to-end fire protection services. With a commitment to quality, innovation, and customer satisfaction, AVNYA Fire Solutions is your trusted partner in safeguarding lives and property.",
  },
  {
    id: 2,
    image: imgs[2],
    title: "Fire Alarm",
    description:
      "AVNYA Fire Solutions provides advanced fire alarm systems and complete fire detection solutions for residential, commercial, industrial, and institutional properties across India. We specialize in the supply, installation, maintenance, and AMC services for addressable, conventional, and wireless fire alarm systems, along with fire alarm panels, smoke detectors, heat detectors, manual call points, and hooters. Partnering with leading brands, we deliver reliable, standards-compliant systems tailored to your safety requirements. Our experienced team ensures professional installation, regular maintenance, and prompt support for maximum protection. With a commitment to quality, innovation, and customer satisfaction, AVNYA Fire Solutions is your trusted partner for dependable fire alarm and life safety solutions",
  },
  {
    id: 3,
    image: imgs[3],
    title: "Fire Hydrant System",
    description:
      "AVNYA Fire Solutions is a leading provider of fire hydrant systems in India, offering end-to-end fire protection solutions for commercial, industrial, residential, and institutional properties. We specialize in the design, supply, installation, testing, and maintenance of fire hydrant systems, including hydrant valves, landing valves, pumps, pipes, risers, hose reels, hydrant boxes, hose pipes, and couplings. Our experienced team delivers customized, standards-compliant solutions using high-quality products from trusted manufacturers to ensure reliable fire protection. With competitive pricing, professional installation, and dedicated customer support, AVNYA Fire Solutions is committed to safeguarding lives and property through dependable fire hydrant systems across India",
  },
  {
    id: 4,
    image: imgs[4],
    title: "Fire Extinguisher",
    description:
      "AVNYA Fire Solutions is a trusted manufacturer and supplier of high-quality fire extinguishers in India, offering reliable fire safety solutions for homes, businesses, and industries. We provide a wide range of portable and automatic fire extinguishers designed to combat different types of fires while meeting the highest industry standards. Our products are rigorously tested to ensure maximum performance, reliability, and safety during emergencies. With competitive pricing, expert guidance, and nationwide delivery, we make fire protection accessible and affordable. Our experienced team helps customers choose the right fire extinguisher for their specific requirements. Committed to quality, innovation, and customer satisfaction, AVNYA Fire Solutions is your trusted partner for dependable fire extinguisher solutions across India",
  },
  {
    id: 5,
    image: imgs[5],
    title: "Fire Detection System",
    description:
      "AVNYA Fire Solutions provides advanced fire detection and alarm systems for residential, commercial, industrial, healthcare, educational, and institutional facilities across India. We specialize in the design, supply, installation, testing, and maintenance of fire detection systems, including smoke detectors, heat detectors, fire alarm panels, and automatic fire alarm systems from leading global brands. Our experienced team delivers customized, standards-compliant solutions that ensure early fire detection and reliable emergency response. Through regular inspections, preventive maintenance, and expert support, we keep your fire safety systems operating at peak performance. With a commitment to quality, innovation, and customer satisfaction, AVNYA Fire Solutions is your trusted partner for dependable fire detection and alarm solutions",
  },
  {
    id: 6,
    image: imgs[6],
    title: "Fire Detector",
    description:
      "AVNYA Fire Solutions provides advanced fire detector installation and AMC services across India, delivering reliable fire detection solutions for residential, commercial, and industrial properties. We specialize in the supply, installation, and maintenance of fire detectors, smoke detectors, heat detectors, alarms, sensors, and complete fire detection systems tailored to your safety requirements. Our experienced team ensures professional installation, regular inspections, preventive maintenance, and prompt support to keep your systems operating efficiently. Using high-quality products from trusted manufacturers, we deliver durable, standards-compliant, and cost-effective fire safety solutions. With a commitment to quality, innovation, and customer satisfaction, AVNYA Fire Solutions is your trusted partner for dependable fire detection and maintenance services",
  },
  {
    id: 7,
    image: imgs[7],
    title: "Smoke Detector",
    description:
      "AVNYA Fire Solutions provides advanced smoke detector installation, maintenance, and AMC services across India, ensuring reliable fire safety for residential, commercial, and industrial properties. We supply high-quality smoke detectors from leading brands, delivering accurate early fire detection and dependable performance. Our experienced team offers customized installation, regular inspections, preventive maintenance, and prompt support to keep your fire detection systems operating efficiently. With competitive pricing, trusted products, and standards-compliant solutions, we help safeguard lives and property from fire hazards. Committed to quality, innovation, and customer satisfaction, AVNYA Fire Solutions is your trusted partner for dependable smoke detection solutions",
  },
  {
    id: 8,
    image: imgs[8],
    title: "Fire sprinkler",
    description:
      "AVNYA Fire Solutions provides complete fire sprinkler system installation, maintenance, and AMC services across India for residential, commercial, and industrial properties. We specialize in automatic, concealed, dry, ESFR, foam, pendent, and fire hydrant sprinkler systems designed to deliver reliable fire protection. Our experienced team offers customized, standards-compliant solutions using high-quality products from trusted manufacturers. From system design and installation to regular inspections and preventive maintenance, we ensure optimal performance and long-term reliability. With a commitment to quality, safety, and customer satisfaction, AVNYA Fire Solutions is your trusted partner for dependable fire sprinkler solutions",
  },
  {
    id: 9,
    image: imgs[9],
    title: "Fire Suppression",
    description:
      "AVNYA Fire Solutions provides comprehensive fire suppression solutions across India, ensuring reliable protection for residential, commercial, and industrial properties. We offer a range of suppression systems, including clean-agent, CO2, and foam options, designed to deliver effective fire safety. Our experienced team provides customized installation, regular maintenance, and prompt support to keep your systems operating efficiently. With a commitment to quality, safety, and customer satisfaction, AVNYA Fire Solutions is your trusted partner for dependable fire suppression solutions",
  },
  {
    id: 10,
    image: imgs[10],
    title: "Fire Safety",
    description:
      "AVNYA Fire Solutions provides complete fire safety equipment installation, maintenance, and inspection services across India for residential, commercial, and industrial properties. We offer comprehensive fire protection solutions, including fire extinguishers, fire alarm systems, fire suppression systems, emergency lighting, and other essential fire safety equipment. Our experienced team delivers customized, standards-compliant solutions with professional installation, preventive maintenance, and expert support to ensure maximum safety and reliability. Committed to quality, innovation, and customer satisfaction, AVNYA Fire Solutions is your trusted partner for dependable fire safety systems that safeguard lives and protect property.",
  },
  {
    id: 11,
    image: imgs[11],
    title: "Fire Protection Equipments",
    description:
      "AVNYA Fire Solutions provides complete fire protection equipment and services across India, delivering reliable solutions for residential, commercial, and industrial properties. We specialize in the design, installation, maintenance, and inspection of fire protection systems, including fire alarm systems, fire sprinklers, fire hydrants, fire extinguishers, smoke detection systems, passive fire protection, and fire suppression systems. Our experienced team delivers customized, standards-compliant solutions using high-quality products to ensure maximum safety and regulatory compliance. With a commitment to quality, innovation, and customer satisfaction, AVNYA Fire Solutions is your trusted partner for dependable fire protection solutions that safeguard lives and property",
  },
  {
    id: 12,
    image: imgs[12],
    title: "Fire Door",
    description:
      "AVNYA Fire Solutions provides high-quality fire door solutions across India, offering the supply, installation, and maintenance of fire-rated, fire-resistant, wooden, steel, sliding, glazed, and fire exit doors for residential, commercial, and industrial properties. Our fire doors are engineered to meet the highest safety standards, ensuring reliable fire containment and safe evacuation during emergencies. With expert installation, preventive maintenance, and customized solutions, we help enhance the safety and compliance of your premises. Committed to quality, durability, and customer satisfaction, AVNYA Fire Solutions is your trusted partner for dependable fire door and passive fire protection solutions",
  },
  {
    id: 13,
    image: imgs[13],
    title: "Gas Suppression System",
    description:
      "AVNYA Fire Solutions provides advanced gas suppression system installation, maintenance, and AMC services across India, protecting critical facilities such as server rooms, data centers, electrical rooms, laboratories, hospitals, industrial plants, museums, and telecom facilities. We specialize in clean agent fire suppression systems using NFPA-compliant technologies, ensuring rapid fire suppression without damaging sensitive equipment or valuable assets. Our experienced team delivers customized, standards-compliant solutions with professional installation, preventive maintenance, and ongoing support. With high-quality components, competitive pricing, and a commitment to safety, AVNYA Fire Solutions is your trusted partner for reliable gas suppression and clean agent fire protection systems",
  },
  {
    id: 14,
    image: imgs[14],
    title: "Co2 Fire Suppression System",
    description:
      "AVNYA Fire Solutions provides reliable CO2 fire suppression system installation, maintenance, and AMC services across India for data centers, server rooms, electrical panels, industrial facilities, telecommunication centers, museums, and other critical environments. Our NFPA-compliant CO2 suppression systems are designed to quickly extinguish fires without damaging sensitive equipment or valuable assets. We offer customized system design, professional installation, testing, commissioning, and preventive maintenance to ensure maximum safety and performance. With high-quality components, competitive pricing, and expert technical support, AVNYA Fire Solutions is your trusted partner for dependable CO2 fire suppression solutions that protect lives, infrastructure, and business continuity",
  },
  {
    id: 15,
    image: imgs[15],
    title: "FM 200 Fire Suppression System",
    description:
      "AVNYA Fire Solutions provides advanced FM-200 fire suppression system installation, maintenance, repair, and AMC services across India for data centers, server rooms, healthcare facilities, telecommunications, commercial buildings, and industrial plants. Our clean agent FM-200 systems deliver rapid fire suppression without damaging sensitive equipment, ensuring maximum protection and minimal downtime. We offer customized, NFPA-compliant solutions with professional installation, testing, preventive maintenance, and expert technical support. Using high-quality components and industry best practices, we ensure reliable system performance and long-term safety. With a commitment to quality, innovation, and customer satisfaction, AVNYA Fire Solutions is your trusted partner for dependable FM-200 fire suppression solutions",
  },
  {
    id: 16,
    image: imgs[16],
    title: "Fire Hydrant System for Building",
    description:
      "AVNYA Fire Solutions provides professional building fire hydrant system installation, maintenance, and AMC services across India for residential, commercial, industrial, corporate, and high-rise buildings. We specialize in the design, supply, installation, testing, and maintenance of complete fire hydrant systems, including hydrants, pumps, pipes, valves, hose reels, hose cabinets, nozzles, and related accessories. Our experienced team delivers customized, standards-compliant solutions that ensure reliable water supply and rapid fire response during emergencies. With high-quality components, expert installation, and preventive maintenance, AVNYA Fire Solutions is your trusted partner for dependable building fire hydrant systems that safeguard lives and property.",
  },
  {
    id: 17,
    image: imgs[17],
    title: "Fire Hydrant System for Hospital",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for hospital fire hydrant systems across India. Their expert team handles the entire lifecycle—from design and supply to testing and maintenance—of complete systems including pumps, valves, and hose reels. By tailoring these solutions specifically to healthcare environments, they ensure a rapid and reliable fire response when emergencies arise. Ultimately, their comprehensive approach safeguards patients, staff, expensive medical equipment, and critical hospital infrastructure from fire hazards. With a strong commitment to preventative maintenance and dedicated technical support, they stand as a trusted partner in healthcare safety",
  },
  {
    id: 18,
    image: imgs[18],
    title: "Fire Hydrant System for Offices",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for corporate office fire hydrant systems across India. Their expert team handles the entire lifecycle—from design and supply to testing and maintenance—of complete systems including pumps, valves, and hose reels. By tailoring these solutions specifically to commercial workspaces, they ensure a rapid and reliable fire response when emergencies arise. Ultimately, their comprehensive approach safeguards employees, visitors, expensive IT equipment, and critical office infrastructure from fire hazards. With a strong commitment to preventative maintenance and dedicated technical support, they stand as a trusted partner in workplace safety",
  },
  {
    id: 19,
    image: imgs[19],
    title: "Fire Hydrant System for Warehouse",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for industrial warehouse fire hydrant systems across India. Their expert team handles the entire lifecycle—from design and permitting to testing and maintenance—of complete systems including hydrants, valves, and standpipes. By tailoring these solutions specifically to large storage environments, they ensure a rapid and reliable fire response when emergencies arise. Ultimately, their comprehensive approach safeguards warehouse personnel, stored goods, and critical facility infrastructure from devastating fire hazards. With a strong commitment to preventative maintenance and dedicated technical support, they stand as a trusted partner in industrial safety.",
  },
  {
    id: 20,
    image: imgs[20],
    title: "Fire Hydrant System for Factory",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for industrial factory fire hydrant systems across India. Their expert team handles the entire lifecycle—from design and permitting to pipe network laying and system commissioning—of complete high-capacity fire protection setups. By strategically positioning hydrants and valves throughout expansive layouts, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards factory workers, heavy machinery, raw materials, and critical industrial infrastructure from fire hazards. With a strong commitment to preventative maintenance and dedicated technical support, they stand as a trusted partner in industrial safety.",
  },
  {
    id: 21,
    image: imgs[21],
    title: "Fire Hydrant System for School",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for educational fire hydrant systems across India. Their expert team handles the entire lifecycle—from needs assessment and custom design to underground piping and system commissioning—of complete safety setups including hydrants, valves, and protective hose cabinets. By strategically configuring these solutions for campus layouts, they ensure immediate, high-volume water access for rapid fire suppression during emergencies. Ultimately, their comprehensive approach safeguards students, teachers, and critical academic infrastructure from devastating fire hazards. With a strong commitment to preventative maintenance, regulatory compliance, and community preparedness training, they stand as a trusted partner in school safety.",
  },
  {
    id: 22,
    image: imgs[22],
    title: "Fire Hydrant System for Hotels",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for hospitality fire hydrant systems across India. Their expert team handles the entire lifecycle—from assessment and custom design to excavation, pipe laying, and system commissioning—of complete setups including hydrants, vertical standpipes, and hose cabinets. By tailoring these solutions to fit both boutique layouts and luxury resorts, they ensure immediate, high-volume water access for rapid fire suppression without disrupting hotel aesthetics. Ultimately, their comprehensive approach safeguards overnight guests, hospitality staff, expensive property assets, and critical building infrastructure from fire hazards. With a strong commitment to preventative maintenance, staff emergency training, and regulatory compliance, they stand as a trusted partner in hotel safety.",
  },
  {
    id: 23,
    image: imgs[23],
    title: "Fire Hydrant System for Laboratory",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for high-risk laboratory fire hydrant systems across India. Their expert team handles the entire lifecycle—from hazard assessment and customized hydraulic engineering to deep trenching, pipe laying, and system integration—of comprehensive fire safety setups. By tailoring these systems specifically to chemical and biological research environments, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their rigorous approach safeguards sensitive laboratory instruments, valuable research assets, and medical personnel from volatile fire hazards. With a strict focus on preventive upkeep, pressure testing, and regulatory compliance, they stand as a trusted partner in laboratory safety.",
  },
  {
    id: 24,
    image: imgs[24],
    title: "Fire Hydrant System for Malls",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for commercial mall fire hydrant systems across India. Their expert team handles the entire lifecycle—from engineering design and permitting to deep excavation, piping networks, and system commissioning—of complete high-pressure protection setups. By tailoring these advanced solutions to large-scale retail environments, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards thousands of daily shoppers, mall employees, valuable retail inventory, and massive building infrastructure from devastating fire hazards. With a strong commitment to preventative maintenance, continuous system testing, and regulatory compliance, they stand as a trusted partner in public workspace safety.",
  },
  {
    id: 25,
    image: imgs[25],
    title: "Fire Hydrant System for Theatres",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for entertainment theatre fire hydrant systems across India. Their expert team handles the entire lifecycle—from feasibility design and permitting to deep trenching, pipe laying, and high-pressure commissioning—of complete safety setups including hydrants, vertical standpipes, and Fire Department Connections (FDCs). By strategically configuring these advanced systems within auditorium layouts, they ensure immediate, high-volume water access for rapid fire suppression without compromising acoustics or viewing angles. Ultimately, their comprehensive approach safeguards dense audiences, theater staff, expensive audio-visual equipment, and critical building infrastructure from fire hazards. With a strong commitment to preventative maintenance, 24/7 technical support, and strict regulatory compliance, they stand as a trusted partner in public venue safety.",
  },
  {
    id: 26,
    image: imgs[26],
    title: "Fire Hydrant System for Housing Society",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for residential housing society fire hydrant systems across India. Their expert team handles the entire lifecycle—from community safety assessments and customized engineering design to pipeline trenching, pressure testing, and final system certification—of complete residential fire protection setups. By strategically integrating hydrants, standpipes, and wall-mounted hose cabinets into high-rise stairwells and common residential blocks, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards thousands of neighborhood residents, family homes, personal assets, and shared estate infrastructure from devastating fire hazards. With a strong commitment to preventive maintenance contracts, local emergency compliance, and community preparedness training, they stand as a trusted partner in residential safety.",
  },
  {
    id: 27,
    image: imgs[27],
    title: "Fire Hydrant System for Transformer",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for high-voltage transformer fire hydrant systems across India. Their expert team handles the entire lifecycle—from site assessment and rigorous hydraulic design to pipeline trenching, structural connections, and system commissioning—of complete high-pressure protection networks. By tailoring these advanced systems to the intense electrical risks of substation zones, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their specialized approach safeguards critical power grid assets, nearby industrial operations, expensive electrical infrastructure, and utility personnel from volatile fire hazards. With a strong commitment to preventative maintenance contracts, regular flow testing, and strict grid safety compliance, they stand as a trusted partner in industrial power protection.",
  },
  {
    id: 28,
    image: imgs[28],
    title: "Fire Hydrant System for Shopping Complex",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for retail shopping complex fire hydrant systems across India. Their expert team handles the entire lifecycle—from spatial hazard assessment and customized engineering design to deep trenching, piping networks, and system commissioning—of complete high-pressure protection setups. By tailoring these advanced systems to large-scale, multi-level retail layouts, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards thousands of daily shoppers, retail staff, valuable commercial inventory, and massive building infrastructure from devastating fire hazards. With a strong commitment to preventative maintenance contracts, regular system flush testing, and strict local fire code compliance, they stand as a trusted partner in public workspace safety.",
  },
  {
    id: 29,
    image: imgs[29],
    title: "Fire Hydrant System for Industries",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for heavy-duty industrial fire hydrant systems across India. Their expert team handles the entire lifecycle—from industrial risk zoning and hydraulic engineering design to deep-trench underground piping networks, high-capacity pumping stations, and rigorous pressure testing—of complete high-volume fire suppression layouts. By tailoring these robust systems to the high-hazard demands of manufacturing factories, processing plants, and industrial complexes, they ensure immediate, high-pressure water access for rapid containment of large-scale emergencies. Ultimately, their comprehensive approach safeguards hundreds of plant operators, expensive industrial machinery, bulk raw materials, and critical facilities infrastructure from volatile fire risks. With a strict commitment to regulatory compliance, certified performance testing, and routine maintenance contracts, they stand as India's trusted partner in industrial infrastructure safety.  ",
  },
  {
    id: 30,
    image: imgs[30],
    title: "Fire Hydrant System for Construction Site",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for construction site fire hydrant systems across India. Their expert team handles the entire lifecycle—from site assessment and customized engineering design to pipeline trenching, structural connections, and system commissioning—of complete high-pressure protection setups. By tailoring these advanced systems to the unique challenges of construction environments, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards construction workers, equipment, and materials from devastating fire hazards. With a strong commitment to preventative maintenance contracts, regular flow testing, and strict safety compliance, they stand as a trusted partner in construction site safety.",
  },
  {
    id: 31,
    image: imgs[31],
    title: "Fire Sprinkler System for Buildings",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for commercial, residential, and industrial building fire sprinkler systems across India. Their expert team handles the entire lifecycle—from structural hazard profiling and hydraulic calculations to precise pipeline network routing, control valve installation, and rigorous pressure testing—of automatic fire suppression networks. By strategically tailoring these systems to high-occupancy real estate and mixed-use structures, they deploy an optimal mix of wet pipe, dry pipe, pre-action, or deluge configurations incorporating specialized temperature-sensitive glass bulb sprinkler heads, robust fire pumps, flow switches, and central monitoring system integration. Ultimately, their comprehensive engineering approach safeguards thousands of occupants, property assets, and core building infrastructure by automatically detecting and suppressing localized fires before they spread. With a firm commitment to National Building Code (NBC) guidelines, IS 15105 Indian Standards, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in urban high-rise and commercial estate safety infrastructure.",
  },
  {
    id: 32,
    image: imgs[32],
    title: "Fire Sprinkler System for Retail Store",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for retail store fire sprinkler systems across India. Their expert team handles the entire lifecycle—from space assessment and customized engineering design to pipeline installation, structural connections, and system commissioning—of complete high-pressure protection setups. By tailoring these advanced systems to the unique challenges of retail environments, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards retail staff, customers, and valuable commercial inventory from devastating fire hazards. With a strong commitment to preventative maintenance contracts, regular flow testing, and strict safety compliance, they stand as a trusted partner in retail safety.",
  },
  {
    id: 33,
    image: imgs[33],
    title: "Fire Sprinkler System for Shopping Complex",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for shopping complex fire sprinkler systems across India. Their expert team handles the entire lifecycle—from space assessment and customized engineering design to pipeline installation, structural connections, and system commissioning—of complete high-pressure protection setups. By tailoring these advanced systems to the unique challenges of shopping environments, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards shoppers, employees, and valuable commercial inventory from devastating fire hazards. With a strong commitment to preventative maintenance contracts, regular flow testing, and strict safety compliance, they stand as a trusted partner in shopping complex safety.",
  },
  {
    id: 34,
    image: imgs[34],
    title: "Fire Sprinkler System for Electrical Room",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for electrical room fire sprinkler systems across India. Their expert team handles the entire lifecycle—from space assessment and customized engineering design to pipeline installation, structural connections, and system commissioning—of complete high-pressure protection setups. By tailoring these advanced systems to the unique challenges of electrical environments, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards electrical personnel, equipment, and critical infrastructure from devastating fire hazards. With a strong commitment to preventative maintenance contracts, regular flow testing, and strict safety compliance, they stand as a trusted partner in electrical safety.",
  },
  {
    id: 35,
    image: imgs[35],
    title: "Fire Sprinkler System for Basement",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for basement fire sprinkler systems across India. Their expert team handles the entire lifecycle—from space assessment and customized engineering design to pipeline installation, structural connections, and system commissioning—of complete high-pressure protection setups. By tailoring these advanced systems to the unique challenges of basement environments, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards basement occupants, property, and valuable assets from devastating fire hazards. With a strong commitment to preventative maintenance contracts, regular flow testing, and strict safety compliance, they stand as a trusted partner in basement safety.",
  },
  {
    id: 36,
    image: imgs[36],
    title: "Fire Sprinkler System for Theaters",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for specialized entertainment theatre fire sprinkler systems across India, handling the entire lifecycle from acoustic-safe hydraulic design to high-pressure piping installation and regulatory commissioning. By strategically configuring advanced sprinkler setups—such as double-interlock pre-action systems over stage fly galleries and quick-response concealed heads in modern auditoriums—they ensure rapid, localized fire suppression while mitigating the risk of accidental water damage to highly sensitive audio-visual electronics, heavy projection gear, and stage props. Ultimately, their comprehensive approach safeguards dense audiences, performance artists, valuable digital projection infrastructure, and critical building assets from volatile fire hazards. With a strict commitment to National Building Code (NBC) compliance, regular pressure-drop testing, and 24/7 preventative maintenance contracts, AVNYA Fire Solutions stands as India's trusted partner in public venue safety.",
  },
  {
    id: 37,
    image: imgs[37],
    title: "Fire Sprinkler System for Garage",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for garage fire sprinkler systems across India. Their expert team handles the entire lifecycle—from space assessment and customized engineering design to pipeline installation, structural connections, and system commissioning—of complete high-pressure protection setups. By tailoring these advanced systems to the unique challenges of garage environments, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards garage occupants, property, and valuable assets from devastating fire hazards. With a strong commitment to preventative maintenance contracts, regular flow testing, and strict safety compliance, they stand as a trusted partner in garage safety.",
  },
  {
    id: 38,
    image: imgs[38],
    title: "Fire Sprinkler System for Home",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for residential fire sprinkler systems across India. Their expert team handles the entire lifecycle—from space assessment and customized engineering design to pipeline installation, structural connections, and system commissioning—of complete high-pressure protection setups. By tailoring these advanced systems to the unique challenges of home environments, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards home occupants, property, and valuable assets from devastating fire hazards. With a strong commitment to preventative maintenance contracts, regular flow testing, and strict safety compliance, they stand as a trusted partner in home safety.",
  },
  {
    id: 39,
    image: imgs[39],
    title: "Fire Sprinkler System for Restaurant",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for restaurant fire sprinkler systems across India. Their expert team handles the entire lifecycle—from space assessment and customized engineering design to pipeline installation, structural connections, and system commissioning—of complete high-pressure protection setups. By tailoring these advanced systems to the unique challenges of restaurant environments, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards restaurant occupants, property, and valuable assets from devastating fire hazards. With a strong commitment to preventative maintenance contracts, regular flow testing, and strict safety compliance, they stand as a trusted partner in restaurant safety.",
  },
  {
    id: 40,
    image: imgs[40],
    title: "Fire Sprinkler System for Malls",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for mall fire sprinkler systems across India. Their expert team handles the entire lifecycle—from space assessment and customized engineering design to pipeline installation, structural connections, and system commissioning—of complete high-pressure protection setups. By tailoring these advanced systems to the unique challenges of mall environments, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards mall occupants, property, and valuable assets from devastating fire hazards. With a strong commitment to preventative maintenance contracts, regular flow testing, and strict safety compliance, they stand as a trusted partner in mall safety.",
  },
  {
    id: 41,
    image: imgs[41],
    title: "Fire Sprinkler System for Laboratories",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for laboratory fire sprinkler systems across India. Their expert team handles the entire lifecycle—from space assessment and customized engineering design to pipeline installation, structural connections, and system commissioning—of complete high-pressure protection setups. By tailoring these advanced systems to the unique challenges of laboratory environments, they ensure immediate, high-volume water access for rapid fire suppression. Ultimately, their comprehensive approach safeguards laboratory occupants, property, and valuable assets from devastating fire hazards. With a strong commitment to preventative maintenance contracts, regular flow testing, and strict safety compliance, they stand as a trusted partner in laboratory safety.",
  },
  {
    id: 42,
    image: imgs[42],
    title: "Fire Sprinkler System for Hotels",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for commercial hotel fire sprinkler systems across India. Their expert team handles the entire lifecycle—from aesthetic-matching hydraulic design to high-pressure piping integration, backflow prevention, and final regulatory commissioning—of complete automatic suppression networks. By strategically configuring specialized, low-profile sprinkler heads (such as quick-response concealed heads in guest suites and robust pendant heads in expansive banquet halls), they ensure immediate, localized fire containment without disrupting premium interior designs or luxury finishes. Ultimately, their comprehensive approach safeguards thousands of international guests, hospitality staff, expensive property assets, and critical building infrastructure from devastating fire hazards. With a strict commitment to National Building Code (NBC) compliance, seamless fire alarm integration, and 24/7 preventative maintenance contracts, they stand as India's trusted partner in hotel infrastructure safety",
  },
  {
    id: 43,
    image: imgs[43],
    title: "Fire Sprinkler System for Factories",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for heavy-duty factory fire sprinkler systems across India. Their expert team handles the entire lifecycle—from spatial industrial risk assessment and hydraulic engineering design to ceiling-network piping installation, backflow prevention, and automatic pump assembly commissioning—of complete automatic fire suppression systems. By configuring heavy-duty steel or CPVC piping networks with application-specific sprinkler heads (such as upright or pendant heads tailored to manufacturing lines and hazard zones), they ensure immediate, high-volume localized water discharge at the earliest stage of a fire breakout. Ultimately, their comprehensive approach safeguards hundreds of plant workers, automated machinery lines, raw inventory stockpiles, and massive industrial plant infrastructure from devastating fire hazards. With an unwavering commitment to National Building Code (NBC) compliance, seamless fire alarm integration, and routine hydrostatic testing, AVNYA Fire Solutions stands as India's trusted partner in industrial manufacturing safety.",
  },
  {
    id: 44,
    image: imgs[44],
    title: "Fire Sprinkler System for Hospital",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for life-safety hospital fire sprinkler systems across India. Their expert team handles the entire lifecycle—from sterile-zone hydraulic design and health-code permitting to high-pressure piping installation, backflow prevention, and automatic pump commissioning—of complete automatic fire suppression systems. By configuring clinical-grade piping networks with highly sensitive, quick-response sprinkler heads (such as concealed heads in patient wards and anti-ligature or tamper-resistant fixtures in specialized care units), they ensure rapid, localized water discharge at the earliest stage of a fire outbreak. Ultimately, their comprehensive approach safeguards recovering patients, medical staff, highly sensitive diagnostic imaging machinery, and critical healthcare facilities infrastructure from devastating fire hazards. With an unwavering commitment to National Building Code (NBC) compliance, healthcare sanitation guidelines, and routine non-disruptive inspection contracts, AVNYA Fire Solutions stands as India's trusted partner in hospital safety infrastructure.",
  },
  {
    id: 45,
    image: imgs[45],
    title: "Fire Sprinkler System for Warehouse",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for high-ceiling warehouse fire sprinkler systems across India. Their expert team handles the entire lifecycle—from storage commodity risk assessment and hydraulic engineering design to large-bore piping installation, backflow prevention, and automatic pump grid commissioning—of complete high-density automatic fire suppression networks. By configuring specialized, heavy-duty sprinkler layouts (such as Early Suppression Fast Response (ESFR) or in-rack sprinkler configurations designed specifically for high-pile storage arrays), they ensure immediate, high-volume water discharge directly over rapidly spreading logistics fires. Ultimately, their comprehensive approach safeguards warehouse personnel, high-density inventory stockpiles, supply chain logistical assets, and massive structural facilities infrastructure from devastating fire hazards. With an unwavering commitment to National Building Code (NBC) standards, FM Global or NFPA compliance, and regular hydrostatic testing, AVNYA Fire Solutions stands as India's trusted partner in industrial storage safety infrastructure.",
  },
  {
    id: 46,
    image: imgs[46],
    title: "Fire Sprinkler System for Office",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for office fire sprinkler systems across India. Their expert team handles the entire lifecycle—from space planning and hydraulic engineering design to piping installation, backflow prevention, and automatic pump commissioning—of complete automatic fire suppression systems. By configuring standard, lightweight sprinkler layouts (such as upright or pendant heads tailored to office environments and hazard zones), they ensure immediate, high-volume localized water discharge at the earliest stage of a fire breakout. Ultimately, their comprehensive approach safeguards office workers, sensitive equipment, and critical infrastructure from devastating fire hazards. With an unwavering commitment to National Building Code (NBC) compliance, seamless fire alarm integration, and routine hydrostatic testing, AVNYA Fire Solutions stands as India's trusted partner in office safety infrastructure.",
  },
  {
    id: 47,
    image: imgs[47],
    title: "Fire Alarm System for Factory",
    description:
      "AVNYA Fire Solutions provides professional, standards-compliant installation, maintenance, and AMC services for industrial factory fire alarm systems across India. Their expert team handles the entire lifecycle—from industrial hazard profiling and customized system architecture to precise detector zoning, fire panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to rugged manufacturing layouts, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized heat, smoke, and flame detectors alongside manual call points, sounders, and strobes. Ultimately, their comprehensive approach safeguards hundreds of assembly workers, automated machinery floor lines, raw inventory stocks, and massive building facilities from volatile industrial fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, AVNYA Fire Solutions stands as a trusted partner in industrial workspace safety infrastructure.",
  },
  {
    id: 48,
    image: f47,
    title: "Fire Alarm System for Office",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for corporate office fire alarm systems across India. Their expert team handles the entire lifecycle—from commercial hazard profiling and customized system architecture to precise detector zoning, fire panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to modern office layouts, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized heat, smoke, and flame detectors alongside manual call points, sounders, and strobes. Ultimately, their comprehensive approach safeguards hundreds of office employees, critical server infrastructure, corporate assets, and multi-level building facilities from volatile workplace fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in corporate workspace safety infrastructure",
  },
  {
    id: 49,
    image: f47,
    title: "Fire Alarm System for Warehouse",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for industrial warehouse fire alarm systems across India. Their expert team handles the entire lifecycle—from storage hazard profiling and customized system architecture to precise detector zoning, fire panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to high-ceiling logistics layouts, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized beam, heat, smoke, and flame detectors alongside manual call points, sounders, and strobes. Ultimately, their comprehensive approach safeguards warehouse personnel, high-density inventory stockpiles, supply chain logistical assets, and massive structural facilities infrastructure from volatile fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in industrial storage safety infrastructure.",
  },
  {
    id: 50,
    image: f47,
    title: "Fire Alarm System for Home",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for residential home fire alarm systems across India. Their expert team handles the entire lifecycle—from residential hazard profiling and customized system architecture to precise detector zoning, smart panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to modern household layouts, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized heat, smoke, and gas leak detectors alongside manual call points, internal sounders, and visual strobes. Ultimately, their comprehensive approach safeguards families, domestic staff, personal property, and multi-story residential structures from devastating home fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in residential and family safety infrastructure.",
  },
  {
    id: 51,
    image: f47,
    title: "Fire Alarm System for Residential Building",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for multi-story residential building fire alarm systems across India. Their expert team handles the entire lifecycle—from residential estate hazard profiling and customized system architecture to precise floor-by-floor detector zoning, main fire panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to community housing and high-rise structures, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized heat, smoke, and gas leak detectors alongside manual call points, public address sounders, and visual strobes in common lobby areas. Ultimately, their comprehensive approach safeguards hundreds of neighborhood families, domestic staff, personal property, and shared estate building infrastructure from devastating fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in residential community safety infrastructure.",
  },
  {
    id: 52,
    image: f47,
    title: "Fire Alarm System for Office Building",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for multi-story corporate office building fire alarm systems across India. Their expert team handles the entire lifecycle—from commercial complex hazard profiling and customized system architecture to precise floor-by-floor detector zoning, central fire panel integration, and rigorous network testing—of intelligent early-warning notification setups. By strategically tailoring these systems to high-rise commercial structures and shared office facilities, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized heat, smoke, and flame detectors alongside manual call points, public address sounders, and visual strobes in elevator lobbies and escape corridors. Ultimately, their comprehensive approach safeguards thousands of corporate employees, critical server data hubs, high-value business assets, and major commercial building infrastructure from volatile workplace fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in commercial estate safety infrastructure.",
  },
  {
    id: 53,
    image: f47,
    title: "Fire Alarm System for Building",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for educational school building fire alarm systems across India. Their expert team handles the entire lifecycle—from campus hazard profiling and customized system architecture to precise wing-by-wing detector zoning, central fire panel integration, and rigorous network testing—of intelligent early-warning notification setups. By strategically tailoring these systems to high-density academic layouts, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized heat, smoke, and flame detectors alongside manual call points, visual strobes, and voice evacuation systems integrated into classrooms, laboratories, and auditoriums. Ultimately, their comprehensive approach safeguards thousands of students, teaching staff, critical academic laboratories, and valuable school infrastructure from devastating fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in educational estate safety infrastructure.",
  },
  {
    id: 54,
    image: f47,
    title: "Fire Alarm System for Business",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for commercial business fire alarm systems across India. Their expert team handles the entire lifecycle—from commercial risk profiling and customized system architecture to precise layout-based detector zoning, central fire panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to active business environments, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized heat, smoke, and flame detectors alongside manual call points, localized sounders, and clear visual strobes. Ultimately, their comprehensive approach safeguards hundreds of business professionals, critical operations equipment, essential workplace assets, and dedicated facilities from volatile fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in commercial business safety infrastructure.",
  },
  {
    id: 55,
    image: f47,
    title: "Fire Alarm System for Commercial Building",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for multi-level commercial complex fire alarm systems across India. Their expert team handles the entire lifecycle—from commercial risk profiling and customized system architecture to precise layout-based detector zoning, central fire panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to high-traffic commercial environments, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized heat, smoke, and flame detectors alongside manual call points, localized sounders, and high-visibility visual strobes. Ultimately, their comprehensive approach safeguards thousands of business professionals, retail shoppers, critical operations equipment, and massive multi-tenant property infrastructure from volatile fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in commercial building safety infrastructure.",
  },
  {
    id: 56,
    image: f47,
    title: "Fire Alarm System for Restaurant",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for commercial restaurant fire alarm systems across India. Their expert team handles the entire lifecycle—from kitchen hazard profiling and customized system architecture to precise layout-based detector zoning, central fire panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to active dining and high-heat cooking environments, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized rate-of-rise heat detectors, optical smoke alarms, and kitchen-specific flame sensors alongside manual call points, localized sounders, and clear visual strobes. Ultimately, their comprehensive approach safeguards hundreds of restaurant guests, culinary staff, high-value kitchen infrastructure, and hospitality assets from volatile, grease-fueled fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in restaurant and hospitality safety infrastructure.",
  },
  {
    id: 57,
    image: f47,
    title: "Fire Alarm System for Hospital",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for healthcare hospital fire alarm systems across India. Their expert team handles the entire lifecycle—from clinical hazard profiling and customized system architecture to precise ward-by-ward detector zoning, central fire panel integration, and rigorous network testing—of intelligent early-warning notification setups. By strategically tailoring these systems to sensitive healthcare environments, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized heat, photoelectric smoke, and gas detectors alongside manual call points, localized sounders, and clear visual strobes. Ultimately, their comprehensive approach safeguards recovering patients, medical staff, highly sensitive diagnostic machinery, and critical healthcare facilities infrastructure from devastating fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in hospital and healthcare safety infrastructure.",
  },
  {
    id: 58,
    image: f47,
    title: "Fire Alarm System for Schools",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for educational school and college fire alarm systems across India. Their expert team handles the entire lifecycle—from campus hazard profiling and customized system architecture to precise zone-specific detector zoning, central fire panel integration, and rigorous network testing—of intelligent early-warning notification setups. By strategically tailoring these systems to high-density academic and campus layouts, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized intelligent heat, smoke, and multi-sensor detectors alongside manual call points, localized sounders, clear visual strobes, and emergency voice evacuation systems. Ultimately, their comprehensive approach safeguards thousands of students, faculty members, critical academic laboratories, and valuable campus infrastructure from devastating fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in educational campus safety infrastructure.",
  },
  {
    id: 59,
    image: f47,
    title: "Fire Alarm System for Hotels",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for hospitality hotel fire alarm systems across India. Their expert team handles the entire lifecycle—from hospitality hazard profiling and customized system architecture to precise floor-by-floor detector zoning, central fire panel integration, and rigorous network testing—of intelligent early-warning notification setups. By strategically tailoring these systems to high-occupancy guest environments and heritage luxury layouts, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized heat, photoelectric smoke, and multi-sensor detectors alongside manual call points, localized sounders, high-visibility visual strobes, and emergency voice evacuation systems integrated into guest rooms, banquet halls, and kitchens. Ultimately, their comprehensive approach safeguards thousands of hotel guests, hospitality staff, high-value commercial infrastructure, and premium property assets from devastating fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in hospitality and luxury estate safety infrastructure.",
  },
  {
    id: 60,
    image: f47,
    title: "Fire Alarm System for Mall",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for retail mall fire alarm systems across India. Their expert team handles the entire lifecycle—from retail zoning hazard profiling and customized system architecture to precise layout-based detector zoning, central fire panel integration, and rigorous network testing—of intelligent early-warning notification setups. By strategically tailoring these complex configurations to high-traffic, multi-zone commercial spaces, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating intelligent microprocessors, bidirectional digital loops, optical smoke alarms, and rate-of-rise heat detectors alongside manual call points, localized sounders, and clear visual strobes. Ultimately, their comprehensive, networked architecture safeguards thousands of shoppers, tenant employees, high-volume retail assets, and massive shopping center infrastructure from volatile fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in large-scale public safety infrastructure.",
  },
  {
    id: 61,
    image: f47,
    title: "Fire Alarm System for Airport",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for high-security aviation airport fire alarm systems across India. Their expert team handles the entire lifecycle—from terminal risk profiling and customized system architecture to precise zone-by-zone detector zoning, central fire panel integration, and rigorous network testing—of intelligent early-warning notification setups. By strategically tailoring these complex networks to massive, high-ceiling terminal layouts and high-traffic transit hubs, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating intelligent microprocessors, smoke alarms, and rate-of-rise heat detectors alongside manual call points, localized sounders, and high-visibility visual strobes. Ultimately, their comprehensive, high-security aviation architecture safeguards thousands of daily passengers, flight crews, critical baggage handling systems, and massive airport infrastructure facilities from volatile fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in large-scale public transit safety infrastructure.",
  },
  {
    id: 62,
    image: f47,
    title: "Fire Alarm System for Cinema Hall",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for entertainment cinema hall and multiplex fire alarm systems across India. Their expert team handles the entire lifecycle—from acoustic auditorium hazard profiling and customized system architecture to precise theater-by-theater detector zoning, central fire panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to low-lighting, high-occupancy entertainment venues, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized heat, photoelectric smoke, and optical beam detectors alongside manual call points, localized sounders, high-visibility visual strobes, and emergency voice evacuation systems. Ultimately, their comprehensive approach safeguards thousands of moviegoers, theater staff, high-value projection and sound infrastructure, and entertainment complex assets from volatile fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in cinema hall and public entertainment safety infrastructure.",
  },
  {
    id: 63,
    image: f47,
    title: "Fire Alarm System for Home care",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for residential home care and assisted living fire alarm systems across India. Their expert team handles the entire lifecycle—from vulnerable resident hazard profiling and customized system architecture to precise layout-based detector zoning, smart central fire panel integration, and rigorous network testing—of intelligent early-warning notification setups. By strategically tailoring these configurations to domestic care environments, nursing homes, and senior assisted-living facilities, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized optical smoke alarms, rate-of-rise heat detectors, and gas leak sensors alongside easily accessible manual call points, localized internal sounders, and high-visibility visual strobes. Ultimately, their comprehensive, highly accessible architecture safeguards dependent patients, elderly residents, dedicated medical caregivers, and physical property infrastructure from devastating fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in home care, assisted living, and residential healthcare safety infrastructure.",
  },
  {
    id: 64,
    image: f47,
    title: "Fire Alarm System for Shopping Complex",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for retail shopping complex fire alarm systems across India. Their expert team handles the entire lifecycle—from high-traffic area hazard profiling and customized system architecture to precise layout-based detector zoning, central fire panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to commercial retail environments, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized heat, photoelectric smoke, and optical beam detectors alongside manual call points, localized sounders, high-visibility visual strobes, and emergency voice evacuation systems. Ultimately, their comprehensive approach safeguards thousands of shoppers, retail staff, high-value merchandise, and commercial property assets from volatile fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in shopping complex and public retail safety infrastructure.",
  },
  {
    id: 65,
    image: f47,
    title: "Fire Alarm System for Apartment",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for high-rise residential apartment and housing society fire alarm systems across India. Their expert team handles the entire lifecycle—from residential estate hazard profiling and customized system architecture to precise block-and-floor detector zoning, central fire panel integration, and rigorous network testing—of intelligent early-warning notification setups. By strategically tailoring these complex systems to high-density community living environments, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized photoelectric smoke alarms, rate-of-rise heat detectors, and LPG/natural gas sensors alongside manual call points, localized internal sounders, high-visibility visual strobes, and emergency public address systems. Ultimately, their comprehensive, interconnected safety architecture safeguards thousands of residents, domestic staff, high-value personal assets, and massive multi-story property infrastructure from devastating residential fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in apartment complex and residential community safety infrastructure.",
  },
  {
    id: 66,
    image: f47,
    title: "Fire Alarm System for Laboratory",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for laboratory fire alarm systems across India. Their expert team handles the entire lifecycle—from hazard profiling and customized system architecture to precise layout-based detector zoning, central fire panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to laboratory environments, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized photoelectric smoke alarms, rate-of-rise heat detectors, and chemical leak sensors alongside manual call points, localized internal sounders, high-visibility visual strobes, and emergency public address systems. Ultimately, their comprehensive, interconnected safety architecture safeguards laboratory personnel, research staff, high-value equipment, and sensitive materials from devastating fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in laboratory and research facility safety infrastructure.",
  },
  {
    id: 67,
    image: f47,
    title: "Fire Alarm System for Retail Store",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for standalone retail store and commercial showroom fire alarm systems across India. Their expert team handles the entire lifecycle—from commercial risk profiling and customized system architecture to precise layout-based detector zoning, main fire panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to active, customer-facing retail environments, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized optical smoke alarms, rate-of-rise heat detectors, and flame sensors alongside manual call points, localized sounders, and high-visibility visual strobes in inventory storerooms, display floors, and billing areas. Ultimately, their comprehensive approach safeguards daily shoppers, retail staff, high-value merchandise inventory, and critical business infrastructure from volatile fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in retail business safety infrastructure.",
  },
  {
    id: 68,
    image: f47,
    title: "Fire Alarm System for Food Court",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for high-traffic food court fire alarm systems across India. Their expert team handles the entire lifecycle—from multi-kitchen hazard profiling and customized system architecture to precise stall-by-stall detector zoning, central fire panel integration, and rigorous operational testing—of intelligent early-warning notification setups. By strategically tailoring these systems to open-layout dining zones and intensive, high-heat cooking environments, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized rate-of-rise heat detectors, optical smoke alarms, and commercial kitchen-grade flame sensors alongside strategically placed manual call points, localized sounders, and clear visual strobes. Ultimately, their comprehensive approach safeguards thousands of daily diners, culinary workers, expensive kitchen equipment, and heavy commercial estate infrastructure from volatile, grease-fueled fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in commercial food service and hospitality safety infrastructure.",
  },
  {
    id: 69,
    image: f47,
    title: "Fire Alarm System for Kitchen",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for commercial kitchen and industrial food-preparation fire alarm systems across India. Their expert team handles the entire lifecycle—from intensive culinary hazard profiling and customized system architecture to precise layout-based detector zoning, central fire panel integration, and rigorous thermal testing—of intelligent early-warning notification setups. By strategically tailoring these configurations to high-heat, steam-heavy, and grease-prone cooking environments, they deploy an optimal mix of addressable or rugged conventional networks incorporating specialized rate-of-rise heat detectors, linear heat sensing cables, and optical flame sensors alongside easily accessible manual call points, localized weatherproof sounders, and high-visibility visual strobes that prevent the frequent false alarms common to standard smoke sensors. Ultimately, their comprehensive, industrial-grade architecture safeguards culinary teams, facility staff, expensive commercial appliances, and vital restaurant or hospitality property assets from volatile, high-temperature grease and electrical fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in commercial kitchen safety infrastructure.",
  },
  {
    id: 70,
    image: f47,
    title: "Fire Alarm System for Data Center",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for mission-critical data center and server room fire alarm systems across India. Their expert team handles the entire lifecycle—from electronic infrastructure hazard profiling and customized system architecture to precise cold-and-hot aisle detector zoning, central fire panel integration, and rigorous operational testing—of intelligent early-warning notification setups. By strategically tailoring these configurations to sensitive, high-airflow, and high-density computing environments, they deploy an optimal mix of addressable networks, Aspirating Smoke Detection (ASD/VESDA) air-sampling systems, and rate-of-rise heat detectors alongside manual call points, localized clean-agent compatible sounders, and high-visibility visual strobes that can identify microscopic combustion particles before visible smoke or flames develop. Ultimately, their comprehensive, high-security architecture safeguards critical digital data, server racks, expensive networking machinery, and vital telecommunications infrastructure from devastating electrical and hardware fire hazards without causing accidental water damage. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in enterprise data infrastructure and high-tech facility safety.",
  },
  {
    id: 71,
    image: f47,
    title: "Fire Alarm System for Coaching Institute",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for educational coaching institutes, tuition centers, and test-preparation hubs across India. Their expert team handles the entire lifecycle—from high-density classroom hazard profiling and customized system architecture to precise wing-by-wing detector zoning, central fire panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to tightly packed student environments, lecture halls, and narrow exit corridors, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized photoelectric smoke alarms and rate-of-rise heat detectors alongside strategically located manual call points, high-decibel internal sounders, and clear visual strobes. Ultimately, their comprehensive safety approach safeguards thousands of students, teaching faculty, administrative staff, and valuable digital learning infrastructure from volatile electrical or structural fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in educational commercial safety infrastructure",
  },
  {
    id: 72,
    image: f47,
    title: "Fire Alarm System for Auditorium",
    description:
      "Avnya provides professional, standards-compliant installation, maintenance, and AMC services for large-capacity auditoriums and performance spaces across India. Their expert team handles the entire lifecycle—from expansive venue hazard profiling and customized system architecture to precise seating-area detector zoning, central fire panel integration, and rigorous testing—of intelligent early-warning notification setups. By strategically tailoring these systems to high-ceiling, acoustically sensitive, and densely populated environments, they deploy an optimal mix of addressable, conventional, or wireless networks incorporating specialized photoelectric smoke alarms and rate-of-rise heat detectors alongside strategically located manual call points, high-decibel internal sounders, and clear visual strobes. Ultimately, their comprehensive safety approach safeguards thousands of attendees, performers, technical staff, and valuable audio-visual infrastructure from volatile electrical or structural fire hazards. With a firm commitment to National Building Code (NBC) guidelines, IS 2189 Indian Standards compliance, and 24/7 preventative maintenance contracts, Avnya stands as a trusted partner in large-scale event safety infrastructure.",
  },
];

const getCardDescription = (item: FireItem) =>
  item.cardDescription ||
  `Discover reliable ${item.title.toLowerCase()} solutions designed to improve safety, support compliance, and strengthen emergency response readiness.`;

const FireServicePage: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setActiveIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setActiveIndex(null);
    document.body.style.overflow = "";
  }, []);

  const prev = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? 0 : (index - 1 + fireItems.length) % fireItems.length,
    );
  }, []);

  const next = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? 0 : (index + 1) % fireItems.length,
    );
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowLeft") prev();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, closeModal, next, prev]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const current = activeIndex === null ? null : fireItems[activeIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 text-slate-900">
      <div className="relative pt-28 pb-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-white/40 to-blue-100/50 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[280px] w-[600px] rounded-full bg-blue-200/40 blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-5xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
            Fire Safety Services
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-base sm:text-lg leading-8 text-slate-600">
            Explore our fire safety solutions and click any card to view the
            full description in a modal. The layout below follows the clean
            four-card design you shared.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-semibold text-slate-900">
          Our Fire Safety Products
        </h2>
        <p className="mb-10 mt-3 text-center text-slate-500">
          Click any card to view details
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {fireItems.map((item, index) => (
            <article
              key={item.id}
              role="button"
              tabIndex={0}
              onClick={() => openModal(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openModal(index);
                }
              }}
              className="overflow-hidden rounded-2xl bg-white shadow-[0_14px_30px_-22px_rgba(15,23,42,0.5)] ring-1 ring-slate-200 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_40px_-24px_rgba(15,23,42,0.45)] focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[1.1rem] font-semibold leading-8 text-blue-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-8 text-slate-700 line-clamp-4">
                  {getCardDescription(item)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {current &&
        createPortal(
          <div
            className="fixed inset-0 z-[1000] flex items-center justify-center p-2 sm:p-4 lg:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={current.title}
          >
            <div
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
              onClick={closeModal}
            />

            <div className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl sm:rounded-[28px] bg-white shadow-2xl max-h-[96vh] sm:max-h-[92vh]">
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute right-3 top-3 z-20 rounded-full bg-white/95 p-2 text-slate-600 shadow-md transition hover:bg-slate-100 hover:text-slate-900 sm:right-4 sm:top-4"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid max-h-[96vh] sm:max-h-[92vh] md:grid-cols-[0.92fr_1.08fr]">
                <div className="relative h-52 sm:h-64 md:h-auto md:min-h-[640px] bg-slate-200">
                  <img
                    src={current.image}
                    alt={current.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                <div className="flex max-h-[96vh] sm:max-h-[92vh] flex-col p-4 sm:p-6 lg:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700">
                    {activeIndex! + 1} / {fireItems.length}
                  </p>
                  <h3 className="mt-2 pr-10 text-xl font-semibold leading-tight text-slate-900 sm:mt-3 sm:text-2xl lg:text-3xl">
                    {current.title}
                  </h3>
                  <div className="mt-3 h-px bg-gradient-to-r from-blue-200 via-blue-400 to-transparent sm:mt-4" />
                  <div className="mt-4 max-h-[30vh] overflow-y-auto pr-1 sm:mt-5 sm:max-h-none sm:flex-1 sm:pr-2">
                    <p className="text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
                      {current.description}
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-4 sm:mt-8 sm:gap-3 sm:pt-0 sm:border-t-0">
                    <button
                      onClick={prev}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:px-4 sm:py-2.5"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </button>
                    <span className="order-3 w-full text-center text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400 sm:order-none sm:w-auto sm:text-xs">
                      #{current.id}
                    </span>
                    <button
                      onClick={next}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 sm:px-4 sm:py-2.5"
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};

export default FireServicePage;
