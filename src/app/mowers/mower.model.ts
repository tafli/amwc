export class Location {
  constructor(
    public latitude: number,
    public longitude: number,
    public pgsStatus: string
  ) {}
}

export class MowerStatus {
  constructor(
    public batteryPercent: number,
    public connected: boolean,
    public lastErrorCode: number,
    public lastErrorCodeTimestamp: number,
    public mowerStatus: string,
    public nextStartSource: string,
    public nextStartTimestamp: number,
    public operationMode: string,
    public storedTimestamp: number,
    public showAsDisconnected: boolean,
    public valueFound: boolean,
    public cachedSettingsUUID: string,
    public lastLocations: Location[]
  ) {}
}
export class Mower {
  constructor(
    public id: string,
    public name: string,
    public model: string,
    public valueFound: boolean,
    public status: MowerStatus
  ) {}
}
