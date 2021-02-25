const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const url = 'https://api.msb.se/brandrisk/RiskService.svc/RiskForecast/sv/'

router.use(express.urlencoded({extended : true}))

router.get('/:lat/:lon', async(req, res) => {
  let {lat, lon} = req.params;

  const reformatCoord = (coord) => {
    let reformatedCoord = coord.replace('.', ',');
    reformatedCoord = parseFloat(reformatedCoord).toFixed(2);
    return reformatedCoord;
  }

  lat = reformatCoord(lat);
  lon = reformatCoord(lon);
  
  const response = await fetch(`${url}${lat}|${lon}`);
  const data = await response.json();
  res.json(data);
  res.end();
});

module.exports = router;
