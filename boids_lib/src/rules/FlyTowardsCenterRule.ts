import Rule from "./Rule";
import Vector from "../Vector";
import FlockSettings from "../FlockSettings";
import Boid from "../Boid";

class FlyTowardsCenterRule extends Rule {
  private flockSettings: FlockSettings;

  private turningFactor = 0.1;

  constructor(settings: FlockSettings) {
    super();
    this.flockSettings = settings;
  }

  doApply(boid: Boid, boids: Boid[]): Vector {
    let vectorToCenter = Vector.ZERO_VECTOR;
    let numNeighbors = 0;
    boids.forEach((otherBoid) => {
      if (
        otherBoid !== boid &&
        boid.getPosition().distance(otherBoid.getPosition()) <=
          this.flockSettings.getVisualRange()
      ) {
        vectorToCenter = vectorToCenter.add(otherBoid.getPosition());
        numNeighbors += 1;
      }
    });
    if (numNeighbors === 0) return Vector.ZERO_VECTOR;
    vectorToCenter = vectorToCenter.divide(numNeighbors);
    return vectorToCenter
      .subtract(boid.getPosition())
      .multiply(this.turningFactor);
  }

  getTurningFactor(): number {
    return this.turningFactor;
  }

  setTurningFactor(newFactor: number): void {
    this.turningFactor = newFactor;
  }
}

export default FlyTowardsCenterRule;
