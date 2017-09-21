import { Component } from 'react';
import Items from '../components/Items';
import Header from '../components/Header';
import Page from '../components/Page';
import withData from '../lib/withData';
import PropTypes from 'prop-types';

const Home = props => {
  const page = parseInt(props.url.query.page) || 1;
  return (
    <Page>
      <Items page={page} />
    </Page>
  );
};

Home.propTypes = {
  url: PropTypes.object,
};

export default withData(Home);
