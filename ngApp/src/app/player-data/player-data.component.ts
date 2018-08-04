import { Component, OnInit, Input } from '@angular/core';
import { Player } from './../Player'; 
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerDetailsService } from './../player-details.service';
import { PlayerService } from './../player.service';
import swal from 'sweetalert2'; 
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-player-data',
  templateUrl: './player-data.component.html',
  styleUrls: ['./player-data.component.css']
})
export class PlayerDataComponent implements OnInit {
	
	public player = {};
	public editable: boolean = false;
	public error;
	public id;
	public badgeColor = "";

	constructor(
		private route: ActivatedRoute,
		private details: PlayerDetailsService,
		private playerService: PlayerService,
		private router: Router
	) { }

	ngOnInit() { 
		this.id = this.route.snapshot.paramMap.get('id');
  		this.playerService.getPlayer(this.id)
  			.subscribe(
  				res => this.player = res,
  				err => console.log("Error occurred: "+ err)
  			);
	}
	// [ngClass]="{'badge-dark':player.OPR >= 85, 
 //                          'badge-warning': player.OPR <= 84 && player.OPR >= 79,
 //                          'badge-secondary': player.OPR <= 78 && player.OPR >= 72,
 //                          'badge-danger': player.OPR <= 71 && player.OPR >= 64,
 //                          'badge-light': player.OPR <= 63
 //                           }">   {{ player.OPR }} 

 	getBadgeColor(OPR){
 		if(OPR>=85){
 			return 'badge-dark';	
 		}
 		if(OPR <= 84 && OPR >= 79){
 			return 'badge-warning';	
 		}
 		if( OPR <= 78 && OPR >= 72){
 			return 'badge-secondary';	
 		}
 		if(OPR <= 71 && OPR >= 64){
 			return 'badge-danger';	
 		}
 		if(OPR <= 63){
 			return 'badge-light';	
 		}
 		
 	}
	makeEditable(player){
		this.editable =  true;
	}
	cancelEdit(){
		this.editable = false; 
	}
	editPlayer(){
		this.playerService.editPlayer(this.player)
		.subscribe(
			res=> {
				this.player = res;
				this.editable = false; 
				// console.log("Player updated.");
				swal('Player updated!', 'success');
				// setTimeout(()=> {
				// 	this.router.navigate(['players'])
				// }, 10000);
			},
			err=> console.log(err) 
		);
	}
	deletePlayer(){

		swal({
		  title: 'Are you sure?',
		  text: 'You will not be able to get this player back!',
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonText: 'Yes, delete it!',
		  cancelButtonText: 'No, keep it'
		}).then((result) => {
		  if (result.value) {

		  	this.playerService.deletePlayer(this.id)
			.subscribe( 
				res=> {
					// this.player = res;
					this.editable = false; 
					// console.log("Player deleted.");
					swal(
				      'Deleted!',
				      'Player has been deleted.',
				      'success'
				    );
					// setTimeout(()=> {
						this.router.navigate(['players']);
					// }, 5000);
				},
				err=> console.log(err) 
			);

		    
		  // For more information about handling dismissals please visit
		  // https://sweetalert2.github.io/#handling-dismissals
		  } else if (result.dismiss === swal.DismissReason.cancel) {
		    // swal(
		    //   'Cancelled',
		    //   'Your imaginary file is safe :)',
		    //   'error'
		    // )
		  }
		})

		// this.playerService.deletePlayer(this.id)
		// .subscribe( 
		// 	res=> {
		// 		// this.player = res;
		// 		this.editable = false; 
		// 		// console.log("Player deleted.");
		// 		swal('Player deleted.', 'success');
		// 		setTimeout(()=> {
		// 			this.router.navigate(['players'])
		// 		}, 5000);
		// 	},
		// 	err=> console.log(err) 
		// );
	}
}
