import { css } from '@emotion/react';
import ButtonBorder from 'components/Button/ButtonBorder';
import useAnimList from 'hooks/useAnimList';
import Link from 'next/link';

// Favourite contact is using localstorage API,
// so we need to disable ssr to avoid hydration
// failed (because UI didn't match)
// const FavContact = dynamic(() => import('components/FavContact/FavContact'), {
//     loading: () => <p>Loading...</p>,
//     ssr: false,
// });

export default function Home() {
    const { data, nextPage, prevPage, page, loading } = useAnimList();

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div css={animListContainer}>
                    {data?.map(anim => (
                        <div key={anim?.id} css={animListItem}>
                            <Link href={`/detail/${anim?.id}`}>
                                <div css={animListItemPoster}>
                                    <img
                                        src={anim?.coverImage?.medium ?? ''}
                                        alt={anim?.title?.userPreferred ?? ''}
                                    />
                                </div>
                                <h5 css={animListItemTitle}>
                                    {anim?.title?.userPreferred}
                                </h5>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
            <div css={paginationContainer}>
                <ButtonBorder disabled={page === 1} onClick={prevPage}>Prev</ButtonBorder>
                <span css={pageNumber}>
                    <h5>Page</h5>
                    <span>{`${page}`}</span>
                </span>
                <ButtonBorder onClick={nextPage}>Next</ButtonBorder>
            </div>
        </>
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

const animListContainer = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
});

const animListItem = css({
    width: '48%',
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
        width: '90%',
        aspectRatio: '1/1.5',
        objectFit: 'cover',
        borderRadius: '6px',
        margin: '0 0 6px',
    },
    display: 'grid',
    placeItems: 'center',
});
