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

  limitSpeed(speedLimit: number): void {
    if (this.velocity.length() > speedLimit) {
      this.velocity = this.velocity.normalize().multiply(speedLimit);
    }
  }

  tick(timeMs: number): void {
    this.position = this.position.add(this.velocity.multiply(timeMs / 1000));
  }
}

export default Boid;
