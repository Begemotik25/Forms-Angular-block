import {Injectable} from '@angular/core';

export interface Tour {
    id: number,
    name: string,
    country: string,
    cost: number,
    days: number
}

@Injectable ({
    providedIn: 'root'
})

export class TourDataService {
    private tours: Tour[]= [
        { id: 1, name: 'MykolaivTour', country: 'Ukraine', cost: 120, days: 13},
        { id: 2, name: 'PolandTour', country: 'Poland', cost: 260, days: 20},
        { id: 3, name: 'AustriaTour', country: 'Austria', cost: 354, days: 10},
        { id: 4, name: 'BahamasTour', country: 'Bahamas', cost: 300, days: 18},
        { id: 5, name: 'ColombiaTour', country: 'Colombia', cost: 220, days: 14},
        { id: 6, name: 'CostaRicaTour', country: 'Costa Rica', cost: 345, days: 15},
        { id: 7, name: 'FranceTour', country: 'France', cost: 600, days: 25},
        { id: 8, name: 'GeorgiaTour', country: 'Georgia', cost: 320, days: 16},
        { id: 9, name: 'HaitiTour', country: 'Haiti', cost: 400, days: 17},
        { id: 10, name: 'UnitedStatesofAmericaTour', country: 'United States of America', cost: 550, days: 11}
    ];
    getTours(): Tour[]{
        return this.tours;
    }
    getTour(id:number): Tour | undefined{
        return this.tours.find(elem => elem.id == id);
    }
}