// // import { motion } from 'framer-motion';
// // import { useEffect } from 'react';

// // const Loader = () => {
// //   useEffect(() => {
// //     // Lock body scroll during loading
// //     document.body.style.overflow = 'hidden';
    
// //     // Cleanup function to restore scroll when unmounted
// //     return () => {
// //       document.body.style.overflow = '';
// //     };
// //   }, []);

// //   // Sequence variants for the animation
// //   const containerVariants = {
// //     initial: { opacity: 0 },
// //     animate: { 
// //       opacity: 1,
// //       transition: { duration: 0.5 } 
// //     },
// //     exit: { 
// //       opacity: 0,
// //       scale: 0.9,
// //       transition: { 
// //         duration: 0.5,
// //         when: "afterChildren" 
// //       } 
// //     }
// //   };

// //   const svgVariants = {
// //     initial: { opacity: 1 },
// //     animate: { 
// //       opacity: 1,
// //       transition: { 
// //         delay: 0.2,
// //         when: "beforeChildren" 
// //       } 
// //     },
// //     exit: { 
// //       opacity: 0,
// //       scale: 0.8,
// //       transition: { 
// //         duration: 0.3,
// //         when: "afterChildren" 
// //       } 
// //     }
// //   };

// //   const pathVariants = {
// //     initial: { pathLength: 0 },
// //     animate: { 
// //       pathLength: 1,
// //       transition: { 
// //         duration: 1.5, 
// //         ease: "easeInOut" 
// //       } 
// //     },
// //     exit: { 
// //       pathLength: 0,
// //       transition: { 
// //         duration: 0.3, 
// //         ease: "easeInOut" 
// //       } 
// //     }
// //   };

// //   const textVariants = {
// //     initial: { opacity: 0, y: 5 },
// //     animate: { 
// //       opacity: 1, 
// //       y: 0,
// //       transition: { 
// //         delay: 1.5, 
// //         duration: 0.7,
// //         ease: "easeOut" 
// //       } 
// //     },
// //     exit: { 
// //       opacity: 0,
// //       y: -5,
// //       transition: { 
// //         duration: 0.2 
// //       } 
// //     }
// //   };

// //   // Optional pulse effect after main animation
// //   const pulseVariants = {
// //     initial: { scale: 1 },
// //     animate: { 
// //       scale: [1, 1.05, 1],
// //       transition: { 
// //         delay: 2.5,
// //         duration: 1.5, 
// //         repeat: Infinity,
// //         repeatDelay: 1 
// //       } 
// //     }
// //   };

// //   // Colors based on your theme
// //   const primaryColor = "hsl(220, 85%, 30%)";        // Main color for the hexagon
// //   const primaryColorLight = "hsla(220, 85%, 30%, 0.3)"; // Lighter version for background elements

// //   return (
// //     <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
// //       <motion.div
// //         variants={containerVariants}
// //         initial="initial"
// //         animate="animate"
// //         exit="exit"
// //         className="relative w-40 h-40 flex items-center justify-center"
// //       >
// //         {/* Background glow effect */}
// //         <motion.div 
// //           className="absolute inset-0 rounded-full blur-xl"
// //           style={{ backgroundColor: "hsla(220, 85%, 30%, 0.1)" }}
// //           initial={{ opacity: 0, scale: 0.8 }}
// //           animate={{ 
// //             opacity: 0.6, 
// //             scale: 1.2,
// //             transition: { 
// //               delay: 1.2, 
// //               duration: 1 
// //             }
// //           }}
// //         />
        
// //         {/* Hexagon */}
// //         <motion.svg
// //           viewBox="0 0 100 100"
// //           className="absolute inset-0"
// //           variants={svgVariants}
// //         >
// //           {/* Outer hexagon */}
// //           <motion.path
// //             d="M50 5 L95 30 L95 70 L50 95 L5 70 L5 30 L50 5"
// //             fill="none"
// //             stroke={primaryColorLight}
// //             strokeWidth="4"
// //           />
          
