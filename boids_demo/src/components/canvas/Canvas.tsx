import React from "react";
import "./Canvas.css";
import { Vector, Flock, FlockSettings } from "boids_lib";
import Boid from "../boid/Boid";
import Konva from "konva";
import { Stage, Layer, Circle } from "react-konva";

type CanvasProps = {
  flock: Flock;
  flockSettings: FlockSettings;
};

const Canvas: React.FC<CanvasProps> = (props) => {
  return (
    <Stage
      className="Canvas"
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <Layer offsetX={-window.innerWidth / 2} offsetY={-window.innerHeight / 2}>
        {props.flock.getBoids().map((boid, idx) => {
          return <Boid key={`boid${idx}`} boidModel={boid} />;
        })}
        {/* {props.flock.getBoids().map((boid) => {
          return (
            <Circle
              x={boid.getPosition().getX()}
              y={boid.getPosition().getY()}
              radius={props.flockSettings.getVisualRange()}
              stroke="green"
            />
          );
        })} */}
      </Layer>
    </Stage>
  );
};

export default Canvas;
