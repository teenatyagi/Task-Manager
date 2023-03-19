import express from 'express';
import Project from '../models/project.model';

const projectRouter = express.Router();

/* Get all Projects*/
projectRouter.get('/', (req, res, next) => {
  Project.find({}, function (err, result) {
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

/* Get Single Project */
projectRouter.get("/:project_id", (req, res, next) => {
  Project.findById(req.params.project_id, function (err, result) {
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


/* Add Single Project */
projectRouter.post("/", (req, res, next) => {
  let newProject = { 
    title: req.body.title,
    body: req.body.body,
    author: req.body.author
  };
  Project.create(newProject, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(201).send({
      success: true,
      data: result,
      message: "Project created successfully"
    });
  });
});

/* Edit Single Project */
projectRouter.patch("/:project_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  Project.findByIdAndUpdate(req.params.project_id, { $set: fieldsToUpdate }, { new: true }, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "Project updated successfully"
    });
  });
});

/* Delete Single project */
projectRouter.delete("/:project_id", (req, res, next) => {
  Project.findByIdAndDelete(req.params.project_id, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message
      });
    }
    res.status(200).send({
      success: true,
      data: result,
      message: "Project deleted successfully"
    });
  });
});

export default projectRouter;