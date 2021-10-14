import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ManejadorError } from './manejador-error';

describe('ManejadorError', () => {
  let manejadorError: ManejadorError;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    manejadorError = new ManejadorError();
  });

  it('should call mensajePorDefecto and imprimirErrorConsola', () => {
    const spyMensajePorDefecto = spyOn(manejadorError as any, 'mensajePorDefecto').and.callThrough();
    const spyImprimirErrorConsola = spyOn(manejadorError as any, 'imprimirErrorConsola').and.callThrough();

    manejadorError.handleError(null);

    expect(spyMensajePorDefecto).toHaveBeenCalled();
    expect(spyImprimirErrorConsola).toHaveBeenCalled();

  });

  it('should return message "error de prueba" if error is not an instance of HttpResponseError', () => {
    const error = 'error de prueba';
    const response = (manejadorError as any).mensajePorDefecto(error);

    expect(response).toEqual('error de prueba');
  });

  it('should return message: "Lo sentimos, no se detecta conexion a internet" on navigator.online === false', () => {
    spyOnProperty(Navigator.prototype, 'onLine').and.returnValue(false);
    const error = new HttpErrorResponse({});
    const response = (manejadorError as any).mensajePorDefecto(error);

    expect(response).toEqual('Lo sentimos, no se detecta conexión a internet');

  });

  it('should call obtenerErrorHttpCode if error has status but no message', () => {
    const spyObtenerErrorHttpCode = spyOn(manejadorError as ManejadorError, 'obtenerErrorHttpCode').and.callThrough();
    const errorResponse = new HttpErrorResponse({
      status: 403,
      error: { }
    });
    (manejadorError as any).mensajePorDefecto(errorResponse);
    expect(spyObtenerErrorHttpCode).toHaveBeenCalled();
  });

  it('should return "Error inesperado en la petición" if error has unknown property httpCode when call obtenerErrorHttpCode', () => {
    const response = (manejadorError as any).obtenerErrorHttpCode(440);

    expect(response).toEqual('Error inesperado en la petición');
  });

  it('should return an error message if error has a known property httpCode when call obtenerErrorHttpCode', () => {
    const response = (manejadorError as any).obtenerErrorHttpCode(404);

    expect(response).toEqual('No se encuentra la petición.');
  });

});
