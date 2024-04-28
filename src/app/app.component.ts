import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title: string = 'Hola angular mundo dede componente';
  
  users: string[] = [ 'Pepe', 'Maria', 'Juan', 'Andres'];
  

  visible: boolean = false;

  setVsible(): void {
    this.visible = this.visible? false:true;
    console.log('hemos hecho clic en setVisible')
  }
}
