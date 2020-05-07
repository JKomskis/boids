import Boid from "./Boid";
import FlockSettings from "./FlockSettings";
import Rule from "./rules/Rule";
import FlyTowardsCenterRule from "./rules/FlyTowardsCenterRule";
import Vector from "./Vector";

class Flock {
  private boids: Array<Boid>;

  private settings: FlockSettings;

  private rules: Array<Rule>;

  constructor() {
    this.boids = new Array<Boid>();
    this.settings = new FlockSettings();
    this.rules = [new FlyTowardsCenterRule(this.settings)];
  }

  getBoids(): Array<Boid> {
    return this.boids;
  }

  tick(timeMs: number): void {
    this.boids.forEach((boid) => {
      let boidForces = Vector.ZERO_VECTOR;
      this.rules.forEach((rule) => {
        boidForces = boidForces.add(rule.apply(boid, this.boids));
      });
      boid.addVelocity(boidForces);
      boid.tick(timeMs);
    });
  }

  addBoid(boid: Boid): void {
    this.boids.push(boid);
  }
}

export default Flock;
