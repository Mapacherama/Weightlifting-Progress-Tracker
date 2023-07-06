import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { WorkoutSelectionComponent } from './workout-selection/workout-selection.component';
import { RepsSetsInputComponent } from './reps-sets-input/reps-sets-input.component';
import { WeightTrackingComponent } from './weight-tracking/weight-tracking.component';
import { NutritionManagementComponent } from './nutrition-management/nutrition-management.component';
import { SettingsComponent } from './settings/settings.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBell, faTimes, faUser, faMoneyBill, faTrash } from '@fortawesome/free-solid-svg-icons';
import { DesktopMenuComponent } from './components/desktop-menu/desktop-menu.component';

// Add icons to the library
library.add(fas, fab);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutSelectionComponent,
    RepsSetsInputComponent,
    WeightTrackingComponent,
    NutritionManagementComponent,
    SettingsComponent,
    PageNotFoundComponent,
    HeaderComponent,
    DesktopMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
