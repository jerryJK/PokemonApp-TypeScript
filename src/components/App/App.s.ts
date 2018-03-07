import glamorous from 'glamorous';

export const Wrapper = glamorous.div({
    backgroundColor: 'white'
});

export const Header = glamorous.div({
    backgroundColor: 'rgb(34, 142, 230)',
    padding: '10px',
    color: 'white',
    textAlign: 'center'
});

export const Title = glamorous.div({
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
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, 0)'
});
