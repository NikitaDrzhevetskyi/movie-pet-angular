import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timePipe',
  standalone: true,
})
export class TransformTimePipe implements PipeTransform {
  transform(value: number): string {
    const hours = Math.floor(value / 60);
    const minutes = value % 60;
    console.log(minutes);
    if (minutes === 0) {
      return `${hours}h`;
    }

    return `${hours}h :${minutes}m`;
  }
}
