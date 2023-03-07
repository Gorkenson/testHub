import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { rangeColorPercent } from '../models/range-color-percent';

@Component({
  selector: 'msi-color-range-slider',
  templateUrl: './msi-color-range-slider.component.html',
  styleUrls: ['./msi-color-range-slider.component.scss']
})
export class MsiColorRangeSliderComponent implements OnInit {
  private _gradientValue : string = "red 0%, red 10%, orange 10%, orange 35%, lime 35%, lime 65%, orange 65%, orange 90%, red 90%, red 100%";
  private _gradientArray : Array<rangeColorPercent> = [];

  @Input() pointerValueAbsolute: string = "50";
  @Input() pointerValuePercent: string = "50%";
  @Input() goalValueAbsolute: string = "50";
  @Input() minValueAbsolute: string = "0";
  @Input() maxValueAbsolute: string = "100";
  // @Input() gradientConfig: string = "red 0%, red 10%, orange 10%, orange 35%, lime 35%, lime 65%, orange 65%, orange 90%, red 90%, red 100%";
  @Input() set gradientConfig(gradientVal: string){ this.setGradientConfigValue(gradientVal)};


  gradientStyle : any = {'background': "linear-gradient(to right, red 0%, red 10%, orange 10%, orange 35%, lime 35%, lime 65%, orange 65%, orange 90%, red 90%, red 100%)"};

  constructor() { }

  ngOnInit(): void {
  }

  gradientStyleFunc(){
    let strGradient:any = {'background': "linear-gradient(to right, "+this._gradientValue+")"};
    return strGradient;
  }
  setGradientConfigValue(gradientVal : string){
    this._gradientValue = gradientVal;
    let strGradient: Array<string> = gradientVal.split(',');
    console.log(strGradient);
    strGradient.forEach(
      x=> {
        let rangeColorItem = new rangeColorPercent();
        let str : Array<string> = x.trim().split(' ');
        rangeColorItem.color = str[0];
        rangeColorItem.percent = Number(str[1].split('%')[0]);
        this._gradientArray.push(rangeColorItem);
      }
    )
    console.log(this._gradientArray);
  }

  getColorByValue(){
    let val:number = parseInt(this.pointerValuePercent.split(';')[0]);
    let ind = this._gradientArray.findIndex(x=> x.percent > val);
    return this._gradientArray[ind-1].color;
    // if ((val < 10)||(val > 90)) return "red";
    // if ((val < 35)||(val > 65)) return "orange";
    // return "lime";
  }
}
