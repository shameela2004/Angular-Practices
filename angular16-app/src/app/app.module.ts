import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { HighlighterDirective } from './highlighter.directive';
import { CustomAttributeComponent } from './custom-attribute/custom-attribute.component';
import { ButtonEffectDirective } from './button-effect.directive';
import { ViewChildComponent } from './view-child/view-child.component';
import { NewdirDirective } from './newdir.directive';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ParentComponent,
    ChildComponent,
    HighlighterDirective,
    CustomAttributeComponent,
    ButtonEffectDirective,
    ViewChildComponent,
    NewdirDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
