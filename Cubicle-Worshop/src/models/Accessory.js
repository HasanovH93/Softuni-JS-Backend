const {Schema,model } = require('mongoose');

const accessorySchema = new Schema({
    name: {type: String, required: true},
    imageUrl: {type: String, required: [true, 'Img url is required'] , validate: [/https?:\/\//i,'Img url is invalid']},
    description: {type:String, required: true, maxLength: 500}
});

const Accessory = model('Accessory', accessorySchema);

module.exports = Accessory;