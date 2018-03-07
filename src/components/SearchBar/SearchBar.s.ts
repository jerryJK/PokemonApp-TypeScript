import glamorous from 'glamorous';

const mediaQueries = {
	  phone: '@media only screen and (max-width: 678px)'
}

export const Wrapper = glamorous.div({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 0'
});

export const Form = glamorous.form({
    width: '50%',
    display: 'block',
    [mediaQueries.phone]: {
      width: '90%'
    }
});

export const FormContentWrapper = glamorous.div({
    display: 'flex',
    justifyContent: 'space-between'
});

export const FormInput = glamorous.input({
    width: '100%',
    textIndent: '5px'
});

export const SubmitButton = glamorous.button({
    width: '70px',
    padding: '12px',
    marginLeft: '1px',
    color: 'white',
    backgroundColor: 'rgba(240, 42, 42, 0.85)',
    border: 'none',
    borderRadius: '4px',
		cursor: 'pointer',
		transition: 'all 0.1s',
		':hover': {
    backgroundColor: 'rgb(240, 42, 42)',
  },
});
