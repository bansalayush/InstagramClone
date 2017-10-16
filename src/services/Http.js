class Http {
    _baseURL = "https://reqres.in";

    post(path, payload = {}, header = {}) {
        console.log("cccccccccccc", JSON.stringify(payload));
        const url = this._baseURL + "/" + path;
        console.log("url", url);
        const options = {
            method: "POST",
            headers: header,
            body: JSON.stringify(payload)
        };

        return new Promise((resolve, reject) => {
            fetch(url, options)
                .then(response => {
                    console.log("dddddddddd");
                    resolve(response);
                })
                .catch(error => {
                    console.log("zzzzzzzzzzz");
                    reject(error);
                });
        });
    }
}

export default new Http();
