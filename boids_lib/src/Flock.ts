import Boid from "./Boid";
import FlockSettings from "./FlockSettings";
import Rule from "./rules/Rule";
import FlyTowardsCenterRule from "./rules/FlyTowardsCenterRule";
import Vector from "./Vector";

class Flock {
  private boids: Boid[];

  private settings: FlockSettings;

  private rules: Rule[];

  constructor(settings = new FlockSettings()) {
    this.boids = new Array<Boid>();
    this.settings = settings;
    this.rules = [];
  }

  getBoids(): Boid[] {
    return this.boids;
  }

  tick(timeMs: number): void {
    this.boids.forEach((boid) => {
      let boidForces = Vector.ZERO_VECTOR;
      this.rules.forEach((rule) => {
        // console.log(`boidForces for rule: ${rule.apply(boid, this.boids)}`);
        boidForces = boidForces.add(rule.apply(boid, this.boids));
      });
      // console.log(`boidForces for boid: ${boidForces.toString()}`);
      boid.addVelocity(boidForces);
      boid.limitSpeed(this.settings.getSpeedLimit());

      boid.tick(timeMs);
    });
  }

  addBoid(boid: Boid): void {
    this.boids.push(boid);
  }

  addBoids(boids: Boid[]): void {
    boids.forEach((boid) => {
      this.addBoid(boid);
    });
  }

  addRule(rule: Rule): void {
    this.rules.push(rule);
  }

  getRules(): Rule[] {
    return this.rules;
  }
}

export default Flock;
