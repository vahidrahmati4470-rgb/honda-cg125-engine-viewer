/**
 * Engine systems definition for Honda CG 125
 * Colors are used for visual identification when systems are highlighted.
 */

export const ENGINE_SYSTEMS = {
  block: {
    id: 'block',
    name: 'Engine Block / Crankcase',
    nameFa: 'بلوک موتور / کارتر',
    color: '#64748b',
    description: 'Main structural body of the engine that houses the crankshaft and provides mounting points.'
  },
  cylinderHead: {
    id: 'cylinderHead',
    name: 'Cylinder Head & Valvetrain',
    nameFa: 'سرسیلندر و سیستم سوپاپ',
    color: '#0ea5e9',
    description: 'Contains the combustion chamber, valves, and rocker arms. Critical for airflow and compression.'
  },
  piston: {
    id: 'piston',
    name: 'Piston & Connecting Rod',
    nameFa: 'پیستون و شاتون',
    color: '#f59e0b',
    description: 'Converts combustion pressure into reciprocating motion, transferred to the crankshaft via the connecting rod.'
  },
  crankshaft: {
    id: 'crankshaft',
    name: 'Crankshaft & Flywheel',
    nameFa: 'میل‌لنگ و فلایویل',
    color: '#8b5cf6',
    description: 'Converts linear piston motion into rotational power. The flywheel stores energy and smooths power delivery.'
  },
  fuel: {
    id: 'fuel',
    name: 'Fuel System',
    nameFa: 'سیستم سوخت',
    color: '#ef4444',
    description: 'Carburetor mixes air and fuel in the correct ratio for combustion. Includes intake manifold.'
  },
  ignition: {
    id: 'ignition',
    name: 'Ignition & Electrical',
    nameFa: 'سیستم جرقه و برق',
    color: '#eab308',
    description: 'Generates the spark at the correct time to ignite the air-fuel mixture. Includes CDI, coil, and spark plug.'
  },
  clutch: {
    id: 'clutch',
    name: 'Clutch & Transmission',
    nameFa: 'کلاچ و گیربکس',
    color: '#22c55e',
    description: 'Multi-plate wet clutch and 4-speed constant-mesh gearbox transfer power to the rear wheel.'
  },
  lubrication: {
    id: 'lubrication',
    name: 'Lubrication System',
    nameFa: 'سیستم روغن‌کاری',
    color: '#14b8a6',
    description: 'Oil pump and passages circulate oil to reduce friction and cool internal components.'
  },
  exhaust: {
    id: 'exhaust',
    name: 'Exhaust System',
    nameFa: 'سیستم اگزوز',
    color: '#78716c',
    description: 'Removes burnt gases from the combustion chamber and reduces noise.'
  },
  covers: {
    id: 'covers',
    name: 'Covers & Fasteners',
    nameFa: 'درپوش‌ها و اتصالات',
    color: '#94a3b8',
    description: 'Protective covers, gaskets, bolts and external fasteners that seal and protect the engine.'
  }
}

/**
 * Sample part metadata.
 */
