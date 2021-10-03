import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
  TestRequest,
} from '@angular/common/http/testing';
import { environment } from '../../../environments/environment';
import {
  mockLoginRequest,
  mockLoginResponse,
  mockRegisterRequest,
} from '../../test/mock-data';
import { AuthHttpInterceptor } from '../auth-http-interceptor/auth-http-interceptor.service';
import { LoginResponse } from '../../ngrx/reducers/auth.reducer';

fdescribe('AuthServiceService', () => {
  let authService: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthHttpInterceptor],
    });
    authService = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(authService).toBeTruthy();
  });

  it('should use the http service to login user', (done) => {
    authService.login(mockLoginRequest).subscribe((res: LoginResponse) => {
      expect(res).toEqual(mockLoginResponse);
      done();
    });

    const req = httpMock.expectOne(`${environment.restApiUrl}/api/users/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(mockLoginRequest);

    req.flush(mockLoginResponse);
  });

  it('should use the http service to register user', (done) => {
    authService
      .register(mockRegisterRequest)
      .subscribe((resp: LoginResponse) => {
        expect(resp).toEqual(mockLoginResponse);
        done();
      });

    const req = httpMock.expectOne(
      `${environment.restApiUrl}/api/users/register`
    );
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toBe(mockRegisterRequest);

    req.flush(mockLoginResponse);
  });
});
