const menu = {
  _courses:{
    appetizers:[],
    mains:[],
    desserts:[]
  },
    get appetizers () {
     return this._courses.appetizers;
    },
       get desserts () {
            return this._courses.desserts;
    },

    get mains () {
      return this._courses.mains;
    },
     set appetizers(appetizers){
  this._courses.appetizers= appetizers;
},
    set mains(mains){
        this._courses.mains=mains;
},
  
    set desserts(desserts){
   this._courses.desserts=desserts;
},
   get courses () {
      return{
    appetizers: this.appetizers,
   	desserts: this.desserts,
    mains: this.mains
    };
  },
    addDishToCourse(courseName,dishName,dishPrice){
      const dish = {

        name: dishName,
        price: dishPrice,
      };
     return this._courses[courseName].push(dish);
       
    },
    getRandomDishFromCourse: function (courseName){
    const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
},
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizer');
       const mains = this.getRandomDishFromCourse('mains');
       const desserts = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizers.price + mains.price +desserts.price;
      return ` ${appetizers.name}, ${mains.name}, ${desserts.name}, ${totalPrice}`;
    }
  }

menu.addDishToCourse ('appetizers', 'Caesar Salad', 10);
menu.addDishToCourse ('appetizers', 'Caesar Salad', 10);
let meal = menu.generateRandomMeal();
console.log(meal);

