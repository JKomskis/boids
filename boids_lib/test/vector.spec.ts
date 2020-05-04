import { describe, it, expect } from "@jest/globals";
import Vector from "../src/vector";

describe("length", () => {
  it("returns 0 when given the 0 vector", () => {
    const v = new Vector(0, 0, 0);
    expect(v.length()).toBeCloseTo(0, 8);
  });

  it("returns 1 for <0, 0, 1>", () => {
    const v = new Vector(0, 0, 1);
    expect(v.length()).toBeCloseTo(1, 8);
  });

  it("returns sqrt(2) for <0, 1, 1>", () => {
    const v = new Vector(0, 1, 1);
    expect(v.length()).toBeCloseTo(Math.sqrt(2), 8);
  });

  it("returns sqrt(3) for <1, 1, 1>", () => {
    const v = new Vector(1, 1, 1);
    expect(v.length()).toBeCloseTo(Math.sqrt(3), 8);
  });

  it("returns 13 for <12, 3, 4>", () => {
    const v = new Vector(12, 3, 4);
    expect(v.length()).toBeCloseTo(13, 8);
  });
});

describe("length2", () => {
  it("returns 0 when given the 0 vector", () => {
    const v = new Vector(0, 0, 0);
    expect(v.length2()).toBe(0);
  });

  it("returns 1 for <0, 0, 1>", () => {
    const v = new Vector(0, 0, 1);
    expect(v.length2()).toBe(1);
  });

  it("returns 2 for <0, 1, 1>", () => {
    const v = new Vector(0, 1, 1);
    expect(v.length2()).toBe(2);
  });

  it("returns 3 for <1, 1, 1>", () => {
    const v = new Vector(1, 1, 1);
    expect(v.length2()).toBe(3);
  });

  it("returns 169 for <12, 3, 4>", () => {
    const v = new Vector(12, 3, 4);
    expect(v.length2()).toBe(169);
  });
});

describe("add", () => {
  it("returns the same valued vector when given the 0 vector", () => {
    const v = new Vector(1, 2, 3);
    const zeroVec = new Vector(0, 0, 0);
    expect(v.add(zeroVec)).toEqual(new Vector(1, 2, 3));
  });

  it("adds vector in x dimension", () => {
    const v = new Vector(1, 2, 3);
    const toAdd = new Vector(3, 0, 0);
    expect(v.add(toAdd)).toEqual(new Vector(4, 2, 3));
  });

  it("adds vector in y dimension", () => {
    const v = new Vector(1, 2, 3);
    const toAdd = new Vector(0, 3, 0);
    expect(v.add(toAdd)).toEqual(new Vector(1, 5, 3));
  });

  it("adds vector in z dimension", () => {
    const v = new Vector(1, 2, 3);
    const toAdd = new Vector(0, 0, 3);
    expect(v.add(toAdd)).toEqual(new Vector(1, 2, 6));
  });

  it("adds vector in multiple dimensions", () => {
    const v = new Vector(1, 2, 3);
    const toAdd = new Vector(4, 5, 6);
    expect(v.add(toAdd)).toEqual(new Vector(5, 7, 9));
  });
});

describe("subtract", () => {
  it("returns the same valued vector when given the 0 vector", () => {
    const v = new Vector(1, 2, 3);
    const zeroVec = new Vector(0, 0, 0);
    expect(v.subtract(zeroVec)).toEqual(new Vector(1, 2, 3));
  });

  it("subtracts vector in x dimension", () => {
    const v = new Vector(1, 2, 3);
    const toAdd = new Vector(3, 0, 0);
    expect(v.subtract(toAdd)).toEqual(new Vector(-2, 2, 3));
  });

  it("subtracts vector in y dimension", () => {
    const v = new Vector(1, 2, 3);
    const toAdd = new Vector(0, 3, 0);
    expect(v.subtract(toAdd)).toEqual(new Vector(1, -1, 3));
  });

  it("subtracts vector in z dimension", () => {
    const v = new Vector(1, 2, 3);
    const toAdd = new Vector(0, 0, 3);
    expect(v.subtract(toAdd)).toEqual(new Vector(1, 2, 0));
  });

  it("subtracts vector in multiple dimensions", () => {
    const v = new Vector(1, 2, 3);
    const toAdd = new Vector(4, 5, 6);
    expect(v.subtract(toAdd)).toEqual(new Vector(-3, -3, -3));
  });
});

