// registerService.js
const axios = require('axios');
const genForm = require('../components/genForm');
const afbApiUri = "https://ggapi-uat.5k2an3or4q209.xyz/ggapi";

const RegisterService = async (token, datapost = {}) => {
    let data = await genForm(datapost);
    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: `${afbApiUri}/register`,
        headers: {
            Cookie: 'afbggC=ih0z5adeixnk0yseqkkduaa1',
            'Content-Type': 'multipart/form-data;',
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
            Connection: 'keep-alive',
            'Accept-Encoding': 'gzip, deflate, br',
            Accept: '*/*',
            ...data.getHeaders(),
            Authorization: `${token}`,
        },
        data: data,
    };

    let datares = await axios.request(config);
    return datares.data;
};

module.exports = RegisterService;
