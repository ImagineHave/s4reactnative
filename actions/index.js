import axios from 'axios';
import { REQUEST_QUOTE } from './types';

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
    type: REQUEST_QUOTE,
    payload: request
  };
}