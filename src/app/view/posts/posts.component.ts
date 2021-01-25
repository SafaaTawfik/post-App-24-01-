import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/interfaces/postInterface';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private postsvc: PostService) { }
  getPosts() {
    this.postsvc.getPosts().subscribe((res) => {
      this.posts = res;
    }, (error) => {
      console.log(error);
    })
  }
  addPost(post: Post) {
    this.postsvc.addPost(post).subscribe((res) => {
      this.posts.splice(0, 0, post);
    });


  }

  deletePost(post: Post) {
    this.postsvc.deletePost(post.id).subscribe((res) => {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    });
  }

  updatePost(id: string, post: Post) {

  }
  ngOnInit(): void {
    this.getPosts();
  }

}
