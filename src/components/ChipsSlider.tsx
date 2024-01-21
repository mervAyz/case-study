import React, { useEffect, useRef } from "react";
import "../styles/ChipsSlider.scss";

interface ChipData {
  IconUrl: string;
  Name: string;
}

interface ChipSliderProps {
  chipsData: ChipData[];
}

const ChipSlider: React.FC<ChipSliderProps> = ({ chipsData }) => {
  const slider = useRef<HTMLDivElement>(null);
  let isDragging = false;

  console.log("chipsData", chipsData);

  useEffect(() => {
    const handleMouseMove = (drag: MouseEvent) => {
      if (!isDragging) return;
      if (slider.current) {
        slider.current.scrollLeft -= drag.movementX;
        slider.current.classList.add("dragging");
      }
    };
  
    slider.current?.addEventListener("mousemove", handleMouseMove);
  
    const handleMouseDown = () => {
      isDragging = true;
    };
  
    slider.current?.addEventListener("mousedown", handleMouseDown);
  
    const handleMouseUp = () => {
      isDragging = false;
      if (slider.current) {
        slider.current.classList.remove("dragging");
      }
    };
  
    document.addEventListener("mouseup", handleMouseUp);
  
    return () => {
      slider.current?.removeEventListener("mousemove", handleMouseMove);
      slider.current?.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);
  

  return (
    <div className="chipSliderMainContainer">
      <div className="chipSliderContainer" ref={slider}>
        {chipsData.map((data, i) => (
          <div className="content" key={i}>
            <img
              className="img-icon"
              src={data.IconUrl}
              alt={`Icon for ${data.Name}`}
            />
            <span>{data.Name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipSlider;
