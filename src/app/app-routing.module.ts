import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostComponent } from './post/post.component';
import { AlbumsComponent } from './albums/albums.component';
import { AddComponent } from './add/add.component';
import { PhotosComponent } from './photos/photos.component';
import { CommentsComponent } from './comments/comments.component';
import { SignupComponent } from './signup/signup.component';
import { PhotoComponent } from './photo/photo.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: SignupComponent},
  {path: 'dash', component: DashboardComponent},
  {path: 'task', component: TasksComponent},
  {path: 'post', component: PostComponent},
  {path: 'album', component: AlbumsComponent},
  {path: 'add', component: AddComponent},
  {path: 'photo', component: PhotosComponent},
  {path: 'comments', component: CommentsComponent},
  {path: 'ph', component:PhotoComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
