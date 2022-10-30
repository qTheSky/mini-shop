import {AppRootStateType} from "../../app/store";

export const getItems = (state: AppRootStateType) => state.items.items
export const getItemsStatus = (state: AppRootStateType) => state.items.status