/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { MyButton, MyCard } from 'src/styles/materialUi/materialUiStyles/styles';
import { CardContent, Grid, LinearProgress } from '@material-ui/core';

const Search = ({
  launchRequest,
  response: {
    name,
    gender,
    hair_color: hairColor,
    eye_color: eyeColor,
  },
  isLoading,
}) => (
  <>
    <MyButton onClick={launchRequest}>Je peux lancer une requête de OUFFFF</MyButton>
    <div className="allCards">
      <Grid container justify="center">
        <MyCard>
          {isLoading === true && <LinearProgress color="secondary" />}
          <CardContent>
            <div>{name}</div>
            <div>{gender}</div>
            <div>{hairColor}</div>
            <div>{eyeColor}</div>
          </CardContent>
        </MyCard>
      </Grid>
    </div>
  </>
);

Search.propTypes = {
  launchRequest: PropTypes.func.isRequired,
  name: PropTypes.string,
  gender: PropTypes.string,
  hair_color: PropTypes.string,
  eye_color: PropTypes.string,
};

Search.defaultProps = {
  name: '',
  gender: '',
  hair_color: '',
  eye_color: '',
};

export default Search;
