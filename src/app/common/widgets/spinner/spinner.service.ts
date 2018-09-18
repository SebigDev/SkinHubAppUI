import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpinnerService {
    event: Subject<boolean> = new Subject();

    show() {
        this.event.next(true);
    }

    hide() {
        this.event.next(false);
    }
}
