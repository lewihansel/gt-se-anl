import { css } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

export default function ErrChip({
    children,
    ...props
}: ComponentPropsWithoutRef<'div'>) {
    return (
        <div
            css={css({
                background: 'red',
                borderRadius: '8px',
                color: 'white',
                fontSize: '12px',
                fontWeight: 'normal',
                padding: '6px',
                marginBottom: '8px',
            })}
            {...props}
        >
            {children}
        </div>
    );
}
