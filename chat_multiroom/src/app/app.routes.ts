import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatRoomListComponent } from './chat-room-list/chat-room-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';

const routes: Routes = [
  { path: '', component: ChatRoomListComponent },
  { path: 'room/:id', component: ChatRoomComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }