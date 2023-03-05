import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';

@Directive({
  selector: '[cpfValidation]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: CpfValidationDirective,
    multi: true
  }]
})
export class CpfValidationDirective implements Validators{

  //Função de validação de CPF retirada e adaptada diretamente do site da Receita Federal:
  // http://www.receita.fazenda.gov.br/aplicacoes/atcta/cpf/funcoes.js
  validate(control: AbstractControl): ValidationErrors | null {
    debugger;
    var soma = 0
    var resto;

    var strCPF = String(control.value).replace(/[^\d]/g, '');

    if (strCPF.length !== 11)
      return { cpfValidation: true };

    if ([
      '00000000000',
      '11111111111',
      '22222222222',
      '33333333333',
      '44444444444',
      '55555555555',
      '66666666666',
      '77777777777',
      '88888888888',
      '99999999999',
      ].indexOf(strCPF) !== -1)
      return { cpfValidation: true };

    for (let i=1; i<=9; i++)
      soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))
      resto = 0;

    if (resto != parseInt(strCPF.substring(9, 10)) )
      return { cpfValidation: true };

    soma = 0;

    for (let i = 1; i <= 10; i++)
      soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);

    resto = (soma * 10) % 11;

    if ((resto == 10) || (resto == 11))
      resto = 0;

    if (resto != parseInt(strCPF.substring(10, 11) ) )
      return { cpfValidation: true };

    return null;
  }

}

export class CustomValidators {
  static validateDirective(directive: CpfValidationDirective): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      return directive.validate(control);
    };
  }
}
