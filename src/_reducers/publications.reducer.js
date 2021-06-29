import { publicationConstants } from '../_constants/publication.constants';

export function publications(state = {}, action) {
    switch (action.type) {
		case publicationConstants.SUBMIT_REQUEST:
            return { submitting: true };
        case publicationConstants.SUBMIT_SUCCESS:
            return {};
        case publicationConstants.SUBMIT_FAILURE:
            return {};
        case publicationConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case publicationConstants.GETALL_SUCCESS:
            return {
                items: action.publications
            };
        case publicationConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case publicationConstants.DELETE_REQUEST:
            // add 'deleting:true' property to publication being deleted
            return {
                ...state,
                items: state.items.map(publication =>
                    publication.id === action.id
                        ? { ...publication, deleting: true }
                        : publication
                )
            };
        case publicationConstants.DELETE_SUCCESS:
            // remove deleted publication from state
            return {
                items: state.items.filter(publication => publication.id !== action.id)
            };
        case publicationConstants.DELETE_FAILURE:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to publication
            return {
                ...state,
                items: state.items.map(publication => {
                    if (publication.id === action.id) {
                        // make copy of publication without 'deleting:true' property
                        const { deleting, ...publicationCopy } = publication;
                        // return copy of publication with 'deleteError:[error]' property
                        return { ...publicationCopy, deleteError: action.error };
                    }

                    return publication;
                })
            };
        default:
            return state
    }
}