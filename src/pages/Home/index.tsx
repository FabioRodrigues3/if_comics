import { WorkCardProps } from '../../components/WorkCard';
import { Container, MostLikedWorks, PublishedWorks } from './styles';
import { Carousel } from '../../components/Carousel';
import kaisen from '../../assets/kaisen.webp';
import { useState } from 'react';

export function Home() {
	const works: WorkCardProps[] = [
		{
			author: 'Akutami Gege',
			image: kaisen,
			likes: '120',
			title: 'Jujutsu Kaisen',
		},

		{
			author: 'Akutami Gege',
			image: kaisen,
			likes: '120',
			title: 'Jujutsu Kaisen',
		},

		{
			author: 'Akutami Gege',
			image: kaisen,
			likes: '120',
			title: 'Jujutsu Kaisen',
		},

		{
			author: 'Akutami Gege',
			image: kaisen,
			likes: '120',
			title: 'Jujutsu Kaisen',
		},

		{
			author: 'Akutami Gege',
			image: kaisen,
			likes: '120',
			title: 'Jujutsu Kaisen',
		},

		{
			author: 'Akutami Gege',
			image: kaisen,
			likes: '120',
			title: 'Jujutsu Kaisen',
		},
		{
			author: 'Akutami Gege',
			image: kaisen,
			likes: '120',
			title: 'Jujutsu Kaisen',
		},
		{
			author: 'Akutami Gege',
			image: kaisen,
			likes: '120',
			title: 'Jujutsu Kaisen',
		},
		{
			author: 'Akutami Gege',
			image: kaisen,
			likes: '120',
			title: 'Jujutsu Kaisen',
		},
	];

	const [work, setWork] = useState(works);

	console.log(work);

	return (
		<Container>
			<h2>Histórias publicadas</h2>
			<PublishedWorks>
				<Carousel works={work} />
			</PublishedWorks>

			<h2>Histórias mais curtidas</h2>
			<MostLikedWorks>
				<Carousel works={work} />
			</MostLikedWorks>
		</Container>
	);
}
