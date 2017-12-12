import * as actions from '../actions';

export default function(state = null, action) {
    
    console.log(action)
    switch (action.type) {
        case actions.FETCH_PRAYER:
            console.log("fetch prayer")
            return Object.assign({}, state, {
                prayerLoading: true,
                prayer: ""
            });
        default:
            return state;
    }
}
