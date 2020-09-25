import React, { Component } from 'react'
import { Input } from 'semantic-ui-react';

export default class ValidatedInput extends Component {

    state = {
        'error': '',
        touched: false
    }

    componentDidMount() {
        this.validate();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.validate()
        }
    }

    validate() {
        const error = this.props.validate(this.props.value)
        this.setState({ error })
    }

    touchInput = () => {
        this.setState({ touched: true });
    }

    render() {
        const { validate, ...otherProps } = this.props;
        const { error, touched } = this.state;
        return (
          <Input
            {...otherProps}
            onBlur={this.touchInput}
            error={touched && error}
          />
        )
    }
}