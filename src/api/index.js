import axios from 'axios'

const url = 'https://api.corona-zahlen.org';

export const fetchData = async () => {
    let endpoint = url+'/germany';

    try {
        const {data} = await axios.get(endpoint);

        return {data};
    } catch (error) {
        return error;
    }
};