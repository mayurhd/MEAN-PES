import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './Player'; 
// import { Observable } from 'rxjs';
// import {  map } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

	private getPlayersURL = 'http://localhost:3000/api/allPlayers';
	private addPlayerURL = 'http://localhost:3000/api/addPlayer';
	private getPlayerURL = 'http://localhost:3000/api/getPlayer';
	private updateURL = 'http://localhost:3000/api/updatePlayer';
	private goldPlayerURL = 'http://localhost:3000/api/goldPlayers';
	private deletePlayerURL = 'http://localhost:3000/api/deletePlayer';
	private rarityURL = 'http://localhost:3000/api/getPlayers';	

	constructor( private http: HttpClient) { }

	getPlayers(){ 
		// return this.http.get(this.getPlayerURL).map((response: Response) => response.json())
  //     .do(data => console.log('All; ' + JSON.stringify(data)))
  //     .catch(this.handleError);
		// console.log(this.http.get(this.getPlayerURL));	
		return this.http.get<any>(this.getPlayersURL);	
	}
	getPlayer(id){
		return this.http.get<any>(this.getPlayerURL+"/"+id);	
	}
	editPlayer(player){
		// return this.http.put(this.updateURL + "/" + player._id, player).map((response: Response) => response.json());
		return this.http.put(this.updateURL + "/" + player._id, player);
	}
	addPlayer(player){
		// return this.http.put(this.updateURL + "/" + player._id, player).map((response: Response) => response.json());
		return this.http.post(this.addPlayerURL, player);
	}
	getRarity(rarity){
		return this.http.get(this.rarityURL+"/"+rarity, {responseType: 'json'});
	}
	deletePlayer(id){
		return this.http.delete(this.deletePlayerURL+"/"+id, {responseType: 'text'});
	}
}


// // import 'rxjs/Rx';

// import 'rxjs/add/observable/of';
// import 'rxjs/add/operator/map';
// import { map } from 'rxjs/operators';
// // import 'rxjs/add/operator/map';