'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useSpring } from 'framer-motion';
import Link from 'next/link';

interface MousePosition {
  x: number;
  y: number;
}

const useMousePosition = (
  ref: React.RefObject<HTMLDivElement>
): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setMousePosition({
          x: ev.clientX - rect.left,
          y: ev.clientY - rect.top,
        });
      }
    };

    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', updateMousePosition);
      return () => {
        element.removeEventListener('mousemove', updateMousePosition);
      };
    }
  }, [ref]);

  return mousePosition;
};

const FloatingCard = ({
  children,
  x,
  y,
  initialX,
  initialY,
}: {
  children: React.ReactNode;
  x: number;
  y: number;
  initialX: number;
  initialY: number;
}) => {
  const controls = useAnimation();
  const springConfig = { damping: 10, stiffness: 100 };
  const xSpring = useSpring(0, springConfig);
  const ySpring = useSpring(0, springConfig);

  useEffect(() => {
    const moveX = initialX + x * 0.15 + (Math.random() - 0.5) * 20;
    const moveY = initialY + y * 0.15 + (Math.random() - 0.5) * 20;
    xSpring.set(moveX);
    ySpring.set(moveY);
  }, [x, y, initialX, initialY, xSpring, ySpring]);

  return (
    <motion.div
      className='absolute cursor-pointer rounded-lg bg-white p-2 text-sm shadow-md transition-shadow duration-300 ease-in-out hover:shadow-lg dark:bg-zinc-800'
      style={{ x: xSpring, y: ySpring }}
      animate={controls}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', damping: 5, stiffness: 200 }}
    >
      {children}
    </motion.div>
  );
};

const cards = [
  { text: 'San Francisco', x: -300, y: -200 },
  { text: 'Boston', x: 300, y: -150 },
  { text: 'React Developers', x: -200, y: 200 },
  { text: 'Full Stack Developers', x: 250, y: 180 },
  { text: 'Node.js Developers', x: -350, y: 50 },
  { text: 'Blockchain Developers', x: 320, y: -50 },
  { text: 'Flutter Developers', x: -100, y: -180 },
  { text: 'Front End Developers', x: 150, y: 100 },
  { text: 'Austin', x: -280, y: 120 },
  { text: 'New York', x: 280, y: 80 },
  { text: 'Seattle', x: -150, y: -100 },
  { text: 'Los Angeles', x: 100, y: -120 },
];

export default function HeroCardMotion() {
  const trackingAreaRef = useRef(null);
  const { x, y } = useMousePosition(trackingAreaRef);

  return (
    <main
      ref={trackingAreaRef}
      className='relative flex min-h-[calc(60vh)] w-full flex-col items-center justify-center overflow-hidden'
    >
      <h1 className='z-10 mb-8 text-center text-6xl font-bold'>
        <span className='mr-4 text-red-500'>w:</span>
        Find what's next
      </h1>

      {/* Floating Cards */}
      {cards.map((card, index) => (
        <FloatingCard
          key={index}
          x={x}
          y={y}
          initialX={card.x}
          initialY={card.y}
        >
          {card.text}
        </FloatingCard>
      ))}
    </main>
  );
}
