import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { DetailsActorsComponent } from '../components/details-actors/details-actors.component';
import { DetailsMoviesComponent } from '../components/details-movies/details-movies.component';
import { DetailsReviewsComponent } from '../components/details-reviews/details-reviews.component';
import { DetailsComponent } from '../components/details/details.component';
import { SearchComponent } from '../components/search/search.component';
import { CommonModule } from '@angular/common';

const routes: Routes =
    [
        {path: '', component: HomeComponent},
        {path: 'home', component: HomeComponent},
        {path: 'details/:id', component: DetailsComponent},
        {path: 'details/actors/:id', component: DetailsActorsComponent},
        {path: 'details/movies/:id', component: DetailsMoviesComponent},
        {path: 'details/reviews/id', component: DetailsReviewsComponent},
        // {path: 'feedback', component: FeedbackComponent},
        {path: 'search/:movieTitle', component: SearchComponent}
    ];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule,],
    exports: [RouterModule]
})

export class AppRoutesModule {}