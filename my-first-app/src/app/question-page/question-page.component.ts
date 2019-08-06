import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.scss']
})
export class QuestionPageComponent implements OnInit {
    heading = "Top Stackoverflow Questions";
  allquestionData;
  private quesansdetails: any = [];
  constructor(private questionData:QuestionsService, public httpclient: HttpClient, private router: Router) { 
  }

  public displayProfile() {
    this.router.navigate(['/user-profile'])
    }

  ngOnInit() {
    this.allquestionData = this.questionData.getQuestionData(); 
      this.questionData.getQuestionData().subscribe((res)=>{
        this.questionData.getQuestionData().subscribe((res)=>{
          console.log("res",res);
          this.quesansdetails = res["items"];
          this.quesansdetails.push(this.quesansdetails);

        });
  });

  }

}
