const mongoose = require("mongoose");
const mongoURL = 'mongodb+srv://rohansamratnitjsr:Rohan123@cluster0.iz9ile6.mongodb.net/gofoodmern?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(mongoURL);
    console.log('Connected');
    const foodItems = mongoose.connection.db.collection('food_items');
    try {
        const data = await foodItems.find({}).toArray()
            const food_Category = mongoose.connection.db.collection('food_Category');
            const catData = await food_Category.find({}).toArray()

         global.food_Category = catData;
        global.food_items = data;

        console.log(global.food_items);
        console.log(global.food_Category);
    } catch (error) {
        console.error(error);
    }
};
module.exports = mongoDB;

