import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'gemma';
  public nameUpper: string = 'GEMMA';
  public fullName: string = 'gEmMa GoMeZ cAsEs';

  public customDate: Date = new Date();

}
