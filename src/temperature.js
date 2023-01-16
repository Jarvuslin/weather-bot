import fetch from 'node-fetch';
export const temperature = async () => {
    const url = "https://weatherapi.pelmorex.com/api/v1/observation/placecode/caon0441?locale=en-ca&unit=metric";
    const response = await fetch(url);
    const data = await response.json();
    const temperature = data["observation"]["temperature"].toString();
    return temperature
}

