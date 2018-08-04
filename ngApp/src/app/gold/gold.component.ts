import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Player } from './../Player'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-gold',
  templateUrl: './gold.component.html',
  styleUrls: ['./gold.component.css']
})
export class GoldComponent implements OnInit {
  
  players = {}
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
	this.playerService.goldPlayers()
	.subscribe(  
		res=> this.players = res,
		err=> console.log(err)
	);
  }

}
