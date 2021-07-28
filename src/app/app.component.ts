import { Component } from '@angular/core';

export interface items_data{
  p_name : string;
  p_id : number;
  p_cost : number;
  p_availability : number;
  p_details : string;
  p_category : string;
  p_img : string;

}

const  All_Items : items_data[] =[{
  p_name:"Apple",
  p_id:1,
  p_cost:30,
  p_availability:1,
  p_details:"Imported from Swiss",
  p_category:"Premium" ,
  p_img:"../assets/apple1.jfif",
  },
  {
  p_name:"Mango",
  p_id:2,
  p_cost:50,
  p_availability:1,
  p_details:"Farmed at Selam",
  p_category:"Tamilnadu" ,
  p_img:"../assets/mango.jfif",
  },
  {
  p_name:"Bananna",
  p_id:3,
  p_cost:5,
  p_availability:0 ,
  p_details:"",
  p_category:"Tamilnadu",
  p_img:"../assets/bananas.jfif",
  },
  {
  p_name:"Orange",
  p_id:4,
  p_cost:25,
  p_availability:1,
  p_details:"from Nagpur",
  p_category:"Premium" ,
  p_img:"../assets/Orange.jfif",
  }

]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'KlentySoft-Compnay-Test';

  category : string[] = ["All","Tamilnadu" , "Premium"];
  items_list = All_Items;

  change(value : any){
    if(value.selected[0]?.value == "Tamilnadu"){

      let sorted : items_data[] = [];
      for(let x of All_Items){
        if(x.p_category == "Tamilnadu"){
          sorted.push(x);
        }
      }

      this.items_list = sorted;

    }

    if(value.selected[0]?.value == "Premium"){

      let sorted : items_data[] = [];
      for(let x of All_Items){
        if(x.p_category == "Premium"){
          sorted.push(x);
        }
      }

      this.items_list = sorted;

    }

    if(value.selected[0]?.value == "All"){

      this.items_list = All_Items;

    }
  }


}
