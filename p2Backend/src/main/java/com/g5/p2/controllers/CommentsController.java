package com.g5.p2.controllers;

import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.g5.p2.models.Comments;
import com.g5.p2.models.Subscriptions;
import com.g5.p2.services.CommentsServiceImplementation;

import antlr.collections.List;

@RequestMapping(path = "/comments")
@RestController
public class CommentsController {
  
  @Autowired
  CommentsServiceImplementation commentsService;
 
  //get comments by postId
  @GetMapping("{commentId}")
  public java.util.List<Comments> getCommentByPostId(@PathVariable Integer commentId){
	  return commentsService.getAll();
	
  }
  
  //create comment
  @PostMapping
  public Comments createComment(@RequestBody LinkedHashMap<String, Object> c) {
      try {
          Comments convert = new Comments((Integer)c.get("commentId"),(String)c.get("content"));
          return commentsService.create(convert, (Integer)c.get("postId"),(Integer)c.get("userId"));
      }
      catch(Exception e) {
          e.printStackTrace();
          throw e;
      }
  }
  
}
