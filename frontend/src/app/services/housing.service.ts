import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { IProperty } from '../property/IProperty.interface';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';
import { TypeofExpr } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) {

  }

  getAllProperties(SellRent: number): Observable<IProperty[]> {
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const propertiesArray: Array<IProperty> = [];
        for (const id in data) {
          // if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
          propertiesArray.push(data[id]);

           
          const savedFiltersAsArray = data.filter((item:any) => item.key === 'filter');

          // let arr = data
          // }f
        }
        return propertiesArray;
      })
    );
  }
}
