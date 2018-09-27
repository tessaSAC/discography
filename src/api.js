/**
 * Importing this file:
 * import igdb from 'THIS_FILE_LOCATION'
 * == OR ==
 * var igdb = require('THIS_FILE_LOCATION')
 * 
 * Then you would use either of the two commands:
 * igdb.get(id, filters)
 * == OR ==
 * igdb.list(query, startYear, endYear, fields, orderBy)
 * 
 * See the comments below for the individual api calls.
 * 
 * Any questions please reach out immediately
 */
var axios = require('axios')

var http = axios.create({
  baseURL: 'https://api-endpoint.igdb.com/',
  headers: {
    /**
     * To acquire a api key go to https://api.igdb.com/signup and
     * register for a key. After signing up it will give you an api or as
     * they state a "user-key". If there are any issues please reach out as soon as you run into issues
     **/
    'user-key': '418b95d2f972c7d0b1135e53806a94b5',
    "Access-Control-Allow-Origin": "*",
  }
})

/**
 * Get the individual game by id from a list query
 * @param {*} id 
 * @param {*} fields the defaults are supplied in the fields line below. But you can also specific a star (*) and get all fields from the api
 */
function get(id, fields) {
  if (!id) throw Error('igdb get requires a game identifier')

  var params = {
    fields: fields ? fields : '*'
  }

  return http.get('games/' + id, {
    params: params
  }).then(res => {
    // returning only the element queried
    return res.data
  })
}

/**
 * List and search igdb api by name, release year.
 * You can also filter out specific fields and order by
 * @param {*} query 
 * @param {*} startYear in format of 'YYYY-MM-DD' 
 * @param {*} endYear in format of 'YYYY-MM-DD'
 * @param {*} fields the defaults are supplied in the fields line below. But you can also specific a star (*) and get all fields from the api
 * @param {*} orderBy a specific field and define a direction (either asc or desc). With our default fields below you can sort by name, first_release_date, rating, rating_count or any of the other fields in the data
 */
function list(query, startYear, endYear, fields, orderBy) {
  var params = {
    fields: fields ? fields : 'id,name,url,first_release_date,developers,hypes,rating,rating_count,summary',
    orderBy: orderBy ? orderBy : 'name:asc'
  }

  if (query) {
    params['search'] = query
  }

  if (startYear) {
    params['filter[release_dates.date][gte]'] = startYear
  }

  if (endYear) {
    params['filter[release_dates.date][lte]'] = endYear
  }

  return http.get('games/', {
    params: params
  }).then(res => {
    return res.data
  })
}

module.exports = {
  get: get,
  list: list
}