import { HttpHeaders, HttpParams } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from './http.service';

describe('CamionService', () => {
    let service: HttpService;
    let http: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                HttpService
            ]
        });
        service = TestBed.inject(HttpService);
        http = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call set header with name anf xhr-name', () => {
        const name = 'test';
        const spySetHeader = spyOn(service as any, 'setHeader').and.callThrough();

        service.optsName(name);

        expect(spySetHeader).toHaveBeenCalledWith('xhr-name', name);
    });

    it('should create options', () => {
        const spyCreateDefaultOptions = spyOn(service, 'createDefaultOptions').and.callThrough();

        (service as any).createOptions({});
        expect(spyCreateDefaultOptions).toHaveBeenCalled();
    });

    it('should create options with no opts.headers', () => {
        const spyCreateDefaultOptions = spyOn(service, 'createDefaultOptions').and.callThrough().and.returnValue({
            headers: new HttpHeaders({ 'Content-Type': '' })
        });

        (service as any).createOptions({});
        expect(spyCreateDefaultOptions).toHaveBeenCalled();
    });

    it('should create options and call to endpoint in doPost', () => {
        const options = {};
        const url = '/test';
        const body = { test: 'test' };
        const spyDoPost = spyOn(service as any, 'createOptions').and.callThrough();

        service.doPost(url, body, options).toPromise();

        expect(spyDoPost).toHaveBeenCalled();

        const httpRequest = http.expectOne(url);

        expect(httpRequest.request.method).toEqual('POST');
        expect(httpRequest.request.url).toEqual(url);
        expect(httpRequest.request.body).toEqual(body);
    });

    it('should create options and call to endpoint in doPut', () => {
        const options = {};
        const url = '/test';
        const body = { test: 'test' };
        const spyDoPost = spyOn(service as any, 'createOptions').and.callThrough();

        service.doPut(url, body, options).toPromise();

        expect(spyDoPost).toHaveBeenCalled();

        const httpRequest = http.expectOne(url);

        expect(httpRequest.request.method).toEqual('PUT');
        expect(httpRequest.request.url).toEqual(url);
        expect(httpRequest.request.body).toEqual(body);
    });

    it('should create options and call to endpoint in doPatch', () => {
        const options = {};
        const url = '/test';
        const body = { test: 'test' };
        const spyDoPost = spyOn(service as any, 'createOptions').and.callThrough();

        service.doPatch(url, body, options).toPromise();

        expect(spyDoPost).toHaveBeenCalled();

        const httpRequest = http.expectOne(url);

        expect(httpRequest.request.method).toEqual('PATCH');
        expect(httpRequest.request.url).toEqual(url);
        expect(httpRequest.request.body).toEqual(body);
    });

    it('should create options and call to endpoint in doDelete', () => {
        const options = {};
        const url = '/test';
        const spyDoPost = spyOn(service as any, 'createOptions').and.callThrough();

        service.doDelete(url, options).toPromise();

        expect(spyDoPost).toHaveBeenCalled();

        const httpRequest = http.expectOne(url);

        expect(httpRequest.request.method).toEqual('DELETE');
        expect(httpRequest.request.url).toEqual(url);
    });

    it('should create options and call to endpoint in doGetParameters', () => {
        const options = {};
        const url = '/test';
        const params = new HttpParams({
            fromObject: {
                id: '1',
                message: 'test'
            }
        });
        const spyDoPost = spyOn(service as any, 'createOptions').and.callThrough();

        service.doGetParameters(url, params, options).toPromise();

        expect(spyDoPost).toHaveBeenCalled();

        const httpRequest = http.expectOne(`${url}?id=1&message=test`);

        expect(httpRequest.request.method).toEqual('GET');
        expect(httpRequest.request.url).toEqual(`${url}`);
        expect(httpRequest.request.params).toEqual(params);
    });
});
