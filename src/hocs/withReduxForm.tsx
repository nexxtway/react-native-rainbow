import React, { FunctionComponent, ForwardRefExoticComponent } from 'react';

export interface Props {
    [key: string]: any;
}

export default function withReduxForm(
    WrappedComponent: FunctionComponent | ForwardRefExoticComponent<any>,
) {
    return (props: Props) => {
        const { meta, error, input, ...rest } = props;

        const getErrorMessage = () => {
            if (meta) {
                const { touched, submitFailed, error: metaError } = meta;

                if ((touched || submitFailed) && metaError) {
                    return metaError;
                }
            }

            return error;
        };

        return <WrappedComponent {...rest} {...input} error={getErrorMessage()} />;
    };
}
