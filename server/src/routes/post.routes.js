import express from 'express';
import Post from '../models/post.model';
const postRouter = express.Router();
//const Post = require('../models/post.model');

/**
 * @openapi
 * /:
 *   get:
 *     description: Get all Posts!
 *     responses:
 *       200:
 *         description: Returns all Posts.
 */
postRouter.get('/', (req, res, next) => {
    Post.find({} , function(err, result){
        if(err){
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

/**
 * @openapi
 * /:
 *   get:
 *     description: Get Posts /**
 * @openapi
 * /:
 *   get:
 *     description: Get all Posts!
 *     responses:
 *       200:
 *         description: Returns all Posts.
 */
postRouter.get('/', (req, res, next) => {
  Post.find({} , function(err, result){
      if(err){/**
      * @openapi
      * /:
      *   get:
      *     description: Get all Posts!
      *     responses:
      *       200:
      *         description: Returns all Posts.
      */
     postRouter.get('/', (req, res, next) => {
         Post.find({} , function(err, result){
             if(err){
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

 *       200:
 *         description: Returns aall Posts.
 */
postRouter.get("/:post_id", (req, res, next) => {
    Post.findById(req.params.post_id, function (err, result) {
        if(err){
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

 
/* Add Single Post */
postRouter.post("/", (req, res, next) => {
  let newPost = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author
  };
   Post.create(newPost, function(err, result) {
    if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
    }
      res.status(201).send({
        success: true,
        data: result,
        message: "Post created successfully"
      });
  });
});

/* Edit Single Post */
postRouter.patch("/:post_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  Post.findByIdAndUpdate(req.params.post_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
      if(err){
          res.status(400).send({
             success: false,
            error: err.message
            });
      }
      res.status(200).send({
        success: true,
        data: result,
        message: "Post updated successfully"
        });
  });
});

/* Delete Single Post */
postRouter.delete("/:post_id", (req, res, next) => {
  Post.findByIdAndDelete(req.params.post_id, function(err, result){
      if(err){
        res.status(400).send({
          success: false,
          error: err.message
        });
      }
    res.status(200).send({
      success: true,
      data: result,
      message: "Post deleted successfully"
    });
  });
});

export default postRouter; 