import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import {
  Chapter,
  Chapters,
  Container,
  DeletionChapter,
  InfoCardArea,
  WorkChapters,
  WorkDetailedInfo,
  WorkHeader,
  WorkImage,
  WorkTitle,
} from './styles'
import { InfoCard } from '../../components/InfoCard'
import { Button } from '../../components/Button'
import { useIdParam } from '../../hooks/useIdParam'
import { getChapterById } from '../../services/getChapters'
import { useChapters } from '../../hooks/useChapters'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../utils/firebase.js'
import { Pencil, Trash, Warning, WarningCircle } from 'phosphor-react'
import { Modal } from '../../components/Modal'
import { DeleteComic } from '../../services/deleteComic'
import { DeleteChapter } from '../../services/deleteChapter'

interface ComicChaptersProps {
  comicId?: string
}

interface CardDescriptionProps {
  author?: string
  description?: string
  tags?: string
}

export function ComicChapters({ comicId }: ComicChaptersProps) {
  const tagging = ['Terror', 'Drama', 'Hentai', 'Ação', 'Drama', 'Fantasia']
  const [user] = useAuthState(auth)

  const { serie } = useIdParam()
  const { id } = useParams()
  const { chapters } = useChapters({ comicId: id })
  const [comicExclusion, setComicExclusion] = useState(false)
  const [chapterExclusion, setChapterExclusion] = useState(false)
  const navigation = useNavigate()

  const CardDescription: CardDescriptionProps = {
    author: 'Autor',
    description: 'Descrição',
  }

  async function ComicDeletion() {
    await DeleteComic({ comicId: id }).then(() => {
      setComicExclusion(false)
      navigation('/')
    })
  }

  async function ChapterDeletion(comicId, id) {
    await DeleteChapter({ comicId, id }).then(() => {
      setChapterExclusion(false)
      window.location.reload()
    })
  }

  const DescriptionProps = Object.entries(CardDescription)

  const orderedChapters = chapters?.sort(
    (a, b) => a.chapterNumber - b.chapterNumber,
  )

  return (
    <Container>
      <Modal
        image={<WarningCircle size={53} color="red" />}
        title={`Deseja excluir ${serie.title} definitivamente?`}
        openModal={comicExclusion}
        goBackFunction={() => setComicExclusion(false)}
        desiredFunction={ComicDeletion}
      />

      <WorkDetailedInfo>
        <WorkHeader>
          <WorkImage src={serie?.imageUrl} />
          <WorkTitle>
            <h3>{serie?.title}</h3>
            <span>
              {tagging[0]} • {tagging[1]} • {serie?.likes} likes
            </span>
            <div>
              {!chapters.length && user?.email === serie?.user_id ? (
                <Button
                  title="Adicionar capítulo"
                  isNavigatable
                  path={`/admin/${id}/new-chapter`}
                />
              ) : (
                <Button
                  title={
                    orderedChapters.length
                      ? `Iniciar capítulo ${orderedChapters[0].chapterNumber}`
                      : `Sem capítulos`
                  }
                  isNavigatable={orderedChapters.length}
                  path={`/reader/${serie?.id}/${orderedChapters[0]?.chapterNumber}`}
                />
              )}
              {user?.email === serie.user_id && (
                <>
                  <Pencil />
                  <Trash onClick={() => setComicExclusion(true)} />
                </>
              )}
            </div>
          </WorkTitle>
        </WorkHeader>

        <WorkChapters>
          <h3>
            Capítulos - <span>{orderedChapters.length}</span>
          </h3>
          <Chapters>
            {orderedChapters?.map((item) => (
              <Chapter key={item.id}>
                <Link to={`/reader/${serie?.id}/${item.chapterNumber}`}>
                  <sup>Capítulo {item.chapterNumber}</sup>
                  <h4>
                    {item.chapterNumber}. {item.chapterTitle}
                  </h4>
                </Link>

                <DeletionChapter>
                  <Trash onClick={() => setChapterExclusion(true)} size={35} />
                  <Modal
                    title={`Atenção! `}
                    desiredFunction={() =>
                      DeleteChapter({ comicId: item.comicId, id: item.id })
                    }
                    goBackFunction={() => setChapterExclusion(false)}
                    openModal={chapterExclusion}
                    image={<WarningCircle size={53} />}
                  />
                </DeletionChapter>
              </Chapter>
            ))}
            {!chapters.length && <span>Não há capítulos disponíveis. </span>}
          </Chapters>
        </WorkChapters>
      </WorkDetailedInfo>

      <InfoCardArea>
        {DescriptionProps?.map((item) => (
          <InfoCard
            key={serie.id}
            content={serie && serie[item[0]]}
            cardTitle={item[1]}
          />
        ))}
        <InfoCard type="tag" cardTitle="Tags" tags={tagging} />
      </InfoCardArea>
    </Container>
  )
}
