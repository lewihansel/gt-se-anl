import { css } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

export default function DefaultFormLabel({
    children,
    ...props
}: ComponentPropsWithoutRef<'label'>) {
    return (
        <label
            css={css({
                fontWeight: 'normal',
                fontSize: '16px',
                margin: '0 0 6px',
            })}
            {...props}
        >
            {children}
        </label>
    );
}
