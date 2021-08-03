import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { AlbumStorePage } from '../../e2e/app.po';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/AlbumStorePage.json'

  getAlbum() {
    id: Number
  }

  constructor(private _http: Http) {}

  
}
