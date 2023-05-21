import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  Chapter,
  ChapterController,
  Chapters,
  Container,
  InfoCardArea,
  SeriesGenre,
  WorkChapters,
  WorkDetailedInfo,
  WorkHeader,
  WorkImage,
  WorkTitle,
} from './styles'
import { InfoCard } from '../../components/InfoCard'
import { Button } from '../../components/Button'
import { useIdParam } from '../../hooks/useIdParam'
import { useChapters } from '../../hooks/useChapters'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase.js'
import {
  Pencil,
  ThumbsUp,
  Trash as TrashIcon,
  WarningCircle,
} from 'phosphor-react'
import { Modal } from '../../components/Modal'
import { DeleteComic } from '../../services/deleteComic'
import { DeleteChapter } from '../../services/deleteChapter'
import { Trash } from '../ChapterRegistration/styles'
import { LoadingElement } from '../../components/LoadingElement'
import { LikeComic } from '../../services/likeComic'
import { unlikeComic } from '../../services/unlikeComic'
import { formatDate } from '../../hooks/formatDate'

interface CardDescriptionProps {
  author?: string
  description?: string
  tags?: string
}

export function ComicChapters() {
  const [user] = useAuthState(auth)
  const { serie } = useIdParam()
  const { id } = useParams()

  const { chapters } = useChapters({ comicId: id })
  const [comicExclusion, setComicExclusion] = useState(false)
  const [chapterExclusion, setChapterExclusion] = useState(false)
  const [actualNumberOfLikes, setActualNumberOfLikes] = useState<number>()
  const navigation = useNavigate()
  console.log(actualNumberOfLikes)
  const [liked, setLiked] = useState(false)

  const likeTitle = () => {
    if (!liked) {
      setLiked(true)
      LikeComic({ id, peopleLiked: { userId: user?.email } })
      setActualNumberOfLikes(actualNumberOfLikes && actualNumberOfLikes + 1)
    } else {
      setLiked(false)
      unlikeComic({ id })
      setActualNumberOfLikes(actualNumberOfLikes && actualNumberOfLikes - 1)
    }
  }

  const CardDescription: CardDescriptionProps = {
    author: 'Autor',
    description: 'Descrição',
  }

  async function ComicDeletion() {
    await DeleteComic({ comicId: id }).then(() => {
      setTimeout(() => {
        setComicExclusion(false)
        navigation('/')
        location.reload()
      }, 2000)
    })
  }

  async function DeleteChapterHandle(id?: string) {
    setChapterExclusion(true)
    await DeleteChapter({ id }).then(() => {
      setChapterExclusion(false)
      location.reload()
    })
  }

  const DescriptionProps = Object.entries(CardDescription)
  const isInfoLoaded = !serie?.author || !serie?.description

  const genres = !serie?.genres ? [] : Array.from(serie?.genres.split(','))

  useEffect(() => {
    setActualNumberOfLikes(serie?.likes)
  }, [serie])

  return (
    <Container className="slide-in-right">
      {isInfoLoaded ? (
        <LoadingElement isFullScreen={false} />
      ) : (
        <>
          <Modal
            image={<WarningCircle size={53} color="red" />}
            title={`Deseja excluir ${serie.title} definitivamente?`}
            openModal={comicExclusion}
            goBackFunction={() => setComicExclusion(false)}
            desiredFunction={ComicDeletion}
          />

          <WorkDetailedInfo>
            <WorkHeader>
              <WorkImage src={serie.imageUrl} />
              <WorkTitle>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <h3>{serie?.title}</h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <button
                      style={{
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                      onClick={likeTitle}
                    >
                      <ThumbsUp
                        size={23}
                        color="green"
                        weight={liked ? 'fill' : 'light'}
                      />
                    </button>
                    {actualNumberOfLikes || 0} likes
                  </div>
                </div>
                <SeriesGenre>
                  <span>{serie?.genres?.replaceAll(',', '  •  ') || ''}</span>
                  <span>
                    Data de publicação: {formatDate(serie?.createdAt)}
                  </span>
                </SeriesGenre>
                <div>
                  {!chapters.length && user?.email === serie?.user_id ? (
                    <Button
                      title="Adicionar capítulo"
                      isNavigatable
                      path={`/admin/${id}/new-chapter`}
                    />
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        gap: '1rem',
                        flexDirection: 'column',
                      }}
                    >
                      {user?.email === serie?.user_id && (
                        <Button
                          title="Adicionar capítulo"
                          isNavigatable
                          path={`/admin/${id}/new-chapter`}
                        />
                      )}
                    </div>
                  )}
                  {user?.email === serie.user_id && (
                    <ChapterController>
                      <Pencil size={25} />
                      <Trash>
                        <TrashIcon
                          size={28}
                          onClick={() => setComicExclusion(true)}
                        />
                      </Trash>
                    </ChapterController>
                  )}
                </div>
              </WorkTitle>
            </WorkHeader>

            <WorkChapters>
              <h3>
                Capítulos - <span>{chapters.length}</span>
              </h3>
              <Chapters>
                {chapters?.flatMap((item) => (
                  <Chapter key={item.id}>
                    <Link to={`/reader/${item.comicId}/${item.id}`}>
                      <sup>Capítulo {item.chapterNumber}</sup>
                      <h4>
                        {item.chapterNumber}. {item.chapterTitle}
                      </h4>
                      <span>Publicado em: {formatDate(item?.createdAt)}</span>
                    </Link>

                    {user?.email === serie.user_id && (
                      <>
                        <div>
                          <Trash>
                            <TrashIcon
                              onClick={() => setChapterExclusion(true)}
                              size={35}
                            />
                          </Trash>
                        </div>
                        <Modal
                          title={`Atenção! Você irá excluir o capítulo de uma vez por todas. Deseja prosseguir? `}
                          desiredFunction={() => DeleteChapterHandle(item.id)}
                          goBackFunction={() => setChapterExclusion(false)}
                          openModal={chapterExclusion}
                          image={<WarningCircle size={53} />}
                        />
                      </>
                    )}
                  </Chapter>
                ))}
                {!chapters.length && (
                  <span>Não há capítulos disponíveis. </span>
                )}
              </Chapters>
            </WorkChapters>
          </WorkDetailedInfo>

          <InfoCardArea>
            {DescriptionProps?.map((item) => (
              <InfoCard
                key={item[0]}
                content={serie && serie[item[0]]}
                cardTitle={item[1]}
              />
            ))}
            {genres.length > 1 && (
              <InfoCard
                type="tag"
                cardTitle="Tags"
                tags={genres || 'Não informado'}
              />
            )}
          </InfoCardArea>
        </>
      )}
    </Container>
  )
}
