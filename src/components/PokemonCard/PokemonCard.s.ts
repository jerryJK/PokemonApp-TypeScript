import glamorous from 'glamorous';

export const Wrapper = glamorous.div({
    flexBasis: '20%',
    justifyContent: 'center',
    boxSizing: 'border-box',
    padding: '10px'
});

export const PokemonCardContent = glamorous.div({
    cursor: 'pointer',
    padding: '10px',
    boxShadow: '0 1px 2px rgba(23, 22, 22, 0.12), 0 1px 2px rgba(23, 22, 22, 0.12)'
});

export const PokemonImageWrapper = glamorous.div({
    display: 'flex',
    justifyContent: 'center'
});

export const PokemonName = glamorous.div({
    display: 'flex',
    justifyContent: 'center',
    wrap: 'nowrap'
});
