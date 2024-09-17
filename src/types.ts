import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Option {
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    observe: 'events';
    context?: HttpContext;
    params?: HttpParams | {
        [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    };
    reportProgress?: boolean;
    responseType?: 'json';
    withCredentials?: boolean;
    transferCache?: {
        includeHeaders?: string[];
    } | boolean;
}

export interface Product {
    id?:string;
    title:string;
    price:string;
    category:string;
    description?:string;
    image?:string;
}

export interface PaginationParams {
    [key:string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
    page:number;
    perPage:number;
}