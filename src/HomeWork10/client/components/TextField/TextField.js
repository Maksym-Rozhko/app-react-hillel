import React from 'react';
import { Form, Label, Input } from 'semantic-ui-react';

function TextField({ input, label, type, meta: { asyncValidate, touched, error, warning }, ...rest }) {

    let labelColor;

    if(error) {
        labelColor = 'red'
    } else if (warning) {
        labelColor = 'yellow'
    }
    const message = error || warning;
    return (
        <Form.Field>
            <Input label={label} type={type} loading={asyncValidate} {...input} {...rest} />
            {touched && message &&
                <Label basic color={labelColor} pointing='left'>
                    {message}
                </Label>
            }
        </Form.Field>
    )
}

export default TextField;