const initialState = {
    name: 'Talal',
    age: '24',
    city: 'Karachi'
};

export default function(state=initialState, action){
    switch(action.type){
        case 'FIRST_REDUCER':
            return state;

        default:
            return state;
    }
}
