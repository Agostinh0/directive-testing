import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { CpfValidationDirective } from './cpf-validation.directive';
import { TestWithReactiveFormComponent } from './test-with-reactive-form/test-with-reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    CpfValidationDirective,
    TestWithReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
