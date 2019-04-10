import * as React from 'react';
import withDataFetching from 'HOC/withDataFetching';
import { makeGetRequest } from 'services/networking/request';
import Home, { Props } from './Home';
import { connect } from 'react-redux';
import { RootState } from 'redux/types';

const mapStateToProps = (state: RootState) => ({
  pokemons: Object.values(state.pokemon),
});

export default connect(mapStateToProps)(
  withDataFetching<Props>(
    'pokemonsbla',
    (props: Props) => makeGetRequest('/pokemon', { page: props.match.params.page }),
    (props: Props) => [props.match.params.page],
  )(Home),
);