// //           {/* Animated hexagon path */}
// //           <motion.path
// //             d="M50 5 L95 30 L95 70 L50 95 L5 70 L5 30 L50 5"
// //             fill="none"
// //             stroke={primaryColor}
// //             strokeWidth="4"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //             variants={pathVariants}
// //             strokeDasharray="0 1"
// //           />
          
// //           {/* Optional inner design elements */}
// //           <motion.path
// //             d="M50 18 L77 34 L77 66 L50 82 L23 66 L23 34 L50 18"
// //             fill="none"
// //             stroke={primaryColor}
// //             strokeWidth="2"
// //             opacity="0.6"
// //             initial={{ pathLength: 0 }}
// //             animate={{ 
// //               pathLength: 1,
// //               transition: { 
// //                 delay: 1.8, 
// //                 duration: 1, 
// //                 ease: "easeInOut" 
// //               } 
// //             }}
// //             strokeDasharray="0 1"
// //           />
// //         </motion.svg>
        
// //         {/* Logo/Text */}
// //         <motion.div
// //           variants={textVariants}
// //           className="absolute inset-0 flex items-center justify-center"
// //         >
// //           <motion.div
// //             variants={pulseVariants}
// //             style={{ color: primaryColor }}
// //             className="text-6xl font-bold tracking-tighter"
// //           >
// //             B
// //           </motion.div>
// //         </motion.div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default Loader;


// import { motion } from 'framer-motion';
// import { useEffect } from 'react';

// const Loader = () => {
//   useEffect(() => {
//     // Lock body scroll during loading
//     document.body.style.overflow = 'hidden';
    
//     // Cleanup function to restore scroll when unmounted
//     return () => {
//       document.body.style.overflow = '';
//     };
//   }, []);

//   // Sequence variants for the animation
//   const containerVariants = {
//     initial: { opacity: 0 },
//     animate: { 
//       opacity: 1,
//       transition: { duration: 0.5 } 
//     },
//     exit: { 
//       opacity: 0,
//       scale: 0.9,
//       transition: { 
//         duration: 0.5,
//         when: "afterChildren" 
//       } 
//     }
//   };

//   const svgVariants = {
//     initial: { opacity: 1 },
//     animate: { 
//       opacity: 1,
//       transition: { 
//         delay: 0.2,
//         when: "beforeChildren" 
//       } 
//     },
//     exit: { 
//       opacity: 0,
//       scale: 0.8,
//       transition: { 
//         duration: 0.3,
//         when: "afterChildren" 
//       } 
//     }
//   };

//   const pathVariants = {
//     initial: { pathLength: 0 },
//     animate: { 
//       pathLength: 1,
//       transition: { 
//         duration: 1.5, 
//         ease: "easeInOut" 
//       } 
//     },
//     exit: { 
//       pathLength: 0,
//       transition: { 
//         duration: 0.3, 
//         ease: "easeInOut" 
//       } 
//     }
//   };

//   const textVariants = {
//     initial: { opacity: 0, y: 5 },
//     animate: { 
//       opacity: 1, 
//       y: 0,
//       transition: { 
//         delay: 1.5, 
//         duration: 0.7,
//         ease: "easeOut" 
//       } 
//     },
//     exit: { 
//       opacity: 0,
//       y: -5,
//       transition: { 
//         duration: 0.2 
//       } 
//     }
//   };

//   // Optional pulse effect after main animation
//   const pulseVariants = {
//     initial: { scale: 1 },
//     animate: { 
//       scale: [1, 1.05, 1],
//       transition: { 
//         delay: 2.5,
//         duration: 1.5, 
//         repeat: Infinity,
//         repeatDelay: 1 
//       } 
//     }
//   };

//   // Colors based on your theme
//   const primaryColor = "hsl(220, 85%, 30%)";        // Main color for the hexagon
//   const primaryColorLight = "hsla(220, 85%, 30%, 0.3)"; // Lighter version for background elements

