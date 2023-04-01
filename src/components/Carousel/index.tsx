import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { WorkCard, WorkCardProps } from '../WorkCard';
import { DefaultCaroussel } from './styles';

interface CarouselProps {
	works: WorkCardProps[];
}

export function Carousel({ works }: CarouselProps) {
	return (
		<DefaultCaroussel
			centerMode
			centerSlidePercentage={20}
			interval={3000}
			transitionTime={1000}
			autoPlay
			swipeable
			showStatus={false}
			showIndicators={false}
			showThumbs={false}
		>
			{works?.map((work) => (
				<WorkCard
					author={work.author}
					image={work.image}
					likes={work.likes}
					title={work.title}
				/>
			))}
		</DefaultCaroussel>
	);
}
