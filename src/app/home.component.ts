import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 public apidata
 public data1

  public ids = []
  public totalData = []
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get('https://jvapi.peelpress.com/news').subscribe(data => {
      console.log(data)
      this.apidata = data['news']
      for (var i = 0; i < this.apidata.length; i++) {
        this.ids.push(this.apidata[i]._id)
      }
      console.log(this.apidata, this.ids)
    })
    setTimeout(() => {


      for (var j = 0; j < this.ids.length; j++) {
        this.http.get('https://jvapi.peelpress.com/news/' + this.ids[j]).subscribe(data => {
          console.log(data)
          this.totalData.push(data['news'])
          console.log(this.totalData)
        })
      }
    }, 2000);
  }
  tonextPage(data) {
    console.log('11', data)
    localStorage.setItem('newsData', JSON.stringify(data))
    this.router.navigate(['bank'])
  }
}
