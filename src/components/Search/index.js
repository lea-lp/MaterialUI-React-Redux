import React from 'react';
import PropTypes from 'prop-types';
import { MyButton } from 'src/styles/materialUi/materialUiStyles/styles';
import { Card, CardContent } from '@material-ui/core';

// https://swapi.co/api/people/1/

const Search = ({ launchRequest }) => (
  <>
    <MyButton onClick={launchRequest}>Je peux lancer une requête de OUFFFF</MyButton>
    <div className="allCards">
      <Card>
        <CardContent>
            CONTENT
        </CardContent>
      </Card>
    </div>
  </>
);

Search.propTypes = {
  launchRequest: PropTypes.func.isRequired,
};

export default Search;
