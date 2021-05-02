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

export const fetchHistory = async () => {
    let urlCases = url+'/germany/history/cases';
    let urlDeaths = url+'/germany/history/deaths';
    let urlRecovered = url+'/germany/history/recovered';

    try {
        const {data: cases} = await axios.get(urlCases);
        const {data: deaths} = await axios.get(urlDeaths)
        const {data: recovered} = await axios.get(urlRecovered)

        return {cases: cases, deaths: deaths, recovered: recovered};
    } catch (error) {
        return error;
    }
};