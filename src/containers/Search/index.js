// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Search from 'src/components/Search';

// Action Creators
import { FETCH_REQUEST } from 'src/store/logMiddleware';

const mapStateToProps = null;

const mapDispatchToProps = () => ({
  launchRequest: () => {
    console.log('launch des trucs stp');
  },
});

// Container
const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

// == Export
export default SearchContainer;
