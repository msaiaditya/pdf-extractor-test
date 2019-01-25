const PdfExtractorController = require('./controllers/pdfextractor.controller');

exports.routesConfig = function (app) {
    app.post('/pdfextractor', [
        PdfExtractorController.extract
    ]);
};
