import React, { Component } from 'react'

class HeadlinesList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      headlines: []
    }
  }
  componentDidMount() {
    fetch(`https://content.guardianapis.com/search?api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}&order-by=newest&show-fields=thumbnail&q=politics`)
      .then(res => res.json())
      .then(data => data.response.results)
      .then(parsedData => this.setState({
        headlines: parsedData
      }))
  }

  render() {
    return (
      <div id="headline-list">
        {this.state.headlines.map((article, index) => (
          <div id="article">
            <span className="headlines-list-title" data-cy="headline-title" ><h1 key={index}>{article.webTitle}</h1></span>
            <span className="headlines-list-img" data-cy={`headline-${index}`}><img key={index} src={article.fields.thumbnail} /></span>
          </div>))}
      </div>
    )
  }
}
export default HeadlinesList