import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Module, ModuleResponse } from './models/module.model';
import { ModuleService } from './services/module.service';
import { ForgeCardModule, ForgeButtonAreaModule } from '@tylertech/forge-angular';

@Component({
  selector: 'app-learn',
  imports: [ForgeCardModule, ForgeButtonAreaModule],
  templateUrl: './learn.html',
  styleUrl: './learn.css'
})
export class Learn {
  public modules: Module[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loadModules();
  }

  private loadModules(): void {
    this.modules = this.mockModules.response;
    // this.moduleService.getModules().subscribe({
    //   next: (response) => {
    //     this.modules = response.response;
    //   },
    //   error: (error) => {
    //     console.error('Error loading modules:', error);
    //   }
    // });
  }

  goToModule(id: number) {
    console.log('Navigating to module with ID:', id);
    this.router.navigate(['/modules', id]);
  }

  mockModules: ModuleResponse = {
    response: [
      {
        id: 1,
        title: 'Introduction to Budgeting',
        imageLink: 'https://blog.blackbaud.com/wp-content/uploads/2014/04/478571029.jpg',
        description: 'Learn the basics of creating and managing a personal budget.',
        duration: 30
      },
      {
        id: 2,
        title: 'Understanding Credit Scores',
        imageLink: 'https://www.transunion.com/blog/credit-advice/whats-considered-a-good-credit-score/_jcr_content/root/pagesection/columnrow_copy_copy/item_1682370731956/contentcontainer/image.coreimg.png/1741971290005/credit-score-ranges-consumer.png',
        description: 'Explore what credit scores are, why they matter, and how to improve yours.',
        duration: 45
      },
      {
        id: 3,
        title: 'Investing Fundamentals',
        imageLink: 'https://media.gq-magazine.co.uk/photos/5e25d00550c26e0008a9b030/16:9/w_1920,h_1080,c_limit/20200120-invest.jpg',
        description: 'Get introduced to stocks, bonds, and strategies for long-term investing.',
        duration: 60
      },
      {
        id: 4,
        title: 'Smart Saving Habits',
        imageLink: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtKHyJkb-L1lZC5YhPedapSHgkx7KEunLNSg&s',
        description: 'Tips and tricks to build a savings plan that works for your goals.',
        duration: 25
      }
    ]
  };
}
