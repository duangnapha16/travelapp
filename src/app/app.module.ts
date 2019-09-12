import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultComponent } from './result/result.component';
import { SearchProvincesComponent } from './search-provinces/search-provinces.component';
import { MapComponent } from './map/map.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule, MatFormFieldControl, } from '@angular/material/form-field';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  { path: 'searchprovinces', component: SearchProvincesComponent },
  { path: 'result', component: ResultComponent },
  { path: 'map', component: MapComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    SearchProvincesComponent,
    MapComponent,
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7vq-yq_csTGNqXl-XtJ8OJKXsl4Akq9c',
      // libraries: ['places']
    }),
    MatButtonModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
