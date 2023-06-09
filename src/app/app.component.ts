import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  inputValue: string = '';

  validateInput(event: KeyboardEvent): void {
    const keyCode = event.which || event.keyCode;
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 8) {
      event.preventDefault();
    }
  }
}