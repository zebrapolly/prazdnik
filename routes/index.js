module.exports = function(app, transporter) {

    app.get('/', function (req, res, next) {
        res.sendfile('index.html');
    });

    app.post('/sendmail', function(req, res, next) {
        console.log(req.body);
        transporter.sendMail({
            from: 'zebrapolly@gmail.com',
            to: 'zebrapolly@gmail.com',
            subject: 'hello',
            html: req.body.name + ' ' + req.body.email + ' ' + req.body.phone + ' ' + req.body.description,
            text: 'hello world!'
        });
        res.send('Mailsend');
    });

    app.listen(process.env.PORT || 3000, function(){
        console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
    });

}
