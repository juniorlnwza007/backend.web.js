const axios = require('axios');
const FormData = require('form-data');
const afbApiUri = "https://ggapi-uat.5k2an3or4q209.xyz/ggapi";

const gamelistService = async (token, { brandcode, domainname, providercode, currencycode }) => {
    let data = new FormData();
    data.append("brandcode", brandcode);
    data.append("domainname", domainname);
    data.append("providercode", providercode);
    data.append("currencycode", currencycode);

    let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${afbApiUri}/gamelist`,
        headers: {
            Cookie: "afbggC=ih0z5adeixnk0yseqkkduaa1",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36",
            Connection: "keep-alive",
            "Accept-Encoding": "gzip, deflate, br",
            Accept: "*/*",
            Authorization: token,
            ...data.getHeaders(),
        },
        data: data,
    };

    try {
        let datares = await axios.request(config);
        console.log('External API response:', datares.data);
        return datares.data;
    } catch (error) {
        console.error('Error in external API request:', error.message);
        throw error;
    }
};

module.exports = gamelistService;
