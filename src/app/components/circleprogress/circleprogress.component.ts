import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-circleprogress',
  templateUrl: './circleprogress.component.html',
  styleUrls: ['./circleprogress.component.css']
})
export class CircleprogressComponent implements OnInit {
  @Input() promedio: number = 0;
  @Input() colornuevo: string = "";
  public current: number = 0;
  public gato: string = "#"
  max: number = 100;
  stroke: number = 15;
  radius: number = 70;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  color: string = '#eaeaea';
  background: string = '#eaeaea';
  duration: number = 1700;
  animation: string = 'easeOutCubic';
  animationDelay: number = 0;
  animations: Array<string> = [
    'linearEase',
    'easeInQuad',
    'easeOutQuad',
    'easeInOutQuad',
    'easeInCubic',
    'easeOutCubic',
    'easeInOutCubic',
    'easeInQuart',
    'easeOutQuart',
    'easeInOutQuart',
    'easeInQuint',
    'easeOutQuint',
    'easeInOutQuint',
    'easeInSine',
    'easeOutSine',
    'easeInOutSine',
    'easeInExpo',
    'easeOutExpo',
    'easeInOutExpo',
    'easeInCirc',
    'easeOutCirc',
    'easeInOutCirc',
    'easeInElastic',
    'easeOutElastic',
    'easeInOutElastic',
    'easeInBack',
    'easeOutBack',
    'easeInOutBack',
    'easeInBounce',
    'easeOutBounce',
    'easeInOutBounce',
  ];
  gradient: boolean = false;
  realCurrent: number = 0;

  constructor() { }

  ngOnInit(): void {
    this. current = this.promedio;
    this.color = this.gato+this.colornuevo;
    console.log(this.color)
  }

  getOverlayStyle() {
    const isSemi = this.semicircle;
    const transform = (isSemi ? '' : 'translateY(-50%) ') + 'translateX(-50%)';

    return {
      top: isSemi ? 'auto' : '50%',
      bottom: isSemi ? '5%' : 'auto',
      left: '50%',
      transform,
      'font-size': this.radius / 3.5 + 'px',
    };
  }


}
