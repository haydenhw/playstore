// yarn add express cors body-parser
const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

const appData = require('./data');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));





const filterByGenreIfNeeded = (apps,sort) => {}
app.get('/', (req, res) => {
  let apps = appData
  const { sort, generes } = req.query
  apps = sortAppsIfNeeded(apps, sort, res)
  console.log('hello')
  return res.json(apps)


  /// Dead code
  const validGeneres =['Action', 'Puzzle', 'Strategy', 'Casual', 'Arcade', 'Card']
  if (generes)  {
    try {
      apps = tryToSortByGenre(apps)
    } catch (err) {
    }
    if (validGeneres.includes(generes)) {
      apps = apps.filter(app => app.Genres === generes)
    } else {
      res.status(400)
        .send('Error: "generes" must be on of the following' + validGeneres)
    }
  }

  res.json(apps)
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
