import React from "react";
import "./SvgCanvas.css";
import { Vector, Flock } from "boids_lib";
import Boid from "../boid/Boid";

type SvgCanvasProps = {
  flock: Flock;
};

const SvgCanvas: React.FC<SvgCanvasProps> = (props) => {
  return (
    <div className="SvgCanvas">
      <svg
        version="1.1"
        x="0px"
        y="0px"
        //viewBox={`0 0 ${props.size.width} ${props.size.height}`}
        viewBox={`${-window.innerWidth / 2} ${
          (-window.innerHeight * 0.99) / 2
        } ${window.innerWidth} ${window.innerHeight * 0.99}`}
        //enable-background="new 0 0 100 100"
      >
        {props.flock.getBoids().map((boid) => {
          console.log(boid);
          return <Boid boidModel={boid} />;
        })}
      </svg>
    </div>
  );
};

export default SvgCanvas;
