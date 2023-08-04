import { gql } from '__generated__';

export const GET_ANIM_LIST_BY_IDS = gql(/* GraphQL */ `
   query GetAnimDetailByIds($ids: [Int]) {
    Page(page: 0, perPage: 50) {
      media(id_in: $ids) {
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