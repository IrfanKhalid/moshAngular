import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UserValidators {

  static CanNotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { CanNotContainSpace: true };
    }
    return null;
  }

  static UniqueName(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "irfan") {
          resolve({ UniqueName: true });
        }
        else resolve(null);
      }, 2000);
    })


  }

}
