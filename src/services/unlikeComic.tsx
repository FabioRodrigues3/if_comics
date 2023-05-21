import { comicApi } from './api'

export async function unlikeComic({ id }: { id?: string }) {
  await comicApi.post(`/comics/${id}/unlike`)
}
