import React, { useEffect, useRef, useState } from "react";

interface FadeInTextProps {
  children: React.ReactNode;
  delay?: number; // Optionally delay the fade-in effect
}

const FadeInText: React.FC<FadeInTextProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = textRef.current; // Store the reference to avoid issues

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      });
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [delay]);

  return (
    <div
      ref={textRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
      }}
    >
      {children}
    </div>
  );
};

export default FadeInText;
