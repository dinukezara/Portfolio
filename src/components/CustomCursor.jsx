import React, { useEffect, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Precise position for the inner dot
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Spring position for the trailing outer ring - faster for better control
    const springConfig = { damping: 24, stiffness: 280, mass: 0.6 };
    const trailingX = useSpring(mouseX, springConfig);
    const trailingY = useSpring(mouseY, springConfig);

    const moveMouse = useCallback((e) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        if (!isVisible) setIsVisible(true);
    }, [mouseX, mouseY, isVisible]);

    useEffect(() => {
        const handleHover = (e) => {
            const target = e.target;
            const isClickable =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button") ||
                target.classList.contains("cursor-pointer") ||
                window.getComputedStyle(target).cursor === "pointer";

            setIsHovering(isClickable);
        };

        const handleMouseDown = () => setIsPressed(true);
        const handleMouseUp = () => setIsPressed(false);
        const handleMouseLeave = () => setIsVisible(false);
        const handleMouseEnter = () => setIsVisible(true);

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mouseover", handleHover);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mouseleave", handleMouseLeave);
        document.addEventListener("mouseenter", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mouseover", handleHover);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mouseleave", handleMouseLeave);
            document.removeEventListener("mouseenter", handleMouseEnter);
        };
    }, [moveMouse]);

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
            {/* Outer Ring - Follows with a slight spring delay */}
            <motion.div
                style={{
                    x: trailingX,
                    y: trailingY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="absolute w-10 h-10 rounded-full border border-purple-500/40"
                animate={{
                    scale: isPressed ? 0.8 : (isHovering ? 1.5 : 1),
                    backgroundColor: isHovering ? "rgba(168, 85, 247, 0.1)" : "rgba(168, 85, 247, 0)",
                    borderColor: isHovering ? "rgba(168, 85, 247, 0.8)" : "rgba(168, 85, 247, 0.4)",
                    borderWidth: isPressed ? "2px" : "1px",
                }}
                transition={{ type: "spring", stiffness: 400, damping: 28 }}
            />

            {/* Inner Dot - Instant movement for precision */}
            <motion.div
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="absolute w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(168,85,247,1)]"
                animate={{
                    scale: isPressed ? 0.5 : (isHovering ? 0 : 1),
                    opacity: isHovering ? 0 : 1,
                }}
            />

            {/* Hover Center Point */}
            <motion.div
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                className="absolute w-2 h-2 rounded-full bg-purple-400"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                    scale: isHovering ? (isPressed ? 0.8 : 1) : 0,
                    opacity: isHovering ? 1 : 0,
                }}
            />
        </div>
    );
}
