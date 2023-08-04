import { useQuery } from "@apollo/client";
import { GET_ANIM_LIST } from "query/getAnimList";
import { useCallback, useState } from "react";

export default function useAnimList() {
  const [page, setPage] = useState(1);
  const { data, loading } = useQuery(GET_ANIM_LIST, {
    variables: { page, perPage: 10 }
  })

  const nextPage = useCallback(() => {
    setPage(p => p + 1);
  }, [])

  const prevPage = useCallback(() => {
    setPage(p => {
      if (p <= 1) return 1;
      return p - 1;
    });
  }, [])

  return {
    page,
    nextPage,
    prevPage,
    loading,
    data: data?.Page?.media,
  }
}