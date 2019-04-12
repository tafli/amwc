// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //IAM_URL: 'http://localhost:3000',
  //TRACK_URL: 'http://localhost:3000'
  IAM_URL: 'https://iam-api.dss.husqvarnagroup.net/api/v3',
  TRACK_URL: 'https://amc-api.dss.husqvarnagroup.net/v1',
  MAP_BOX_TOKEN: 'pk.eyJ1IjoidGFmbGkiLCJhIjoiY2p1ZWlxbjQ5MDNtazQ0b2U5eGx3eTduciJ9.ChQ4tKSK09nXdrlsp1Ggrg'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
