import { environment } from './../environments/environment';
import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'date-pipe',
  template: `<div>
    <p>Today is {{today | date}}</p>
    <p>Or if you prefer, {{today | date:'fullDate'}}</p>
    <p>The time is {{today | date:'h:mm a z'}}</p>
  </div>`
 })
 // Get the current date and time as a date-time value.
 export class DatePipeComponent {
   today: number = Date.now();
 }

@Injectable()
export class ContatoService {

  private readonly URL_SALVA_CONTATO = `${environment.apiUrl}/contatos-ws`;
  private readonly URL_BUSCA_TODOS = `${environment.apiUrl}/contatos-ws`;

  constructor(private http: HttpClient) {}

  buscaTodos(): Promise<any> {
    return this.http.get(this.URL_BUSCA_TODOS)
                  .toPromise();
  }

  salvaContato(contato: any): Promise<any> {
    return this.http.post(this.URL_SALVA_CONTATO, contato)
                  .toPromise();
  }

}
