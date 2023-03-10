import { FormsModule } from '@angular/forms';
import { CpfValidationDirective } from './../cpf-validation.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent } from './test.component';

describe('TestComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ CpfValidationDirective ,TestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalidate incorrect cpfs and show message', async() => {
    await fixture.whenStable();
    fixture.detectChanges();

    const cpfTestValue = '1111111111';
    const input = fixture.nativeElement.querySelector('input');
    input.value = cpfTestValue;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('span');

    expect(component.cpf).toBe(cpfTestValue);
    expect(input.classList).toContain('ng-invalid');
    expect(input.classList).toContain('ng-dirty');
    expect(span).not.toBeNull();
    expect(span.innerText).toBe('CPF inválido!');
  });

  it('should validate correct cpfs and show no message', async() => {
    await fixture.whenStable();
    fixture.detectChanges();

    const cpfTestValue = '68452541090';
    const input = fixture.nativeElement.querySelector('input');
    input.value = cpfTestValue;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const span = fixture.nativeElement.querySelector('span');

    expect(component.cpf).toBe(cpfTestValue);
    expect(input.classList).toContain('ng-valid');
    expect(span).toBeNull();
  });
});
