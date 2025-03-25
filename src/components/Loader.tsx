import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Loader = () => {
  useEffect(() => {
    // Lock body scroll during loading
    document.body.style.overflow = 'hidden';
    
    // Cleanup function to restore scroll when unmounted
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Sequence variants for the animation
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 } 
    },
    exit: { 
      opacity: 0,
      scale: 0.9,
      transition: { 
        duration: 0.5,
        when: "afterChildren" 
      } 
    }
  };

  const svgVariants = {
    initial: { opacity: 1 },
    animate: { 
      opacity: 1,
      transition: { 
        delay: 0.2,
        when: "beforeChildren" 
      } 
    },
    exit: { 
      opacity: 0,
      scale: 0.8,
      transition: { 
        duration: 0.3,
        when: "afterChildren" 
      } 
    }
  };

  const pathVariants = {
    initial: { pathLength: 0 },
    animate: { 
      pathLength: 1,
      transition: { 
        duration: 1.5, 
        ease: "easeInOut" 
      } 
    },
    exit: { 
      pathLength: 0,
      transition: { 
        duration: 0.3, 
        ease: "easeInOut" 
      } 
    }
  };

  const textVariants = {
    initial: { opacity: 0, y: 5 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: 1.5, 
        duration: 0.7,
        ease: "easeOut" 
      } 
    },
    exit: { 
      opacity: 0,
      y: -5,
      transition: { 
        duration: 0.2 
      } 
    }
  };

  // Optional pulse effect after main animation
  const pulseVariants = {
    initial: { scale: 1 },
    animate: { 
      scale: [1, 1.05, 1],
      transition: { 
        delay: 2.5,
        duration: 1.5, 
        repeat: Infinity,
        repeatDelay: 1 
      } 
    }
  };

  // Colors based on your theme
  const primaryColor = "hsl(220, 85%, 30%)";        // Main color for the hexagon
  const primaryColorLight = "hsla(220, 85%, 30%, 0.3)"; // Lighter version for background elements

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="relative w-40 h-40 flex items-center justify-center"
      >
        {/* Background glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-full blur-xl"
          style={{ backgroundColor: "hsla(220, 85%, 30%, 0.1)" }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 0.6, 
            scale: 1.2,
            transition: { 
              delay: 1.2, 
              duration: 1 
            }
          }}
        />
        
        {/* Hexagon */}
        <motion.svg
          viewBox="0 0 100 100"
          className="absolute inset-0"
          variants={svgVariants}
        >
          {/* Outer hexagon */}
          <motion.path
            d="M50 5 L95 30 L95 70 L50 95 L5 70 L5 30 L50 5"
            fill="none"
            stroke={primaryColorLight}
            strokeWidth="4"
          />
          
          {/* Animated hexagon path */}
          <motion.path
            d="M50 5 L95 30 L95 70 L50 95 L5 70 L5 30 L50 5"
            fill="none"
            stroke={primaryColor}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
            strokeDasharray="0 1"
          />
          
          {/* Optional inner design elements */}
          <motion.path
            d="M50 18 L77 34 L77 66 L50 82 L23 66 L23 34 L50 18"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
            opacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ 
              pathLength: 1,
              transition: { 
                delay: 1.8, 
                duration: 1, 
                ease: "easeInOut" 
              } 
            }}
            strokeDasharray="0 1"
          />
        </motion.svg>
        
        {/* Logo/Text */}
        <motion.div
          variants={textVariants}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            variants={pulseVariants}
            style={{ color: primaryColor }}
            className="text-6xl font-bold tracking-tighter"
          >
            B
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;