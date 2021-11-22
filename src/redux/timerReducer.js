
const initialState = {
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds()
}
const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE': {
            if (!(state.seconds % 4)) {
                console.log('decided to 4')
            }
            return state;
        }
        default:
            return state;
    }
}


export default timerReducer;