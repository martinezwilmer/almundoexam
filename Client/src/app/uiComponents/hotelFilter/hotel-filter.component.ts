import { Component, Output, EventEmitter, ViewChildren, ViewChild } from "@angular/core";
import { HotelRateComponent } from '../hotelRate/hotel-rate.component';

@Component({
    selector: 'hotel-filter',
    templateUrl: './hotel-filter.component.html',
    styleUrls: ['./hotel-filter.component.scss']
})
export class HotelFilterComponent{
    filtered:boolean = false;
    starsSelected: Number[] = new Array<Number>();

    @ViewChildren('cbx') starsCheckBoxes;
    @ViewChild('chkAllStars') allStarsCheckbox;

    @Output() onFilter : EventEmitter<string> = new EventEmitter<string>();
    @Output() onFilterStars: EventEmitter<Number[]> = new EventEmitter<Number[]>();
    @Output() onClearFilter= new EventEmitter();

    filter(hotelName) {
        this.filtered = true;
        this.allStarsCheckbox.nativeElement.checked = true;
        for (const chk of this.starsCheckBoxes.toArray())
            chk.nativeElement.checked = false;
        
        this.onFilter.emit(hotelName);
    }

    starSelected(stars, checkbox){

        if(stars == 0 ){
            if(checkbox.currentTarget.checked){
                for (const chk of this.starsCheckBoxes.toArray()) {
                    chk.nativeElement.checked = false;
                } 
                this.clearFilter();            
            }
        }else{
            if(checkbox.currentTarget.checked){                
                this.allStarsCheckbox.nativeElement.checked = false;
                this.starsSelected.push(stars);
            }
            else{
                let noSelected:boolean = true;
                for (const currentCheckbox of this.starsCheckBoxes.toArray()) {
                    if(currentCheckbox.nativeElement.checked)
                        noSelected = false;
                }

                if(noSelected)
                {
                    this.allStarsCheckbox.nativeElement.checked= true;
                    this.clearFilter();
                }

                this.starsSelected = this.starsSelected.filter(star => star != stars);
            }

            this.onFilterStars.emit(this.starsSelected);
        }
    }

    clearFilter(){
        this.filtered = false;
        this.onClearFilter.emit();
    }
}
