import { comicApi } from './api'

export async function LikeComic({ id }: { id: string }) {
  await comicApi.post(`/comics/${id}/liked`)
}
