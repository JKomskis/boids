import Vector from "../Vector";
import Boid from "../Boid";

export abstract class Rule {
  private enabled: boolean;

  constructor() {
    this.enabled = true;
  }

  disable(): void {
    this.enabled = false;
  }

  enable(): void {
    this.enabled = true;
  }

  apply(boid: Boid, boids: Boid[]): Vector {
    return this.enabled ? this.doApply(boid, boids) : Vector.ZERO_VECTOR;
  }

  abstract doApply(boid: Boid, boids: Boid[]): Vector;
}

export default Rule;
