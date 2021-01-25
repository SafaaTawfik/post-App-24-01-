import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/interfaces/postInterface';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-singlePost',
  templateUrl: './singlePost.component.html',
  styleUrls: ['./singlePost.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(private postsvc: PostService, private route: ActivatedRoute, private router: Router) { }
  id: string = this.route.snapshot.params.id;
  post: Post;
  getPostByID() {
    this.postsvc.getPostById(this.id).subscribe((res) => {
      this.post = res;
    });
  }

  back() {
    this.router.navigate(['/posts']);
  }
  ngOnInit() {
    this.getPostByID();
  }

}
