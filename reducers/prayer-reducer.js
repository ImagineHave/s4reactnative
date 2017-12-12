import * as actions from '../actions';

export default function(state = null, action) {
    console.log(action.type)
    console.log(action.payload)
    switch (action.type) {
        case actions.FETCH_PRAYER:
            return Object.assign({}, state, {
                prayerLoading: true,
                prayer: ""
            });
        default:
            return state;
    }
}
