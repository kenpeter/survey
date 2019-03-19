import getSurvey from '../api/survey';
import orgnizeSurveyData from "../helpers/survey";

export const START_LOAD_HOME = 'app/home/START_LOAD_HOME';
export const LOAD_HOME_SUCCESS = 'app/home/LOAD_HOME_SUCCESS';
export const LOAD_HOME_FAIL = 'app/home/LOAD_HOME_FAIL';

const initState = {
  data: [],
  loading: false,
  isError: false,
  errors: '',
};

export const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case START_LOAD_HOME:
      return {
        ...state,
        loading: true,
        isError: false,
        errors: ''
      };
    case LOAD_HOME_SUCCESS:
      return {
        ...state,
        data: action.data,
        loading: false,
        isError: false,
        errors: ''
      };
    case LOAD_HOME_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        isError: true,
        errors: action.errors
      };
    default:
      return state;
  }
};

export const startLoadHome = () => {
  return {
    type: START_LOAD_HOME,
    loading: true,
    isError: false,
    errors: ''
  };
};

export const loadHomeSuccess = (data) => {
  return {
    type: LOAD_HOME_SUCCESS,
    data,
    loading: false,
    isError: false,
    errors: ''
  };
};

export const loadHomeFail = (errors) => {
  return {
    type: LOAD_HOME_FAIL,
    data : [],
    loading: false,
    isError: true,
    errors
  };
};

export const loadHomeAPI = ({ favoriteColor, favoriteFruit, gender }) => {
  return dispatch => {
    dispatch(startLoadHome());
    getSurvey()
      .then(res => {
        return res.json();
      })
      .then(res => {

        /*
        console.log('--');
        console.log(favoriteColor);
        console.log(favoriteFruit);
        console.log(gender);
        console.log(res);
        */

        const data = orgnizeSurveyData(res, favoriteColor, favoriteFruit, gender);
        dispatch(loadHomeSuccess(data));
      })
      .catch((err) => {
        loadHomeFail(err);
      });
  };
};
