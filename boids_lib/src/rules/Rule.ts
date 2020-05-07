import Vector from "../Vector";
import Boid from "../Boid";

export default interface Rule {
  apply(boid: Boid, boids: Array<Boid>): Vector;
}
