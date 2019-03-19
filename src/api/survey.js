import Config from '../config';

const getSurvey = () => {
  /* eslint-disable no-undef */
  return fetch(Config.surveyUrl, {
    method: 'GET',
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    mode: 'cors'
  });
};

export default getSurvey;
