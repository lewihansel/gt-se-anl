import { css } from '@emotion/react';
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
    const { data, nextPage, prevPage, page } = useAnimList();
    return (
        <>
            {`Current Page = ${page}`}
            <button onClick={prevPage}>Prev</button>
            <button onClick={nextPage}>Next</button>

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
        </>
    );
}

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
