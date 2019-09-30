import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  add1: FormGroup;
  constructor(private http: HttpClient, public router: Router) {
    this.add1 = new FormGroup({
      userId: new FormControl(),
      id: new FormControl(),
      title: new FormControl(),
      completed: new FormControl()
    });
  }

  ngOnInit() {
  }
  add(data) {
    const body = {
      userId: data.userId,
      id: data.id,
      title: data.title,
      completed: data.completed
    };
    this.http.post('https://jsonplaceholder.typicode.com/todos', body).subscribe(data1 => {
      console.log(data1);
      this.router.navigateByUrl('task');
    });

}
}
