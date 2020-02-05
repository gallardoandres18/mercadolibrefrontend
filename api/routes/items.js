var express = require('express');
var router = express.Router();
const axios = require('axios');
const constants = require('../constants');
const itemsUtils = require('../utils/items');


router.get('/', function (req, res, next) {
  const searchText = req.query.q;
  axios.get(`${constants.API_LIST_URL}/search?q=${searchText}&limit=${constants.LIMIT_RESULT}`)
    .then(response => {

      const { data } = response;
      res.json(
        {
          author: {
          },
          items: itemsUtils.serializeItems(data),
          categories: itemsUtils.serializeCategories(data)
        }
      )
    })
    .catch(error => {
      res.status(400).json({
        statusCode: 400,
        error: error
      })
    });
});

router.get('/:id', function (req, res, next) {
  const { id } = req.params;
  axios.all([
    axios.get(`${constants.API_DETAIL_URL}/${id}`),
    axios.get(`${constants.API_DETAIL_URL}/${id}/description`)
  ]).then(axios.spread((responseItem, responseDescription) => {
    const item = responseItem.data;
    const description = responseDescription.data;

    res.json(
      {
        author: {
        },
        item: itemsUtils.serializeItem(item, description)
      }
    )
  }))
  .catch(error => {
    res.status(400).json({
      statusCode: 400,
      error: error
    })
  });;
});

module.exports = router;
