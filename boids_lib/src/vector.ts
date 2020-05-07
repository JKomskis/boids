class Vector {
  static ZERO_VECTOR = new Vector(0, 0, 0);

  private static EPS = 0.000001;

  private x: number;

  private y: number;

  private z: number;

  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  length(): number {
    return Math.sqrt(this.length2());
  }

  length2(): number {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }

  add(other: Vector): Vector {
    return new Vector(this.x + other.x, this.y + other.y, this.z + other.z);
  }

  subtract(other: Vector): Vector {
    return new Vector(this.x - other.x, this.y - other.y, this.z - other.z);
  }

  multiply(factor: number): Vector {
    return new Vector(this.x * factor, this.y * factor, this.z * factor);
  }

  divide(factor: number): Vector {
    if (factor === 0) throw new Error("Cannot divide vector by 0.");
    return new Vector(this.x / factor, this.y / factor, this.z / factor);
  }

  equal(other: Vector): boolean {
    return (
      Math.abs(this.x - other.x) < Vector.EPS &&
      Math.abs(this.y - other.y) < Vector.EPS &&
      Math.abs(this.z - other.z) < Vector.EPS
    );
  }

  notEqual(other: Vector): boolean {
    return !this.equal(other);
  }

  normalize(): Vector {
    if (this.equal(Vector.ZERO_VECTOR)) {
      return this;
    }
    return this.divide(this.length());
  }

  dot(other: Vector): number {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }

  cross(other: Vector): Vector {
    return new Vector(
      this.y * other.z - this.z * other.y,
      this.z * other.x - this.x * other.z,
      this.x * other.y - this.y * other.x
    );
  }

  angle(other: Vector): number {
    if (this.equal(Vector.ZERO_VECTOR) || other.equal(Vector.ZERO_VECTOR)) {
      throw new Error("Cannot find angle between a vector and the 0 vector.");
    }
    return Math.acos(this.dot(other) / (this.length() * other.length()));
  }

  distance(other: Vector): number {
    return this.subtract(other).length();
  }

  distance2(other: Vector): number {
    return this.subtract(other).length2();
  }

  toString(): string {
    return `{X: ${this.x}, Y: ${this.y}, Z: ${this.z}}`;
  }

  getX(): number {
    return this.x;
  }

  getY(): number {
    return this.y;
  }

  getZ(): number {
    return this.z;
  }
}

export default Vector;
