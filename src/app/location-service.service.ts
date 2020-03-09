import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationServiceService {

  constructor() {}

  public loggedIn = true;

  getMarkers() {
    const geoJson = [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: ['-7.605358000', '33.589252000']
      },
      properties: {
        message: 'CIH'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: ['-7.605380193247726', '33.58919983246191']
      },
      properties: {
        message: 'CIH'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: ['-7.60420645897571', '33.58914710180493']
      },
      properties: {
        message: 'CIH'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: ['-7.604210214461233', '33.588467856720996']
      },
      properties: {
        message: 'CIH'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: ['-7.604549246073617', '33.58784044401963']
      },
      properties: {
        message: 'CIH'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: ['-7.606080972495996', '33.589121491331255']
      },
      properties: {
        message: 'CIH'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: ['-7.60577278677841', '33.58943452328465']
      },
      properties: {
        message: 'CIH'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: ['-7.650985208233971', '33.60393600737409']
      },
      properties: {
        message: 'CIH'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: ['-7.641819664636462', '33.59828907192992']
      },
      properties: {
        message: 'CIH'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: ['-7.621277809735223', '33.593970870306805']
      },
      properties: {
        message: 'CIH'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: ['-7.6263135', '33.5949432']
      },
      properties: {
        message: 'CIH'
      }
    }];
    return geoJson;
  }
}
