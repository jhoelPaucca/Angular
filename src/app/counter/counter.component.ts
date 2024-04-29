import { Component, OnInit, input } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
})

export class CounterComponent {
   
    counter: number = 0;

    //@input() title!: string;
    
    setCounter(): void {
        this.counter = this.counter + 1;
        localStorage.setItem('counter',this.counter.toString()) ;
        
    }
}
