const Client = {
  getArticles() {
    return fetch(`https://content.guardianapis.com/search?api-key=${process.env.REACT_APP_GUARDIAN_API_KEY}&order-by=newest&show-fields=all&q=politics`)
      .then(res => res.data)
      .then(data => data.response.results)
  }
}
export default Client