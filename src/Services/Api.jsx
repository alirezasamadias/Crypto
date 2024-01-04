import axios from 'axios';

const baseUrl = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

const getCoin = async () => {
    const response = await axios.get(baseUrl);
    return response.data;
}

export { getCoin };