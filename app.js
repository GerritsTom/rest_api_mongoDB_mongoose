const express = require('express');
const bodyParser = require('body-parser');
const mongoos = require('mongoose');
const cors = require('cors');

const SpielRunde = require('./app/models/spielrunde.model.js');
const Spiel = require('./app/models/spiel.model.js');

const dbConfig = require('./app/config/mongodb.config.js');

const app = express(); 
app.use(cors())

// connect to DB
// mongodb://localhost:27017/postDB
mongoos.connect(dbConfig.url)
  .then(()=> {
    console.log('Connected to database!');
    
    /*
    SpielRunde.remove({}, function(err) { 
      console.log('Remove Collection Spielrunde from database!');
      if(err){
         console.log(err);
         process.exit();
      }

      Spiel.remove({}, function(err) {
        if (err) {
          console.log(err);
          process.exit();
        }

        console.log('Remove Collection Spiele from database!');
        populate();
      }) 
   }); */
  })
  .catch((err) => {
    console.log('Connection failed! ' + err);
    process.exit();
  })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  next();
});

require('./app/routes/spielrunde.routes.js')(app);
require('./app/routes/spiele.routes.js')(app);
require('./app/routes/tipp.routes.js')(app);
require('./app/routes/user.routes.js')(app);

module.exports = app;


function populate() {

  const spielRunde = new SpielRunde({
    _id: new mongoos.Types.ObjectId(),
    spielRundeId: 1,
    datum: "Donnerstag 14 Juni",
    umschreibung: "",
    typ: "Gruppenphase"
  });

  spielRunde.save(function(err, spielRunde) {
    if (err) {
      console.log(err);
    };

    const spiel = new Spiel({
      spielId: 1,
      datum: "14 Jun 2018 - 18:00", 
      gruppe: "Gruppe A",
      stadion: "Luzhniki Stadium",
      ort: "Moskau",
      team1: "Russland",
      team2: "Saudiarabien",
      scoreTeam1: 0,
      scoreTeam2: 0,
      spielRunde: spielRunde._id
    });

    spiel.save(function(err, spiel) {
      if (err) console.log(err);

      SpielRunde.findById(spielRunde._id, function(err, spielRunde) {
        if (err) {
          console.log(err);
        } else {
          spielRunde.spiele.push(spiel);
          spielRunde.save(function(err, data) {
            if (err) {
              console.log(err);
            } else {
              console.log(data);
            }
          })
        }
      })
    })
  });

  // Spielrunde 2
  /*
  const spielRunde2 = new SpielRunde({
    _id: new mongoos.Types.ObjectId(),
    spielRundeId: 2,
    datum: "Freitag 15 Juni",
    umschreibung: "",
    typ: "Gruppenphase"
  });

  spielRunde2.save(function(err) {
    if (err) {
      console.log(err);
      return;
    };

    const spiel2 = new Spiel({
      spielId: 2,
      datum: "15 Jun 2018 - 17:00", 
      gruppe: "Gruppe A",
      stadion: "Ekaterinenburg Arena",
      ort: "Jekaterinenburg",
      team1: "Ägypten",
      team2: "Uruguay",
      scoreTeam1: 0,
      scoreTeam2: 0,
      spielRunde: spielRunde2._id
    });

    spiel2.save(function(err) {
      if (err) console.log(err);
    })

    const spiel3 = new Spiel({
      spielId: 3,
      datum: "15 Jun 2018 - 17:00", 
      gruppe: "Gruppe A",
      stadion: "Ekaterinenburg Arena",
      ort: "Jekaterinenburg",
      team1: "Ägypten",
      team2: "Uruguay",
      scoreTeam1: 0,
      scoreTeam2: 0,
      spielRunde: spielRunde2._id
    });

    spiel3.save(function(err) {
      if (err) console.log(err);
    })

    const spiel4 = new Spiel({
      spielId: 4,
      datum: "15 Jun 2018 - 17:00", 
      datum: "15 Jun 2018 - 21:00", 
      gruppe: "Gruppe A",
      stadion: "Fisht Stadium",
      ort: "Sotschi",
      team1: "Portugal",
      team2: "Spanien",
      scoreTeam1: 0,
      scoreTeam2: 0,
      spielRunde: spielRunde2._id
    });

    spiel4.save(function(err) {
      if (err) console.log(err);
    })

  }); */
}


