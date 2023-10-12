import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeamLogo,
    competingTeam,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    id,
    secondInnings,
    umpires,
    venue,
  } = details

  return (
    <div className="lbg">
      <div className="part1">
        <h1 className="captial">{competingTeam}</h1>
        <h1 className="date">{date}</h1>
        <p className="competingTeam">{venue}</p>
        <p className="competingTeam">{result}</p>
      </div>

      <img src={competingTeamLogo} alt={id} className="competingTeamLogo" />

      <div className="part2">
        <p className="competingTeam1">First Innings</p>
        <p className="competingTeam">{firstInnings}</p>
        <p className="competingTeam1">Second Innings</p>
        <p className="competingTeam">{secondInnings}</p>
        <p className="competingTeam1">Man Of The Match</p>
        <p className="competingTeam">{manOfTheMatch}</p>
        <p className="competingTeam1">Umpires</p>
        <p className="competingTeam">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
