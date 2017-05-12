import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'product',
  templateUrl: './product-component.html',
})
export class ProductComponent implements OnInit {
    public myForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            product: this._fb.array([])
        });
        this.addReasons();
    }

    initQcReject() {
        return this._fb.group({
            reason: ['', Validators.required],
            qty: ['']
        });
    }

    addReasons() {
        const control = <FormArray>this.myForm.controls['product'];
        const addrCtrl = this.initQcReject();
        control.push(addrCtrl);
    }

    removeReasons(i: number) {
        const control = <FormArray>this.myForm.controls['product'];
        control.removeAt(i);
    }

    save() {
        // call API to save
        // ...
        console.log(this.myForm.value);
    }
}