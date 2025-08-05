export interface Product {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    whatsappNumber: string;
    image: string;
    overview: string;
    highlights: string[];
  } 
  
  export const PRODUCTS: Product[] = [
    {
      id: 'cctv',
      title: 'CCTV Surveillance Systems',
      subtitle: 'Total Visibility. Total Control.',
      description: `Protect your property 24/7 with advanced surveillance solutions designed for homes, offices, and industrial spaces. Our systems offer smart monitoring, high-definition clarity, and remote access at your fingertips.`,
      whatsappNumber: '918688583989',
      image: 'assets/products/prod1.png',
      overview: `Our CCTV systems combine powerful security with smart technology. Whether it’s a home entrance, parking lot, or warehouse, our cameras provide round-the-clock monitoring, night vision, and instant access via mobile app. From installation to cloud backup, we deliver a complete surveillance solution tailored to your space.`,
      highlights: [
        'Indoor & Outdoor IP/Analog Cameras',
        'PTZ, Dome & Bullet Camera Options',
        'Automatic Number Plate Recognition (ANPR)',
        'Night Vision with AI Motion Detection',
        'Remote Monitoring via Mobile App',
        'Centralized Control with VMS Integration'
      ]
    },
    {
      id: 'access-control',
      title: 'Access Control Systems',
      subtitle: 'Control Who Enters. Protect What Matters.',
      description: `Take charge of your facility’s security with smart, reliable access control systems. Our solutions go beyond traditional keys, allowing you to manage entry and exit through biometrics, RFID, face recognition, and long-range UHF systems — all integrated with attendance logs and real-time monitoring.`,
      whatsappNumber: '918688583989',
      image: 'assets/products/prod2.svg',
      overview: `Access Control isn’t just about entry — it's about accountability, convenience, and safety. Whether it’s a gated community, office floor, or secure lab, our systems ensure only authorized personnel can enter designated zones, while keeping a detailed log of all access activity.`,
      highlights: [
        'Biometric (Fingerprint & Face)',
        'RFID Card-Based Access',
        'UHF Long-Range Readers',
        'EM Locks, Door Controllers',
        'Attendance Integration',
      ]
    },
    {
      id: 'entrance-automation',
      title: 'Entrance Automation Systems',
      subtitle: 'Automated Access. Effortless Control.',
      description: 'Our Entrance Automation Systems are designed to secure and streamline vehicle and personnel entry points with intelligent, touch-free automation. Whether its a residential gate, commercial entrance, or industrial shutter — we deliver reliable, remote-operated solutions that enhance both safety and convenience.',
      whatsappNumber: '918688583989',
      image: 'assets/products/prod3.svg',
      overview: `Manual gates and shutters are a thing of the past. With our boom barriers, gate motors, and rolling shutter systems, you get full control over who enters and exits — with features like remote access, RFID triggers, UHF vehicle tags, and integrated safety sensors to prevent accidents.`,
      highlights: [
        'Boom Barriers (Straight, Folding, Fence Type)',
        'Sliding & Swing Gate Motors',
        'Automatic Rolling Shutters',
        'Remote/Sensor-Based Control',
      ]
    },
    {
      id: 'pedestrian-automation',
      title: 'Pedestrian Automation Systems',
      subtitle: 'Controlled Access. Seamless Movement.',
      description: `Our Pedestrian Automation Systems are designed to manage the flow of people securely and efficiently. With solutions like flap barriers, swing gates, and turnstiles, you can ensure only authorized individuals enter sensitive or high-traffic zones — with speed, safety, and style.`,
      whatsappNumber: '918688583989',
      image: 'assets/products/prod4.svg',
      overview: `In today’s world, managing physical access is critical. Whether you're securing a lobby, canteen, exam hall, or gym — our pedestrian access systems blend physical safety with smart technology to monitor and log every entry in real time. These systems integrate easily with RFID cards, biometric devices, QR codes, and attendance software, providing full control without compromising on movement flow.`,
      highlights: [
        'Flap Barriers',
        'Swing Barriers (Speed Gates)',
        'Tripod & Full Height Turnstiles',
        'P-Gates for Compact Entry Control',
      ]
    },
    {
      id: 'high-security',
      title: 'High-Security Solutions',
      subtitle: 'Critical Protection. Maximum Control.',
      description: `Our High-Security Product Line is designed to safeguard high-risk, high-priority zones with advanced equipment such as bollards, road blockers, metal detectors, baggage scanners, and UVSS. These systems are ideal for areas where safety cannot be compromised — from corporate campuses to defense, airports, and industrial zones.`,
      whatsappNumber: '918688583989',
      image: 'assets/products/prod5.svg',
      overview: `When standard barriers aren't enough, our high-security systems provide the next level of defense. Whether it’s scanning under vehicles, restricting unauthorized pedestrian entry, or defending against crash threats — these products are built for durability, precision, and compliance with safety standards.`,
      highlights: [
        'X-Ray Baggage Scanners• DFMD & HHMD',
        'Hydraulic & Retractable Bollards',
        'Crash-Rated Road Blockers',
        'Crash-Rated Road Blockers',
      ]
    },
    {
      id: 'vehicle-parking',
      title: 'Vehicle & Parking Management Systems',
      subtitle: 'Smarter Entry. Safer Parking.',
      description: `Our Vehicle & Parking Management Systems are designed to automate, monitor, and manage vehicle movement across entry points, driveways, and parking areas. From ANPR cameras and RFID access to smart LED guidance systems and ticket dispensers, we help you create safe, seamless, and trackable vehicle flow.`,
      whatsappNumber: '918688583989',
      image: 'assets/products/prod6.svg',
      overview: `Managing vehicle access and parking doesn’t have to be chaotic. With our integrated systems, you can control which vehicles enter, monitor duration, assign slots, and even issue automatic passes. These systems are perfect for both high-traffic areas and controlled-access campuses.`,
      highlights: [
        'ANPR Cameras',
        'RFID-Based Vehicle Entry',
        'Parking Ticket Dispensers',
        'Occupancy-Based LED Parking Guidance',
      ]
    },
    {
      id: 'fire-safety',
      title: 'Fire Safety Systems',
      subtitle: 'Be Ready Before It Starts.',
      description: `Our Fire Safety Systems are built to protect life and property by detecting, suppressing, and preventing fire hazards. Whether it’s an office, school, hospital, or warehouse — we provide ISI-certified fire extinguishers, alarm systems, and maintenance contracts to ensure you’re always protected and compliant.`,
      whatsappNumber: '918688583989',
      image: 'assets/products/prod7.svg',
      overview: `Fire safety isn’t optional — it’s a necessity. At Sainic, we provide comprehensive fire protection solutions that are easy to use, safe to maintain, and compliant with regulatory standards. From extinguishers to on-site safety training, we equip your premises for any emergency.`,
      highlights: [
        'Fire Extinguishers',
        'CO2, ABC Dry Powder & Water-Type',
        'Wall-mounted & Portable Units',
        'ISI Marked & Maintenance Services',
        'For homes, offices, basements, and common areas',
      ]
    },
    {
      id: 'site-safety',
      title: 'Site Safety & Traffic Products',
      subtitle: 'Guide. Protect. Comply.',
      description: `Our Site Safety & Traffic Products are designed to help you organize movement, avoid accidents, and meet safety compliance standards on your premises. From speed breakers and bollards to safety mirrors and reflective tapes, these solutions are the backbone of every well-managed facility.`,
      whatsappNumber: '918688583989',
      image: 'assets/products/prod8.svg',
      overview: `Accidents are avoidable — and clear guidance makes a difference. We supply and install a wide range of site safety tools and traffic control aids that improve visibility, reduce risk, and direct both vehicles and pedestrians safely. Whether it’s a residential basement, a corporate driveway, or a factory loading area — these products play a key role in day-to-day operational safety.`,
      highlights: [
        'Road Studs (Plastic, Aluminum – Reflective)',
        'Solar Road Studs with LED illumination',
        'Speed Breakers (Rubber, PVC, Modular Type)',
        'Corner Guards for parking & basement walls',
        'Wheel Stoppers',
        'Convex Mirrors',
        'Safety Bollards (PU, Steel – Fixed & Removable)',
        'Reflective Tapes & Safety Signage',
      ]
    },
    
    // Add other products here...
  ];
  
  export interface ProductCard {
    id: string;
    name: string;
    image: string;
  }
  
  export const PRODUCT_CARDS: ProductCard[] = [
    {
      id: 'cctv',
      name: 'CCTV Surveillance Systems',
      image: 'assets/products/prod1.png'
    },
    {
      id: 'access-control',
      name: 'Access Control Systems',
      image: 'assets/products/prod2.svg'
    },
    {
      id: 'entrance-automation',
      name: 'Entrance Automation',
      image: 'assets/products/prod3.svg'
    },
    {
      id: 'pedestrian-automation',
      name: 'Pedestrian Automation',
      image: 'assets/products/prod4.svg'
    },
    {
      id: 'high-security',
      name: 'High-Security Solutions',
      image: 'assets/products/prod5.svg'
    },
    {
      id: 'vehicle-parking',
      name: 'Vehicle & Parking Management',
      image: 'assets/products/prod6.svg'
    },
    {
      id: 'fire-safety',
      name: 'Fire Safety System (Basic)',
      image: 'assets/products/prod7.svg'
    },
    {
      id: 'site-safety',
      name: 'Site Safety & Traffic Control Products',
      image: 'assets/products/prod8.svg'
    }
  ];
  