import { accessCodeConstants } from '../_constants/accessCode.constants';

export function accessCodes(state = {}, action) {
    switch (action.type) {
		case accessCodeConstants.SUBMIT_REQUEST:
            return { submitting: true };
        case accessCodeConstants.SUBMIT_SUCCESS:
            return {};
        case accessCodeConstants.SUBMIT_FAILURE:
            return {};
        case accessCodeConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case accessCodeConstants.GETALL_SUCCESS:
            return {
                items: action.accessCodes
            };
        case accessCodeConstants.GETALL_FAILURE:
            return {
                error: action.error
            };
        case accessCodeConstants.DELETE_REQUEST:
            // add 'deleting:true' property to accessCode being deleted
            return {
                ...state,
                items: state.items.map(accessCode =>
                    accessCode.id === action.id
                        ? { ...accessCode, deleting: true }
                        : accessCode
                )
            };
        case accessCodeConstants.DELETE_SUCCESS:
            // remove deleted accessCode from state
            return {
                items: state.items.filter(accessCode => accessCode.id !== action.id)
            };
        case accessCodeConstants.DELETE_FAILURE:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to accessCode
            return {
                ...state,
                items: state.items.map(accessCode => {
                    if (accessCode.id === action.id) {
                        // make copy of accessCode without 'deleting:true' property
                        const { deleting, ...accessCodeCopy } = accessCode;
                        // return copy of accessCode with 'deleteError:[error]' property
                        return { ...accessCodeCopy, deleteError: action.error };
                    }

                    return accessCode;
                })
            };
        default:
            return state
    }
}