import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TestWithReactiveFormComponent } from './test-with-reactive-form.component';

describe('TestWithReactiveFormComponent', () => {
  let component: TestWithReactiveFormComponent;
  let fixture: ComponentFixture<TestWithReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestWithReactiveFormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestWithReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('REACTIVE FORM - should invalidate incorrect cpfs and show message', () => {
    const cpfField = component.testForm.get('cpf');
    cpfField.setValue('11111111111');
    cpfField.markAsDirty();
    cpfField.markAsTouched();

    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('span');
    console.log(span);

    expect(cpfField.valid).toBeFalsy();
    expect(cpfField.errors).not.toBeNull();
    expect(cpfField.errors.cpfValidation).toBeTruthy();
    expect(span).not.toBeNull();
    expect(span.innerText).toBe('CPF inválido!');
  });

  it('REACTIVE FORM - should validate correct cpfs and show no message', () => {
    const cpfField = component.testForm.get('cpf');
    cpfField.setValue('68452541090')

    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('span');

    expect(cpfField.value).toBe('68452541090');
    expect(cpfField.valid).toBeTruthy();
    expect(cpfField.errors).toBeNull();
    expect(span).toBeNull();
  });
});
