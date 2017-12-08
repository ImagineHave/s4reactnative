import { connect } from 'react-redux';
import axios from 'axios'

import * as Actions from './ActionTypes';
import CounterComponent from '../Components/CounterComponent';

const mapStateToProps = (state) => ({
    prayer: state.counterReducer.prayer,
    prayerLoading: state.counterReducer.prayerLoading
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({type: Actions.COUNTER_INCREMENT}),
    decrement: () => dispatch({type: Actions.COUNTER_DECREMENT}),
    
    fetchPrayer: (text) => dispatch({
        type: Actions.FETCH_PRAYER, 
        payload: 
             axios({
                method: 'post',
                url: 'https://django4j.imagine-have.xyz/s4j/p/',
                data: {
                    prayer: text 
                },
                timeout: 5000
            }).then(function(response) {
                dispatch({
                    type: Actions.RECEIVE_PRAYER, 
                    payload: response.data.answer.passage
                });
            }).catch(function(error) {
                console.log(error);
            })
        
    }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent); 