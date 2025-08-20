import { motion, useReducedMotion } from 'framer-motion';

const FloatingShapes = () => {
  const shapes = [
    { id: 1, type: 'circle', x: '12%', y: '18%', size: 140, delay: 0 },
    { id: 2, type: 'circle', x: '78%', y: '65%', size: 220, delay: 1.5 },
    { id: 3, type: 'square', x: '70%', y: '20%', size: 120, delay: 2.3 },
    { id: 4, type: 'circle', x: '25%', y: '75%', size: 180, delay: 3.1 },
    { id: 5, type: 'circle', x: '85%', y: '20%', size: 120, delay: 4.2 },
  ];

  const reduceMotion = useReducedMotion();

  const getShapeComponent = (type: string, size: number) => {
    const baseClasses = "absolute opacity-30 blur-[2px]";
    
    switch (type) {
      case 'circle':
        return (
          <div 
            className={`${baseClasses} rounded-full bg-gradient-to-br from-neutral-light to-white`}
            style={{ width: size, height: size }}
          />
        );
      case 'square':
        return (
          <div 
            className={`${baseClasses} bg-gradient-to-br from-white to-neutral-light`}
            style={{ width: size, height: size }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft full-screen gradient backdrop */}
      <div className="absolute inset-0 bg-gradient-main opacity-20" />
      {/* Lightweight radial overlays without heavy blur */}
      <div className="absolute inset-0 bg-gradient-radial-tl opacity-20" />
      <div className="absolute inset-0 bg-gradient-radial-br opacity-15" />
      
      {/* Minimal floating shapes */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute transform-gpu will-change-transform"
          style={{ left: shape.x, top: shape.y }}
          animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
          transition={reduceMotion ? undefined : {
            duration: 14 + shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay * 0.5,
          }}
        >
          {getShapeComponent(shape.type, shape.size)}
        </motion.div>
      ))}
      
      {/* Fewer, softer sparkles */}
      {!reduceMotion && Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 0.7, 0.2],
            scale: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingShapes;