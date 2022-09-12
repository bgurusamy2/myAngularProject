import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestcaseWizardComponent } from './testcase-wizard/testcase-wizard.component';
import {MatButtonModule,MatButton} from '@angular/material/button'
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule  } from '@angular/material/form-field';
import { MatInputModule  } from '@angular/material/input';
import { FormsModule,ReactiveFormsModule,  } from '@angular/forms';
import { MatIconModule  } from '@angular/material/icon';
import { MatProgressSpinnerModule  } from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    AppComponent,
    TestcaseWizardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatButtonModule,MatStepperModule,MatFormFieldModule,FormsModule,ReactiveFormsModule,
    MatInputModule,MatIconModule,MatProgressSpinnerModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
