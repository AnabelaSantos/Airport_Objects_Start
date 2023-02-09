const Bag = require("./Bag");

describe("Bag class", () => {
  //bag has weight
  test("bag has weight", () => {
    const bag = new Bag(25);
    expect(bag.weight).toBe(25);
  });
  //if bag has no weight, return error
  test("bag has no weight to return an error", () => {
    expect(() => new Bag()).toThrowError("bag needs weight");
  });
});

// // add constructor method to the bag class
// // include an argument that adds weigtht on the constructor method
// // assign the weight argument to become the weight of the instance of the class
// // export the module

// describe("Bag class integrity checks", () => {
//   test("should create Bag instance"),
//     () => {
//       const bag1 = new Bag();
//       expect(typeof bag1).toBe("object");
//     };
//   test("should accept an integer for weigtht and assign it to a property", () => {
//     const bag2 = newBag(240);
//     expect(bag2).toHaveProperty("weight", 240);
//   });
// });
