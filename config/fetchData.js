const fetch = require('cross-fetch');


module.exports = async (resource, id = '') => { // ?  ini adalah fungsi mengambil data
    const url = `https://pemdes-tatung-json.herokuapp.com/${resource}/${id}`
    const data = await fetch(url)
    const dataSource = await data.json()
    return dataSource
}


// ** untuk memanggil fungsi diatas harus digunakan dalam fungsi yang memiliki async {const data = await fetchData}

