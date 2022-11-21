import { evenOrOdd, MultiplyByTwo } from "@/playground";
describe("Basic Math", () => {
  it("add two numbers", () => {
    expect(1 + 1).toBe(2);
  });
  it("minus two numbers", () => {
    expect(2 - 1).toBe(1);
  });
  it("minus two number greater than 1", () => {
    expect(3 - 1).toBeGreaterThan(1);
  });
  describe("EvenOrOdd", () => {
    describe("When number even", () => {
      it("indicate to number is even", () => {
        expect(evenOrOdd(4)).toBe("Even");
      });
    });

    describe("When number odd", () => {
      it("indicate to number is odd", () => {
        expect(evenOrOdd(5)).toBe("Odd");
      });
    });
  });

  //   TDD part
  describe("Mutiply number", () => {
    it("Multiply by two numbers", () => {
      expect(MultiplyByTwo(2, 3)).toBe(6);
    });
  });
});
