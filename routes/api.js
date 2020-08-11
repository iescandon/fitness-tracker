const Workout = require('../models/workout.js');

module.exports = function (app) {
	// app.get('/api/authors', function (req, res) {
	// 	// Here we add an "include" property to our options in our findAll query
	// 	// We set the value to an array of the models we want to include in a left outer join
	// 	// In this case, just db.Post
	// 	db.Author.findAll({
	// 		include: [db.Post],
	// 	}).then(function (dbAuthor) {
	// 		res.json(dbAuthor);
	// 	});
	// });
	// app.get('/api/authors/:id', function (req, res) {
	// 	// Here we add an "include" property to our options in our findOne query
	// 	// We set the value to an array of the models we want to include in a left outer join
	// 	// In this case, just db.Post
	// 	db.Author.findOne({
	// 		where: {
	// 			id: req.params.id,
	// 		},
	// 		include: [db.Post],
	// 	}).then(function (dbAuthor) {
	// 		res.json(dbAuthor);
	// 	});
	// });
	// app.post('/api/authors', function (req, res) {
	// 	db.Author.create(req.body).then(function (dbAuthor) {
	// 		res.json(dbAuthor);
	// 	});
	// });
	// app.delete('/api/authors/:id', function (req, res) {
	// 	db.Author.destroy({
	// 		where: {
	// 			id: req.params.id,
	// 		},
	// 	}).then(function (dbAuthor) {
	// 		res.json(dbAuthor);
	// 	});
	// });
};

// router.get('/api/stats', ({ body }, res) => {
// 	Workout.create(body)
// 		.then((dbWorkout) => {
// 			res.json(dbWorkout);
// 		})
// 		.catch((err) => {
// 			res.status(400).json(err);
// 		});
// });

// router.post('/api/workout/bulk', ({ body }, res) => {
// 	Workout.insertMany(body)
// 		.then((dbWorkout) => {
// 			res.json(dbWorkout);
// 		})
// 		.catch((err) => {
// 			res.status(400).json(err);
// 		});
// });

// router.get('/api/workout', (req, res) => {
// 	Workout.find({})
// 		.sort({ date: -1 })
// 		.then((dbWorkout) => {
// 			res.json(dbWorkout);
// 		})
// 		.catch((err) => {
// 			res.status(400).json(err);
// 		});
// });

// module.exports = router;
