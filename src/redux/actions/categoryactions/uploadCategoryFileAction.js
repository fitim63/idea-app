import {CATEGORY_SELECTED_FILE} from "../../constants";

export function uploadCategoryAction(event) {
    return {
        type: CATEGORY_SELECTED_FILE,
        payload: event.target.files[0]
    };
}
