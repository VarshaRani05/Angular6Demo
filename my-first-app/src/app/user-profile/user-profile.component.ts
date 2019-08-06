import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../User';
import { HttpClient } from '@angular/common/http';
import { QuestionsService } from '../questions.service';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private questionData:QuestionsService, public httpclient: HttpClient) { }

  ngOnInit() {
  }

}
