const FormData = require('form-data');

const genFormLogin = async (res) => {
    let data = new FormData();
    for (const [name, value] of Object.entries(res)) {
        console.log(`genFormLogin key: ${name}, value: ${value}`);
        data.append(name, value);
    }
    return data;
};

module.exports = genFormLogin;