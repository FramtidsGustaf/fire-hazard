const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const day = new Date().getDay();
  let period = ['Idag', 'Imorgon'];
  const periods = [
    ['Tisdag', 'Onsdag', 'Torsdag', 'Fredag'],
    ['Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
    ['Torsdag', 'Fredag', 'Lördag', 'Söndag'],
    ['Fredag', 'Lördag', 'Söndag', 'Måndag'],
    ['Lördag', 'Söndag', 'Måndag', 'Tisdag'],
    ['Söndag', 'Måndag', 'Tisdag', 'Onsdag'],
    ['Måndag', 'Tisdag', 'Onsdag', 'Torsdag'],
  ];
  period = [...period, ...periods[day]];
  res.send(JSON.stringify(period));
  res.end();
});

module.exports = router;

