class FlockSettings {
  private visualRange: number;

  private visualAngle: number;

  constructor(visualRange = 5, visualAngle = (2 / 3) * Math.PI) {
    this.visualRange = visualRange;
    this.visualAngle = visualAngle;
  }

  getVisualRange(): number {
    return this.visualRange;
  }

  getVisualAngle(): number {
    return this.visualAngle;
  }

  setVisualRange(newRange: number): void {
    this.visualRange = newRange;
  }

  setVisualAngle(newAngle: number): void {
    this.visualAngle = newAngle;
  }
}

export default FlockSettings;
