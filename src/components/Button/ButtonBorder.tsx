import { css } from '@emotion/react';
import { ComponentPropsWithoutRef } from 'react';
import ButtonDefault from './ButtonDefault';

export default function ButtonBorder({
    children,
    ...props
}: ComponentPropsWithoutRef<'button'>) {
    return (
        <ButtonDefault css={[borderBtn]} {...props}>
            {children}
        </ButtonDefault>
    );
}

const borderBtn = css({
    border: 'solid 1px',
    padding: '0 4px',
    borderRadius: '2px',
});
