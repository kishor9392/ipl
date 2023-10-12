import './index.css'

const MatchCard = props => {
  const {match} = props

  const {competingTeamLogo, competingTeam, matchStatus, result} = match

  return (
    <li className="lion">
      <img src={competingTeamLogo} alt={competingTeam} className="deer" />

      <h1 className="x1">{competingTeam}</h1>

      <p className="x2">{result}</p>

      {matchStatus === 'Won' ? (
        <p className="x3">{matchStatus}</p>
      ) : (
        <p className="x4">{matchStatus}</p>
      )}
    </li>
  )
}

export default MatchCard
