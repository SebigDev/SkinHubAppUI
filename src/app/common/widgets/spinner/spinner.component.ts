import { Component  } from '@angular/core';
import { SpinnerService } from './spinner.service';

@Component({
    selector: 'app-spinner',
    templateUrl: './spinner.component.html'
})
export class SpinnerComponent {
    show = false;

    constructor(private _spinnerService: SpinnerService) {
        _spinnerService.event.subscribe(showSpinner => {
            this.show = showSpinner;
        });
    }
}
