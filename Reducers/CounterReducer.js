import * as Actions from '../Actions/ActionTypes'

const CounterReducer = (state = {count: 0}, action) => {
    console.log(action.type)
    switch (action.type) {
        case Actions.FETCH_PRAYER:
            return Object.assign({}, state, {
                prayerLoading: true,
                prayer: ""
            });
        case Actions.RECEIVE_PRAYER:
            console.log(action.payload)
            return Object.assign({}, state, {
                prayer: action.payload
            });
        default:
            return state;
    }
}

export default CounterReducer;