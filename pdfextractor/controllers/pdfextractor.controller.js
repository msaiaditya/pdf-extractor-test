const PdfExtractorModel = require('../models/pdfextractor.model');

exports.extract = (req, res) => {
    PdfExtractorModel.extract(req.body)
        .then((result) => {
            res.status(200).send(result);
        }).catch((error) => {
	    res.status(500).send("server error");
	});
};
