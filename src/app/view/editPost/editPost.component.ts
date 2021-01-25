import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/postInterface';
import { PostService } from 'src/app/services/post.service';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-editPost',
  templateUrl: './editPost.component.html',
  styleUrls: ['./editPost.component.css']
})
export class EditPostComponent implements OnInit {

  constructor(private postsvc: PostService, private router: ActivatedRoute) { }
  id: string = this.router.snapshot.params.id;
  post: Post = {};
  getPostById() {
    this.postsvc.getPostById(this.id).subscribe((res) => {
      this.post = res;
      console.log(this.post);
    });

  }

  updatePost(post: Post) {
    this.postsvc.updatePost(this.id, this.post).subscribe((res) => {
      console.log(res);
    });
  }
  ngOnInit() {
    this.getPostById();
  }

}
