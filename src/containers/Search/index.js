// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Search from 'src/components/Search';

// Action Creators
import { fetchRequest } from 'src/store/logMiddleware';
import { activeLoader } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  response: state.response,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  launchRequest: () => {
    dispatch(activeLoader());
    dispatch(fetchRequest());
  },
});

// Container
const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

// == Export
export default SearchContainer;