export const SAMPLE_PARTS = [
  { id: 'crankcase_left', name: 'Left Crankcase', system: 'block', description: 'Left half of the crankcase. Houses the transmission and crankshaft bearings.' },
  { id: 'crankcase_right', name: 'Right Crankcase', system: 'block', description: 'Right half of the crankcase. Contains the clutch and primary drive.' },
  { id: 'cylinder', name: 'Cylinder', system: 'block', description: 'Cast iron or alloy cylinder barrel where the piston travels.' },
  { id: 'cylinder_head', name: 'Cylinder Head', system: 'cylinderHead', description: 'Aluminum cylinder head containing the combustion chamber and valve seats.' },
  { id: 'intake_valve', name: 'Intake Valve', system: 'cylinderHead', description: 'Allows air-fuel mixture into the combustion chamber.' },
  { id: 'exhaust_valve', name: 'Exhaust Valve', system: 'cylinderHead', description: 'Allows burnt gases to exit the combustion chamber.' },
  { id: 'rocker_arm', name: 'Rocker Arm', system: 'cylinderHead', description: 'Transfers camshaft motion to open and close the valves.' },
  { id: 'valve_cover', name: 'Valve Cover', system: 'cylinderHead', description: 'Covers the valvetrain and keeps oil contained.' },
  { id: 'piston', name: 'Piston', system: 'piston', description: 'Moves up and down inside the cylinder, driven by combustion pressure.' },
  { id: 'piston_rings', name: 'Piston Rings', system: 'piston', description: 'Seal the combustion chamber and control oil consumption.' },
  { id: 'connecting_rod', name: 'Connecting Rod', system: 'piston', description: 'Links the piston to the connecting rod.' },
  { id: 'wrist_pin', name: 'Wrist Pin', system: 'piston', description: 'Connects the piston to the connecting rod.' },
  { id: 'crankshaft', name: 'Crankshaft', system: 'crankshaft', description: 'Main rotating shaft that converts reciprocating motion to rotation.' },
  { id: 'flywheel', name: 'Flywheel / Magneto Rotor', system: 'crankshaft', description: 'Stores rotational energy and generates electricity for the ignition system.' },
  { id: 'crank_bearing', name: 'Crankshaft Bearing', system: 'crankshaft', description: 'Supports the crankshaft and allows smooth rotation.' },
  { id: 'carburetor', name: 'Carburetor', system: 'fuel', description: 'Mixes air and fuel in the correct ratio. CG125 typically uses a Keihin or similar slide carb.' },
  { id: 'intake_manifold', name: 'Intake Manifold', system: 'fuel', description: 'Connects the carburetor to the cylinder head intake port.' },
  { id: 'air_filter', name: 'Air Filter Housing', system: 'fuel', description: 'Filters incoming air before it reaches the carburetor.' },
  { id: 'spark_plug', name: 'Spark Plug', system: 'ignition', description: 'Ignites the air-fuel mixture at the precise moment.' },
  { id: 'ignition_coil', name: 'Ignition Coil', system: 'ignition', description: 'Steps up voltage to create the spark at the plug.' },
  { id: 'cdi_unit', name: 'CDI Unit', system: 'ignition', description: 'Capacitor Discharge Ignition module that controls spark timing.' },
  { id: 'stator', name: 'Stator / Magneto', system: 'ignition', description: 'Generates AC current for the ignition and lighting system.' },
  { id: 'clutch_basket', name: 'Clutch Basket', system: 'clutch', description: 'Outer clutch housing driven by the primary gear.' },
  { id: 'clutch_plates', name: 'Clutch Plates', system: 'clutch', description: 'Friction and steel plates that engage/disengage power.' },
  { id: 'clutch_pressure_plate', name: 'Pressure Plate', system: 'clutch', description: 'Applies force to the clutch plates when engaged.' },
  { id: 'mainshaft', name: 'Mainshaft', system: 'clutch', description: 'Primary transmission shaft.' },
  { id: 'countershaft', name: 'Countershaft', system: 'clutch', description: 'Secondary transmission shaft with output sprocket.' },
  { id: 'shift_drum', name: 'Shift Drum', system: 'clutch', description: 'Controls gear selection via shift forks.' },
  { id: 'oil_pump', name: 'Oil Pump', system: 'lubrication', description: 'Circulates engine oil under pressure to critical components.' },
  { id: 'oil_filter', name: 'Oil Filter / Screen', system: 'lubrication', description: 'Removes contaminants from the circulating oil.' },
  { id: 'oil_filler_cap', name: 'Oil Filler Cap', system: 'lubrication', description: 'Access point for checking and filling engine oil.' },
  { id: 'exhaust_header', name: 'Exhaust Header', system: 'exhaust', description: 'Pipe that carries exhaust gases from the cylinder head.' },
  { id: 'muffler', name: 'Muffler', system: 'exhaust', description: 'Reduces exhaust noise and back pressure.' },
  { id: 'left_cover', name: 'Left Engine Cover', system: 'covers', description: 'Protective cover for the left side of the engine.' },
  { id: 'right_cover', name: 'Right Engine Cover / Clutch Cover', system: 'covers', description: 'Cover for the clutch and primary drive area.' },
  { id: 'timing_cover', name: 'Timing / Magneto Cover', system: 'covers', description: 'Covers the magneto/stator assembly.' },
]

export const SYSTEM_IDS = Object.keys(ENGINE_SYSTEMS)
