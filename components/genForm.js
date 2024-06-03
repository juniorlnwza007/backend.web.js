const FormData = require('form-data');

const genForm = async (res) => {
    let data = new FormData();
    for (const [name, value] of Object.entries(res)) {
        console.log(`genForm ${name}: ${value}`);
        data.append(name, value);
    }
    return data;
};

module.exports = genForm;
