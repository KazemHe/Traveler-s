import { storageService } from './storage.service';
import { Inject } from '@angular/core';


export const travelService = {
    
  getTravels,
  getTravelById,
  deleteTravel,
  saveTravel,
  getEmptyTravel,
  
};

export  interface Travel {
  _id: string;
  country: string;
  start: string;
  end: string;
  note: string;
}

const travels: Travel[] = storageService.load('travel') || [];

function sort(arr: Travel[]): Travel[] {
    if (!arr || arr.length === 0) {
      return [];
    }
    
    return arr.sort((a, b) => {
      const countryA = (a.country || '').toLowerCase();
      const countryB = (b.country || '').toLowerCase();
      
      if (countryA < countryB) {
        return -1;
      }
      if (countryA > countryB) {
        return 1;
      }
      return 0;
    });
  }
  
  
  

function getTravels(filterBy: { term?: string } | null): Promise<Travel[]> {
  return new Promise((resolve, reject) => {
    console.log(travels);
    let travelsToReturn = travels;
    if (filterBy && filterBy.term) {
      travelsToReturn = filter(filterBy.term);
    }
    resolve(sort(travelsToReturn));
  });
}

function getTravelById(id: string): Promise<Travel> {
  return new Promise((resolve, reject) => {
    const travel = travels.find((travel) => travel._id === id);
    travel ? resolve(travel) : reject(`Travel ID ${id} not found!`);
  });
}

function deleteTravel(id: string): Promise<Travel[]> {
  return new Promise((resolve, reject) => {
    const index = travels.findIndex((travel) => travel._id === id);
    if (index !== -1) {
      travels.splice(index, 1);
    }

    // Save the updated travels array to storage
    storageService.store('travel', travels);

    resolve(travels);
  });
}

function updateTravel(travel: Travel): Promise<Travel> {
  return new Promise((resolve, reject) => {
    const index = travels.findIndex((c) => travel._id === c._id);
    if (index !== -1) {
      travels[index] = travel;
    }
    resolve(travel);
  });
}

function addTravel(travel: Travel): Promise<Travel> {
  return new Promise((resolve, reject) => {
    travel._id = makeId(); // Generate a unique ID for the travel
    travels.push(travel); // Add the travel to the array

    storageService.store('travel', travels); // Save the updated array to local storage

    resolve(travel);
  });
}

function saveTravel(travel: Travel): Promise<Travel> {
  return travel._id ? updateTravel(travel) : addTravel(travel);
}

function getEmptyTravel(): Travel {
  return {
    _id: '',
    country: '',
    start: '',
    end: '',
    note: '',
  };
}

function filter(term: string): Travel[] {
  term = term.toLowerCase();
  return travels.filter((travel) => {
    return travel.country.toLowerCase().includes(term);
    // travel.phone.toLowerCase().includes(term) ||
    // travel.email.toLowerCase().includes(term)
  });
}

function makeId(length = 5): string {
  let txt = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}


