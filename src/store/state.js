import { getLocalUser } from "../helpers/auth";
const user = getLocalUser();
export const state = {
    currentUser: user,
    httpRequest: false,
    DataList: [],
    authUser: false,
    Filter: {},
    Config: [],
    isConfigLoaded: false,
    requiredDataList: [],
    formType: 1,
    updateId: '',
    modalTitle:'',
    formObject : {},
}