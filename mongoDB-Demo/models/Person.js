const { Schema, model } = require("mongoose");

const personSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true, min: [0, "Age cannot be negative"] },
  nationality: {type: String, enum:['Bulgarian','Serbian','German']}
});


personSchema.path('age').validate(function() {
    return this.age >= 0
}, 'Age cannot be negative')

personSchema.methods.sayHi = function () {
  return `${this.firstName} says HI! `;
};

personSchema.virtual("name")
.get(function () {
  return `${this.firstName} ${this.lastName}`;
})
.set(function(value){
      const [firstName,lastName] = value.split(' ');
      this.firstName = firstName;
      this.lastName = lastName;
})

const person = model("Person", personSchema);

module.exports = person;
