import axios from 'axios';
import {
    FETCH_PRAYER
} from './types';

export function requestPrayer(prayerText) {
  const request = axios({
                    method: 'post',
                    url: 'https://django4j.imagine-have.xyz/s4j/p/',
                    data: {
                        prayer: prayerText
                    },
                    timeout: 5000
               });
  return {
    type: FETCH_PRAYER,
    payload: request
  };
}