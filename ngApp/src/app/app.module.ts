import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';

import { PlayerService } from './player.service';
import { PlayerDataComponent } from './player-data/player-data.component';
import { PlayerDetailsService } from './player-details.service';
import { AddPlayerComponent } from './add-player/add-player.component';
import { GoldComponent } from './gold/gold.component';
import { IndexComponent } from './index/index.component';
import { RarityComponent } from './rarity/rarity.component';



@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    PlayerDataComponent,
    AddPlayerComponent,
    GoldComponent,
    IndexComponent,
    RarityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PlayerService, PlayerDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
