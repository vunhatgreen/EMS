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
const cAnnouncement = require('./controllers/announcement')
app.route('/api/announcements')
    .get(cAnnouncement.getAll)
    .post(cAnnouncement.create)
app.route('/api/announcements/:id')
    .get(cAnnouncement.getOne)
    .put(cAnnouncement.update)
    .delete(cAnnouncement.delete)

const cDepartment = require('./controllers/department')
app.route('/api/departments')
    .get(cDepartment.getAll)
    .post(cDepartment.create)
app.route('/api/departments/:id')
    .get(cDepartment.getOne)
    .put(cDepartment.update)
    .delete(cDepartment.delete)

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

const cCourse = require('./controllers/course')
app.route('/api/courses')
    .get(cCourse.getAll)
    .post(cCourse.create)
app.route('/api/courses/:id')
    .get(cCourse.getOne)
    .put(cCourse.update)
    .delete(cCourse.delete)

const cUser = require('./controllers/user')
app.route('/api/users')
    .get(cUser.getAll)
    .post(cUser.create)
app.route('/api/users/:id')
    .get(cUser.getOne)
    .put(cUser.update)
    .delete(cUser.delete)

const cInfo = require('./controllers/info')
app.route('/api/infos')
    .get(cInfo.getAll)
    .post(cInfo.create)
app.route('/api/infos/:username')
    .get(cInfo.getOne)
    .put(cInfo.update)
    .delete(cInfo.delete)