import { comicApi } from './api'

export async function LikeComic({
  id,
  peopleLiked,
}: {
  id: string
  peopleLiked: { userId: string }
}) {
  await comicApi.post(`/comics/${id}/liked`, { peopleLiked })
}
