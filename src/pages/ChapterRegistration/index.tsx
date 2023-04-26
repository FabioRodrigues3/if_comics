import { Trash, Upload } from 'phosphor-react'
import {
  Container,
  ImageUpload,
  MainDescription,
  RemoveFile,
  Title,
  TitleAndDescription,
  WorkTitle,
  Wrapper,
} from './styles'
import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { useIdParam } from '../../hooks/useIdParam'
import { useForm } from 'react-hook-form'
import {
  CreateChapterProps,
  CreateChapters,
} from '../../services/createChapters'
import { v4 as uuid } from 'uuid'

export function ChapterRegistration() {
  const [file, setFile] = useState<string>()
  const { serie } = useIdParam()

  const { reset, handleSubmit, register } = useForm({
    defaultValues: {
      chapterTitle: '',
      chapterNumber: '',
    },
  })

  async function handleChapterSubmit(data: CreateChapterProps) {
    await CreateChapters({
      chapterFile: 'file',
      chapterTitle: data.chapterTitle,
      chapterNumber: data.chapterNumber,
      comicId: serie?.id,
      id: uuid(),
    }).then((response) => console.log(response))

    reset()
  }

  return (
    <Container onSubmit={handleSubmit(handleChapterSubmit)}>
      <button type="submit" onClick={handleChapterSubmit}>
        asdasdasd
      </button>
      <Title>
        <h2>Publicação de capítulo</h2>
        <Button title="Publicar capítulo" isNavigatable={false} />
      </Title>

      <Wrapper>
        <MainDescription>
          <ImageUpload>
            {file ? (
              <RemoveFile>
                <Trash size={50} />
                <span onClick={() => setFile(null)}>
                  Clique para remover o arquivo
                </span>
                <p>{file?.name}</p>
              </RemoveFile>
            ) : (
              <>
                <Upload size={53} />
                <label>
                  Upload
                  <input
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    accept=".pdf"
                  />
                </label>
                <span>(Apenas PDF)</span>
              </>
            )}
          </ImageUpload>

          <TitleAndDescription>
            <WorkTitle>
              <span>Título do capítulo</span>
              <input type="text" required {...register('chapterTitle')} />
            </WorkTitle>

            <WorkTitle>
              <span>Número do capítulo</span>
              <input
                type="text"
                required
                min={0}
                max={9999}
                {...register('chapterNumber')}
              />
            </WorkTitle>
          </TitleAndDescription>
        </MainDescription>
      </Wrapper>
    </Container>
  )
}