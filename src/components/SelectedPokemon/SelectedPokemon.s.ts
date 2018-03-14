import glamorous from 'glamorous';

export const Wrapper = glamorous.div({
    display: 'flex',
    justifyContent: 'center'
});

export const PokemonCardContent = glamorous.div({
    width: '70%',
    padding: '10px',
    boxShadow: '0 1px 2px rgba(23, 22, 22, 0.12), 0 1px 2px rgba(23, 22, 22, 0.12)'
});

export const PokemonImageWrapper = glamorous.div({
    display: 'flex',
    justifyContent: 'center'
});

export const PokemonName = glamorous.h3({
    textAlign: 'center',
    margin: '5px'
});

export const PokemonSkills = glamorous.p({
    textAlign: 'center',
    margin: '10px 0'
});

export const PokemonStarWrapper = glamorous.div({
    display: 'flex',
    justifyContent: 'flex-end'
});

export const Image = glamorous.img({
    cursor: 'pointer'
});
