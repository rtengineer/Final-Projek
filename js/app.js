/* ===================================================================
 * # manzolacaniago
 * 
 * 
 *
 * ------------------------------------------------------------------- */

let button = document.querySelector('#button')
let name = document.querySelector('#name')
let rotationPeriod = document.querySelector('#rotation_period')
let orbitalPeriod = document.querySelector('#orbital_period')
let diameter = document.querySelector('#diameter')
let climate = document.querySelector('#climate')
let gravity = document.querySelector('#gravity')
let terrain = document.querySelector('#terrain')
let surfaceWater = document.querySelector('#surface_water')
let population = document.querySelector('#population')
let residents = document.querySelector('#residents')
let films = document.querySelector('#films')
let created = document.querySelector('#created')
let edited = document.querySelector('#edited')
let url = document.querySelector('#url')




function getInfo() {
    updateWithLoading()
    let randomNumber = Math.floor((Math.random() * 88) + 1)
    let apiUrl = 'https://swapi.co/api/planets/' + randomNumber

    axios.get(apiUrl).then(response => {
        updateInfo(response.data)
    }).catch(e => {
        updateWithError()
    })
}

function updateInfo(data) {
    name.innerText              = data.name
    rotationPeriod.innerText    = `Rotation Period      : ${data.rotation_period}`
    orbitalPeriod.innerText     = `Orbital Period       : ${data.orbital_period}`
    diameter.innerText          = `Diameter             : ${data.diameter}`
    climate.innerText           = `Climate              : ${data.climate}`
    gravity.innerText           = `Gravity              : ${data.gravity}`
    terrain.innerText           = `Terrain              : ${data.terrain}`
    surfaceWater.innerText      = `Surface Water        : ${data.surface_water}`
    population.innerText        = `Population           : ${data.population}`
    residents.innerText         = `Residents            : ${data.residents}`
    films.innerText             = `Films                : ${data.films}`
    created.innerText           = `Created              : ${data.created}`
    edited.innerText            = `Edited               : ${data.edited}`
    url.innerText               = `URL                  : ${data.url}`
}

function updateWithError() {
    name.innerText              = ' error ! data kosong '
    rotationPeriod.innerText    = ''
    orbitalPeriod.innerText     = ''
    diameter.innerText          = ''
    climate.innerText           = ''
    gravity.innerText           = ''
    terrain.innerText           = ''
    surfaceWater.innerText      = ''
    population.innerText        = ''
    residents.innerText         = ''
    films.innerText             = ''
    created.innerText           = ''
    edited.innerText            = ''
    url.innerText               = ''
}

function updateWithLoading() {
    name.innerText              = 'mohon tunggu..'
    rotationPeriod.innerText    = ''
    orbitalPeriod.innerText     = ''
    diameter.innerText          = ''
    climate.innerText           = ''
    gravity.innerText           = ''
    terrain.innerText           = ''
    surfaceWater.innerText      = ''
    population.innerText        = ''
    residents.innerText         = ''
    films.innerText             = ''
    created.innerText           = ''
    edited.innerText            = ''
    url.innerText               = ''
}


button.addEventListener('click', getInfo)