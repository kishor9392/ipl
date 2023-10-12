import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {card} = props

  const {id, name, teamImageUrl} = card

  return (
    <Link to={`/team-matches/${id}`} className="rcb">
      <li className="list">
        <img src={teamImageUrl} alt={name} className="team" />
        <h1 className="name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
