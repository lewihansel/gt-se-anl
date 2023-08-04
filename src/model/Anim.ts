import { Media, MediaCoverImage, MediaTitle } from "__generated__/graphql"

export default interface Anim {
  id: Media["id"]
  title: {
    userPreferred: MediaTitle["userPreferred"]
  }
  coverImage: {
    medium: MediaCoverImage["medium"]
    large: MediaCoverImage["large"]
    color: MediaCoverImage["color"]
  }
  status: Media["status"]
  genres: Media["genres"]
  description: Media["description"]
  seasonYear: Media["seasonYear"]
}