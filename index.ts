import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
    selector: 'seu-input',
    templateUrl: './seu-input.component.html',
    styleUrls: [`./seu-input.component.scss`]
})
export class SeuInputComponent {

    @Input('label') label: string;
    @Input('type') inputType: string;
    @Input('rows') rows: number | string;
    @Input('placeholder') placeholder: string;
    @Input('max') max: string;
    @Input('min') min: string;
    @Input('theme') theme: string;
    @Input('valor') value: string;
    @Input('selectedText') selectedText: string;
    @Output('valorChange') valueEmit = new EventEmitter();

    constructor() { }

    inputChange(){
        this.valueEmit.emit(this.value);
    }
}
