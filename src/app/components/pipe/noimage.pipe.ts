import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'noimage'
  })
export class NoimagePipe implements PipeTransform {
    transform(value: any, ...args: any[]) {
        throw new Error('Method not implemented.');
    }

}
