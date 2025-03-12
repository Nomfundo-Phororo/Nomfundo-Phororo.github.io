import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItems {
    title: string;
    link: string;
}
@Component({
    selector: 'app-header',
    standalone: true,
    imports: [NgIf, NgFor],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    protected isMobileMenuOpen: boolean = false;
    protected menuItems: MenuItems[] = [
        {
            "title": "About Me",
            "link": "#About Me",
        },
        {
            "title": "Skills",
            "link": "#Skills",
        },
        {
            "title": "Projects",
            "link": "#Project",
        },
        {
            "title": "Contact Me",
            "link": "#Contact Me",
        }
    ]
}
