import { Injectable } from '@angular/core';
import { Subject, firstValueFrom } from 'rxjs';
import { Game } from './models';
import { HttpClient, HttpParams } from '@angular/common/http';

const BACKEND = 'http://localhost:8080';

@Injectable()
export class BGGService {
  onSearchResults = new Subject<Game[]>();
  onSearchQuery = new Subject<string>();

  constructor(private http: HttpClient) {}

  searchGameByName(name: string): Promise<Game[]> {
    this.onSearchQuery.next(name);
    const params = new HttpParams().set('name', name);
    return firstValueFrom(
      this.http.get<Game[]>(`${BACKEND}/api/games`, { params })
    ).then((results) => {
      this.onSearchResults.next(results);
      return results;
    });
  }
}
