import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';


const options = {
   
    params: {
      
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'ca1084edb5mshfd96c592b39fa1ep1d9064jsnb9a248678b94',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
    //   console.log(response.data);
  } catch (error) {
      console.error(error);
  }
export const FetchData = async(url)=>{
const {data} =await axios.get(`${BASE_URL}/${url}`,options);
return data;
}