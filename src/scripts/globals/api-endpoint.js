import CONFIG from './config';

const API_ENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  IMAGE: {
    SMALL: `${CONFIG.BASE_URL}images/small/`,
    MEDIUM: `${CONFIG.BASE_URL}images/medium/`,
    LARGE: `${CONFIG.BASE_URL}images/large/`,
  },
};

export default API_ENDPOINT;
