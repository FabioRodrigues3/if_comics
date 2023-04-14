import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { WorkCard, WorkCardProps } from '../WorkCard'
import { DefaultCaroussel } from './styles'
import { LoadingElement } from '../LoadingElement'

interface CarouselProps {
  works: WorkCardProps[]
}

export function Carousel({ works }: CarouselProps) {
  return (
    <>
      {works.length ? (
        <DefaultCaroussel
          centerMode
          centerSlidePercentage={20}
          interval={3000}
          transitionTime={1000}
          autoPlay
          swipeable
          showStatus={false}
          showIndicators={false}
          showArrows={false}
          showThumbs={false}
        >
          {works?.map((work) => (
            <WorkCard {...work} />
          ))}
        </DefaultCaroussel>
      ) : (
        <LoadingElement />
      )}
    </>
  )
}
