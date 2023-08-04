import { gql } from '__generated__';

export const GET_ANIM_LIST = gql(/* GraphQL */ `
   query GetAnimList($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(sort: TRENDING_DESC, type: ANIME, isAdult: false) {
        id
        title {
          userPreferred
        }
        coverImage {
          medium
          color
        }
      }
    }
  }
`);