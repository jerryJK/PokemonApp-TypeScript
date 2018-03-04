import { css } from 'glamor';
import glamorous from 'glamorous';


export const MyApp = glamorous.div({
    backgroundColor: 'white'
});

export const Header = glamorous.div({
    backgroundColor: 'rgb(34, 142, 230)',
    padding: '10px',
    color: 'white',
    textAlign: 'center'
});

export const AppTitle = glamorous.div({
    fontSize: '2em',
    padding: '10px',
    fontWeight: 'bold',
    textShadow: '1px 1px black'
});

export const Logo = glamorous.img({
    height: 150,
    width: 150
});

export const LoadingWrapper = glamorous.div({
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0)"
});

export const PokemonsWrapper = glamorous.div({
    display: "flex",
    flexWrap: "wrap",
    padding: "10px"
});

export const PokemonListCard = glamorous.div({
    flexBasis: "20%",
    justifyContent:"center",
    boxSizing: "border-box",
    padding: "10px"
});

export const PokemonCardContent = glamorous.div({
    cursor: "pointer",
    padding: "10px",
    boxShadow:"0 1px 2px rgba(23, 22, 22, 0.12), 0 1px 2px rgba(23, 22, 22, 0.12)"
});

export const PokemonImageWrapper = glamorous.div({
    display: "flex",
    justifyContent:"center"
});

export const PokemonName = glamorous.div({
    display: "flex",
    justifyContent:"center",
    wrap: "nowrap"
});
