import { Media, MediaCoverImage, MediaTitle } from "__generated__/graphql"

export default interface AnimShort {
  id: Media["id"]
  title: {
    userPreferred: MediaTitle["userPreferred"]
  }
  coverImage: {
    medium: MediaCoverImage["medium"]
    color: MediaCoverImage["large"]
  }
}