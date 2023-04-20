import { getComicById, getComicsProps } from '../../services/getComicById'
import React, { useEffect, useState } from 'react'
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

  const CardDescription: CardDescriptionProps = {
    author: 'Autor',
    description: 'Descrição',
  }

  const DescriptionProps = Object.entries(CardDescription)

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

            <Button
              title="Iniciar cap 1"
              isNavigatable
              path={`/reader/${serie?.id}/`}
            />
          </WorkTitle>
        </WorkHeader>

        <WorkChapters>
          <h3>Capítulos</h3>
          <Chapters>
            <Chapter>
              <Link to="/">
                <sup>Capítulo 1</sup>
                <h4>1. Sukuna</h4>
                <span>15/04/99 </span>
              </Link>
            </Chapter>

            <span>Não há capítulos disponíveis. </span>
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
