import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlayersComponent } from './players/players.component';
import { PlayerDataComponent } from './player-data/player-data.component';
import { PlayerDetailsService } from './player-details.service';
import { AddPlayerComponent } from './add-player/add-player.component';
import { IndexComponent } from './index/index.component';
import { RarityComponent } from './rarity/rarity.component';

const routes: Routes = [
	{ path: '', redirectTo: '/index', pathMatch: 'full' },
	{ path: 'index', component: IndexComponent },
	{ path: 'players', component: PlayersComponent },
	{ path: 'player/:id', component: PlayerDataComponent },
	{ path: 'rarity/:rarity', component: RarityComponent },
	{ path: 'addPlayer', component: AddPlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
