import * as React from 'react';
import  ReactLoading from 'react-loading';
import { connect } from 'react-redux';
import { SearchBar } from  '../SearchBar/SearchBar';
import { SelectedPokemon }  from '../SelectedPokemon/SelectedPokemon';
import { PokemonList } from '../PokemonList/PokemonList';
import { getData } from '../../actions';
import { Wrapper, Header, Title, Logo, LoadingWrapper } from './App.s';

class AppPure extends React.Component <any> {
  render() {
    const {isLoading, selectedPokemon} = this.props.state;
    return (
      <Wrapper>
          <Header>
            <Title>Get Your Pokemon</Title>
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
      </Wrapper>
    );
  }
}

function mapStateToProps(state: any) {
    return {
        state
    }
};

export const App = connect(mapStateToProps, {getData})(AppPure);
