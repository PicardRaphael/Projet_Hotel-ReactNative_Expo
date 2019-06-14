const axios = require('axios');
const faker = require('faker');

const data = require('../db.json');

const apiURL = "http://localhost:3000/";

const generateMessage = (id, i) => {

    // faker.seed(i);
    const messageId = faker.random.uuid();
    // faker.seed(i);
    const author_last_name = faker.name.lastName;
    // faker.seed(i);
    const author_first_name = faker.name.firstName;
    // faker.seed(i);
    const avatar = faker.image.avatar();
    // faker.seed(i);
    const title = faker.company.catchPhrase();
    // faker.seed(i);
    const message = faker.lorem.paragraphs();
    
    return {
        id: messageId,
        author_first_name,
        author_last_name,
        avatar,
        title,
        message,
        room_id: id,
    }
};

data.rooms.forEach(room => {
    let i = 0;
    while (i < 3) {
        const message = generateMessage(room.id, i);
        console.log("created message ", message);
        axios.post( apiURL + 'messages/', {
            ...message,
        })
            .then(res => {
                console.log("inserted ");
            })
            .catch(err => {
                console.log(err);
            });
        i++;
    }
});

