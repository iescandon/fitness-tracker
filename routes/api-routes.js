const Workout = require('../models/workout.js');

module.exports = function (app) {
	app.get('/api/workouts', function (req, res) {
		Workout.find();
	});
	app.post('/api/workouts', function (req, res) {
		const exercise = new Workout({ exercises: req.body });
		Workout.create(exercise)
			.then((results) => {
				res.json(results);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});
	app.put('/api/workouts/:id', function (req, res) {
		Workout.update();
	});
	app.get('/api/workouts/range', function (req, res) {
		Workout.find({})
			.then((results) => {
				res.json(results);
			})
			.catch((err) => {
				res.status(400).json(err);
			});
	});
	//stop
	// app.get('/api/workouts', async (req, res) => {
	// 	Workout.find({})
	// 		.then((dbWorkout) => {
	// 			res.json(dbWorkout);
	// 		})
	// 		.catch((err) => {
	// 			res.json(err);
	// 		});
	// });
	// app.post('/api/workouts', async (req, res) => {
	// 	const workout = new Workout({ exercises: req.body });
	// 	Workout.create(workout)
	// 		.then((dbWorkout) => {
	// 			res.json(dbWorkout);
	// 		})
	// 		.catch((err) => {
	// 			res.json(err);
	// 		});
	// });
	// app.put('/api/workouts/:id', async (req, res) => {
	// 	const id = req.params.id;
	// 	const data = req.body;
	// 	Workout.findById(id)
	// 		.then((dbWorkout) => {
	// 			dbWorkout.exercises.push(data);
	// 			return dbWorkout;
	// 		})
	// 		.then((dbWorkout) => {
	// 			Workout.findOneAndUpdate(
	// 				{ _id: id },
	// 				{ exercises: dbWorkout.exercises },
	// 				{ new: true }
	// 			)
	// 				.then((dbWorkout) => {
	// 					res.json(dbWorkout);
	// 				})
	// 				.catch((err) => {
	// 					res.json(err);
	// 				});
	// 		})
	// 		.catch((err) => {
	// 			res.json(err);
	// 		});
	// });
	// app.get('/api/workouts/range', async (req, res) => {
	// 	Workout.find({})
	// 		.then((dbWorkout) => {
	// 			res.json(dbWorkout);
	// 		})
	// 		.catch((err) => {
	// 			res.json(err);
	// 		});
	// });
};
