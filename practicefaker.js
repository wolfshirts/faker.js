const faker = require('./index.js')
faker.locale = 'en_US'
console.log(faker.address.zipCodeByState('RI'));
console.log(typeof(faker.address.zipCodeByState('CA')))