import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./layout/navbar/navbar.component";
import { ParticlesConfig } from './particles-config';
import { CommonModule } from '@angular/common'; // Importa CommonModule

declare let particlesJS: any; // Required to be properly interpreted by TypeScript.

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stdevsec';

  isMenuVisible = false;
  currentInfo: string = '';

  toggleMenu(info: string) {
    this.isMenuVisible = !this.isMenuVisible;
    this.currentInfo = info;
  }


  ngOnInit(): void {
    this.invokeParticles();
  }

  invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  }


}
