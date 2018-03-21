import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { Wrapper, Form, FormContentWrapper, FormInput, SubmitButton } from './SearchBar.s';

type DispatchProps = {
  getData: (id: number | string) => void
}

type State = {
  term: string
}

type Props = DispatchProps;

class SearchBarPure extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onInputChange = (event: any): void => {
      this.setState({
        term: event.target.value
      })
  }

  onFormSubmit = (event: any): void => {
    event.preventDefault();
    const getData = this.props.getData;
    getData(this.state.term);
    this.setState({
      term: ''
    })
  }

  render() {
    return (
      <Wrapper>
        <Form onSubmit={this.onFormSubmit}>
          <FormContentWrapper>
            <FormInput
              placeholder="enter pokemon name, id or click pokemon below"
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <span>
              <SubmitButton type="submit">Submit</SubmitButton>
            </span>
          </FormContentWrapper>
        </Form>
      </Wrapper>
    )
  }

}

const mapDispatchToProps = dispatch => ({
  getData: (id) => dispatch(getData(id)),
})

export const SearchBar = connect(null, mapDispatchToProps)(SearchBarPure);
