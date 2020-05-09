import React from "react";
import "./Boid.css";
import { Boid as BoidModel } from "boids_lib";
import { Path } from "react-konva";

type BoidProps = {
  boidModel: BoidModel;
};

class Boid extends React.Component<BoidProps> {
  render() {
    return (
      //<div>
      // path is 90px x 60px at scale 1
      <Path
        x={this.props.boidModel.getPosition().getX()}
        y={this.props.boidModel.getPosition().getY()}
        data="M 88.238596,28.58284 44.885563,14.17623 3.6620771,0.48009297 C 0.14069696,-0.69171803 -1.048705,0.35660097 1.0152781,2.808475 l 17.7459399,21.056113 4.600558,5.459742 c 0.31266,0.37211 0.31194,0.97977 0,1.350249 L 19.390859,35.389012 1.0145577,57.192057 c -2.0668653,2.451881 -0.87314044,3.498019 2.6482397,2.329477 L 44.885563,45.823762 88.238596,31.419333 c 2.348539,-0.78121 2.348539,-2.056382 0,-2.836493 z"
        fill="black"
        scaleX={0.25}
        scaleY={0.25}
        offsetX={45}
        offsetY={30}
        rotation={
          (Math.atan2(
            this.props.boidModel.getVelocity().getY(),
            this.props.boidModel.getVelocity().getX()
          ) *
            180) /
          Math.PI
        }
      />
      // <path
      //   //transform="translate(17 17) rotate(45)"
      //   id={`${props.boidModel.getPosition().toString()}`}
      //   className="rotate"
      //   transform={`
      //     rotate(
      //       0
      //       ${props.boidModel.getPosition().getX() - 90 / 2}
      //       ${props.boidModel.getPosition().getY() - 90 / 2}
      //     )
      //     translate(
      //       ${props.boidModel.getPosition().getX() - 90 / 2}
      //       ${props.boidModel.getPosition().getY() - 90 / 2}
      //     )
      //     `}
      //   fill="black"
      //   d="M92.083,5.311l-43.33,16.848L7.554,38.182c-3.521,1.367-3.383,3.156,0.303,3.977l31.669,7.036l8.211,1.825  c0.559,0.125,1.117,0.684,1.241,1.241l1.577,7.089l7.285,32.793c0.819,3.688,2.609,3.821,3.979,0.303L77.84,51.246l16.85-43.328  C95.602,5.57,94.43,4.398,92.083,5.311z"
      // />
      //</div>
    );
  }
}

export default Boid;
