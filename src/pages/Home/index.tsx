import { WorkCard, WorkCardProps } from '../../components/WorkCard'
import { Container, FindWorks, Works } from './styles'
import { Carousel } from '../../components/Carousel'
import kaisen from '../../assets/kaisen.webp'
import { useState } from 'react'
import { CustomSeparator } from '../../components/Footer/styles'

export function Home() {
  const works: WorkCardProps[] = [
    {
      author: 'Akutami Gege',
      image: kaisen,
      likes: '120',
      title: 'Jujutsu Kaisen'
    },

    {
      author: 'Akutami Gege',
      image: kaisen,
      likes: '120',
      title: 'Jujutsu Kaisen'
    },

    {
      author: 'Akutami Gege',
      image: kaisen,
      likes: '120',
      title: 'Jujutsu Kaisen'
    },

    {
      author: 'Akutami Gege',
      image: kaisen,
      likes: '120',
      title: 'Jujutsu Kaisen'
    },

    {
      author: 'Akutami Gege',
      image: kaisen,
      likes: '120',
      title: 'Jujutsu Kaisen'
    },

    {
      author: 'Akutami Gege',
      image: kaisen,
      likes: '120',
      title: 'Jujutsu Kaisen'
    },
    {
      author: 'Akutami Gege',
      image: kaisen,
      likes: '120',
      title: 'Jujutsu Kaisen'
    },
    {
      author: 'Akutami Gege',
      image: kaisen,
      likes: '120',
      title: 'Jujutsu Kaisen'
    },
    {
      author: 'Akutami Gege',
      image: kaisen,
      likes: '120',
      title: 'Jujutsu Kaisen'
    }
  ]

  const [work, setWork] = useState(works)

  return (
    <Container>
      <h2>Histórias publicadas</h2>
      <CustomSeparator />

      <Works>
        <Carousel works={work} />
      </Works>

      <h2>Histórias mais curtidas</h2>
      <CustomSeparator />

      <Works>
        <Carousel works={work} />
      </Works>

      <FindWorks>
        <CustomSeparator />
        <h2>Mais obras</h2>
        <Works>
          <WorkCard
            author="Masami Kurumada"
            image={kaisen}
            likes={12}
            title="Shippuden Key"
          />

          <WorkCard
            author="Masami Kurumada"
            image={kaisen}
            hasLikeIndicator={false}
            likes={12}
            title="Shippuden Key"
          />

          <WorkCard
            author="Masami Kurumada"
            image={kaisen}
            hasLikeIndicator={false}
            likes={12}
            title="Shippuden Key"
          />

          <WorkCard
            author="Masami Kurumada"
            image={kaisen}
            hasLikeIndicator={false}
            likes={12}
            title="Shippuden Key"
          />

          <WorkCard
            author="Masami Kurumada"
            image={kaisen}
            hasLikeIndicator={false}
            likes={12}
            title="Shippuden Key"
          />

          <WorkCard
            author="Masami Kurumada"
            image={kaisen}
            hasLikeIndicator={false}
            likes={12}
            title="Shippuden Key"
          />
          <WorkCard
            author="Masami Kurumada"
            image={kaisen}
            cardType="simple"
            hasLikeIndicator={false}
            likes={12}
            title="Shippuden Key"
          />
          <WorkCard
            author="Masami Kurumada"
            image={kaisen}
            hasLikeIndicator={false}
            likes={12}
            title="Shippuden Key"
          />
          <WorkCard
            author="Masami Kurumada"
            image={kaisen}
            hasLikeIndicator={false}
            likes={12}
            title="Shippuden Key"
          />
          <WorkCard
            author="Masami Kurumada"
            image={kaisen}
            hasLikeIndicator={false}
            likes={12}
            title="Shippuden Key"
          />
        </Works>
      </FindWorks>
    </Container>
  )
}
