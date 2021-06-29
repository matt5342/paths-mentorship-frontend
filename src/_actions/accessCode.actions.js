import { accessCodeConstants } from '../_constants/accessCode.constants'
import { accessCodeService } from '../_services/accessCode.service'
import { alertActions } from './alert.actions'
import { history } from '../_helpers/history';

export const accessCodeActions = {
	submit,
	getAll, 
	delete: _delete
}

function submit(accessCode) {
	return dispatch => {
		dispatch(request(accessCode))
		
		accessCodeService.submit(accessCode)
			.then(
				accessCode => {
					dispatch(success());
					history.push("/admin");
					dispatch(alertActions.success("Access Code successfully added"));
				},
				error => {
                    const message =
                    (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                    error.message ||
                    error.toString();
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(message))
				}
			)
	}
	function request(accessCode) { return { type: accessCodeConstants.SUBMIT_REQUEST, accessCode } }
	function success(accessCode) { return { type: accessCodeConstants.SUBMIT_SUCCESS, accessCode } }
	function failure(error) { return { type: accessCodeConstants.SUBMIT_FAILURE, error } }
}
function getAll(){
    return dispatch => {
		dispatch(request())

		accessCodeService.getAll()
			.then(
				accessCodes => dispatch(success(accessCodes)),
				error => dispatch(failure(error.toString()))
			)
    }

	function request() { return {type: accessCodeConstants.GETALL_REQUEST } }
	function success(accessCodes) { return {type: accessCodeConstants.GETALL_SUCCESS, accessCodes } }
	function failure(error) { return {type: accessCodeConstants.GETALL_FAILURE, error } }
}

function _delete(id){
    return dispatch => {
        dispatch(request(id));

        accessCodeService.delete(id)
            .then(
                accessCode => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: accessCodeConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: accessCodeConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: accessCodeConstants.DELETE_FAILURE, id, error } }
}