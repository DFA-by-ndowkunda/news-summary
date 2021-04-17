import React, { Component } from 'react'

class Headlines extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headlines: []
    };
  }
  componentDidMount() {
    /*
    const options = {
      'api-key': process.env.REACT_APP_GUARDIAN_API_KEY,
      'order-by': 'newest',
      'show-fields': 'all'
    }*/
    fetch(`https://content.guardianapis.com/search?order-by=newest&show-fields=all&q=politics&api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}` /*,options*/)
      .then(res => res.json())
      .then(data => data.response.results)
      .then(data => this.setState({ headlines: data }))
  }

  getHeadlinesList = () => {
    return this.state.headlines.map(article => {
      return article.fields.headline
    }).join("\r\n")
  }
  getImagesList = () => {
    return this.state.headlines.map(article => {
      return article.fields.thumbnail
    }).join("\r\n")
  }
  render() {
    return (
      <div>
        <h1 id="headline" data-cy="headline">{this.getHeadlinesList()}</h1>
        <img id="headline-img" data-cy="headline-img" src={this.getImagesList()} alt="headline article" />
      </div>
    )
  }
}
export default Headlines