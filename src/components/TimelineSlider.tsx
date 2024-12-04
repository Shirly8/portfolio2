import React, { useState, useRef } from "react";
import "./Timeline.css";

// Import page components
import RBC1 from "../pages/RBC1";
import RBC2 from "../pages/RBC2";
import KBH from "../pages/KBH";

const TimelineSlider = () => {
  const components = [<RBC1 />, <RBC2 />, <KBH />];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState(0); // Track the rocketship's position
  const timelineRef = useRef<HTMLDivElement>(null);
  const rocketshipRef = useRef<HTMLImageElement>(null);

  // Handle start of drag
  const startDrag = (event: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = event.type === "touchstart" ? (event as React.TouchEvent).touches[0].clientX : (event as React.MouseEvent).clientX;
    setDragPosition(clientX);
  };

  // Handle the drag movement (Move to next point with drag)
  const handleDrag = (event: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;

    const clientX = event.type === "touchmove" ? (event as React.TouchEvent).touches[0].clientX : (event as React.MouseEvent).clientX;
    const deltaX = clientX - dragPosition;

    // Only allow the rocketship to move by a predefined increment (next point)
    if (Math.abs(deltaX) > 50) {  // If the drag is significant enough, move to the next point
      const direction = deltaX > 0 ? 1 : -1; // Determine the direction of the drag
      const newIndex = Math.min(Math.max(currentIndex + direction, 0), components.length - 1); // Ensure the index stays within bounds
      setCurrentIndex(newIndex);

      // Move the rocketship to the new position
      if (rocketshipRef.current) {
        const timelineWidth = timelineRef.current ? timelineRef.current.offsetWidth : 0;
        const maxPosition = timelineWidth - rocketshipRef.current.offsetWidth;
        const newPosition = (newIndex / (components.length - 1)) * maxPosition;
        rocketshipRef.current.style.left = `${newPosition}px`;
      }

      setDragPosition(clientX); // Update the drag position to prevent continuous dragging
      setIsDragging(false); // End the drag immediately after moving to the next point
    }
  };

  // End the drag
  const endDrag = () => {
    if (!isDragging) return;
    setIsDragging(false);
  };

  return (
    <div className="timeline-container">
      <div
        className="timeline-line"
        ref={timelineRef}
        onMouseDown={startDrag}
        onMouseMove={handleDrag}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onTouchStart={startDrag}
        onTouchMove={handleDrag}
        onTouchEnd={endDrag}
      >
        <img
          src="/rocketship.png"
          alt="Rocketship"
          className="rocketship"
          ref={rocketshipRef}
        />
      </div>

      {/* Sliding Content */}
      <div className="slider-content">
        <div
          className="slider-track"
          style={{
            transform: `translateX(-${currentIndex * 100}vw)`,
            transition: "transform 2.5s ease-out",
          }}
        >
          {components.map((Component, index) => (
            <div key={index} className="slider-item">
              {Component}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimelineSlider;
