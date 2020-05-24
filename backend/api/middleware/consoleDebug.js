module.exports = (req, res, next) => {
    console.log('-----DEBUG-----');
    console.log('PATH:', req.url);
    console.log('METHOD:', req.method);
    console.log('------END------')
    next();
}