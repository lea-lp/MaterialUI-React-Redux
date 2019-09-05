import axios from 'axios';
import { displayResponse } from 'src/store/reducer';

const FETCH_REQUEST = 'FETCH_REQUEST';

const logMiddleware = (store) => (next) => (action) => {
  console.log('Je suis le middleware, et je laisse passer cette action: ', action);
  const url = 'https://swapi.co/api/people/1/';
  switch (action.type) {
    case FETCH_REQUEST:
      axios.get(url)
        .then((response) => {
          const { data } = response;
          store.dispatch(displayResponse(data));
        })

        .catch((error) => {
          console.log(error);
        });
      break;

    default:
      next(action);
  }
};

export const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

export default logMiddleware;
