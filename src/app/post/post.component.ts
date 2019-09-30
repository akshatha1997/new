import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
public data1;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.data1 = data;
    });
  }
  tonextPage(data) {
   localStorage.setItem('next', JSON.stringify(data));
   console.log('id', data);
   this.router.navigateByUrl('comments');

  }

}