//   return (
//     <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
//       <motion.div
//         variants={containerVariants}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         className="relative w-40 h-40 flex items-center justify-center"
//       >
//         {/* Background glow effect */}
//         <motion.div 
//           className="absolute inset-0 rounded-full blur-xl"
//           style={{ backgroundColor: "hsla(220, 85%, 30%, 0.1)" }}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ 
//             opacity: 0.6, 
//             scale: 1.2,
//             transition: { 
//               delay: 1.2, 
//               duration: 1 
//             }
//           }}
//         />
        
//         {/* Hexagon */}
//         <motion.svg
//           viewBox="0 0 100 100"
//           className="absolute inset-0"
//           variants={svgVariants}
//         >
//           {/* Outer hexagon */}
//           <motion.path
//             d="M50 5 L95 30 L95 70 L50 95 L5 70 L5 30 L50 5"
//             fill="none"
//             stroke={primaryColorLight}
//             strokeWidth="4"
//           />
          
//           {/* Animated hexagon path */}
//           <motion.path
//             d="M50 5 L95 30 L95 70 L50 95 L5 70 L5 30 L50 5"
//             fill="none"
//             stroke={primaryColor}
//             strokeWidth="4"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             variants={pathVariants}
//             strokeDasharray="0 1"
//           />
//         </motion.svg>
        
//         {/* Logo/Text */}
//         <motion.div
//           variants={textVariants}
//           className="absolute inset-0 flex items-center justify-center"
//         >
//           <motion.div
//             variants={pulseVariants}
//             style={{ color: primaryColor }}
//             className="text-6xl font-bold tracking-tighter"
//           >
//             B
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default Loader;


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

  // Define blob container exit animation
  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.5 } 
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.5 }
    }
  };

  // Add the CSS for the blob loader
  const loaderStyles = `
    .loader-container {
      --deg: 1;
      --x: -50%;
      --y: -50%;
      --speed: 150ms;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 99;
      background: radial-gradient(circle at 50% 35%, #002a3d, #00171f);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .loader-blob {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(var(--x, -50%), var(--y, -50%)) rotate(0deg);
      font-size: 20vmin;
      width: 3em;
      height: 3em;
      border-radius: 90% 95% 85% 105%;
      background: #06bfff;
      mix-blend-mode: screen;
      filter: hue-rotate(0deg);
      animation: wobble calc(var(--speed) * var(--t)) linear infinite;
      transform-origin: -var(--y) -var(--x);
      box-shadow: 0 0 .5em .2em #000 inset, 0 0 .15em 0 #fff;
    }

    .loader-blob:nth-child(1) {
      --x: -53%;
      --y: -53%;
      --t: 37;
    }

    .loader-blob:nth-child(2) {
      --x: -47%;
      --y: -52%;
      --t: 58;
    }

    .loader-blob:nth-child(3) {
      --x: -45%;
      --y: -50%;
      --t: 46;
    }

    .loader-blob:nth-child(4) {
      --x: -53%;
      --y: -45%;
      --t: 72;
    }

    .loader-blob:nth-child(5) {
      --x: -55%;
      --y: -45%;
      --t: 62;
    }

    @keyframes wobble {
      0%, 100% {
        border-radius: 90% 95% 85% 105%;
        filter: hue-rotate(0deg);
      }
      25% {
        border-radius: 105% 90% 95% 85%;
        filter: hue-rotate(90deg);
      }
      50% {
        border-radius: 85% 105% 90% 95%;
        filter: hue-rotate(180deg);
      }
      75% {
        border-radius: 95% 85% 105% 90%;
        filter: hue-rotate(270deg);
      }
    }
  `;

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <style>{loaderStyles}</style>
      <div className="loader-container">
        <div className="loader-blob"></div>
        <div className="loader-blob"></div>
        <div className="loader-blob"></div>
        <div className="loader-blob"></div>
        <div className="loader-blob"></div>
      </div>
    </motion.div>
  );
};

export default Loader;