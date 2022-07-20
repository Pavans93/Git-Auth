import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import firebase from "firebase/compat/app";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted: boolean;

    constructor(private router: Router,
        private formBuilder: FormBuilder,
        private afAuth: AngularFireAuth) {
    }

    ngOnInit(): void {
        this.submitted = false;
        this.loginForm = this.formBuilder.group({
            username: ["", [Validators.required]]
        });
    }

    get f() {
        return this.loginForm.controls;
    }

    resetForm() {
        this.submitted = false;
        this.loginForm.reset();
    };

    getRepos() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.router.navigate(['/repo'], {
            queryParams: {
                'userName': this.loginForm.value.username,
            }
        });
    };

    gitHubLogin() {
        return this.afAuth
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((result) => {
                sessionStorage.setItem('user-info', JSON.stringify(result));
                this.router.navigate(["/home"]);
            })
            .catch((error) => {
                window.alert(error.message);
            });
    }
}
