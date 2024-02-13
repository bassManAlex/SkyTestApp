
import { formatDate } from '@angular/common';

export namespace CommonUtilities {
  export function msToMm(msec: number): string {
    const minutes = Math.floor(msec / 60000);
    const seconds = Math.floor((msec % 60000) / 1000);

    const formatMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formatSec = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMin}.${formatSec}`;
  }

  export function stringToDate(date: string, format: string = 'dd/MM/yyyy'): string {
    const stringToDate = new Date(date);
    const formattedDate = formatDate(stringToDate, format, 'en-GB');

    return formattedDate;
  }

}
