import { publicationConstants } from '../_constants/publication.constants'
import { publicationService } from '../_services/publication.service'
import { alertActions } from './alert.actions'
import { history } from '../_helpers/history';

export const publicationActions = {
	submit,
	getAll, 
	delete: _delete
}

function submit(publication) {
	return dispatch => {
		dispatch(request(publication))
		
		publicationService.submit(publication)
			.then(
				publication => {
					dispatch(success());
					history.push("/admin");
					dispatch(alertActions.success("Publication successfully added"));
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
	function request(publication) { return { type: publicationConstants.SUBMIT_REQUEST, publication } }
	function success(publication) { return { type: publicationConstants.SUBMIT_SUCCESS, publication } }
	function failure(error) { return { type: publicationConstants.SUBMIT_FAILURE, error } }
}
function getAll(){
    return dispatch => {
		dispatch(request())

		publicationService.getAll()
			.then(
				publications => dispatch(success(publications)),
				error => dispatch(failure(error.toString()))
			)
    }

	function request() { return {type: publicationConstants.GETALL_REQUEST } }
	function success(publications) { return {type: publicationConstants.GETALL_SUCCESS, publications } }
	function failure(error) { return {type: publicationConstants.GETALL_FAILURE, error } }
}

function _delete(id){
    return dispatch => {
        dispatch(request(id));

        publicationService.delete(id)
            .then(
                publication => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: publicationConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: publicationConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: publicationConstants.DELETE_FAILURE, id, error } }
}