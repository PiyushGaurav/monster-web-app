import './card.styles.css';
import { Monster } from '../../App';

type CardProps = {
	monster: Monster
}

const Card = ({ monster }: CardProps) => {
	const { id, name, email } = monster;

	return (
		<div className="card-container">
			<img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} className="userImage" />
			<div className="card-details">
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
