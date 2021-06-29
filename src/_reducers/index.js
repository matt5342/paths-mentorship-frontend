
import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { accessCodes } from './accessCodes.reducer';
import { publications } from './publications.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    accessCodes,
    publications,
    alert
});

export default rootReducer;