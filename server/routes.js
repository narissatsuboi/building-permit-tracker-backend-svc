
const router = global.router;

router.get('/home', (req, res, next) => {
    res.send('<h3>Landing Page</h3>');
});

router.get('/about', (req, res, next) => {
    res.send('<h3>About Page</h3>');
});

module.exports = router;