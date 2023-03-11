class Data {
    constructor(url) {
        this.url = url
        this.options = {
            method: 'GET'
        }
    }

    getData() {
        let req = fetch(this.url, this.options)

        req.then(response => response.json())
            .then(data => console.log(data.results))
            .catch(error => console.error(error))
    }
}
