import { Injectable } from '@angular/core';
import { QuestionPageComponent } from './question-page/question-page.component'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  questionUrl: string = "https://api.stackexchange.com/2.2/questions/featured?order=desc&sort=activity&site=stackoverflow";
  constructor( private httpClient: HttpClient) { 
    
  }

  getQuestionData() {
    return this.httpClient.get(this.questionUrl);
 }

}
