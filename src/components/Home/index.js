import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Link} from 'react-router-dom'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    data: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const ipl = await fetch('https://apis.ccbp.in/ipl')
    const Data = await ipl.json()

    const formattedData = Data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({data: formattedData, isLoading: false})
  }

  render() {
    const {data, isLoading} = this.state
    return (
      <Link to="/" className="link">
        <div className="bg">
          <div className="bg1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl"
            />

            <h1 className="h1">IPL Dashboard</h1>
          </div>

          <div className="bg2">
            {isLoading ? (
              <div data-testid="loader">
                <Loader type="Oval" color="#ffffff" height={50} width={50} />
              </div>
            ) : (
              data.map(each => <TeamCard key={each.id} card={each} />)
            )}
          </div>
        </div>
      </Link>
    )
  }
}

export default Home
