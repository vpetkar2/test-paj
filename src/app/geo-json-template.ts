export class IGeometry {
    type: string;
    coordinates: number[];

    constructor() {
    }
}

export class GeoProperties {
    title: string;
    description: string;
    icon: any;
    speed: any;
    direction: any;
    color: any;
    id: string;
    deviceID: number;
    constructor() {
    }
}

export class PolylinePoints {
    id: any;
    lat: any;
    lon: any;
    time: any;
    heading: any;
    type: string;
    prevType: string;

    constructor() {
    }
}

export class MarkerInfo {
    id: number;
    marker: any;
}
export class LayerInfo {
    Coordinates: number [][];
    layer: any;
}

export class DeviceMarkers {
    deviceIconMarker: any;
    deviceID: number;
    modelNumber: number;
    clusterSourceID: any;
    clusterLayerID: any;
    markers: any[];
    clusterMarkers: any[];
    layers: LayerInfo[];
    layersIDs: any [];
    allCoordinates: number [][];
    dataPoints: any;
    geoPoints: any;
    deviceModel: any;
    lastPosition: any;
    lastAddress: any;
    geofences: any;
    optimizeCoordinates: number [][];
    requestCount: number;
    responseCount: number;
}

export class ToggleCheck {
    firstTime: boolean;
    id: number;
}

export class DevicesIconMarks {
    id: number;
    marker: any;
    iconName: string;
    constructor() {
    }
}

export class IGeoJson {
    type: string;
    geometry: IGeometry;
    properties?: GeoProperties;
    $key?: string;

    constructor() {
    }
}

export class geofencefeature {
    type: string;
    geometry: any;
    properties?: any;
    $key?: string;

    constructor() {
    }
}

export class GeoJsonTemplate {
    type: string;
    features: IGeoJson[];

    constructor() {
    }
}

export class DeviceModel {
    alarm_radius: number;
    alarm_erschuetterung: number;
    alarm_geschwindigkeit: number;
    alarm_batteriestand: number;
    alarm_sos: number;
    alarm_drop: number;
    alarm_stromunterbrechung: number;
    alarm_zuendalarm: number;
    alarmakkuwarnung: number;
    alarmbewegung: number;
    alarmgeschwindigkeit: number;
    alarmgeozaunbefahren: number;
    alarmsos: number;
    alarmstromunterbrechung: number;
    alarmzuendalarm: number;
    alarmgeschwindigkeitab: number;

}

export class DeviceInfo {
    battery: string;
    speed: string;
    maps: string;
    time: string;
    street: string;
    building: string;
    city: string;
    lastLogin: string;
    days: string;
}

export class DevicePosition {
    id: number;
    devicepos: number;
}
