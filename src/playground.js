const fruits = ["Apple", "Banana", "Orange"];
const vegetables = ["Cucumber", "Radish"];

const spread = [...fruits, ...vegetables];

const developer = {
  salary: 1000,
  experience: 4.5,
  tech: ["VUE", "HTML", "CSS"],
  lookingForWork: true,
  doubleSalary() {
    this.salary = this.salary * 2;
    this.lookingForWork = false;
  },
};

export const evenOrOdd = (number) => {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

// tdd part
export const MultiplyByTwo = (n1, n2) => n1 * n2;