function initial(){
 
    let spielRunden = [
      {
        spielRundeId: 1,
        datum: "Donnerstag 14 Juni",
        umschreibung: "",
        typ: "Gruppenphase",
        spiele: [
          {
            spielId: 1,
            datum: "14 Jun 2018 - 18:00", 
            gruppe: "Gruppe A",
            stadion: "Luzhniki Stadium",
            ort: "Moskau",
            team1: "Russland",
            team2: "Saudiarabien",
            scoreTeam1: 0,
            scoreTeam2: 0
          },
        ]
      },
      {
        spielRundeId: 2,
        datum: "Freitag 15 Juni",
        umschreibung: "",
        typ: "Gruppenphase",
        spiele: [
          {
            spielId: 2,
            datum: "15 Jun 2018 - 17:00", 
            gruppe: "Gruppe A",
            stadion: "Ekaterinenburg Arena",
            ort: "Jekaterinenburg",
            team1: "Ägypten",
            team2: "Uruguay",
            scoreTeam1: 0,
            scoreTeam2: 0
          },
          {
            spielId: 3,
            datum: "15 Jun 2018 - 18:00", 
            gruppe: "Gruppe B",
            stadion: "Sankt-Petersburg-Stadion",
            ort: "Sankt-Petersburg",
            team1: "Marokko",
            team2: "Iran",
            scoreTeam1: 0,
            scoreTeam2: 0
          },
          {
            spielId: 4,
            datum: "15 Jun 2018 - 21:00", 
            gruppe: "Gruppe A",
            stadion: "Fisht Stadium",
            ort: "Sotschi",
            team1: "Portugal",
            team2: "Spanien",
            scoreTeam1: 0,
            scoreTeam2: 0
          }
        ]
      },
      {
        spielRundeId: 3,
        datum: "Samstag 16 Juni",
        umschreibung: "",
        typ: "Gruppenphase",
        spiele: [
          {
            spielId: 5,
            datum: "16 Jun 2018 - 13:00", 
            gruppe: "Gruppe C",
            stadion: "Kazan Arena",
            ort: "Kasan",
            team1: "Frankreich",
            team2: "Australien",
            scoreTeam1: 0,
            scoreTeam2: 0
          },
          {
            spielId: 6,
            datum: "16 Jun 2018 - 16:00", 
            gruppe: "Gruppe D",
            stadion: "Spartak Stadion",
            ort: "Moskau",
            team1: "Argentien",
            team2: "Island",
            scoreTeam1: 0,
            scoreTeam2: 0
          },
          {
            spielId: 7,
            datum: "16 Jun 2018 - 19:00", 
            gruppe: "Gruppe C",
            stadion: "Mordovia Arena",
            ort: "Saransk",
            team1: "Peru",
            team2: "Dänemark",
            scoreTeam1: 0,
            scoreTeam2: 0
          },
          {
            spielId: 8,
            datum: "16 Jun 2018 - 21:00", 
            gruppe: "Gruppe D",
            stadion: "Kaliningrad Stadium",
            ort: "Kaliningrad",
            team1: "Kroatien",
            team2: "Nigeria",
            scoreTeam1: 0,
            scoreTeam2: 0
          }
        ]
      }
    ]
   
    // Init data -> save to MongoDB

    for (let i = 0; i < spielRunden.length; i++) { 
        const spielRunde = new SpielRunde(spielRunden[i]);
        spielRunde.save();
    }
}