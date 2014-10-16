var mongoose = require('mongoose');
var Schema = mongoose.Shema;
mongoose.connect('mongodb://localhost/seriestv', function(err, res) {
	    if (err) console.log('Error Connected to Database' + err);
	    else console.log('Connected to Database' + err);
});

// mongoose.connect('mongodb://localhost/seriestv', function(err, res) {
// 	    if (err) throw err;
// 	        console.log('Connected to Database');	    
// });

var serietvSchema = new Schema({
	titulo: String,
	temporadas: Number,
	pais: String,
	genero: {
		type: String,
		enum: ['Comedia', 'Fantasia', 'Drama', 'Accion'];
	}
});

var SerieTV = mongoose.model('SerieTV', serietvSchema);   

module.exports =  SerieTV;