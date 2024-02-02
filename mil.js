const axios = require('axios');

const fetchData = async () => {
  const options = {
    method: 'GET',
    url: 'https://crypto-news16.p.rapidapi.com/news/top/50',
    headers: {
      'X-RapidAPI-Key': '21a1ffb710msh17798960304fcc1p1f691ajsn7d3f7c362914',
      'X-RapidAPI-Host': 'crypto-news16.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

fetchData(); // Call the function to fetch the data
