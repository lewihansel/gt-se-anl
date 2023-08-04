import { useQuery } from '@apollo/client';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { GET_ANIM_DETAIL } from 'query/getAnimDetail';
import { useMemo } from 'react';
import { sanitizeHtml } from 'utils/sanitize';

export default function DetailPage() {
    const router = useRouter();
    const animId = useMemo(
        () => Number(router.query.animId),
        [router.query.animId]
    );
    const { data, loading } = useQuery(GET_ANIM_DETAIL, {
        variables: { id: animId },
    });

    const animData = useMemo(() => data?.Media, [data?.Media]);
    const animDesc = useMemo(
        () => sanitizeHtml(animData?.description || ''),
        [animData?.description]
    );

    return loading ? (
        <p>Loading...</p>
    ) : (
        <>
            <img
                css={animPoster}
                src={animData?.coverImage?.large ?? ''}
                alt={animData?.title?.userPreferred ?? ''}
            ></img>

            <h1
                css={releaseChip}
            >{`${animData?.title?.userPreferred} - ${animData?.seasonYear}`}</h1>
            <div css={animReleaseChip}>{`${animData?.status}`}</div>

            <p
                css={animDescStyle}
                dangerouslySetInnerHTML={{ __html: animDesc }}
            />

            <h5 css={animGenreTitle}>Genre: </h5>
            <div css={animGenreContainer}>
                {animData?.genres?.map(genre => (
                    <span key={genre} css={plainChip}>
                        {genre}
                    </span>
                ))}
            </div>
        </>
    );
}

const animPoster = css({
    width: '100%',
    borderRadius: '12px',
    margin: '0 0 12px',
});

const releaseChip = css({
    margin: '0 0 6px',
});

const plainChip = css({
    padding: '2px 8px',
    borderRadius: '8px',
    border: 'solid 1px white',
    width: 'fit-content',
});

const animReleaseChip = css(plainChip, {
    margin: '0 0 24px',
});

const animDescStyle = css({
    margin: '0 0 20px',
});

const animGenreTitle = css({
    margin: '0 0 6px',
});

const animGenreContainer = css({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
});
