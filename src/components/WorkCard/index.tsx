import { WorkContainer, WorkCover, WorkInfo, WorkTitle } from './styles';
import { ThumbsUp } from 'phosphor-react';
import NoImage from '../../assets/sem-imagem.png';

export interface WorkCardProps {
	title?: string;
	image?: string;
	author?: string;
	likes?: string | number;
}
export function WorkCard({ author, likes, title, image }: WorkCardProps) {
	return (
		<WorkContainer>
			<WorkCover image={image?.length > 0 ? image : NoImage} />
			<WorkInfo>
				<WorkTitle>
					{title}
					<span>
						<ThumbsUp size={15} />
						{likes}
					</span>
				</WorkTitle>

				<span>{author}</span>
			</WorkInfo>
		</WorkContainer>
	);
}
