import Rule from "./Rule";
import Vector from "../Vector";
import FlockSettings from "../FlockSettings";
import Boid from "../Boid";

class StayWithinBoundsRule extends Rule {
  private flockSettings: FlockSettings;

  private minX: number;

  private maxX: number;

  private minY: number;

  private maxY: number;

  private minZ: number;

  private maxZ: number;

  private turningFactor = 50;

  private margin = 50;

  constructor(
    settings: FlockSettings,
    minX: number,
    maxX: number,
    minY: number,
    maxY: number,
    minZ: number,
    maxZ: number
  ) {
    super();
    this.flockSettings = settings;
    this.minX = minX;
    this.maxX = maxX;
    this.minY = minY;
    this.maxY = maxY;
    this.minZ = minZ;
    this.maxZ = maxZ;
  }

  doApply(boid: Boid, _boids: Boid[]): Vector {
    let returnVector = Vector.ZERO_VECTOR;

    if (boid.getPosition().getX() < this.minX + this.margin) {
      returnVector = returnVector.add(new Vector(this.turningFactor, 0, 0));
    } else if (boid.getPosition().getX() > this.maxX - this.margin) {
      returnVector = returnVector.add(new Vector(-this.turningFactor, 0, 0));
    }

    if (boid.getPosition().getY() < this.minY + this.margin) {
      returnVector = returnVector.add(new Vector(0, this.turningFactor, 0));
    } else if (boid.getPosition().getY() > this.maxY - this.margin) {
      returnVector = returnVector.add(new Vector(0, -this.turningFactor, 0));
    }

    if (boid.getPosition().getZ() < this.minZ + this.margin) {
      returnVector = returnVector.add(new Vector(0, 0, this.turningFactor));
    } else if (boid.getPosition().getZ() > this.maxZ - this.margin) {
      returnVector = returnVector.add(new Vector(0, 0, -this.turningFactor));
    }
    return returnVector;
  }
}

export default StayWithinBoundsRule;
