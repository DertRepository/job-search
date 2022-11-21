import { evenOrOdd, MultiplyByTwo } from "@/playground";

describe("Basic Math", () => {
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
