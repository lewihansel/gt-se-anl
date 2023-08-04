import { css } from '@emotion/react';
import Link from 'next/link';
import { ComponentPropsWithoutRef, useCallback } from 'react';

interface AnimListItemProps extends ComponentPropsWithoutRef<'div'> {
    animId: number;
    animCoverImg: string;
    animTitle: string;
    selected: boolean;
    onChangeChecked: (animId: number) => void;
}
export default function AnimListItem({
    animId,
    animCoverImg,
    animTitle,
    selected,
    onChangeChecked,
    ...props
}: AnimListItemProps) {
    const onChecked = useCallback(() => {
        onChangeChecked(animId);
    }, [animId, onChangeChecked]);

    return (
        <div key={animId} css={animListItem} {...props}>
            <Link href={`/detail/${animId}`}>
                <div css={animListItemPoster}>
                    <img src={animCoverImg} alt={animTitle} />
                </div>
                <h5 css={animListItemTitle}>{animTitle}</h5>
                <input
                    css={{
                        top: '8px',
                        left: '8px',
                        position: 'absolute',
                    }}
                    type="checkbox"
                    onClick={e => e.stopPropagation()}
                    onChange={onChecked}
                />
            </Link>
        </div>
    );
}

const animListItem = css({
    width: '48%',
    position: 'relative',
    marginBottom: '20px',
});

const animListItemTitle = css({
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    textAlign: 'center',
});

const animListItemPoster = css({
    img: {
        width: '100%',
        aspectRatio: '1/1.5',
        objectFit: 'cover',
        borderRadius: '6px',
        margin: '0 0 6px',
    },
    display: 'grid',
    placeItems: 'center',
});
