import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://hermes.dio.me/ranking/c8dac24a-4eb9-40d9-a26c-8c654cc0f9ef.png"
  contentTitle:string = "Notícia exemplo"
  contentDescription:string = "Conteúdo da notícia"
  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {    
    this.route.paramMap.subscribe(value => {
      this.id = value.get("id");
      this.setValuesToComponet(this.id); // Call the function to update component values
    }, (error) => {
      // Handle errors here if needed
      console.error("Error retrieving data:", error); // Example error handling
    })
  }

  setValuesToComponet(id: string | null): void { // Specify the return type as void
    const result = dataFake.filter(article => article.id === id)[0]; // Use strict comparison (===)

    if (result) { // Check if a matching article is found before accessing properties
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photo;
    } else {
      // Handle case where no matching article is found (optional)
      console.warn("No article found with ID:", id);
    }
  }

}
