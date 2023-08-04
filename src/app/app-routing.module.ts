import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutSelectionComponent } from './workout-selection/workout-selection.component';
import { RepsSetsInputComponent } from './reps-sets-input/reps-sets-input.component';
import { WeightTrackingComponent } from './weight-tracking/weight-tracking.component';
import { NutritionManagementComponent } from './nutrition-management/nutrition-management.component';
import { SettingsComponent } from './settings/settings.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './services/auth-guard.service';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'dashboard', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'workout-selection', component: WorkoutSelectionComponent },
  { path: 'reps-sets-input', component: RepsSetsInputComponent },
  { path: 'weight-tracking', component: WeightTrackingComponent },
  { path: 'nutrition-management', component: NutritionManagementComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
