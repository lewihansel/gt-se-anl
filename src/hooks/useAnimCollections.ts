import { create } from "zustand"
import { persist } from 'zustand/middleware';


type AnimCollections = { [key: string]: number[] }

interface AnimCollectionsStore {
  collections: AnimCollections,
  setCollections: (collections: AnimCollections) => void
  addToCollection: (collectionName: string, animIds: number[]) => void
  removeFromCollection: (collectionName: string, animIds: number[]) => void
}

const useAnimCollections = create(
  persist<AnimCollectionsStore>((set, get) => ({
    collections: {
      "My Fav Anime": [],
      "Watchlist": []
    },
    setCollections: (collections) => set({ collections }),
    addToCollection: (collectionName, animIds) => {
      const newCollNoDups = new Set([...get().collections[collectionName], ...animIds])
      const newCollections = { ...get().collections, [collectionName]: Array.from(newCollNoDups) }
      set({ collections: newCollections })
    },
    removeFromCollection: (collectionName, animIds) => {
      const removeSet = new Set(animIds) //set of items to remove
      const newCollection = get().collections[collectionName].filter(animId => !removeSet.has(animId))
      const newCollNoDups = new Set(newCollection)
      const newCollections = { ...get().collections, [collectionName]: Array.from(newCollNoDups) }
      set({ collections: newCollections })
    }
  }), {
    name: 'anim-collections',
  })
)

export default useAnimCollections