describe("multiply", () => {
  it("returns the same valued vector when scaled by 1", () => {
    const v = new Vector(1, 2, 3);
    expect(v.multiply(1)).toEqual(new Vector(1, 2, 3));
  });

  it("grows the vector when factor > 1", () => {
    const v = new Vector(1, 2, 3);
    expect(v.multiply(2)).toEqual(new Vector(2, 4, 6));
  });

  it("grows the vector with a fractional factor", () => {
    const v = new Vector(1, 2, 3);
    expect(v.multiply(2.5)).toEqual(new Vector(2.5, 5, 7.5));
  });

  it("shrinks the vector when 0 < factor < 1", () => {
    const v = new Vector(1, 2, 3);
    expect(v.multiply(0.5)).toEqual(new Vector(0.5, 1, 1.5));
  });

  it("reverses the vector when factor < 0", () => {
    const v = new Vector(1, 2, 3);
    expect(v.multiply(-1)).toEqual(new Vector(-1, -2, -3));
  });
});

describe("divide", () => {
  it("returns the same valued vector when scaled by 1", () => {
    const v = new Vector(1, 2, 3);
    expect(v.divide(1)).toEqual(new Vector(1, 2, 3));
  });

  it("shrinks the vector when factor > 1", () => {
    const v = new Vector(1, 2, 3);
    expect(v.divide(2)).toEqual(new Vector(0.5, 1, 1.5));
  });

  it("shrinks the vector with a fractional factor", () => {
    const v = new Vector(1, 2, 5);
    expect(v.divide(2.5)).toEqual(new Vector(0.4, 0.8, 2));
  });

  it("grows the vector when 0 < factor < 1", () => {
    const v = new Vector(1, 2, 3);
    expect(v.divide(0.5)).toEqual(new Vector(2, 4, 6));
  });

  it("reverses the vector when factor < 0", () => {
    const v = new Vector(1, 2, 3);
    expect(v.divide(-1)).toEqual(new Vector(-1, -2, -3));
  });

  it("throws when dividing by 0", () => {
    const v = new Vector(1, 2, 3);
    expect(() => {
      v.divide(0);
    }).toThrow();
  });
});

describe("equal", () => {
  it("returns true when all dimensions have equal values", () => {
    const v = new Vector(1, 2, 3);
    const v2 = new Vector(1, 2, 3);
    expect(v.equal(v2)).toBe(true);
  });

  it("returns true when all dimensions have close values", () => {
    const v = new Vector(1, 2, 3);
    const v2 = new Vector(1.00000001, 2.0000001, 2.9999999);
    expect(v.equal(v2)).toBe(true);
  });

  it("returns false when any dimension doesn't have close values", () => {
    const v = new Vector(1, 2, 3);

    expect(v.equal(new Vector(2, 2, 3))).toBe(false);
    expect(v.equal(new Vector(1, 3, 3))).toBe(false);
    expect(v.equal(new Vector(1, 2, 2))).toBe(false);
    expect(v.equal(new Vector(1.01, 2, 3))).toBe(false);
    expect(v.equal(new Vector(1, 2, 3.0001))).toBe(false);
    expect(v.equal(new Vector(2, 3, 4))).toBe(false);
    expect(v.equal(new Vector(0.99, 2, 3))).toBe(false);
    expect(v.equal(new Vector(-1, -2, -3))).toBe(false);
  });
});

describe("notEqual", () => {
  it("returns false when all dimensions have equal values", () => {
    const v = new Vector(1, 2, 3);
    const v2 = new Vector(1, 2, 3);
    expect(v.notEqual(v2)).toBe(false);
  });

  it("returns true when all dimensions have close values", () => {
    const v = new Vector(1, 2, 3);
    const v2 = new Vector(1.00000001, 2.0000001, 2.9999999);
    expect(v.notEqual(v2)).toBe(false);
  });

  it("returns false when any dimension doesn't have close values", () => {
    const v = new Vector(1, 2, 3);

    expect(v.notEqual(new Vector(2, 2, 3))).toBe(true);
    expect(v.notEqual(new Vector(1, 3, 3))).toBe(true);
    expect(v.notEqual(new Vector(1, 2, 2))).toBe(true);
    expect(v.notEqual(new Vector(1.01, 2, 3))).toBe(true);
    expect(v.notEqual(new Vector(1, 2, 3.0001))).toBe(true);
    expect(v.notEqual(new Vector(2, 3, 4))).toBe(true);
    expect(v.notEqual(new Vector(0.99, 2, 3))).toBe(true);
    expect(v.notEqual(new Vector(-1, -2, -3))).toBe(true);
  });
});

describe("normalize", () => {
  it("returns the same valued vector when it's magnitude is 1", () => {
    expect(new Vector(1, 0, 0).normalize()).toEqual(new Vector(1, 0, 0));
    expect(new Vector(0, 1, 0).normalize()).toEqual(new Vector(0, 1, 0));
    expect(new Vector(0, 0, 1).normalize()).toEqual(new Vector(0, 0, 1));
    expect(
      new Vector(0, Math.sin(Math.PI / 4), Math.cos(Math.PI / 4)).normalize()
    ).toEqual(new Vector(0, Math.sin(Math.PI / 4), Math.cos(Math.PI / 4)));
  });

  it("returns a normalized version of a vector when it's magnitude is not 1", () => {
    expect(new Vector(6, 0, 0).normalize()).toEqual(new Vector(1, 0, 0));
    expect(new Vector(0, 7, 0).normalize()).toEqual(new Vector(0, 1, 0));
    expect(new Vector(0, 0, 8).normalize()).toEqual(new Vector(0, 0, 1));
    expect(
      new Vector(0, 500, 500)
        .normalize()
        .equal(new Vector(0, Math.sin(Math.PI / 4), Math.cos(Math.PI / 4)))
    ).toBe(true);
  });
});

