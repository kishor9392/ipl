import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    image: '',
    Latest: {},
    recent: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatch()
  }

  getMatch = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const MatchDetails = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const response = await MatchDetails.json()

    const latestMatchDetails = {
      competingTeam: response.latest_match_details.competing_team,
      competingTeamLogo: response.latest_match_details.competing_team_logo,
      date: response.latest_match_details.date,
      firstInnings: response.latest_match_details.first_innings,
      manOfTheMatch: response.latest_match_details.man_of_the_match,
      matchStatus: response.latest_match_details.match_status,
      result: response.latest_match_details.result,
      id: response.latest_match_details.id,
      secondInnings: response.latest_match_details.second_innings,
      umpires: response.latest_match_details.umpires,
      venue: response.latest_match_details.venue,
    }

    const u = response.recent_matches.map(each => ({
      competingTeamLogo: each.competing_team_logo,
      competingTeam: each.competing_team,
      result: each.result,
      matchStatus: each.match_status,
      id: each.id,
    }))

    this.setState({
      image: response.team_banner_url,
      Latest: latestMatchDetails,
      isLoading: false,
      recent: u,
    })
  }

  render() {
    const {image, isLoading, Latest, recent} = this.state

    return (
      <div className="tg">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="tb">
            <div className="bt">
              <img src={image} alt="1" className="tImg" />
            </div>

            <div className="last">
              <p className="par">Latest Matches</p>
              <LatestMatch details={Latest} />
            </div>

            <ul className="ul">
              {recent.map(each => (
                <MatchCard key={each.id} match={each} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
