import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.scss']
})
export class ProductReviewComponent {
  reviewForm!: FormGroup;

  ngOnInit(): void {
    this.reviewForm = new FormGroup({
      fullName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z\\s]+$')
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      productName: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required]),
      reviewText: new FormControl('', [Validators.required, Validators.minLength(10)]),
      LikedProducts: new FormArray([this.addLikedInputs()
      ]),
      wouldRecommend: new FormControl('', [Validators.required]),
    });
  }

  LikedProducts() {
    return (this.reviewForm.get('LikedProducts') as FormArray);
  }

  addLikedInputs(): FormGroup {
    return new FormGroup({
      likedFeature: new FormControl('', [Validators.required]),
    });
  }

  addInputs() {
    this.LikedProducts().push(this.addLikedInputs());
  }


  removeFeature(index: number) {
    this.LikedProducts().removeAt(index);
  }

  submit() {
    if (this.reviewForm.valid) {
      console.log(this.reviewForm.value);
      alert('მადლობა შეფასებისთვის');
    } else {
      alert('გთხოვთ შეავსოთ ფორმა სწორედ.');
    }
  }

  InvalidValid(controlName: string) {
    const control = this.reviewForm.get(controlName);
    return control && control.invalid && control.touched;
  }
}