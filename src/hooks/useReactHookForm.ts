import { useMemo, ReactNode } from 'react';

export interface Props {
    error?: ReactNode;
    field?: Record<string, unknown>;
    fieldState?: {
        error?: {
            message?: string;
            [key: string]: unknown;
        };
        [key: string]: unknown;
    };
    [key: string]: unknown;
}

export default function useReactHookForm(props: Props): { [key: string]: any } {
    const { error: propError, field, fieldState, ...rest } = props;

    const error = useMemo(() => {
        if (fieldState) {
            const { error: fieldStateError } = fieldState;

            if (fieldStateError) {
                return fieldStateError.message;
            }
        }
        return propError;
    }, [propError, fieldState]);

    return {
        ...rest,
        ...field,
        error,
    };
}
