import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') formRef:NgForm; //using view child since iam not passing the form varibale inside the method
  defaultQuestion = 'pet'; //it is a value available from the options
  answer ='';
  genders = ['male','female','other'];
  user={
    userName:'',
    userEmail:'',
    secretQuestion:'',
    answer:'',
    gender:''
  }
  submitted = false;
  sugegstedName="superName"

  onSuggest()
  {
    // //seting a value
    this.formRef.setValue(
      {
        userData:{
          username:this.sugegstedName,
          email:'suggest@gmail.com'
        },
        secret:'pet',
        questionAnswer:'nelly',
        gender:'female'
      }
    );
 

    //patch value
    // this.formRef.form.patchValue(
    //   {
    //     userData:
    //     {
    //       username:this.sugegstedName
    //     }
    //   }
    // );
    }

  // onSubmit(form:NgForm)
  // {
  //   console.log(form);
  // }

  onSubmit()
  {
    this.submitted=true;
    this.user.userName = this.formRef.value.userData.username;
    this.user.userEmail = this.formRef.value.userData.email;
    this.user.secretQuestion = this.formRef.value.secret;
    this.user.answer = this.formRef.value.questionAnswer;
    this.user.gender = this.formRef.value.gender;
    this.formRef.reset();

    console.log(this.formRef);
  }
  onReset()
  {
    this.formRef.reset();
  }
}


