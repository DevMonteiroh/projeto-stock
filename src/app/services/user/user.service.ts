import { CookieService } from 'ngx-cookie-service';
import { AuthResponse } from './../../models/interfaces/user/auth/AuthResponse';
import { AuthRequest } from './../../models/interfaces/user/auth/AuthRequest';
import { SignupUserRequest } from './../../models/interfaces/user/SignupUserRequest';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupUserResponse } from 'src/app/models/interfaces/user/SignupUserResponse';
import { environment } from 'src/environments/environment.prod';




@Injectable({
  providedIn: 'root',
})

export class UserService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient, private cookie:CookieService) { }

  signupUser(requestDatas: SignupUserRequest): Observable<SignupUserResponse> {

    return this.http.post<SignupUserResponse>(

      `${this.API_URL}/user`,
      requestDatas

    );

  }

  authUser(requestDatas: AuthRequest): Observable<AuthResponse> {

    return this.http.post<AuthResponse>(`${this.API_URL}/auth`, requestDatas);
  }

  isLoggedIn(): boolean {

    //verificar se o usuário possui um token  ou cookie 

    const JWT_TOKEN = this.cookie.get('USER_INFO');
    return JWT_TOKEN ? true : false;
}

}
