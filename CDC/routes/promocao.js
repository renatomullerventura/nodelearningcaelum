module.exports = (app) => {
    app.post('/promocao', (req, res, next) => {
        const mensagem = req.body.msg;

        const io = app.get('io');

        io.emit('novaPromocao', req.body.msg);
        resp.redirect('/produtos');
    })
};