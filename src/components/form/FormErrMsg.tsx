import { ErrorMessage } from 'formik';
import { css } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

export default function FormErrMsg({
    children,
    name,
    ...props
}: ComponentPropsWithoutRef<'div'> & { name: string }) {
    return (
        <div
            css={css({
                margin: '2px 0 0',
                color: 'red',
                fontSize: '12px',
                fontWeight: 'normal',
            })}
            {...props}
        >
            <ErrorMessage name={name}>
                {(errMsg: any) => (typeof errMsg === 'string' ? errMsg : '')}
                {/*
                    This validation is necessary because errMsg for the
                    <FieldArray /> might be an array (and react didn't like that!)
                */}
            </ErrorMessage>
        </div>
    );
}
