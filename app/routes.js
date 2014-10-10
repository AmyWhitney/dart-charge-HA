module.exports = {
  bind : function (app, assetPath) {
    app.get('/', function (req, res) {
      res.render('index', {'assetPath' : assetPath});
    });

    app.post('/account/setup/success', function (req, res) {
      res.render('account/setup/success', {'assetPath' : assetPath});
    });

    app.post('/account/setup/personal', function (req, res) {
      res.render('account/setup/personal/index', {'assetPath' : assetPath});
    });

    app.post('/account/setup/vehicle', function (req, res) {
      res.render('account/setup/vehicle/index', {'assetPath' : assetPath});
    });

    app.post('/account/setup/payment', function (req, res) {
      res.render('account/setup/payment/index', {'assetPath' : assetPath});
    });

    app.post('/account/setup/payment/card', function (req, res) {
      res.render('account/setup/payment/card', {'assetPath' : assetPath});
    });

  }
};
