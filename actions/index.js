import axios from 'axios';
import {
    FETCH_PRAYER
} from './types';

export function requestPrayer() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  console.log("prayer fired")

  return {
    type: FETCH_PRAYER,
    payload: request
  };
}