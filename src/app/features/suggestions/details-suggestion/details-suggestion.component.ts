import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Suggestion } from '../../../models/suggestion';

@Component({
  selector: 'app-details-suggestion',
  templateUrl: './details-suggestion.component.html',
  styleUrl: './details-suggestion.component.css'
})
export class DetailsSuggestionComponent {

  constructor(private route: ActivatedRoute, private r: Router){}
id!:Number;
sugg!:Suggestion | undefined;
options:any[]=[];
suggestions: Suggestion[] = [ 
  { 
    id: 1, 
    title: 'Organiser une journée team building', 
    description: 'Suggestion pour organiser une journée de team building pour renforcer les liens entre les membres de l\'équipe.', 
    category: 'Événements', 
    date: new Date('2025-01-20'), 
    status: 'acceptee' ,
    nbrLike: 0
  }, 
  { 
    id: 2, 
    title: 'Améliorer le système de réservation', 
    description: 'Proposition pour améliorer la gestion des réservations en ligne avec un système de confirmation automatique.', 
    category: 'Technologie', 
    date: new Date('2025-01-15'), 
    status: 'refusee' ,
    nbrLike: 0
  }, 
  { 
    id: 3, 
    title: 'Créer un système de récompenses', 
    description: 'Mise en place d\'un programme de récompenses pour motiver les employés et reconnaître leurs efforts.', 
    category: 'Ressources Humaines', 
    date: new Date('2025-01-25'), 
    status: 'refusee' ,
    nbrLike: 0
  }, 
  { 
    id: 4, 
    title: 'Moderniser l\'interface utilisateur', 
    description: 'Refonte complète de l\'interface utilisateur pour une meilleure expérience utilisateur.', 
    category: 'Technologie', 
    date: new Date('2025-01-30'), 
    status: 'en_attente' ,   
    nbrLike: 0
  }, 
  { 
    id: 5, 
    title: 'Formation à la sécurité informatique', 
    description: 'Organisation d\'une formation sur les bonnes pratiques de sécurité informatique pour tous les employés.', 
    category: 'Formation', 
    date: new Date('2025-02-05'), 
    status: 'acceptee' ,
    nbrLike: 0
  }]; 
searchTerm: string = '';

  like(id: number): void {
    const suggestion = this.suggestions.find(s => s.id === id);
    if (suggestion) {
      suggestion.nbrLike++;
    } 
  }
  // recupererId(){
  // this.id = this.route.snapshot.params['param'];
  // }

  ngOnInit(){
   // this.recupererId();
    this.route.params.subscribe(data => this.id = data['param']);
    this.route.queryParams.subscribe(data => this.options.push(data));
    console.log(this.options);

    this.sugg = this.suggestions.find(s => s.id == this.id);
    
  }

  back(){
    this.r.navigate(['suggestions']);
    
  }
}
