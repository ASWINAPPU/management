import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarContainerComponent } from './menubar-container/menubar-container.component';
import { MenubarItemsComponent } from './menubar-items/menubar-items.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarContainerComponent,
    MenubarItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
