import { configureStore } from '@reduxjs/toolkit';
import ToggleStateReducer from './ToggleStateSlice';
import IFSCSearchDetailReducer from './IfscSearchDetailInfo';
import IFSCFetchDetailReducer from './IfscFetchDetails';
import WebsiteDetailsReducer from './WebsiteDetailsSlice';

const ReduxStore = configureStore({
    reducer: {
        ifscSearchDetailInfo: IFSCSearchDetailReducer,
        ifscFetchDetails : IFSCFetchDetailReducer,
        toggleState : ToggleStateReducer,
        websiteDetails: WebsiteDetailsReducer
    }
});

export default ReduxStore;