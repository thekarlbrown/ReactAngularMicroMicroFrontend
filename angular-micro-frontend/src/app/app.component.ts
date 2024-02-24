import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public loadingReact = false;
  public reactLoaded = false;
  constructor() {
  }

  launchReactMicroFrontend(): void {
    this.loadingReact = true;

    const script = document.createElement('script');
  script.src = 'https://angularreactmicromicrofrontend.s3.amazonaws.com/reactMicro.js'; // Ensure this URL is correct
  
  script.onload = () => {
    this.loadingReact = false;
    this.reactLoaded = true;
  };
  script.onerror = (error) => {
    console.error('Error loading React micro frontend script:', error);
  };
  document.body.appendChild(script);
  }
}
