import axios from 'axios';

const BASE_URL = process.env.NEXT_APP_BASE_URL;
const Gavin = 'Gavin%20Stephens';

const showDates = async () => {
  try {
    const res = await axios.get(
      `https://rest.bandsintown.com/artists/${Gavin}/events?app_id=${BASE_URL}`
    );

    let showData = res.data;

    return showData;
  } catch (error) {
    console.log(error);
  }
};

export default showDates;
