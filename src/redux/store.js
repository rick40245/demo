import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // 檢視 'Merge Process' 部分的具體情況
};

const store = createStore(persistReducer(persistConfig, reducers), composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store)

//暴露store 
export default store;