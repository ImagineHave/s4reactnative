import { REQUEST_QUOTE_PENDING, REQUEST_QUOTE_FULFILLED } from '../actions/types';

const initialState = {
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
  }


export default function(state = initialState, action) {
    switch (action.type) {
        case REQUEST_QUOTE_PENDING:
            return {
                ...state,
                data: [],
                isFetching: true
            };
        case REQUEST_QUOTE_FULFILLED:
            return {
                ...state,
                isFetching: false,
                data: [ action.payload.data.answer ]
            }
        default:
            return state;
    }
}
