import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { error } from 'console';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {

  gridStyle = {
    width: '100%',
    textAlign: 'center'
  };

  activityForm!: FormGroup;
  activites: any;

  constructor(private fb: FormBuilder
    , private message: NzMessageService,
    private userService: UserService
  ){}
  ngOnInit() {
    this.activityForm = this.fb.group({
      caloriesBurned: [null, [Validators.required]],
      steps: [null, [Validators.required]],
      distance: [null, [Validators.required]],
      date: [null, [Validators.required]],
    })
  }

submitForm(){
  this.userService.postActivity(this.activityForm.value).subscribe(res=>{
    this.message.success("Activity Posted Sucessfully", {nzDuration:5000});
    this.activityForm.reset();
  },error=>{
    this.message.error("error while posting activity", {nzDuration:5000});
  })
}


}
