import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categories.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
    categories: string[];

  constructor(private categoriesService:CategoriesService) { }

  ngOnInit() {
      this.categories = this.categoriesService.getCategories();
  }

}
