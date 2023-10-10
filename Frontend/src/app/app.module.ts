import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoviewComponent } from './todoview/todoview.component';
import { StoreModule } from '@ngrx/store';
import { todoreducer } from './Store/todo.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodoviewComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({todo: todoreducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
