import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'custumTable',
})
export class CustumTablePipe implements PipeTransform {
  transform(item: any, ...args: any[]): any {
    if (item === 'INACTIVE' && args[0] === 'compteBancaires') {
      return '<span class="badge badge-soft-danger">Inactif</span>'
    }
    if (item === 'ACTIVE' && args[0] === 'compteBancaires') {
      return '<span  class="badge badge-soft-success">Actif</span>'
    }
    return item
  }
}
