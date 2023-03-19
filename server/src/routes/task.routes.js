import express from 'express';

import Task from '../models/task.model';

const taskRouter = express.Router();

/* Get all Tasks */
taskRouter.get('/', (req, res, next) => {
  Task.find({}, function (err, result) {
    if (err) {
      res.status(400).send({
        'success': false,
        'error': err.message
      });
    }
    res.status(200).send({
      'success': true,
      
      'data': result
    });
  });
});

/* Get Single Task */
taskRouter.get("/:task_id", (req, res, next) => {
  Task.findById(req.params.task_id, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result
    });
  });
});


/* Add Single Task */
taskRouter.post("/", (req, res, next) => {
  let newTask = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author
  };
  Task.create(newTask, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(201).send({
      success: true,
      data: result,
      message: "Task created successfully"
    });
  });
});

/* Edit Single Task */
taskRouter.patch("/:task_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  Task.findByIdAndUpdate(req.params.task_id, { $set: fieldsToUpdate }, { new: true }, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "Task updated successfully"
    });
  });
});

/* Delete Single task */

taskRouter.delete("/:task_id", (req, res, next) => {
  Task.findByIdAndDelete(req.params.task_id, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "Task deleted successfully"
    });
  });
});

export default taskRouter;