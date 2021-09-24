import axios from "axios";

const fetch = async (q, freshness) => {
  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q,
      safeSearch: "Off",
      textFormat: "Raw",
      freshness,
      mkt: "es-MX",
      count: "100",
    },
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "a23e8c4b5cmshf7d9c6feadc8dcfp14d782jsnd242b383d0fe",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data.value;
  } catch (error) {
    console.log(error);
  }
};

export default fetch;
