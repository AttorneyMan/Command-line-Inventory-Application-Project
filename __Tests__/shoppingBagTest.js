const { black } = require("cli-color");
const { create,  } = require("./src/controller")

 describe ("create" , () => {
    it("create one product order" , () => {
    const item = create();
    expect(item).toHaveProperty('id');
    expect(item).toHaveProperty('item');
    expect(item).toHaveProperty('color');
    expect(item).toHaveProperty('inStock');
    });
});

const item = {
    id: '',
    name: 'Everlasting_Hair_tye',
    price: 1.00,
    color: black,
    inStock: true
  };
  
  describe('item', () => {
    test('has color black', () => {
      expect(item.color).toBe(black);
    });
});

   
