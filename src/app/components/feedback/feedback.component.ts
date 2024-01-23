import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Feedback } from 'src/app/data/model/Feedback';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  // feedback: Feedback = new Feedback('','',8,'','');
  feedbackForm!: FormGroup;
    
  constructor(private fb: FormBuilder) {
        
  }

  ngOnInit(): void {
    this.feedbackForm = this.fb.group({
      emailAddress: [''],
      phoneNumber: [''],
      rate: [8],
      feedbackTitle: [''],
      feedback: ['']
    })
  }

  submitFeedback() {
    // console.log('Feedback from [Submit] - ', this.feedback)
    console.log('Feedback from [Submit] - ', this.feedbackForm.value)
  }
}