describe("dot", () => {
  it("returns 0 when the vectors are perpendicular", () => {
    expect(new Vector(1, 0, 0).dot(new Vector(0, 1, 0))).toEqual(0);
    expect(new Vector(1, 0, 0).dot(new Vector(0, 0, 1))).toEqual(0);
    expect(new Vector(0, 1, 0).dot(new Vector(2, 0, 0))).toEqual(0);
    expect(new Vector(0, 1, 0).dot(new Vector(0, 0, 3))).toEqual(0);
    expect(new Vector(1, 1, 0).dot(new Vector(0, 0, 3))).toEqual(0);
  });

  it("returns the dot product of two vectors ", () => {
    expect(new Vector(1, 3, -5).dot(new Vector(4, -2, -1))).toEqual(3);
  });
});

describe("cross", () => {
  it("returns the zero vector when the vectors are have the same or opposite direction", () => {
    expect(
      new Vector(0, 0, 1).cross(new Vector(0, 0, 2)).equal(new Vector(0, 0, 0))
    ).toBe(true);
    expect(
      new Vector(0, 0, 1).cross(new Vector(0, 0, -2)).equal(new Vector(0, 0, 0))
    ).toBe(true);
    expect(
      new Vector(0, 1, 0).cross(new Vector(0, 2, 0)).equal(new Vector(0, 0, 0))
    ).toBe(true);
    expect(
      new Vector(0, 1, 0).cross(new Vector(0, -2, 0)).equal(new Vector(0, 0, 0))
    ).toBe(true);
    expect(
      new Vector(1, 0, 0).cross(new Vector(2, 0, 0)).equal(new Vector(0, 0, 0))
    ).toBe(true);
    expect(
      new Vector(1, 0, 0).cross(new Vector(-2, 0, 0)).equal(new Vector(0, 0, 0))
    ).toBe(true);
    expect(
      new Vector(0, 0, 0).cross(new Vector(1, 0, 0)).equal(new Vector(0, 0, 0))
    ).toBe(true);
    expect(
      new Vector(0, 0, 0).cross(new Vector(0, 1, 0)).equal(new Vector(0, 0, 0))
    ).toBe(true);
    expect(
      new Vector(0, 0, 0).cross(new Vector(0, 0, 1)).equal(new Vector(0, 0, 0))
    ).toBe(true);
  });

  it("returns the cross product of two vectors ", () => {
    expect(new Vector(2, 3, 4).cross(new Vector(5, 6, 7))).toEqual(
      new Vector(-3, 6, -3)
    );
  });
});

describe("angle", () => {
  it("returns 0 when the vectors have the same direction", () => {
    expect(new Vector(0, 0, 1).angle(new Vector(0, 0, 2))).toBe(0);
    expect(new Vector(0, 1, 0).angle(new Vector(0, 3, 0))).toBe(0);
    expect(new Vector(1, 0, 0).angle(new Vector(1, 0, 0))).toBe(0);
    expect(new Vector(1, 2, 3).angle(new Vector(3, 6, 9))).toBe(0);
  });

  it("returns Pi when the vectors have opposite directions", () => {
    expect(new Vector(0, 0, 1).angle(new Vector(0, 0, -2))).toBeCloseTo(
      Math.PI
    );
    expect(new Vector(0, 1, 0).angle(new Vector(0, -3, 0))).toBeCloseTo(
      Math.PI
    );
    expect(new Vector(1, 0, 0).angle(new Vector(-1, 0, 0))).toBeCloseTo(
      Math.PI
    );
    expect(new Vector(1, 2, 3).angle(new Vector(-3, -6, -9))).toBeCloseTo(
      Math.PI
    );
  });

  it("returns the cross product of two vectors ", () => {
    expect(new Vector(4, 0, 7).angle(new Vector(-2, 1, 3))).toBeCloseTo(1.125);
    expect(new Vector(3, 4, -7).angle(new Vector(-2, 1, 3))).toBeCloseTo(2.367);
  });

  it("throws when finding the angle between a vector and the zero vector", () => {
    expect(() => {
      new Vector(0, 0, 0).angle(new Vector(3, 6, 9));
    }).toThrow();
    expect(() => {
      new Vector(3, 6, 9).angle(new Vector(0, 0, 0));
    }).toThrow();
  });
});
