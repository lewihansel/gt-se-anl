import { useCallback, useState } from 'react';

export default function usePagination({
    limit = 10, // initial limit
    offset = 0, // initial offset
}: {
    limit: number;
    offset: number;
}) {
    const [pagination, setPagination] = useState({ offset, limit });

    const onNext = useCallback(
        () =>
            setPagination({
                offset: pagination.offset + pagination.limit,
                limit: pagination.limit,
            }),
        [pagination.limit, pagination.offset]
    );

    const onPrev = useCallback(
        () =>
            setPagination({
                offset: pagination.offset - pagination.limit,
                limit: pagination.limit,
            }),
        [pagination.limit, pagination.offset]
    );

    return {
        limit: pagination.limit,
        offset: pagination.offset,
        onNext,
        onPrev,
    };
}
