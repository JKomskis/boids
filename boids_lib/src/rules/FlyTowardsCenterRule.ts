import Rule from "./Rule";
import Vector from "../Vector";
import FlockSettings from "../FlockSettings";
import Boid from "../Boid";

class FlyTowardsCenterRule implements Rule {
  private enabled: boolean;

  private flockSettings: FlockSettings;

  constructor(settings: FlockSettings) {
    this.enabled = true;
    this.flockSettings = settings;
  }

  apply(boid: Boid, boids: Array<Boid>): Vector {
    if (!this.enabled) return Vector.ZERO_VECTOR;

    let vectorToCenter = Vector.ZERO_VECTOR;
    boids.forEach((otherBoid) => {
      if (
        otherBoid !== boid &&
        boid.getPosition().distance(otherBoid.getPosition()) <=
          this.flockSettings.getVisualRange()
      ) {
        vectorToCenter = vectorToCenter.add(otherBoid.getPosition());
      }
    });
    return vectorToCenter;
  }
}

export default FlyTowardsCenterRule;
