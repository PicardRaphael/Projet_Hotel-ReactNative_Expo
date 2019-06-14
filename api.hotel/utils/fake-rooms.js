const axios = require('axios');
const faker = require('faker');

const apiURL = "http://localhost:3000/";

const generateRoom = (i) => {

    faker.seed(i);
    const id = faker.random.uuid();
    faker.seed(i);
    const name = faker.company.companyName();
    faker.seed(i);
    const image = "http://placeimg.com/1024/768/arch?a=" + i;
    faker.seed(i);
    const adress = faker.address.streetAddress()
    faker.seed(i);
    const city = faker.address.city();
    faker.seed(i);
    const description = faker.lorem.paragraph();
    faker.seed(i);
    const night_price = faker.random.number() /10;
    
    return {
        id,
        name,
        image,
        adress,
        city,
        description,
        night_price,
        currency: '€',
    }
};


let i = 0;
while (i < 30) {
    const room = generateRoom(i);
    console.log("room " + room.id + "created", room);
    axios.post( apiURL + 'rooms/', {
        ...room,
    })
        .then(res => {
            console.log("inserted ", res.data);
        })
        .catch(err => {
            console.log(err.message);
        });
    i++;
}