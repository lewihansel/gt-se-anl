import { css } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';

export default function ButtonDefault({
    children,
    ...props
}: ComponentPropsWithoutRef<'button'>) {
    return (
        <button css={[buttonDefault]} {...props}>
            {children}
        </button>
    );
}

const buttonDefault = css({
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    ':disabled': {
        cursor: 'not-allowed',
    },
});
