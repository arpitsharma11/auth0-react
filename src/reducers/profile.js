import { PROFILE_SET  } from '../actions/types';

const DEFAULT_STATE = {
    name: null,
    auth0Id: null
};

export default( state = DEFAULT_STATE, action ) => {
    switch(action.type){
        case PROFILE_SET:
            console.log('Profile set');
            return;
        default:
            return state;
    }
}