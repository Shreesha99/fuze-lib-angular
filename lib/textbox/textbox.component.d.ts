import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class TextboxButtonComponent {
    /** Placeholder text for the textbox */
    placeholder: string;
    /** Value of the textbox */
    value: string;
    /** Optional disabled state */
    disabled: boolean;
    /** Event emitted when the value changes */
    onInputChange: EventEmitter<Event>;
    get classes(): string[];
    static ɵfac: i0.ɵɵFactoryDeclaration<TextboxButtonComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TextboxButtonComponent, "lib-textbox-button", never, { "placeholder": { "alias": "placeholder"; "required": false; }; "value": { "alias": "value"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "onInputChange": "onInputChange"; }, never, never, true, never>;
}
