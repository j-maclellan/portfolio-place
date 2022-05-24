const express = require('express');

const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static.apply(path.join(__dirname, '../build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});
app.listen('PORT', () => {
    console.log(`Server up on PORT${PORT}`);
})