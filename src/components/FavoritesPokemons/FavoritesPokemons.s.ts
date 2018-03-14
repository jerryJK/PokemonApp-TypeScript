import glamorous from 'glamorous';
import { Link } from 'react-router-dom';

export const Wrapper = glamorous.div({
    backgroundColor: 'white'
});

export const Header = glamorous.div({
    backgroundColor: 'rgb(200, 56, 65)',
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

export const Nav = glamorous.div({
    display: 'flex',
    justifyContent: 'center'
});

export const NavItemFavorites = glamorous.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export const NavLink = glamorous(Link)({
  color: 'white',
  textDecoration: 'none',
  transition: 'all 0.2s',
  [':hover']: {
    fontSize:  '17px'
  }
});
