import { Injectable } from '@angular/core';
import { Player } from './Player'; 
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PlayerDetailsService {

	private receivePlayer = new BehaviorSubject<any>("No player selected.")
	sendPlayer = this.receivePlayer.asObservable()

	constructor() { }

	toDetailService(player: Player){
		this.receivePlayer.next(player);
	}
}