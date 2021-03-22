const express = require('express');
const cors = require('cors');
const sequelize = require('./config/connection');
const routes = require('./routes');
const { User } = require('./models');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

require('./config/passport')(User);

app.use(routes);


sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    })
});
