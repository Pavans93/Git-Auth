import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'app-repo',
    templateUrl: './repo.component.html',
    styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

    repoList: any;
    data: any;
    errMsg: any;

    constructor(
        private afAuth: AngularFireAuth,
        private http: HttpClient,
        private activeRoute: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit(): void {
        this.activeRoute.queryParams.subscribe((data: any) => {
            this.getRepo(data.userName);
        });
    }

    getRepo(login: any) {
        const url = `https://api.github.com/users/${login}/repos?type="public"&sort="created"&direction="desc"`
        this.http.get(url)
            .subscribe({
                next: (res: any) => {
                    this.repoList = res;
                    if (this.repoList) {
                        this.repoList.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
                    } else {
                        this.errMsg = 'Username not found... Please try with valid username!!!';
                    }
                },
                error: (err: any) => {
                    if (err.error.message) {
                        this.errMsg = err.error.message;
                    }
                },
            });
    }

    goBack() {
        this.router.navigate(['login']);
    }
}