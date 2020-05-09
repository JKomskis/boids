import React from "react";
import "./Boid.css";
import { Boid as BoidModel } from "boids_lib";

type BoidProps = {
  boidModel: BoidModel;
};

const Boid: React.FC<BoidProps> = (props) => {
  return (
    //<div>
    <path
      //transform="translate(17 17) rotate(45)"
      id={`${props.boidModel.getPosition().toString()}`}
      className="rotate"
      transform={`
        rotate(
          0
          ${props.boidModel.getPosition().getX() - 90 / 2}
          ${props.boidModel.getPosition().getY() - 90 / 2}
        )
        translate(
          ${props.boidModel.getPosition().getX() - 90 / 2} 
          ${props.boidModel.getPosition().getY() - 90 / 2}
        )
        `}
      fill="black"
      d="M92.083,5.311l-43.33,16.848L7.554,38.182c-3.521,1.367-3.383,3.156,0.303,3.977l31.669,7.036l8.211,1.825  c0.559,0.125,1.117,0.684,1.241,1.241l1.577,7.089l7.285,32.793c0.819,3.688,2.609,3.821,3.979,0.303L77.84,51.246l16.85-43.328  C95.602,5.57,94.43,4.398,92.083,5.311z"
    />
    //</div>
  );
};

export default Boid;
