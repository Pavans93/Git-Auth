import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

  userData: any;
  repoList: any;

  constructor(
    private http: HttpClient,
    private afAuth: AngularFireAuth,
    private router: Router) {
  }

  ngOnInit() {
    if (sessionStorage.getItem('user-info')) {
      let userInfo = JSON.parse(sessionStorage.getItem('user-info') || '{}')
      this.userData = userInfo.additionalUserInfo.profile;
      this.getRepo(this.userData.login)
    }
  }

  getRepo(login: any) {
    const url = `https://api.github.com/users/${login}/repos?type="public"&sort="created"&direction="asc"`
    this.http.get(url)
      .subscribe((res: any) => {
        if (res.message) { }
        else {
          this.repoList = res;
        }
      });
  }

  signOut() {
    return this.afAuth.signOut().then(() => {
      sessionStorage.removeItem('user-info');
      this.router.navigate(['login']);
    });
  }
}
