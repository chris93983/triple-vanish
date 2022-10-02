import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
    selector: 'tv-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {
    @ViewChild('food', { static: true }) food: ElementRef<HTMLElement> | null = null;

    ngAfterViewInit(): void {
        this.food?.nativeElement.addEventListener('animationend', () => this.food?.nativeElement.classList.add('shadow'));
        this.food?.nativeElement.addEventListener('animationstart', () => this.food?.nativeElement.classList.add('show-food'));
        this.food?.nativeElement.classList.add('animate');
    }
}
