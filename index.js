const express = require('express')
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());

const port = process.env.PORT || 5000;

// import data

const categories = require('./data/course_categories.json');
const courses = require('./data/course_details.json');


app.get('/', (req, res) => {
    res.send('Tanjil\'s API is Running');
})

app.get('/course-categories', (req, res) => {
    res.send(categories);
})

app.get('/course-categories/:id', (req, res) => {
    const id = req.params.id;
    const selected_category = categories.find(category => category.id === id);

    res.send(selected_category);
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '07') {
        res.send(courses);
    }
    else {
        const courses_by_category = courses.filter(course => course.category_id === id);
        res.send(courses_by_category);
    }
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selected_course = courses.find(course => course.course_id === id);
    res.send(selected_course);
})

app.listen(port, () => {
    console.log('Server is running on port', port);
})