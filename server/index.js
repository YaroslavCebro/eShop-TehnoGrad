require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('../server/db.js');
const models = require('./models/models.js');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const router = require('./routes/index.js');
const errorHandler = require('./middlewares/ErrorHandlingMiddleware.js');
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use(fileUpload({}));
app.use('/api', router);


// +app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });


app.use(errorHandler);  // must be last!!




const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, ()=> console.log(`Server started on port ${PORT}`));
    } catch (e) {
        return new Error("App is broke")
    }
}

start();