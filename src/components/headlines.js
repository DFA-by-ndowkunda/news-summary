import React, { Component } from 'react'
import Image from './image'

class Headlines extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headlines: []
    }
  }
  componentDidMount() {
    fetch(`https://content.guardianapis.com/search?order-by=newest&show-fields=all&q=politics&api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}`)
      .then(res => res.json())
      .then(data => data.response.results)
      .then(parsedData => this.setState({
        headlines: parsedData
      }))
  }

  render() {
    return (
      <div>
        <div id="headline-title" data-cy="headline">
          {this.state.headlines.map((article, index) => (
            <h1 key={index}>{article.fields.headline}</h1>))}
        </div>
        <div id="headline-title" data-cy="headline">
          {this.state.headlines.map((article, index) => (
            <img key={index} src={article.fields.thumbnail} />))}
        </div>
      </div>
    )
  }
}
export default Headlines