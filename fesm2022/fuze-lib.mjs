import * as i0 from '@angular/core';
import { Injectable, Component, EventEmitter, Input, Output, ContentChild } from '@angular/core';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';

class FuzeLibService {
    constructor() { }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: FuzeLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: FuzeLibService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: FuzeLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class FuzeLibComponent {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: FuzeLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: FuzeLibComponent, isStandalone: true, selector: "lib-fuze-lib", ngImport: i0, template: `
    <p>
      fuze-lib works!
    </p>
  `, isInline: true, styles: [""] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: FuzeLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-fuze-lib', imports: [], template: `
    <p>
      fuze-lib works!
    </p>
  ` }]
        }] });

class ButtonComponent {
    /** Is this the principal call to action on the page? */
    primary = false;
    /** What background color to use */
    backgroundColor;
    /** How large should the button be? */
    size = 'medium';
    /** Button contents */
    label = 'Button';
    /** Optional click handler */
    onClick = new EventEmitter();
    /** Optional disabled state */
    disabled = false;
    /** Optional border radius */
    borderRadius = '1em'; // Default border radius
    // Dynamically calculate the button classes based on input properties
    get classes() {
        const mode = this.primary ? 'lib-button--primary' : 'lib-button--secondary';
        return ['lib-button', `lib-button--${this.size}`, mode];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: ButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: ButtonComponent, isStandalone: true, selector: "lib-button", inputs: { primary: "primary", backgroundColor: "backgroundColor", size: "size", label: "label", disabled: "disabled", borderRadius: "borderRadius" }, outputs: { onClick: "onClick" }, ngImport: i0, template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{
        'background-color': backgroundColor,
        'border-radius': borderRadius
      }"
      [disabled]="disabled"
    >
      {{ label }}
    </button>
  `, isInline: true, styles: [".lib-button{display:inline-block;cursor:pointer;border:0;font-weight:700;line-height:1;font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.lib-button--primary{background-color:#dc3e4e;color:#fff}.lib-button--secondary{background-color:transparent;color:#000;border:1px solid #62676B}.lib-button--small{padding:10px 16px;font-size:12px}.lib-button--medium{padding:11px 20px;font-size:14px}.lib-button--large{padding:12px 24px;font-size:16px}.lib-button:disabled{background-color:#d6d6d6;color:#a0a0a0;cursor:not-allowed}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: ButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-button', standalone: true, imports: [CommonModule], template: `
    <button
      type="button"
      (click)="onClick.emit($event)"
      [ngClass]="classes"
      [ngStyle]="{
        'background-color': backgroundColor,
        'border-radius': borderRadius
      }"
      [disabled]="disabled"
    >
      {{ label }}
    </button>
  `, styles: [".lib-button{display:inline-block;cursor:pointer;border:0;font-weight:700;line-height:1;font-family:Montserrat,Nunito Sans,Helvetica Neue,Helvetica,Arial,sans-serif}.lib-button--primary{background-color:#dc3e4e;color:#fff}.lib-button--secondary{background-color:transparent;color:#000;border:1px solid #62676B}.lib-button--small{padding:10px 16px;font-size:12px}.lib-button--medium{padding:11px 20px;font-size:14px}.lib-button--large{padding:12px 24px;font-size:16px}.lib-button:disabled{background-color:#d6d6d6;color:#a0a0a0;cursor:not-allowed}\n"] }]
        }], propDecorators: { primary: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], size: [{
                type: Input
            }], label: [{
                type: Input
            }], onClick: [{
                type: Output
            }], disabled: [{
                type: Input
            }], borderRadius: [{
                type: Input
            }] } });

class AccordionComponent {
    accordionItem;
    constructor() { }
    ngAfterContentInit() {
        console.log(this.accordionItem);
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: AccordionComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: AccordionComponent, isStandalone: true, selector: "lib-accordion", queries: [{ propertyName: "accordionItem", first: true, predicate: ["accordionItem"], descendants: true }], ngImport: i0, template: `
    <div class="accordion">
      <ng-content></ng-content>
    </div>
  `, isInline: true, styles: [".accordion{border:1px solid #ddd;border-radius:5px;overflow:hidden}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: AccordionComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-accordion', standalone: true, imports: [CommonModule], template: `
    <div class="accordion">
      <ng-content></ng-content>
    </div>
  `, styles: [".accordion{border:1px solid #ddd;border-radius:5px;overflow:hidden}\n"] }]
        }], ctorParameters: () => [], propDecorators: { accordionItem: [{
                type: ContentChild,
                args: ['accordionItem']
            }] } });

class AccordionItemComponent {
    title = '';
    isOpen = false;
    toggle() {
        this.isOpen = !this.isOpen;
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: AccordionItemComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: AccordionItemComponent, isStandalone: true, selector: "lib-accordion-item", inputs: { title: "title" }, ngImport: i0, template: `
    <div class="accordion-item">
      <div class="accordion-header" (click)="toggle()">
        <h5>{{ title }}</h5>
      </div>
      <div *ngIf="isOpen" class="accordion-body">
        <ng-content></ng-content>
      </div>
    </div>
  `, isInline: true, styles: [".accordion-item{border-bottom:1px solid #ddd}.accordion-header{background-color:#f1f1f1;padding:10px;cursor:pointer}.accordion-body{padding:15px;background-color:#fff}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: AccordionItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-accordion-item', standalone: true, imports: [CommonModule], template: `
    <div class="accordion-item">
      <div class="accordion-header" (click)="toggle()">
        <h5>{{ title }}</h5>
      </div>
      <div *ngIf="isOpen" class="accordion-body">
        <ng-content></ng-content>
      </div>
    </div>
  `, styles: [".accordion-item{border-bottom:1px solid #ddd}.accordion-header{background-color:#f1f1f1;padding:10px;cursor:pointer}.accordion-body{padding:15px;background-color:#fff}\n"] }]
        }], propDecorators: { title: [{
                type: Input
            }] } });

class AvatarComponent {
    /** URL for the avatar image */
    imageUrl = null;
    /** Name for alt text and placeholder */
    name = '';
    /** Avatar size */
    size = 40; // Default size is 40px
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: AvatarComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: AvatarComponent, isStandalone: true, selector: "lib-avatar", inputs: { imageUrl: "imageUrl", name: "name", size: "size" }, ngImport: i0, template: `
    <div
      class="avatar"
      [ngStyle]="{ 'width.px': size, 'height.px': size }"
    >
      <img *ngIf="imageUrl" [src]="imageUrl" [alt]="name" class="avatar-image" />
      <span *ngIf="!imageUrl" class="avatar-placeholder">{{ name.charAt(0) }}</span>
    </div>
  `, isInline: true, styles: [".avatar{display:flex;justify-content:center;align-items:center;border-radius:50%;overflow:hidden;background-color:#f0f0f0;border:2px solid #ccc}.avatar-image{width:100%;height:100%;object-fit:cover}.avatar-placeholder{font-size:1.5em;color:#fff;background-color:#007bff;width:100%;height:100%;display:flex;justify-content:center;align-items:center}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: AvatarComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-avatar', standalone: true, imports: [CommonModule], template: `
    <div
      class="avatar"
      [ngStyle]="{ 'width.px': size, 'height.px': size }"
    >
      <img *ngIf="imageUrl" [src]="imageUrl" [alt]="name" class="avatar-image" />
      <span *ngIf="!imageUrl" class="avatar-placeholder">{{ name.charAt(0) }}</span>
    </div>
  `, styles: [".avatar{display:flex;justify-content:center;align-items:center;border-radius:50%;overflow:hidden;background-color:#f0f0f0;border:2px solid #ccc}.avatar-image{width:100%;height:100%;object-fit:cover}.avatar-placeholder{font-size:1.5em;color:#fff;background-color:#007bff;width:100%;height:100%;display:flex;justify-content:center;align-items:center}\n"] }]
        }], propDecorators: { imageUrl: [{
                type: Input
            }], name: [{
                type: Input
            }], size: [{
                type: Input
            }] } });

class BreadcrumbComponent {
    /** Array of breadcrumb items */
    items = [];
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: BreadcrumbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: BreadcrumbComponent, isStandalone: true, selector: "lib-breadcrumb", inputs: { items: "items" }, ngImport: i0, template: `
    <nav>
      <ol class="breadcrumb">
        <li *ngFor="let item of items; let last = last" [ngClass]="{ 'active': last }">
          <a *ngIf="!last" [href]="item.link">{{ item.label }}</a>
          <span *ngIf="last">{{ item.label }}</span>
        </li>
      </ol>
    </nav>
  `, isInline: true, styles: [".breadcrumb{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap}.breadcrumb li{margin:0;padding:0;font-size:14px;display:flex;align-items:center}.breadcrumb li a{color:#007bff;text-decoration:none}.breadcrumb li a:hover{text-decoration:underline}.breadcrumb li.active{color:#6c757d}.breadcrumb li+li:before{content:\"/\";margin:0 8px;color:#6c757d}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: BreadcrumbComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-breadcrumb', standalone: true, imports: [CommonModule], template: `
    <nav>
      <ol class="breadcrumb">
        <li *ngFor="let item of items; let last = last" [ngClass]="{ 'active': last }">
          <a *ngIf="!last" [href]="item.link">{{ item.label }}</a>
          <span *ngIf="last">{{ item.label }}</span>
        </li>
      </ol>
    </nav>
  `, styles: [".breadcrumb{list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap}.breadcrumb li{margin:0;padding:0;font-size:14px;display:flex;align-items:center}.breadcrumb li a{color:#007bff;text-decoration:none}.breadcrumb li a:hover{text-decoration:underline}.breadcrumb li.active{color:#6c757d}.breadcrumb li+li:before{content:\"/\";margin:0 8px;color:#6c757d}\n"] }]
        }], propDecorators: { items: [{
                type: Input
            }] } });

class DropdownListComponent {
    /** List of items to display in the dropdown */
    items = [];
    /** Selected item */
    selectedItem = null;
    /** Placeholder text when no item is selected */
    placeholder = 'Select an option';
    /** Optional click handler when an item is selected */
    onSelect = new EventEmitter();
    isOpen = false;
    /** Toggle the visibility of the dropdown */
    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }
    /** Select an item and emit the event */
    selectItem(item) {
        this.selectedItem = item;
        this.onSelect.emit(item);
        this.isOpen = false; // Close dropdown after selection
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: DropdownListComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: DropdownListComponent, isStandalone: true, selector: "lib-dropdown-list", inputs: { items: "items", selectedItem: "selectedItem", placeholder: "placeholder" }, outputs: { onSelect: "onSelect" }, ngImport: i0, template: `
    <div class="dropdown">
      <button class="dropdown-button" (click)="toggleDropdown()">
        {{ selectedItem || placeholder }}
      </button>
      <ul *ngIf="isOpen" class="dropdown-menu">
        <li
          *ngFor="let item of items"
          (click)="selectItem(item)"
          class="dropdown-item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  `, isInline: true, styles: [".dropdown{position:relative;display:inline-block}.dropdown-button{padding:10px;background-color:#007bff;color:#fff;border:none;cursor:pointer;border-radius:4px}.dropdown-button:hover{background-color:#0056b3}.dropdown-menu{position:absolute;top:100%;left:0;background-color:#fff;border:1px solid #ddd;box-shadow:0 8px 16px #0003;width:100%;max-height:200px;overflow-y:auto;padding:0;margin:0;list-style-type:none;z-index:1}.dropdown-item{padding:10px;cursor:pointer}.dropdown-item:hover{background-color:#f1f1f1}.dropdown-item.selected{background-color:#007bff;color:#fff}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: DropdownListComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-dropdown-list', standalone: true, imports: [CommonModule], template: `
    <div class="dropdown">
      <button class="dropdown-button" (click)="toggleDropdown()">
        {{ selectedItem || placeholder }}
      </button>
      <ul *ngIf="isOpen" class="dropdown-menu">
        <li
          *ngFor="let item of items"
          (click)="selectItem(item)"
          class="dropdown-item"
        >
          {{ item }}
        </li>
      </ul>
    </div>
  `, styles: [".dropdown{position:relative;display:inline-block}.dropdown-button{padding:10px;background-color:#007bff;color:#fff;border:none;cursor:pointer;border-radius:4px}.dropdown-button:hover{background-color:#0056b3}.dropdown-menu{position:absolute;top:100%;left:0;background-color:#fff;border:1px solid #ddd;box-shadow:0 8px 16px #0003;width:100%;max-height:200px;overflow-y:auto;padding:0;margin:0;list-style-type:none;z-index:1}.dropdown-item{padding:10px;cursor:pointer}.dropdown-item:hover{background-color:#f1f1f1}.dropdown-item.selected{background-color:#007bff;color:#fff}\n"] }]
        }], propDecorators: { items: [{
                type: Input
            }], selectedItem: [{
                type: Input
            }], placeholder: [{
                type: Input
            }], onSelect: [{
                type: Output
            }] } });

class TextboxButtonComponent {
    /** Placeholder text for the textbox */
    placeholder = 'Enter text';
    /** Value of the textbox */
    value = '';
    /** Optional disabled state */
    disabled = false;
    /** Event emitted when the value changes */
    onInputChange = new EventEmitter();
    // Dynamically calculate the input classes based on input properties
    get classes() {
        return ['storybook-textbox-button'];
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: TextboxButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "19.0.1", type: TextboxButtonComponent, isStandalone: true, selector: "lib-textbox-button", inputs: { placeholder: "placeholder", value: "value", disabled: "disabled" }, outputs: { onInputChange: "onInputChange" }, ngImport: i0, template: `
    <input
      type="text"
      [placeholder]="placeholder"

      [ngClass]="classes"
      [disabled]="disabled"
      (input)="onInputChange.emit($event)"
    />
  `, isInline: true, styles: [".storybook-textbox-button{display:inline-block;padding:10px 20px;border-radius:25px;font-size:16px;border:1px solid #ccc;transition:border-color .3s ease,transform .2s ease}.storybook-textbox-button:hover{transform:scale(1.05)}.storybook-textbox-button:focus{border-color:#007bff}.storybook-textbox-button:disabled{background-color:#f0f0f0;color:#a0a0a0;cursor:not-allowed}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.0.1", ngImport: i0, type: TextboxButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-textbox-button', standalone: true, imports: [CommonModule], template: `
    <input
      type="text"
      [placeholder]="placeholder"

      [ngClass]="classes"
      [disabled]="disabled"
      (input)="onInputChange.emit($event)"
    />
  `, styles: [".storybook-textbox-button{display:inline-block;padding:10px 20px;border-radius:25px;font-size:16px;border:1px solid #ccc;transition:border-color .3s ease,transform .2s ease}.storybook-textbox-button:hover{transform:scale(1.05)}.storybook-textbox-button:focus{border-color:#007bff}.storybook-textbox-button:disabled{background-color:#f0f0f0;color:#a0a0a0;cursor:not-allowed}\n"] }]
        }], propDecorators: { placeholder: [{
                type: Input
            }], value: [{
                type: Input
            }], disabled: [{
                type: Input
            }], onInputChange: [{
                type: Output
            }] } });

/*
 * Public API Surface of fuze-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionItemComponent, AvatarComponent, BreadcrumbComponent, ButtonComponent, DropdownListComponent, FuzeLibComponent, FuzeLibService, TextboxButtonComponent };
//# sourceMappingURL=fuze-lib.mjs.map