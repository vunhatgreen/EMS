const app = require('express')()
const bodyParser = require('body-parser')
const basicAuth = require('express-basic-auth')
const cookieParser = require('cookie-parser')
app.listen(3001)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
require('mongoose').connect('mongodb://localhost/ems', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })

//For authentication
const auth = basicAuth({
    users: {
        admin: 'admin',
        user: '123',
        thanh: '123',
        ['thanha']: '32'
    },
});
app.use(cookieParser('82e4e438a0705fabf61f9854e3b575af'))
app.get('/authenticate', auth, (req, res) => {
    const options = {
        httpOnly: true,
        signed: true,
    };

    console.log(req.auth.user);

    if (req.auth.user === 'admin') {
        res.cookie('name', 'admin', options).send({ screen: 'admin' });
    } else if (req.auth.user !== 'admin') {
        res.cookie('name', 'user', options).send({ screen: 'user' });
    }
});
app.get('/read-cookie', (req, res) => {
    console.log(req.signedCookies);
    if (req.signedCookies.name === 'admin') {
        res.send({ screen: 'admin' });
    } else if (req.signedCookies.name === 'user') {
        res.send({ screen: 'user' });
    } else {
        res.send({ screen: 'auth' });
    }
});

app.get('/clear-cookie', (req, res) => {
    res.clearCookie('name').end();
});

app.get('/get-data', (req, res) => {
    if (req.signedCookies.name === 'admin') {
        res.send('This is admin panel');
    } else if (req.signedCookies.name === 'user') {
        res.send('This is user data');
    } else {
        res.end();
    }
});

 
//Handle error
app.use((err, req, res, next) => {
    console.log(err)
    res.send(err)
    next(err)
});
//For admin api
const cFaculty = require('./controllers/faculty')
app.route('/api/faculties')
    .get(cFaculty.getAll)
    .post(cFaculty.create)
app.route('/api/faculties/:id')
    .get(cFaculty.getOne)
    .put(cFaculty.update)
    .delete(cFaculty.delete)

const cMajor = require('./controllers/major')
app.route('/api/majors')
    .get(cMajor.getAll)
    .post(cMajor.create)
app.route('/api/majors/:id')
    .get(cMajor.getOne)
    .put(cMajor.update)
    .delete(cMajor.delete)

const cSubject = require('./controllers/subject')
app.route('/api/subjects')
    .get(cSubject.getAll)
    .post(cSubject.create)
app.route('/api/subjects/:id')
    .get(cSubject.getOne)
    .put(cSubject.update)
    .delete(cSubject.delete)

const cUser = require('./controllers/user')
app.route('/api/users')
    .get(cUser.getAll)
    .post(cUser.create)
app.route('/api/users/:id')
    .get(cUser.getOne)
    .put(cUser.update)
    .delete(cUser.delete)