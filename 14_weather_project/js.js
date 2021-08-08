const key = 'AXeBraMAvjYdyQUfwL0DvjkJggHyYGig'
const searchResource = 'http://dataservice.accuweather.com/locations/v1/cities/search/'
const conditionsResource = 'http://dataservice.accuweather.com/currentconditions/v1/'
const searchInput = document.querySelector('input')
let title = document.querySelector('h1')
let content = document.querySelector('.info')
// function to build the API request
const urlConstructor = (base,input,key,search) => {
    const fullUrl = `${base}${input}?apikey=${key}&q=${search}`
    return fullUrl
}
// test contructor
console.log(urlConstructor(searchResource,'',key,'sydney'))


const getId = async (resource) => {
    const request = await fetch(resource);
    const data = await request.json();
    return data[0].Key
};

const getWeatherData = async (resource) => {
    const request = await fetch(resource);
    const data = await request.json();
    return data[0]
}

searchInput.addEventListener('keyup',(e) => {
    if (e.key === 'Enter') {
        const searchValue = e.target.value 
        e.target.value = ''
        console.log(searchValue)
        let resource = urlConstructor(searchResource,'',key,searchValue)
        getId(resource).then((data) => {
            return data
        }).then((data) => {
            console.log(data)
            title.innerText = searchValue
            let dataResource = urlConstructor(conditionsResource,data,key,'')
            console.log(dataResource)
            getWeatherData(dataResource).then((weatherData) => {
                console.log(weatherData)
                content.innerHTML = `
                Conditions: ${weatherData.WeatherText}
                <img src="icons/${weatherData.WeatherIcon}.svg">
                `
            })
        }).catch((err) => {
            console.log(err)
        })
    }
})


