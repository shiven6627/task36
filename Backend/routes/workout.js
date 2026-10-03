const express = require('express')
const { createWorkout, getWorkouts, getworkoutbyId , deleteWorkout, updateWorkout} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')


const router = express.Router()

router.use(requireAuth)


router.get('/', getWorkouts)

router.get('/:id',getworkoutbyId)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router