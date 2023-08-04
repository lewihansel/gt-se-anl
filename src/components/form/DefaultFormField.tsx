import { css } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

export default function DefaultFormField({
    children,
    ...props
}: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            css={[
                css({
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '0 0 12px',
                }),
            ]}
            {...props}
        >
            {children}
        </div>
    );
}
