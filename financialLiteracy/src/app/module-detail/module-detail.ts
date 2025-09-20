import { Component, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ModuleService } from '../learn/services/module.service';
import { ActivatedRoute } from '@angular/router';
import { ModuleDetail } from '../learn/models/moduleDetail.model';
import { ForgeCardModule, ForgeDividerModule, ForgeListModule, ForgeListItemModule, ForgeRadioModule, ForgeIconModule, ForgeButtonModule, ForgeButtonAreaModule } from "@tylertech/forge-angular";

@Component({
  selector: 'app-module-detail',
  imports: [ForgeCardModule, ForgeDividerModule, ForgeListModule, ForgeListItemModule, ForgeRadioModule, ForgeIconModule, ForgeButtonModule, ForgeButtonAreaModule],
  templateUrl: './module-detail.html',
  styleUrl: './module-detail.css'
})
export class ModuleDetailComponent {
  module: ModuleDetail | null = null;
  private answered = new Map<any, number>();
  score = 0;
  totalQuestions = 0;

  constructor(
    private route: ActivatedRoute,
    private moduleService: ModuleService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.module = this.mockModuleDetails.find(m => m.id === id) || null;
    this.totalQuestions = this.module?.sections
      ?.filter(s => s.type === 'quiz')
      .flatMap(s => s.quizContent?.questions ?? [])
      .length ?? 0;

    // this.moduleService.getModuleById(id).subscribe(res => {
    //   this.module = res ;
    // });
  }

    selectAnswer(question: any, choiceIndex: number) {
      if (this.answered.has(question)) return; // already answered

      this.answered.set(question, choiceIndex);

      if (choiceIndex === question.answer) {
        this.score++;
      }
    }

    isSelected(question: any, choiceIndex: number): boolean {
      return this.answered.get(question) === choiceIndex;
    }

    isAnswered(question: any): boolean {
      return this.answered.has(question);
    }
    trustHtml(html: string): SafeHtml {
      return this.sanitizer.bypassSecurityTrustHtml(html);
    }


  mockModuleDetails: ModuleDetail[] = [
    {
      id: 1,
      title: 'Introduction to Budgeting',
      introduction: 'Learn the basics of creating and managing a personal budget.',
      sections: [
        {
          type: 'text',
          duration: 5,
          textContent: '<p>Budgeting helps you understand where your money goes and how to plan for future expenses.</p>'
        },
        {
          type: 'video',
          duration: 10,
          videoContent: "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/4Eh8QLcB1UQ?si=cF3cimCNKCggbEJ9\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"
        },
        {
          type: 'quiz',
          duration: 15,
          quizContent: {
            questions: [
              {
                question: 'What is the first step in creating a budget?',
                choices: ['Track expenses', 'Invest in stocks', 'Get a credit card', 'Pay off all debt'],
                answer: 0
              },
              {
                question: 'Which of these is a fixed expense?',
                choices: ['Groceries', 'Rent', 'Dining out', 'Movies'],
                answer: 1
              }
            ]
          }
        }
      ]
    },
    {
      id: 2,
      title: 'Understanding Credit Scores',
      introduction: 'Explore what credit scores are, why they matter, and how to improve yours.',
      sections: [
        {
          type: 'text',
          duration: 8,
          textContent: '<p>Your credit score is a number that represents your creditworthiness. It affects loans and interest rates.</p>'
        },
        {
          type: 'quiz',
          duration: 12,
          quizContent: {
            questions: [
              {
                question: 'Which factor impacts your credit score the most?',
                choices: ['Credit history length', 'Payment history', 'Types of credit used', 'New credit inquiries'],
                answer: 1
              }
            ]
          }
        }
      ]
    },
    {
      id: 3,
      title: 'Investing Fundamentals',
      introduction: 'Get introduced to stocks, bonds, and strategies for long-term investing.',
      sections: [
        {
          type: 'text',
          duration: 10,
          textContent: '<p>Investing is about putting money to work in assets that generate returns over time.</p>'
        },
        {
          type: 'video',
          duration: 20,
          videoContent: 'https://www.youtube.com/embed/dummyInvestingVideo'
        }
      ]
    },
    {
      id: 4,
      title: 'Smart Saving Habits',
      introduction: 'Tips and tricks to build a savings plan that works for your goals.',
      sections: [
        {
          type: 'text',
          duration: 5,
          textContent: '<p>Start by setting aside at least 10% of your income each month in a savings account.</p>'
        },
        {
          type: 'quiz',
          duration: 10,
          quizContent: {
            questions: [
              {
                question: 'What’s a good first step for building savings?',
                choices: ['Buy new clothes', 'Set up automatic transfers', 'Take out a loan', 'Increase credit card limits'],
                answer: 1
              }
            ]
          }
        }
      ]
    }
  ];
}
