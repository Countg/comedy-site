import axios from 'axios';

const BASE_URL = 'faf4d447984199c5f26bc6d7897fa9d0';
const Gavin = 'Gavin%20Stephens';

const showDates = async () => {
  try {
    const res = await axios.get(
      `https://rest.bandsintown.com/artists/${Gavin}/events?app_id=${BASE_URL}`
    );

    let showData = res.data;
    console.log(showData);

    return showData;
  } catch (error) {
    console.log(error);
  }
};

export default showDates;
