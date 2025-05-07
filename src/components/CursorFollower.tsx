import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <>
      {/* Larger glow effect */}
      <motion.div
        className="cursor-follower-glow"
        animate={{ 
          x: mousePosition.x - 250, // Center the 500px glow (500/2 = 250)
          y: mousePosition.y - 250  // Center the 500px glow (500/2 = 250)
        }}
        transition={{ 
          type: "spring", 
          stiffness: 1000, // Higher stiffness for tighter following
          damping: 40,
          mass: 0.2 // Lower mass for faster response
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "550px", // Much larger glow as requested
          height: "550px", // Much larger glow as requested
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(100, 108, 255, 0.15) 0%, rgba(100, 108, 255, 0.08) 30%, rgba(100, 108, 255, 0) 70%)",
          pointerEvents: "none",
          zIndex: 9998,
          mixBlendMode: "screen",
          filter: "blur(15px)",
        }}
      />
      
      {/* Small cursor circle */}
      <motion.div
        className="cursor-follower"
        animate={{ 
          x: mousePosition.x - 5,
          y: mousePosition.y - 5
        }}
        transition={{ 
          type: "spring", 
          stiffness: 2000, // Very high stiffness for immediate following
          damping: 50,
          mass: 0.1 // Very low mass for immediate response
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: "rgba(100, 108, 255, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.44)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default CursorFollower;