import { Component, OnInit } from '@angular/core';
import { AdminserviceService } from 'src/app/adminservice.service';
import { Adminlogin } from 'src/app/adminlogin';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  credentials: Adminlogin= new Adminlogin();

  constructor(private regService : AdminserviceService) { }

  ngOnInit(): void {
  }
  OnSubmit(){debugger;
    this.regService.AdminLogin(this.credentials).subscribe((data)=>{ 
      if(data==1)
      {
        alert("Login successful");
        //this.router.navigateByUrl('Dashboard');
      }
      else
      {
        alert("Invalid login");
       // this.router.navigateByUrl('UserLogin');
      }
     })
  }


}
