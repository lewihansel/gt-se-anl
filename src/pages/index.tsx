import { css } from '@emotion/react';
import AnimListItem from 'components/AnimList/AnimListItem';
import AnimListPagination from 'components/AnimList/AnimListPagination';
import ButtonBorder from 'components/Button/ButtonBorder';
import SimpleModal from 'components/Modal/SimpleModal';
import useAnimCollections from 'hooks/useAnimCollections';
import useAnimList from 'hooks/useAnimList';
import { useCallback, useState } from 'react';

export default function Home() {
    const { data, nextPage, prevPage, page, loading } = useAnimList();
    const [selectedAnime, setSelectedAnime] = useState<number[]>([]);

    const { collections } = useAnimCollections();
    const [selectedCollection, setSelectedCollection] = useState('');

    const checkSelected = useCallback(
        (animId?: number) => {
            if (!animId) return false;
            const selectedSet = new Set(selectedAnime);
            return selectedSet.has(animId);
        },
        [selectedAnime]
    );

    const onChangeSelected = useCallback(
        (animId?: number) => {
            if (!animId) return;
            const selected = checkSelected(animId);
            if (selected) {
                setSelectedAnime(sel => sel.filter(id => id !== animId));
            } else {
                setSelectedAnime(sel => [...sel, animId]);
            }
        },
        [checkSelected]
    );

    return (
        <>
            <SimpleModal show={false}>
                <div
                    css={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        width: '80vw',
                    }}
                >
                    <label
                        css={{ margin: '0 0 8px' }}
                        htmlFor="colletion-select"
                    >
                        Add Selected Anime to Collection:
                    </label>
                    <select
                        value={selectedCollection}
                        onChange={e => setSelectedCollection(e.target.value)}
                        css={{ width: '100%', margin: '0 0 8px' }}
                        name="colletion-select"
                    >
                        {Object.keys(collections).map(collectionName => (
                            <option key={collectionName}>
                                {collectionName}
                            </option>
                        ))}
                    </select>
                    <ButtonBorder>Add to Collection</ButtonBorder>
                </div>
            </SimpleModal>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div css={animListContainer}>
                    {data?.map(anim => (
                        <AnimListItem
                            key={anim?.id}
                            animId={anim?.id ?? 0}
                            animTitle={anim?.title?.userPreferred ?? ''}
                            animCoverImg={anim?.coverImage?.medium ?? ''}
                            onChangeChecked={onChangeSelected}
                            selected={checkSelected(anim?.id)}
                        />
                    ))}
                </div>
            )}
            <AnimListPagination
                page={page}
                onClickNext={nextPage}
                onClickPrev={prevPage}
            />
        </>
    );
}

const animListContainer = css({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
});
