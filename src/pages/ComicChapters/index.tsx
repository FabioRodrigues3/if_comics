import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  Chapter,
  Chapters,
  Container,
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
  const { serie } = useIdParam()

  const { id } = useParams()

  const { chapters } = useChapters({ comicId: id })
  const [user] = useAuthState(auth)

  const CardDescription: CardDescriptionProps = {
    author: 'Autor',
    description: 'Descrição',
  }

  const DescriptionProps = Object.entries(CardDescription)

  const orderedChapters = chapters?.sort(
    (a, b) => a.chapterNumber - b.chapterNumber,
  )

  return (
    <Container>
      <WorkDetailedInfo>
        <WorkHeader>
          <WorkImage src={serie?.image} />
          <WorkTitle>
            <h3>{serie?.title}</h3>
            <span>
              {tagging[0]} • {tagging[1]} • {serie?.likes} likes
            </span>

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
          </WorkTitle>
        </WorkHeader>

        <WorkChapters>
          <h3>
            Capítulos - <span>{orderedChapters.length}</span>
          </h3>
          <Chapters>
            {orderedChapters?.map((item) => (
              <Chapter
                key={item.id}
                to={`/reader/${serie?.id}/${item.chapterNumber}`}
              >
                <sup>Capítulo {item.chapterNumber}</sup>
                <h4>
                  {item.chapterNumber}. {item.chapterTitle}
                </h4>
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
