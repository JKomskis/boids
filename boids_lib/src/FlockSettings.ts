class FlockSettings {
  private visualRange: number;

  private visualAngle: number;

  private speedLimit: number;

  constructor(
    visualRange = 200,
    visualAngle = (2 / 3) * Math.PI,
    speedLimit = 1000
  ) {
    this.visualRange = visualRange;
    this.visualAngle = visualAngle;
    this.speedLimit = speedLimit;
  }

  getVisualRange(): number {
    return this.visualRange;
  }

  getVisualAngle(): number {
    return this.visualAngle;
  }

  getSpeedLimit(): number {
    return this.speedLimit;
  }

  setVisualRange(newRange: number): void {
    this.visualRange = newRange;
  }

  setVisualAngle(newAngle: number): void {
    this.visualAngle = newAngle;
  }

  setSpeedLimit(newSpeedLimit: number): void {
    this.speedLimit = newSpeedLimit;
  }
}

export default FlockSettings;
