import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Feedback } from 'src/app/data/model/Feedback';
import { emailDomainValidator } from 'src/app/validators/email.validator';
import { inappropriateKeywordsValidator } from 'src/app/validators/keywords.validator';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  
  // feedback: Feedback = new Feedback('','',8,'','');
  feedbackForm!: FormGroup;
    
  constructor() {
        
  }

  ngOnInit(): void {
    this.feedbackForm = new FormGroup({
      emailAddress: new FormControl('', [Validators.required, Validators.email, emailDomainValidator('@prasetiyo.com')]),
      phoneNumber: new FormControl('', [Validators.pattern('[0-9]{4}-[0-9]{4}')]),
      rate: new FormControl(8, [Validators.min(0), Validators.max(10)]),
      feedbackTitle: new FormControl('', [Validators.required]),
      feedback: new FormControl('', [Validators.required, inappropriateKeywordsValidator(['spam','bot'])])
    })
  }

  submitFeedback() {
    // console.log('Feedback from [Submit] - ', this.feedback)
    console.log('Feedback from [Submit] - ', this.feedbackForm.value)
  }
}
