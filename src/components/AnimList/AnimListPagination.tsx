import { css } from '@emotion/react';
import ButtonBorder from 'components/Button/ButtonBorder';
import { ComponentPropsWithoutRef } from 'react';

interface AnimListPaginationProps extends ComponentPropsWithoutRef<'div'> {
    page: number;
    onClickNext: () => void;
    onClickPrev: () => void;
}
export default function AnimListPagination({
    page,
    onClickNext,
    onClickPrev,
    ...props
}: AnimListPaginationProps) {
    return (
        <div css={paginationContainer} {...props}>
            <ButtonBorder disabled={page === 1} onClick={onClickPrev}>
                Prev
            </ButtonBorder>
            <span css={pageNumber}>
                <h5>Page</h5>
                <span>{`${page}`}</span>
            </span>
            <ButtonBorder onClick={onClickNext}>Next</ButtonBorder>
        </div>
    );
}

const pageNumber = css({
    fontSize: '24px',
    padding: '4px 12px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    h5: {
        fontSize: '10px',
    },
});

const paginationContainer = css({
    display: 'flex',
    gap: '6px',
    justifyContent: 'center',
    alignItems: 'center',
});
