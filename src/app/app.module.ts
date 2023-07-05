import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { WorkoutSelectionComponent } from './workout-selection/workout-selection.component';
import { RepsSetsInputComponent } from './reps-sets-input/reps-sets-input.component';
import { WeightTrackingComponent } from './weight-tracking/weight-tracking.component';
import { NutritionManagementComponent } from './nutrition-management/nutrition-management.component';
import { SettingsComponent } from './settings/settings.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutSelectionComponent,
    RepsSetsInputComponent,
    WeightTrackingComponent,
    NutritionManagementComponent,
    SettingsComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
