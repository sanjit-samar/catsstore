import { call, put, takeEvery } from "redux-saga/effects";
import catsApi from "../services/catsApi";
import {getCatsSuccess, getCatsFetch} from './catsSlice';
// call is to call the apis
// put is used to allow call of actions
// takeEvery to watch or trigger the function whenever action is called

function* workGetCatsfetch(){
    const catsResponse = yield call(()=>catsApi());
    yield put(getCatsSuccess(catsResponse));

    
    // const catsResponse = yield call(()=> fetch('https://api.thecatapi.com/v1/breeds'));
    // const response = yield catsResponse.json();
    // const formattedResponse = response.slice(0,10);
    //yield put(getCatsSuccess(formattedResponse));
}

function* catsSaga(){
    // yield takeEvery('cats/getCatsFetch', workGetCatsfetch);
    yield takeEvery(getCatsFetch.type, workGetCatsfetch); 
}

export default catsSaga;