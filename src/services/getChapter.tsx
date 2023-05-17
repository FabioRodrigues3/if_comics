import { comicApi } from './api'

export async function getChapter({ id }: { id?: string }) {
  const { data } = await comicApi.get(`/chapters/chapter/${id}`)
  return data
}
