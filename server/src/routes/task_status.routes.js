import express from 'express';

import TaskStatus from '../models/task_status.model';

const taskStatusRouter = express.Router();

/* Get all TaskStatus*/
taskStatusRouter.get('/', (req, res, next) => {
  TaskStatus.find({}, function (err, result) {
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

/* Get Single TaskStatus */
taskStatusRouter.get("/:task_Status_id", (req, res, next) => {
  TaskStatus.findById(req.params.task_Status_id, function (err, result) {
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


/* Add Single Task_status */
taskStatusRouter.post("/", (req, res, next) => {
  let newtask_Status = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author
  };
  TaskStatus.create(newtask_Status, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(201).send({
      success: true,
      data: result,
      message: "TaskStatus created successfully"
    });
  });
});

/* Edit Single TaskStatus */
taskStatusRouter.patch("/:task_Status_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  TaskStatus.findByIdAndUpdate(req.params.task_Status_id, { $set: fieldsToUpdate }, { new: true }, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "TaskStatus updated successfully"
    });
  });
});

/* Delete Single TaskStatus */
taskStatusRouter.delete("/:task_Status_id", (req, res, next) => {
  TaskStatus.findByIdAndDelete(req.params.task_Status_id, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "TaskStatus deleted successfully"
    });
  });
});

export default taskStatusRouter;