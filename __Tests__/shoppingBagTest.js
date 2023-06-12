

const { create } = require("../src/controller")


describe("create on product order", () => {
  it("returns product order ", () => {
      expect(create({},)).toStrictEqual({ id: "", name: "Everlasting_Hair_tye", price: 1.00})
  });
  
   it("returns default if nothing is done", () => {
      expect(create(id,"CgyfHtutY")).toBe(clc.red("Error!" + clc.blue("You Have No") + "Magic🪄"))
   });
}); 

   
