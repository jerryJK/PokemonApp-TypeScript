import * as React from 'react';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import SelectedPokemon from './SelectedPokemon';
import PokemonList from './PokemonList';
import { getData } from '../actions';
import ReactLoading from 'react-loading';
import { MyApp, Header, AppTitle, Logo, LoadingWrapper } from '../styles';

class App extends React.Component <any> {

  render() {
    const {isLoading, selectedPokemon} = this.props.state;
    return (
      <MyApp>
          <Header>
            <AppTitle>Get Your Pokemon</AppTitle>
            <Logo src={`/img/pokemon.png`} alt="logo" />
          </Header>
          <SearchBar />
          {isLoading &&
            <LoadingWrapper>
                <ReactLoading type="bubbles" color="#4444" />
            </LoadingWrapper>
          }
          <div>
              {selectedPokemon &&
                <SelectedPokemon pokemon={selectedPokemon} />
              }
          </div>
          <PokemonList />
      </MyApp>
    );
  }
}

function mapStateToProps(state: any) {
    return {
        state
    }
};

export default connect(mapStateToProps, {getData})(App);
