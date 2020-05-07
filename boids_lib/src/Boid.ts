import Vector from "./Vector";

class Boid {
  private position: Vector;

  private velocity: Vector;

  constructor(pos = Vector.ZERO_VECTOR, vel = Vector.ZERO_VECTOR) {
    this.position = pos;
    this.velocity = vel;
  }

  getPosition(): Vector {
    return this.position;
  }

  getVelocity(): Vector {
    return this.velocity;
  }

  addVelocity(newVelocity: Vector): void {
    this.velocity = this.velocity.add(newVelocity);
  }

  tick(timeMs: number): void {
    this.position = this.position.add(this.velocity.multiply(timeMs));
  }
}

export default Boid;
