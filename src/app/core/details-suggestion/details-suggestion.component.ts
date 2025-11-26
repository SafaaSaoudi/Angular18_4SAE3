import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-suggestion',
  templateUrl: './details-suggestion.component.html',
  styleUrl: './details-suggestion.component.css'
})
export class DetailsSuggestionComponent {

  constructor(private route: ActivatedRoute){}
id!:Number;
options:any[]=[];

  // recupererId(){
  // this.id = this.route.snapshot.params['param'];
  // }

  ngOnInit(){
   // this.recupererId();
    this.route.params.subscribe(data => this.id = data['param']);
    this.route.queryParams.subscribe(data => this.options.push(data));
    console.log(this.options);
    
  }
}
