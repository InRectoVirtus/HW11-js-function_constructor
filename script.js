const SIZE_SMALL = { size: 'small', price: 50, calories: 20, };
const SIZE_MIDDLE = { size: 'middle', price: 75, calories: 30, };
const SIZE_BIG = { size: 'big', price: 100, calories: 40, };

const CHEESE = { type: 'cheese', price: 10, calories: 20, };
const SALAD = { type: 'salad', price: 20, calories: 5, };
const POTATO = { type: 'potato', price: 15, calories: 10, };
const FLAVORING = { type: 'flavoring', price: 15, calories: 0, };
const MAYO = { type: 'mayo', price: 20, calories: 5, };

  function Hamburger(s) {
    this.price = s.price;
    this.calories = s.calories;
    this.addModifier = (m) => {
      this.price = this.price + m.price;
      this.calories = this.calories + m.calories;
    };

    this.getPrice = () => {
      return this.price;
    };

    this.getCalories = () => {
      return this.calories;
    };
  }

  const hamburger = new Hamburger(SIZE_SMALL);

  hamburger.addModifier(POTATO);
  hamburger.addModifier(MAYO);

  console.log('Price with sauce: ' + hamburger.getPrice());
  console.log('Calories with sauce: ' + hamburger.getCalories());