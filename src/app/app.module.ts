import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostComponent } from './post/post.component';
import { TasksComponent } from './tasks/tasks.component';
import { AlbumsComponent } from './albums/albums.component';
import { AddComponent } from './add/add.component';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SignupComponent } from './signup/signup.component';
import { PhotoComponent } from './photo/photo.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PostComponent,
    TasksComponent,
    AlbumsComponent,
    AddComponent,
    PhotosComponent,
    CommentsComponent,
    SignupComponent,
    PhotoComponent
   
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
