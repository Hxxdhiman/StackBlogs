import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { AddService } from '../../services/add.service';
import { BlogsService} from '../../services/blogs.service';
import { ShowBlogsService } from '../../services/show-blogs.service';
import { blogger } from '../../model/blogger/blogger';
import { WatchLaterService } from '../../services/watch-later.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  
  constructor(private _blogser: BlogsService, private _addser: AddService,private blogss:ShowBlogsService,private watchLater:WatchLaterService) {}
  Blogs:any;
  BlogsId:any;
  Bloging:any[]=[]
  userName:string=localStorage.getItem('userName')
  reloadPage()
  {
    window.location.reload()
  }
  ngOnInit(): void {
    this.blogss.getBlogs().subscribe(
      user=>{
        console.log(user)
        this.Blogs=user
        this.Bloging=this.Blogs
      },
      error=>{
        console.log(error)
      }
    )
  }
  addToWatchLater(blogId:any)
  {
    this.watchLater.addToReadLater(this.userName,blogId).subscribe(
      user=>{
        console.log(user)
        alert('added to read later')
      },
      error=>{
        console.log(error)
      }
    ) 
  }
  // readlater(data){
  //   console.log(data)
  //   this._addser.addToReadLater(data);
  //   alert("Added to Favourite")
  // }
 
}
