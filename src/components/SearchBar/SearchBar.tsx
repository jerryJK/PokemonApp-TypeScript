import * as React from 'react';
import { connect } from 'react-redux';
import { getData } from '../../actions';
import { Wrapper, Form, FormContentWrapper, FormInput, SubmitButton } from './SearchBar.s';

class PureSearchBar extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onInputChange = (event: any) => {
    // console.log(event.target.value);
      this.setState({
        term: event.target.value
      })
  }

  onFormSubmit = (event: any) => {
    event.preventDefault();
    const {getData} = this.props;
    getData(this.state.term);
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

export const SearchBar = connect(null, {getData})(PureSearchBar);
