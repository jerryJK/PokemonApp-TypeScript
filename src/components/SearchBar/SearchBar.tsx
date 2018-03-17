import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { Wrapper, Form, FormContentWrapper, FormInput, SubmitButton } from './SearchBar.s';

type Props = {
  getData: (id: number) => object
}

type State = {
  term: string
}

class SearchBarPure extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onInputChange = (event: any): void => {
    // console.log(event.target.value);
      this.setState({
        term: event.target.value
      })
  }

  onFormSubmit = (event: any): void => {
    event.preventDefault();
    const getData = this.props.getData;
    getData(Number(this.state.term));
    this.setState({
      term: ''
    })
    // console.log(this.state.term);
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

export const SearchBar = connect(null, {getData})(SearchBarPure);
