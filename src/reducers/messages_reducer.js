
// import XXX from '../actions';

export default function(state = null, action) {
    switch (action.type) {
        case 'MESSAGES':
            return action.payload
        default:
            return state;
    }
}