import { gql } from '__generated__';

export const GET_ANIM_DETAIL = gql(/* GraphQL */ `
   query GetAnimDetail($id: Int) {
    Media(id: $id) {
      id
      title {
        userPreferred
      }
      coverImage {
        medium
        large
        color
      }
      status
      genres
      description
      seasonYear
    }
  }
`);