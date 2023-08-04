import { css } from '@emotion/react';
import ButtonBorder from 'components/Button/ButtonBorder';
import { ComponentPropsWithoutRef } from 'react';

export default function SimpleModal({
    show,
    onClose,
    children,
    ...props
}: ComponentPropsWithoutRef<'div'> & { show?: boolean; onClose?: () => void }) {
    return show ? (
        <div css={[modalBackdrop]}>
            <div css={[modalContainer]} {...props}>
                <ButtonBorder onClick={onClose} css={[closeBtn]}>
                    X
                </ButtonBorder>
                {children}
            </div>
        </div>
    ) : (
        <></>
    );
}

const closeBtn = css({
    background: 'rgba(0,0,0,0.9)',
    position: 'absolute',
    top: '-12px',
    right: '-12px',
    borderRadius: '50%',
    padding: '6px 10px',
});

const modalBackdrop = css({
    background: 'rgba(0,0,0,0.6)',
    position: 'fixed',
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    width: '100vw',
    left: 0,
    top: 0,
});

const modalContainer = css({
    position: 'relative',
    margin: 'auto',
    padding: '12px',
    width: 'fit-content',
    background: 'rgba(0,0,0,0.7)',
    borderRadius: '8px',
    border: '1px solid white',
    boxShadow: `
        2.8px 2.8px 2.2px rgba(255, 255, 255, 0.07),
        6.7px 6.7px 5.3px rgba(255, 255, 255, 0.052),
        12.5px 12.5px 10px rgba(255, 255, 255, 0.043),
        22.3px 22.3px 17.9px rgba(255, 255, 255, 0.036),
        41.8px 41.8px 33.4px rgba(255, 255, 255, 0.029),
        100px 100px 80px rgba(255, 255, 255, 0.019)
    `,
});
