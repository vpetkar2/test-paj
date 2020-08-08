import { AuthenticationService } from '../../services/authentication.service';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Storage } from '@ionic/storage';
import {Constants} from '../../constants.enum';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';
import { FCM } from '@ionic-native/fcm/ngx';
import { Platform, MenuController, LoadingController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { ModalController, IonTabs } from '@ionic/angular';

import {
  CircleMode,
  DragCircleMode,
  DirectMode,
  SimpleSelectMode
} from 'mapbox-gl-draw-circle';

import {
  GeoJsonTemplate, IGeometry,
  IGeoJson, GeoProperties,
  DeviceMarkers, PolylinePoints, DevicesIconMarks, LayerInfo, DeviceInfo, DeviceModel } from 'src/app/geo-json-template';
import { Router } from '@angular/router';
import { DeviceListComponent } from './device-list/device-list.component';
import { RouteComponent } from './route/route.component';
import { InfoComponent } from './info/info.component';
import { AlertComponent } from './alert/alert.component';
import { SideBarComponent } from 'src/app/components/side-bar/side-bar.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss']
})


export class MapPage implements OnInit {
  @ViewChild(SideBarComponent, {static: true}) sideBar: SideBarComponent;

  allModals = [];

  // Alert
  deviceModel = new DeviceModel();

  // Route
  startDate: any;
  endDate: any;
  lastMinutes: any;
  lastPoints: any;

  // Info's
  lastLatLng = {};
  deviceStatus: string;
  deviceInfoValues = new DeviceInfo();

  deviceAlarmsValues = new DeviceModel();
  map: mapboxgl.Map;
  draw: MapboxDraw;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 50.93;
  lng = 7.6;
  geofenceStyle: any;
  devices: any = null;
  isAdmin: string = null;
  message = 'Hello world!';
  drawerState = 0;
  deviceIconMarks: DevicesIconMarks[] = [];
  deviceMarkers: DeviceMarkers[] = [];
  copyDeviceMarkers: DeviceMarkers[] = [];
  polylinePoints: PolylinePoints[] = [];
  maploaded = false;
  deviceID: any;
  selDeviceName: string;
  selDeviceID: number;
  allCoordinates: number [][] = [];
  routeIcon: string;
  private subscription;
  model100 = [1010, 9041, 9042, 9043, 9044];
  optimizeCoordinates: number [][] = [];
  requestCount = false;
  responseCount = false;
  // Store IDs and cluster/marker HTMLElements
  markers = new Map();
  cMarkers = [];
  markersOnScreen = [];
  unclusterMarkers = [];
  moveendCount = 0;
  clusterSourceID = 'sourceCluster';
  clusterLayerID = 'clusterLayer';
  firstTime = true;
  tabIndex = 0;
  tempReload = 0;

  activateTab(indx) {
    this.tabIndex = indx;
  }

  constructor(
    
      private authService: AuthenticationService,
      private storage: Storage,
      private router: Router,
      private platform: Platform,
      private fcm: FCM,
      private iab: InAppBrowser,
      private menuController: MenuController,
      public modalController: ModalController,
      public loadingCtrl: LoadingController
    ) { }

  async ngOnInit() {
    this.tempReload = 1;
    console.log('ngOnInit called');
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait',
      translucent: true,
    });
    await loading.present();
    console.log('Init Called');
    const prt = this;
    this.storage.set(Constants.UPDATE_LOGIN, 0);
    this.platform.ready().then(async () => {

      // this.storage.get(Constants.DEVICE_NAME).then(res => {
      //   this.selDeviceName = res;
      // });
      // let mapStyle;
      // await this.storage.get(Constants.MAP).then(res => {
      //   mapStyle = res;
      // });
      await this.setGeofenceStyle();
      //  await this.getUserInfo();
      await this.buildMap();

      this.fcm.onTokenRefresh().subscribe(token => {
        // Register your new token in your back-end if you want
        console.log('refresh');
        console.log(token);
        // backend.registerToken(token);
      });

      this.fcm.getToken().then(token => {
        console.log('token');
        console.log(token);
        this.authService.registerFBToken(token);
      });
    });
    loading.dismiss();

    this.tempReload = 5;
  }

  openPrivacyPolicy() {
    this.iab.create('https://start.finder-portal.com/privacy-policy', '_blank');
    console.log('InAppBrowser');
  }

  openImprint() {
    this.iab.create('https://start.finder-portal.com/imprint', '_blank');
    console.log('InAppBrowser');
  }

  async buildMap() {
    let mapStyle;
    await this.storage.get(Constants.MAP).then(res => {
        mapStyle = res;
      });
    console.log(mapStyle);
    // mapboxgl.accessToken = '<your access token here>';
    let style;
    // mapboxgl.accessToken = '<your access token here>';
    if (mapStyle === 'osm') {
      style = {
        version: 8,
        sources: {
        'raster-tiles': {
        type: 'raster',
        tiles: [
        'https://b.tiles.paj-gps.de/styles/hills/{z}/{x}/{y}.png'
        ],
        tileSize: 256,
        attribution:
        'Map tiles, Data by <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>'
        }
        },
        layers: [
        {
        id: 'simple-tiles',
        type: 'raster',
        source: 'raster-tiles',
        minzoom: 0,
        maxzoom: 22
        }
        ]
      };
    } else if (mapStyle === '3D' || mapStyle === ' 3d') {
       style = 'https://tiles.paj-gps.de/styles/paj-street-3d/style.json';
    }
    this.map = new mapboxgl.Map({
      container: 'map',
      // style: 'https://tiles.paj-gps.de/styles/paj-street/style.json',
      style,
      // style: 'https://tiles.paj-gps.de/styles/paj-street/{3}/{2}/{2}.png',
      // sprite: 'mapbox://sprites/mapbox/streets-v9',
      zoom: 6,
      // sprite: '../../../assets/icon/dataPoint.svg',
      center: [this.lng, this.lat],
      });

    const ptr = this;
    console.log('ng on it called');
    // if(this.firstTime) {
    //   console.log('first time called');
    //   this.loadDataOnMap(0, 0);
    //   this.firstTime = false;
    // }
    this.map.on('load', function() {
      ptr.loadDataOnMap(0, 0, 0);
      ptr.map.resize();
      console.log('load called');
    });
    // this.map.scrollZoom.disable();
    // this.map.scrollWheelZoom.disable();
    this.draw = new MapboxDraw({
      userProperties: true,
      styles: this.geofenceStyle,
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      }
    });
    const map = this.map;
    const draw = new MapboxDraw({
      userProperties: true,
      styles: this.geofenceStyle,
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true
      },
      modes: {
        ...MapboxDraw.modes,
        draw_circle  : CircleMode,
        drag_circle  : DragCircleMode,
        direct_select: DirectMode,
        simple_select: SimpleSelectMode
      }
    });
    this.draw = draw;

    const authService = this.authService;
    const storageService = this.storage;

    const clusterLayerID = this.clusterLayerID;
    const clusterSourceID = this.clusterSourceID;
    map.on('data', function(e) {
      if (e.sourceId !== ptr.clusterSourceID || !e.isSourceLoaded) { return; }
      const callMarkersEvent = (event) => ptr.updateMarkers(ptr);
      map.on('zoomend', callMarkersEvent); // moveend also fires on zoomend
      ptr.updateMarkers(ptr);
    });

  // inspect a cluster on click
    map.on('click', clusterLayerID, async function(e) {
    const features = map.queryRenderedFeatures(e.point, {
    layers: [clusterLayerID]
    });
    // console.log('here');
    // console.log(features);
    // console.log(e);
    const clusterId = features[0].properties.cluster_id;
    const point_count = features[0].properties.point_count;
    const clusterSource = map.getSource(clusterSourceID);
    let feature = features[0];
    // feature = await ptr.getFeatureProps(features[0], map, clustorSourceID);
    clusterSource.getClusterLeaves(clusterId, point_count, 0, async function(err, aFeatures) {
      // console.log('getClusterLeaves', err, aFeatures);
      feature = await ptr.getFeatureWithProps(aFeatures);
      const coordinates = features[0].geometry.coordinates.slice();
      // var description = e.features[0].properties.description;

      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(feature.properties.description)
      .addTo(map);
      });
    });
    map.on('mouseenter', clusterLayerID, function() {
      map.getCanvas().style.cursor = 'pointer';
      });
    // tslint:disable-next-line: only-arrow-functions
    map.on('mouseleave', clusterLayerID, function() {
      map.getCanvas().style.cursor = '';
    });
    this.map.on('draw.update', function(event) {
      if (event.features.length && event.features[0].type === 'Feature') {

        console.log(event);
        console.log(draw.getAll());
        let type, coordinates, stringCoordinates, options;
        switch (event.features[0].geometry.type) {
          case 'Polygon':
            if (event.features[0].properties.isCircle) {
              type = 1;
            } else {
              type = 3;
            }
            break;
          case 'Circle':
            type = 1;
            break;
          default:
            break;
        }
        stringCoordinates = '[';
        let index = 0;
        options = '{}';
        coordinates = event.features[0].geometry.coordinates;
        const dID = event.features[0].id.split('_');
        coordinates.forEach(coordinateArray => {
          coordinateArray.forEach(coordinate => {
            stringCoordinates = stringCoordinates.concat('[');
            // [coordinate[0], coordinate[1]] = [coordinate[1], coordinate[0]];
            stringCoordinates = stringCoordinates.concat(coordinate.toString());
            if (index === coordinateArray.length - 1) {
              stringCoordinates = stringCoordinates.concat(']');
            } else {
              stringCoordinates = stringCoordinates.concat('],');
            }
            index = index + 1;
          });
        });
        stringCoordinates = stringCoordinates.concat(']');
        let portColor = '#fbb03b';
        if (event.features[0].properties.portColor) {
          portColor = event.features[0].properties.portColor;
        }
        if (type === 1) {
          const centerArray = event.features[0].properties.center;
          let centerCoordinates = '[';
          // [centerArray[0], centerArray[1]] = [centerArray[1], centerArray[0]];
          centerCoordinates = centerCoordinates.concat(centerArray.toString());
          centerCoordinates = centerCoordinates.concat(']');
          options = '{"color":"' + portColor +
          '","fillColor":"' + portColor + '","radius":"' + event.features[0].properties.radiusInKm * 1000 +
          '","center":"' + centerCoordinates + '"}';
          const dID = event.features[0].id.split('_');
          console.log(dID);
          authService.updateRadiusInfo(+ dID[1],
            event.features[0].properties.radiusInKm * 1000,
            centerArray[1],
            centerArray[0]);
        } else {
          options = '{"color":"' + portColor +
            '","fillColor":"' + portColor + '"}';
        }
        console.log(options);
        // console.log(event.features[0].id);
        authService.updateGeofence( + dID[0], + dID[1], stringCoordinates, type, options);

      }
    });
    // this.map.on('draw.selectionchange',async function (event) {
    //   console.log(event);
    // });
    // this.map.on('draw.onDrag', this.updateGeofence);

    // console.log(selDeviceID);
    this.map.on('draw.create', async function(event) {
      let selDeviceID;
      await storageService.get(Constants.SELECTED_DEVICE).then(res => {
        selDeviceID = res;
      });

      console.log(event);
      let type, coordinates, stringCoordinates, options;
      switch (event.features[0].geometry.type) {
          case 'Polygon':
            if (event.features[0].properties.isCircle) {
              type = 1;
            } else {
              type = 3;
            }
            break;
          case 'Circle':
            type = 1;
            break;
          default:
            break;
        }
      stringCoordinates = '[';
      let index = 0;
      options = '{}';
      coordinates = event.features[0].geometry.coordinates;
      coordinates.forEach(coordinateArray => {
          coordinateArray.forEach(coordinate => {
            stringCoordinates = stringCoordinates.concat('[');
            // [coordinate[0], coordinate[1]] = [coordinate[1], coordinate[0]];
            stringCoordinates = stringCoordinates.concat(coordinate.toString());
            if (index === coordinateArray.length - 1) {
              stringCoordinates = stringCoordinates.concat(']');
            } else {
              stringCoordinates = stringCoordinates.concat('],');
            }
            index = index + 1;
          });
        });
      stringCoordinates = stringCoordinates.concat(']');
      if (type === 1) {
          const centerArray = event.features[0].properties.center;
          let centerCoordinates = '[';
          // [centerArray[0], centerArray[1]] = [centerArray[1], centerArray[0]];
          centerCoordinates = centerCoordinates.concat(centerArray.toString());
          centerCoordinates = centerCoordinates.concat(']');
          options = '{"color":"' + '#fbb03b' +
          '","fillColor":"' + '#fbb03b' + '","radius":"' + event.features[0].properties.radiusInKm * 1000 +
          '","center":"' + centerCoordinates + '"}';

        } else {
          options = '{"color":"' + '#fbb03b' +
            '","fillColor":"' + '#fbb03b' + '"}';
        }
      console.log(options);
      authService.createGeofence(selDeviceID, type, options, stringCoordinates).then(res => {
          const polyFeature = draw.get(event.features[0].id);
          const id = res.id.toString() + '_' + res.iddevice.toString();
          const allFeatures = draw.getAll();
          // console.log(allFeatures.features);
          const index = allFeatures.features.findIndex(obj =>
            obj.id === event.features[0].id
            );
          console.log(index);
          console.log(event.features[0].id);
          allFeatures.features[index].id = id;
          draw.set(allFeatures);
          console.log(draw.getAll());
          // console.log(event.features[0]);
        });
    });

    this.map.on('draw.delete', async function(event) {
      if (event.features.length && event.features[0].type === 'Feature') {
          console.log(event);
          // console.log(draw);
          const dID = event.features[0].id.split('_');
          authService.deleteGeofence(+ dID[0], + dID[1]);
      }
    });
    this.map.addControl(this.draw, 'top-right');

    this.map.addControl(new mapboxgl.NavigationControl(), 'top-left');
    // console.log(this.deviceMarkers);
    // this.authService.createDevice();
  }

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }

  async getUserInfo() {
    let userID;
    await this.storage.get(Constants.USER_ID).then(res => {
      userID = res;
    });
    this.authService.getUserInfo(userID).then(res => {
      console.log(res);
      return res.success;
    });

  }

  async ionViewWillEnter() {

    console.log('ionViewWillEnter Called');
    if (this.tempReload == 5) {
      // location.reload();
      // this.subscription.unsubscribe();
      // this.buildMap();
      this.router.navigate(['']);
    }
    console.log('this.tempReload = '+this.tempReload);
    this.tempReload = 2;
    console.log(this.markers);
    console.log(this.markersOnScreen);
    console.log(this.cMarkers);
    // this.map.resize();
    this.subscription = this.platform.backButton.subscribe(() => {
      navigator['app'].exitApp();
    });
    mapboxgl.accessToken = '';
    this.storage.get(Constants.IS_ADMIN).then(res => {
      this.isAdmin = res;
      // console.log(this.isAdmin);
    });
    let updateMap = 0;
    await this.storage.get(Constants.UPDATE_MAP).then(res => {
      updateMap = res;
      console.log(updateMap);
    });
    let updateLogin = 0;
    await this.storage.get(Constants.UPDATE_LOGIN).then(res => {
      updateLogin = res;
      console.log(updateLogin);
    });
    let updateStyle = 0;
    await this.storage.get(Constants.UPDATE_STYLE).then(res => {
      updateStyle = res;
      console.log(updateStyle);
      this.map.resize();
      if (this.firstTime) {
        console.log('first time called');
        // this.loadDataOnMap(0, 0);
        this.firstTime = false;
      }
    });

    if (updateMap || updateStyle || updateLogin) {
      console.log('update map called');
      this.loadDataOnMap(updateMap, updateStyle, updateLogin);
    }
  }



  async loadDataOnMap(updateMap, updateStyle, updateLogin) {
    const loading = await this.loadingCtrl.create({
      message: 'Please Wait',
      translucent: true,
    });
    await loading.present();

    const map = this.map;
    const ptr = this;
    if (updateMap || updateStyle) {
      if (this.maploaded) {
        // this.map.remove();
        this.map.resize();
        console.log(updateMap);
        console.log(updateStyle);
        if (updateStyle) {
          let mapStyle;
          await this.storage.get(Constants.MAP).then(res => {
            mapStyle = res;
          });
          if (mapStyle === 'osm') {
            console.log(mapStyle);
            const style = {
              version: 8,
              sources: {
              'raster-tiles': {
              type: 'raster',
              tiles: [
              'https://b.tiles.paj-gps.de/styles/hills/{z}/{x}/{y}.png'
              ],
              tileSize: 256,
              attribution:
              'Map tiles, Data by <a target="_top" rel="noopener" href="http://openstreetmap.org">OpenStreetMap</a>'
              }
              },
              layers: [
              {
              id: 'simple-tiles',
              type: 'raster',
              source: 'raster-tiles',
              minzoom: 0,
              maxzoom: 22
              }
              ]
              };
            this.map.setStyle(style);
          } else if (mapStyle === '3D') {
            this.map.setStyle('https://tiles.paj-gps.de/styles/paj-street-3d/style.json');
          }
          map.on('style.load', () => {
            const waiting = async () => {
              if (!map.isStyleLoaded()) {
                console.log('waiting');
                setTimeout(waiting, 200);
              } else {
                console.log('calling rmeoving all');
                ptr.removeAllrequest(ptr.map);
                const allGeoPoints = await this.mergeAllGeoPoints(this.deviceMarkers, this.devices);
                console.log(allGeoPoints);
                this.createSingleCluster(allGeoPoints, this.map);
                ptr.deviceMarkers.forEach(deviceMarker => {
                  ptr.ShowPoints(deviceMarker.dataPoints, deviceMarker.deviceID);
                });
              }
            };
            waiting();
          });
          // ptr.maploaded = false;
        }
        if (updateMap) {
          console.log('calling rmeoving all');
          this.removeAllrequest(this.map);
          const allGeoPoints = await this.mergeAllGeoPoints(this.deviceMarkers, this.devices);
          console.log(allGeoPoints);
          this.createSingleCluster(allGeoPoints, this.map);
        }
      }

    }

    if (updateLogin) {
      console.log('login update here');
      this.removeAllLayers(this.deviceMarkers, this.map);
      this.removeAllrequest(this.map);
      this.storage.set(Constants.UPDATE_LOGIN, 0);
      this.deviceMarkers = [];
      this.deviceIconMarks = [];
      this.maploaded = false;
    }

    // console.log(this.maploaded);
    if (!this.maploaded) {
      console.log('called');
      // this.map.resize();
      await this.getDevices();
      if (this.devices) {
        if (this.devices.length > 0) {
          this.storage.set(Constants.SELECTED_DEVICE, this.devices[0].id);
          this.storage.set(Constants.DEVICE_NAME, this.devices[0].name);
          const obj = {deviceID: this.devices[0].id, deviceName: this.devices[0].name, radioIndex: 0 };
          this.storage.set('selected-device-data', obj);
          await this.loadConfigs();
          await this.loadDeviceModels(this.devices);
          this.deviceMarkers = await this.getGeoFences(this.devices, this.deviceMarkers);
          const geofenceFeatures = this.createGeoFenceFeatures(this.deviceMarkers);

          this.draw = this.loadGeoFences(geofenceFeatures, this.draw, this.deviceMarkers);
          this.maploaded = true;
          // this.deviceMarkers.forEach(deviceMarker => {
          //   const index = this.devices.findIndex(obj =>
          //     obj.id === deviceMarker.deviceID
          //     );
          //   this.createLayer(deviceMarker.deviceID, this.devices[index], this.map, deviceMarker.optimizeCoordinates, this.deviceMarkers);
          //   this.requestCount = 0;
          //   this.responseCount = 0;
          // });
          console.log('test');
          // this.createLayer()
        }
      }
      this.map.resize();
    }
    loading.dismiss();
  }

  removeAllLayers(deviceMarkers, map) {
    deviceMarkers.forEach(deviceMarker => {
      const mapLayer = this.map.getLayer(deviceMarker.deviceID);
      if (typeof mapLayer !== 'undefined') {
          // Remove map layer & source.
          // this.map.removeLayer(this.deviceID).removeSource(this.deviceID);
          deviceMarker.layersIDs.forEach(layerID => {
            map.removeLayer(layerID).removeSource(layerID);
          });
          deviceMarker.layersIDs = [];
          deviceMarker.layers = [];
          // const zoom = this.map.getZoom();
      }
    });
  }


  async removeAllrequest(map) {
    console.log('removing all callled here');
    this.removeDataFromMap(this.deviceIconMarks, this.deviceMarkers, this.map);
    this.removeAllMarkers(this.deviceMarkers, this.markers, this.cMarkers, this.markersOnScreen, this.unclusterMarkers);
    console.log(this.markers);
    console.log(this.markersOnScreen);
    console.log(this.cMarkers);
    const mapLayer = map.getLayer(this.clusterLayerID);
    if (typeof mapLayer !== 'undefined') {
        // Remove map layer & source.
        // this.map.removeLayer(unclusteredPointID);
        // this.map.removeLayer(clusterCountID);
        console.log('removing cluster');
        map.removeLayer(this.clusterLayerID);
        map.removeSource(this.clusterSourceID);
    }
    // ptr.maploaded = false;
    this.storage.set(Constants.UPDATE_MAP, 0);
    this.storage.set(Constants.UPDATE_STYLE, 0);
  }

  removeDataFromMap(IconMarkers, deviceMarkers, map) {
    console.log('removing from map');
    console.log(IconMarkers);
    console.log(deviceMarkers);
    IconMarkers.forEach(Icon => {
      if (Icon.marker) {
        Icon.marker.remove();
      }
    });
    deviceMarkers.forEach(async deviceMarker => {
      // if(deviceMarker.deviceIconMarker) {
      //   deviceMarker.deviceIconMarker.remove();
      // }
      if (deviceMarker.markers) {
          deviceMarker.markers.forEach(marker => {
            marker.remove();
          });
      }
    //   if (deviceMarker.layersIDs) {
    //     let updateStyle = 0;
    //     await this.storage.get(Constants.UPDATE_STYLE).then(res => {
    //       updateStyle = res;
    //       console.log(updateStyle);
    //     });
    //     if(!updateStyle) {
    //       deviceMarker.layersIDs.forEach(layer => {
    //         map.removeLayer(layer).removeSource(layer);
    //       });
    //     }
    // }
    });
  }

  setGeofenceStyle() {
    this.geofenceStyle = [
      // default themes provided by MB Draw
      // default themes provided by MB Draw
      // default themes provided by MB Draw
      // default themes provided by MB Draw

      {
        id: 'gl-draw-polygon-fill-inactive',
        type: 'fill',
        filter: ['all', ['==', 'active', 'false'],
            ['==', '$type', 'Polygon'],
            ['!=', 'mode', 'static']
        ],
        paint: {
            'fill-color': '#3bb2d0',
            'fill-outline-color': '#3bb2d0',
            'fill-opacity': 0.1
        }
    },
    {
        id: 'gl-draw-polygon-fill-active',
        type: 'fill',
        filter: ['all', ['==', 'active', 'true'],
            ['==', '$type', 'Polygon']
        ],
        paint: {
            'fill-color': '#fbb03b',
            'fill-outline-color': '#fbb03b',
            'fill-opacity': 0.1
        }
    },
    {
        id: 'gl-draw-polygon-midpoint',
        type: 'circle',
        filter: ['all', ['==', '$type', 'Point'],
            ['==', 'meta', 'midpoint']
        ],
        paint: {
            'circle-radius': 3,
            'circle-color': '#fbb03b'
        }
    },
    {
        id: 'gl-draw-polygon-stroke-inactive',
        type: 'line',
        filter: ['all', ['==', 'active', 'false'],
            ['==', '$type', 'Polygon'],
            ['!=', 'mode', 'static']
        ],
        layout: {
            'line-cap': 'round',
            'line-join': 'round'
        },
        paint: {
            'line-color': '#3bb2d0',
            'line-width': 2
        }
    },
    {
        id: 'gl-draw-polygon-stroke-active',
        type: 'line',
        filter: ['all', ['==', 'active', 'true'],
            ['==', '$type', 'Polygon']
        ],
        layout: {
            'line-cap': 'round',
            'line-join': 'round'
        },
        paint: {
            'line-color': '#fbb03b',
            'line-dasharray': [0.2, 2],
            'line-width': 2
        }
    },
    {
        id: 'gl-draw-line-inactive',
        type: 'line',
        filter: ['all', ['==', 'active', 'false'],
            ['==', '$type', 'LineString'],
            ['!=', 'mode', 'static']
        ],
        layout: {
            'line-cap': 'round',
            'line-join': 'round'
        },
        paint: {
            'line-color': '#3bb2d0',
            'line-width': 2
        }
    },
    {
        id: 'gl-draw-line-active',
        type: 'line',
        filter: ['all', ['==', '$type', 'LineString'],
            ['==', 'active', 'true']
        ],
        layout: {
            'line-cap': 'round',
            'line-join': 'round'
        },
        paint: {
            'line-color': '#fbb03b',
            'line-dasharray': [0.2, 2],
            'line-width': 2
        }
    },
    {
        id: 'gl-draw-polygon-and-line-vertex-stroke-inactive',
        type: 'circle',
        filter: ['all', ['==', 'meta', 'vertex'],
            ['==', '$type', 'Point'],
            ['!=', 'mode', 'static']
        ],
        paint: {
            'circle-radius': 5,
            'circle-color': '#fff'
        }
    },
    {
        id: 'gl-draw-polygon-and-line-vertex-inactive',
        type: 'circle',
        filter: ['all', ['==', 'meta', 'vertex'],
            ['==', '$type', 'Point'],
            ['!=', 'mode', 'static']
        ],
        paint: {
            'circle-radius': 3,
            'circle-color': '#fbb03b'
        }
    },
    {
        id: 'gl-draw-point-point-stroke-inactive',
        type: 'circle',
        filter: ['all', ['==', 'active', 'false'],
            ['==', '$type', 'Point'],
            ['==', 'meta', 'feature'],
            ['!=', 'mode', 'static']
        ],
        paint: {
            'circle-radius': 5,
            'circle-opacity': 1,
            'circle-color': '#fff'
        }
    },
    {
        id: 'gl-draw-point-inactive',
        type: 'circle',
        filter: ['all', ['==', 'active', 'false'],
            ['==', '$type', 'Point'],
            ['==', 'meta', 'feature'],
            ['!=', 'mode', 'static']
        ],
        paint: {
            'circle-radius': 3,
            'circle-color': '#3bb2d0'
        }
    },
    {
        id: 'gl-draw-point-stroke-active',
        type: 'circle',
        filter: ['all', ['==', '$type', 'Point'],
            ['==', 'active', 'true'],
            ['!=', 'meta', 'midpoint']
        ],
        paint: {
            'circle-radius': 7,
            'circle-color': '#fff'
        }
    },
    {
        id: 'gl-draw-point-active',
        type: 'circle',
        filter: ['all', ['==', '$type', 'Point'],
            ['!=', 'meta', 'midpoint'],
            ['==', 'active', 'true']
        ],
        paint: {
            'circle-radius': 5,
            'circle-color': '#fbb03b'
        }
    },
    {
        id: 'gl-draw-polygon-fill-static',
        type: 'fill',
        filter: ['all', ['==', 'mode', 'static'],
            ['==', '$type', 'Polygon']
        ],
        paint: {
            'fill-color': '#404040',
            'fill-outline-color': '#404040',
            'fill-opacity': 0.1
        }
    },
    {
        id: 'gl-draw-polygon-stroke-static',
        type: 'line',
        filter: ['all', ['==', 'mode', 'static'],
            ['==', '$type', 'Polygon']
        ],
        layout: {
            'line-cap': 'round',
            'line-join': 'round'
        },
        paint: {
            'line-color': '#404040',
            'line-width': 2
        }
    },
    {
        id: 'gl-draw-line-static',
        type: 'line',
        filter: ['all', ['==', 'mode', 'static'],
            ['==', '$type', 'LineString']
        ],
        layout: {
            'line-cap': 'round',
            'line-join': 'round'
        },
        paint: {
            'line-color': '#404040',
            'line-width': 2
        }
    },
    {
        id: 'gl-draw-point-static',
        type: 'circle',
        filter: ['all', ['==', 'mode', 'static'],
            ['==', '$type', 'Point']
        ],
        paint: {
            'circle-radius': 5,
            'circle-color': '#404040'
        }
    },

    // end default themes provided by MB Draw
    // end default themes provided by MB Draw
    // end default themes provided by MB Draw
    // end default themes provided by MB Draw




    // new styles for toggling colors
    // new styles for toggling colors
    // new styles for toggling colors
    // new styles for toggling colors

    {
        id: 'gl-draw-polygon-color-picker',
        type: 'fill',
        filter: ['all', ['==', '$type', 'Polygon'],
            ['has', 'user_portColor']
        ],
        paint: {
            'fill-color': ['get', 'user_portColor'],
            'fill-outline-color': ['get', 'user_portColor'],
            'fill-opacity': 0.5
        }
    },
    {
        id: 'gl-draw-line-color-picker',
        type: 'line',
        filter: ['all', ['==', '$type', 'LineString'],
            ['has', 'user_portColor']
        ],
        paint: {
            'line-color': ['get', 'user_portColor'],
            'line-width': 2
        }
    },
    {
        id: 'gl-draw-point-color-picker',
        type: 'circle',
        filter: ['all', ['==', '$type', 'Point'],
            ['has', 'user_portColor']
        ],
        paint: {
            'circle-radius': 3,
            'circle-color': ['get', 'user_portColor']
        }
    },
    ];
  }

  async getGeoFences(devices, deviceMarkers) {
    // let index = 0;
    const deviceIDs = [];
    devices.forEach(device => {
      const index = deviceMarkers.findIndex(obj =>
        obj.deviceID === device.id
        );
      if (deviceMarkers[index].deviceModel) {
        if (deviceMarkers[index].deviceModel.alarm_radius) {
          if (device.alarmgeozaunbefahren) {
            console.log('Show GeoFence');
            deviceIDs.push(device.id);
          }
        }
      }
      // index = index + 1;
    });
    console.log(deviceIDs);
    let resData;
    if (deviceIDs.length > 0) {
      await this.authService.getGeoFences(deviceIDs).then(
        res => {
          if (res.success.length > 0) {
            resData = res.success;
          }
        }
      ).catch (e => {
        console.log(e);
      });
      // console.log(resData);
      deviceMarkers.forEach(marker => {
        if (resData) {
          resData.forEach(geofence => {
            if (marker.deviceID === +geofence.iddevice) {
              marker.geofences.push(geofence);
            }
          });
        }
      });
    }
    return deviceMarkers;
  }

  getGeometryShape(geofence) {
    let geometry;
    // switch (geofence.shape_type) {
    //   case 1: // draw circle geomtry
    //     break;
    //   case 2: // draw rectangle
    //     break;
    //   case 3: // draw polygon
    const coordinatesArray = JSON.parse('[' + geofence.coordinates + ']');
        // coordinatesArray.forEach(coordinates => {
        //   coordinates.forEach(coordinate => {
        //     [coordinate[0], coordinate[1]] = [coordinate[1], coordinate[0]];
        //   });
        // });
    geometry = {
          type: 'Polygon',
          coordinates: coordinatesArray
        };
    //     break;
    //   default:
    //     break;
    // }
    return geometry;
  }

  getShapeFeature(geofence, geometryShape) {
    const feature = {
      id: geofence.id.toString() + '_' + geofence.iddevice.toString(),
      type: 'Feature',
      properties: {},
      geometry: geometryShape
    };
    const obj = JSON.parse(geofence.options);
    let properties;
    switch (geofence.shape_type) {
      case 1: // draw circle geomtry
        const lnglat = [0, 0];
        const circleProperties = { center : [], isCircle: true, radiusInKm: 0};
        const options = JSON.parse(geofence.options);
        // const centerCoordinates = JSON.parse('[' + options.center + ']');
        // const centerCoordinates = lnglat;
        let cc = options.center.split('[');
        cc = cc[1].split(',');
        lnglat[0] = +cc[0];
        cc = cc[1].split(']');
        lnglat[1] = +cc[0];
        // console.log(cc);
        // console.log(lnglat);
        // console.log(centerCoordinates);
        // [centerCoordinates[0][0], centerCoordinates[0][1]] = [centerCoordinates[0][1], centerCoordinates[0][0]];
        circleProperties.center = lnglat;
        circleProperties.radiusInKm = + options.radius;
        circleProperties.radiusInKm = circleProperties.radiusInKm / 1000; // in kilometers
        properties = circleProperties;
        break;
      case 2: // draw rectangle
        properties = {};
        break;
      case 3: // draw polygon
        properties = {};
        break;
      default:
        break;
    }
    feature.properties = properties;
    // console.log(obj.color);
    return feature;
  }

  createGeoFenceFeatures(deviceMarkers) {
    const allFeatures = [];
    let index = 0;
    deviceMarkers.forEach(device => {
      device.geofences.forEach(geofence => {
        const geometryShape = this.getGeometryShape(geofence);
        const feature = this.getShapeFeature(geofence, geometryShape);
        // console.log(feature);
        allFeatures.push(feature);
        index = index + 1;
      });
    });
    // console.log(allFeatures);
    const geoJSON = {
      type: 'FeatureCollection',
      features: allFeatures
    };
    return geoJSON;
  }

  loadGeoFences(geofenceFeaturesGeoJSON, draw, deviceMarkers) {
    // console.log(geofenceFeaturesGeoJSON);
    draw.set(geofenceFeaturesGeoJSON);
    // console.log(draw.getAll());
    // console.log(draw.get('6622' + ));
    let index = 0;
    deviceMarkers.forEach(device => {
      device.geofences.forEach(geofence => {
        const obj = JSON.parse(geofence.options);
        // console.log(obj.fillColor);
        draw.setFeatureProperty(geofence.id.toString() + '_' + geofence.iddevice.toString(), 'portColor', obj.fillColor);
        draw.add(draw.get(geofence.id.toString() + '_' + geofence.iddevice.toString()));
        index = index + 1;
      });
    });
    // console.log(draw.getAll());
    return draw;
  }

  async loadDeviceModels(devices) {
    // console.log(devices);
    const listofIDs = [];
    let index = 0;
    devices.forEach(device => {
      listofIDs[index] = device.model_nr;
      index = index + 1;
    });
    let resData = null;
    await this.authService.getDevicesModel(listofIDs).then(
      res => {
        resData = res.success;
        // console.log(resData);
      }
    ).catch (e => {
      console.log(e);
    });
    resData.forEach(deviceModel => {
      // tslint:disable-next-line: no-shadowed-variable
      const index = this.deviceMarkers.findIndex(obj =>
        obj.modelNumber === deviceModel.model_nr
        );
        // console.log(index);
      if (index > -1) {
        this.deviceMarkers[index].deviceModel = deviceModel;
      }
    });
    // console.log(this.deviceMarkers);
  }

  async loadConfigs() {
    this.loadDeviceIconMarkers(this.devices);
    this.deviceMarkers = await this.loadDeviceMarkers(this.deviceMarkers);
  }

  async loadDeviceMarkers(deviceMarkers) {

    let requestCount = 0, responseCount = 0;
    deviceMarkers.forEach(async device => {
      const index = this.devices.findIndex(obj =>
        obj.id === device.deviceID
        );
      requestCount++;
      await this.authService.getDevicePoints(
          this.devices[index].id, this.devices[index].spurmodus, this.devices[index].spurdatum,
          this.devices[index].spurdatumbis,
          this.devices[index].spurminuten, this.devices[index].spurpunkte)
        .then(
        async res => {
          device.dataPoints = res.success;
          device.lastPosition = device.dataPoints[0];
          await this.ShowPoints(device.dataPoints, device.deviceID);
          responseCount++;
          // console.log(requestCount);
          // console.log(responseCount);
          if (requestCount === responseCount) {
            console.log('max reached');
            this.map.resize();
            const allGeoPoints = this.mergeAllGeoPoints(deviceMarkers, this.devices);
            console.log(allGeoPoints);
            this.createSingleCluster(allGeoPoints, this.map);
          }
        }
      ).catch (e => {
        console.log(e);
      });
    });
    return deviceMarkers;
  }

  mergeAllGeoPoints(deviceMarkers, devices) {
    let allGeoPoints = [];
    console.log(deviceMarkers);
    deviceMarkers.forEach(deviceMarker => {
      const index = devices.findIndex(obj =>
        obj.id === deviceMarker.deviceID
        );
      if (devices[index].deviceshow) {
        if (deviceMarker.geoPoints) {
          allGeoPoints = allGeoPoints.concat(deviceMarker.geoPoints.features);
        }
      }
    });
    const geoPoints = new GeoJsonTemplate();
    geoPoints.type = 'Data Points';
    geoPoints.features = allGeoPoints;
    return geoPoints;
  }

  loadDeviceIconMarkers(devices) {

    const geoPoints = new GeoJsonTemplate();
    geoPoints.type = 'Device Point';
    const allFeatures: IGeoJson[] = [];
    this.deviceIconMarks = [];
    this.deviceMarkers = [];
    const ptrIconMarks = this.deviceIconMarks;
    const ptrDeviceMarks = this.deviceMarkers;
    const map = this.map;
    devices.forEach(element => {
      if (element.deviceshow === 1) {
        const features = new IGeoJson();
        const geometry = new IGeometry();
        geometry.type = 'Point';
        geometry.coordinates = [element.last_lng, element.last_lat];
        features.type = 'Feature';
        features.geometry = geometry;
        const geoProperty = new GeoProperties();
        geoProperty.title = element.id;
        // geoProperty.description = element.name;
        geoProperty.description = this.getPopupContent(element, '', 1);
        features.properties = geoProperty;
        allFeatures.push(features);
      } else {
        const deviceIconMarks = new DevicesIconMarks();
        const deviceMarkers = new DeviceMarkers();
        deviceIconMarks.id = + element.id;
        deviceIconMarks.iconName = element.iconcustomimage;
        deviceMarkers.deviceID = + element.id;
        deviceMarkers.modelNumber = + element.model_nr;
        ptrIconMarks.push(deviceIconMarks);
        ptrDeviceMarks.push(deviceMarkers);
      }
    });
    geoPoints.features = allFeatures;
    // console.log(this.geoPoints);
    geoPoints.features.forEach( marker => {
      // create a DOM element for the marker
      const index = devices.findIndex(obj =>
        obj.id === + marker.properties.title
        );
      let deviceIcon = 'paj_iconset_auto2.png';
      if (devices[index].iconusecustom) {
        if (devices[index].iconcustomimage) {
          deviceIcon = devices[index].iconcustomimage;
        }
      } else {
        if (devices[index].iconname) {
          deviceIcon = devices[index].iconname + '.png';
        }
      }
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(../../../assets/icons/map/devices/device_markers/' + deviceIcon;
      el.style.backgroundSize = 'cover';
      el.style.width = '48px';
      el.style.height = '48px';
      el.style.borderRadius = '50%';
      el.style.zIndex = '9';
      const deviceIconMarks = new DevicesIconMarks();
      const deviceMarkers = new DeviceMarkers();
      deviceIconMarks.id = +marker.properties.title;
      deviceIconMarks.iconName = deviceIcon;
      deviceMarkers.deviceID = +marker.properties.title;

        // add marker to map
      const singleMarker = new mapboxgl.Marker(el)
        // .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        // .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
        .setHTML(marker.properties.description));
      // if (devices[index].deviceshow === 1) {
      //     singleMarker.addTo(map);
      // }
      deviceIconMarks.marker = singleMarker;
      deviceMarkers.deviceIconMarker = singleMarker;
      ptrIconMarks.push(deviceIconMarks);
      ptrDeviceMarks.push(deviceMarkers);
    });
    this.deviceIconMarks = ptrIconMarks;
    this.deviceMarkers = ptrDeviceMarks;
    // let indexC = 0;
    console.log(devices);
    console.log(this.deviceMarkers);
    console.log("start markers");
    console.log(this.deviceMarkers);
    console.log("end markers");
    const authService = this.authService;
    const ptr = this;
    this.deviceMarkers.forEach(async deviceMarker => {
      const index = devices.findIndex(obj =>
        obj.id === + deviceMarker.deviceID
        );
      const layers: any[] = [];
      const layersIDs: any [] = [];
      // console.log(deviceMarker.deviceID);
      await authService.getDevicePoints(
        deviceMarker.deviceID, 1, 0, 0, 0, 1)
        .then(
        res => {
          if (res.success.length > 0) {
            deviceMarker.lastPosition = res.success[0];
            const geometry = new IGeometry();
            // console.log(res);
            if (devices[index].deviceshow === 1) {
              geometry.coordinates = [deviceMarker.lastPosition.lng, deviceMarker.lastPosition.lat];
              deviceMarker.deviceIconMarker.setLngLat(geometry.coordinates);
              // if (devices[index].deviceshow === 1) {
              deviceMarker.deviceIconMarker.addTo(map);
            }
            devices[index].last_lat = deviceMarker.lastPosition.lat;
            devices[index].last_lng = deviceMarker.lastPosition.lng;
            if (devices[index].deviceshow) {
              ptr.createPulsingIcons(devices[index], map);
            }
          }
        }
      ).catch (e => {
        console.log(e);
      });
      deviceMarker.layers = layers;
      deviceMarker.layersIDs = layersIDs;
      deviceMarker.modelNumber = devices[index].model_nr;
      deviceMarker.geofences = [];
      deviceMarker.markers = [];
      deviceMarker.optimizeCoordinates = [];
      deviceMarker.requestCount = 0;
      deviceMarker.responseCount = 0;
      // indexC = indexC + 1;
    });

    
  }

  getBatteryPercentage(battery, deviceID) {
    if (this.model100.includes(this.devices[deviceID].properties.model_nr)) {
        return battery + '%';
    } else {
        switch (battery) {
            case 6:
                return '100%';
            case 5:
                return '80-100%';
            case 4:
                return '60-80%';
            case 3:
                return '40-60%';
            case 2:
                return '20-40%';
            case 1:
                return '0-20%';
            case 0:
                return '0%';
            default:
                return '0%';
        }
    }
}

  getBatteryIcon(battery, deviceID) {
    if (this.model100.includes(this.devices[deviceID].properties.model_nr)) {
        switch (true) {
            case battery > 80:
                return 'fas fa-battery-full';
            case battery > 60:
                return 'fas fa-battery-three-quarters';
            case battery > 40:
                return 'fas fa-battery-half';
            case battery > 20:
                return 'fas fa-battery-quarter';
            default:
                return 'fas fa-battery-empty';
        }
    } else {
        switch (battery) {
            case 6:
                return 'fas fa-battery-full';
            case 5:
                return 'fas fa-battery-three-quarters';
            case 4:
                return 'fas fa-battery-half';
            case 3:
                return 'fas fa-battery-quarter';
            case 2:
                return 'fas fa-battery-quarter';
            case 1:
                return 'fas fa-battery-empty';
            case 0:
                return 'fas fa-battery-empty';
            default:
                return 'fas fa-battery-full';
        }
    }
}

  convertDateUnixtoTime(dateunix) {
    const allMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const minutes =  '0' + dateunix.getMinutes();
    const convdataTime = dateunix.getDate() + ' ' + allMonths[dateunix.getMonth()] + ' ' + dateunix.getFullYear() + ', ' +
                                dateunix.getHours() + ':' + minutes.substr(-2);
    return convdataTime;
  }

  getPopupContent(device, pointData, deviceIcon) {
    if (deviceIcon) {
      pointData = {
        id: device.id,
        battery: device.last_battery,
        dateunix: device.last_dateunix,
        lat: device.last_lat,
        lng: device.last_lng,
        speed: device.last_speed
      };
    }
    let popup = '';
    popup += '<div>';
    // if(portal_map == "mapbox")
    popup += '<i class="fas fa-hashtag" style="padding-right:5px;"></i>' + pointData.id + '<br />';
    // if(portal_map == "mapbox")
    popup += '<i class="fas fa-list-ol" style="padding-right:5px;"></i>' + device.imei + ' / ' + device.id + '<br />';
    popup += '<i class="fas fa-tag" style="padding-right:5px;"></i> ' + device.name + '<br />';
    if (device.show_batteryinfo) {
      popup += '<i class="' + this.getBatteryIcon(pointData.battery, device.id) +
      '" style="padding-right:5px;"></i> ' + this.getBatteryPercentage(pointData.battery, device.id) + '<br />';
    }
    popup += '<i class="fas fa-clock" style="padding-right:5px;"></i> ' +
            this.convertDateUnixtoTime(new Date((pointData.dateunix) * 1000)) + '<br />';
    popup += '<i class="fas fa-route" style="padding-right:5px;"></i> ' +
            '<a href="https://www.google.de/maps/dir/?api=1&destination=' + pointData.lat + ',' + pointData.lng +
            '&external=true" target="_blank">' + 'Google Maps Route' + '</a><br />';
    popup += '<i class="fas fa-tachometer-alt" style="padding-right:5px;"></i> ';
    popup += (Math.round(pointData.speed) + ' Km/h') + '<br />';
    popup += '</div>';
    return popup;
  }

  createPulsingIcons(device, map) {
    const size = 200;

    // implementation of CustomLayerInterface to draw a pulsing dot icon on the map
    // see https://docs.mapbox.com/mapbox-gl-js/api/#customlayerinterface for more info
    console.log(device.spurfarbe);
    const pulsingDot = {
      width: size,
      height: size,
      data: new Uint8Array(size * size * 4),

      // get rendering context for the map canvas when layer is added to the map
      onAdd() {
        const canvas = document.createElement('canvas');
        canvas.width = this.width;
        canvas.height = this.height;
        this.context = canvas.getContext('2d');
      },

      // called once before every frame where the icon will be used
      render() {
        const duration = 1000;
        const t = (performance.now() % duration) / duration;

        const radius = (size / 2) * 0.3;
        const outerRadius = (size / 2) * 0.7 * t + radius;
        const context = this.context;

        // draw outer circle
        context.clearRect(0, 0, this.width, this.height);
        context.beginPath();
        context.arc(
        this.width / 2,
        this.height / 2,
        outerRadius,
        0,
        Math.PI * 2
        );
        context.fillStyle = device.spurfarbe;
        context.globalAlpha = 0.5;
        context.fill();

        // draw inner circle
        context.beginPath();
        context.arc(
        this.width / 2,
        this.height / 2,
        radius,
        0,
        Math.PI * 2
        );
        context.fillStyle = device.spurfarbe;
        context.strokeStyle = 'white';
        context.lineWidth = 2 + 4 * (1 - t);
        context.fill();
        context.stroke();

        // update this image's data with data from the canvas
        this.data = context.getImageData(

        0,
        0,
        this.width,
        this.height
        ).data;

        // continuously repaint the map, resulting in the smooth animation of the dot
        map.triggerRepaint();

        // return `true` to let the map know that the image was updated
        return true;
      }
    };

    // map.on('load', function() {
    map.addImage('pulsing-dot' + device.id.toString(), pulsingDot, { pixelRatio: 2 });

    map.addSource(device.id.toString() + 'pulsePointSource', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [device.last_lng, device.last_lat]
              }
          }
        ]
      }
    });
    map.addLayer({
      id: device.id.toString() + 'pulsePointLayer',
      type: 'symbol',
      source: device.id.toString() + 'pulsePointSource',
      layout: {
        'icon-image': 'pulsing-dot' + device.id.toString()
      }
      });
    // });
  }

  async getDevices() {
    await this.authService.getDevices().then(
      res => {
        if (res) {
          if (res.success.length > 0) {
            this.devices = res.success;
          }
        }
      }
    ).catch (e => {
      console.log(e);
    });
    const authService = this.authService;
    // this.devices.forEach(deivce => {

    // });
    console.log(this.devices);
  }

  async onToggleChecked($event) {
    console.log($event);
    // console.log(this.deviceIconMarks);
    // console.log(this.deviceMarkers);
    let id = 0;
    let checked = null;
    let geojson = null;
    const numberID = + $event.id;
    this.devices.forEach(element => {
      if (element.id === numberID) {
          // console.log('True');
          id = numberID;
          checked = $event.checked;
          geojson = {
            type: 'Device Point',
            features: {
              type: 'Device',
              geometry: {
                type: 'Point',
                coordinates: [element.last_lng, element.last_lat]
              },
              properties: {
                title: element.id,
                description: this.getPopupContent(element, '', 1)
              }
            }
          };
      }
    });
    const index = this.devices.findIndex(obj =>
      obj.id === numberID
      );
    const markerIndex = this.deviceIconMarks.findIndex(obj =>
      obj.id === numberID
      );
    // console.log(markerIndex);
    const map = this.map;
    let deviceIcon = 'paj_iconset_auto2.png';
    if (checked) {
      if (this.devices[index].iconusecustom) {
        if (this.devices[index].iconcustomimage) {
          deviceIcon = this.devices[index].iconcustomimage;
        }
      } else {
        if (this.devices[index].iconname) {
          deviceIcon = this.devices[index].iconname + '.png';
        }
      }
      this.devices[index].deviceshow = 1;
      console.log('Adding');
      const el = document.createElement('div');
      el.className = 'marker';
      el.style.backgroundImage = 'url(../../../assets/icons/map/devices/device_markers/' + deviceIcon;
      el.style.backgroundSize = 'cover';
      el.style.width = '48px';
      el.style.height = '48px';
      el.style.borderRadius = '50%';
      el.style.zIndex = '9';

      // add marker to map
      const marker = new mapboxgl.Marker(el)
      .setLngLat(geojson.features.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      // .setHTML('<h3>' + geojson.features.properties.title + '</h3><p>' + geojson.features.properties.description + '</p>'))
      .setHTML(geojson.features.properties.description))
      .addTo(map);
      this.deviceIconMarks[markerIndex].marker = marker;
      this.deviceIconMarks[markerIndex].iconName = this.devices[index].iconcustomimage;
      const zoom = map.getZoom();
      const clustorSourceID = this.clusterSourceID;
      const clusterLayerID = this.clusterLayerID;
      this.deviceMarkers[markerIndex].clusterSourceID = clustorSourceID;
      this.deviceMarkers[markerIndex].clusterLayerID = clusterLayerID;

      this.removeAllMarkers(this.deviceMarkers, this.markers, this.cMarkers, this.markersOnScreen, this.unclusterMarkers);
      this.cMarkers = [];
      this.markersOnScreen = [];
      this.unclusterMarkers = [];
      const mapLayer = this.map.getLayer(clusterLayerID);
      if (typeof mapLayer !== 'undefined') {
          console.log('removing cluster');
          this.map.removeLayer(clusterLayerID);
          this.map.removeSource(clustorSourceID);
      }

      const allGeoPoints = this.mergeAllGeoPoints(this.deviceMarkers, this.devices);
      this.createSingleCluster(allGeoPoints, map);

      let lineColor = '#F7455D';
      if (this.devices[index].spurfarbe) {
        lineColor = this.devices[index].spurfarbe;
      }
      this.deviceMarkers[markerIndex].layersIDs.forEach(layerID => {
        // map.removeLayer(layerID).removeSource(layerID);
        map.setLayoutProperty(layerID, 'visibility', 'visible');
      });

      this.authService.updateDeviceShow(numberID, 1);
      this.createPulsingIcons(this.devices[index], map);
    } else {
        console.log('Deleting');
        this.devices[index].deviceshow = 0;
        this.deviceIconMarks[markerIndex].marker.remove();

        const zoom = this.map.getZoom();
        const pulseMarkerLayer = this.map.getLayer(this.devices[index].id.toString() + 'pulsePointLayer');
        if (typeof pulseMarkerLayer !== 'undefined') {
          this.map.removeImage('pulsing-dot' + this.devices[index].id.toString());
          this.map.removeLayer(this.devices[index].id.toString() + 'pulsePointLayer');
          this.map.removeSource(this.devices[index].id.toString() + 'pulsePointSource');
        }
        this.removeSingleDeviceMarkers(this.deviceMarkers[markerIndex], this.markers, this.cMarkers, this.markersOnScreen, this.unclusterMarkers);
        this.removeAllMarkers(this.deviceMarkers, this.markers, this.cMarkers, this.markersOnScreen, this.unclusterMarkers);
        this.cMarkers = [];
        this.markersOnScreen = [];
        this.unclusterMarkers = [];
        const mapLayer = this.map.getLayer(this.clusterLayerID);
        if (typeof mapLayer !== 'undefined') {
            console.log('removing cluster');
            this.map.removeLayer(this.clusterLayerID);
            this.map.removeSource(this.clusterSourceID);
        }

        const allGeoPoints = this.mergeAllGeoPoints(this.deviceMarkers, this.devices);
        this.createSingleCluster(allGeoPoints, map);
        this.deviceMarkers[markerIndex].layersIDs.forEach(layerID => {
          map.setLayoutProperty(layerID, 'visibility', 'none');
        });
        this.authService.updateDeviceShow(numberID, 0);

    }
    this.map = map;
  }

  async removeNearestPoints(dataPoints) {
    let udpate = false;
    let updatedDataPoints = [];
    let lastUpdatedDataPoints = dataPoints;
    // console.log(lastUpdatedDataPoints);
    for ( let k = 0; k < dataPoints.length; k++) {
      udpate = false;
      for (let i = 0; i < lastUpdatedDataPoints.length - 1; i = i + 2) {
        // console.log(lastUpdatedDataPoints[i].lat);
        // console.log(lastUpdatedDataPoints[i].lng);
        // console.log(lastUpdatedDataPoints[i + 1].lat);
        // console.log(lastUpdatedDataPoints[i + 1].lng);
        const distanceBtwnCoordinates = this.distanceBetweenEarthCoordinates(
                                        lastUpdatedDataPoints[i].lat,
                                        lastUpdatedDataPoints[i].lng,
                                        lastUpdatedDataPoints[i + 1].lat,
                                        lastUpdatedDataPoints[i + 1].lng);
        if (distanceBtwnCoordinates < 5) {    // if distance between 2 coordinates is less than 5 meters
            updatedDataPoints.push(lastUpdatedDataPoints[i]);
            udpate = true;
        } else {
          updatedDataPoints.push(lastUpdatedDataPoints[i]);
          updatedDataPoints.push(lastUpdatedDataPoints[i + 1]);
        }
      }
      lastUpdatedDataPoints = updatedDataPoints;
      if (!udpate) {
        // console.log('here');
        // console.log(lastUpdatedDataPoints);
        return lastUpdatedDataPoints;
      } else {
        updatedDataPoints = [];
      }
    }
    return lastUpdatedDataPoints;
  }

  async createGeoJsonTemplate(dataPoints, device) {
    const geoPoints = new GeoJsonTemplate();
    geoPoints.type = 'Data Points';
    const allFeatures: IGeoJson[] = [];
    this.allCoordinates = [];

    const inc = 0;
    let newDataPoints;
    dataPoints = await this.removeNearestPoints(dataPoints);
    // console.log(dataPoints);
    dataPoints.forEach(element => {
      const features = new IGeoJson();
      const geometry = new IGeometry();
      // const polylinePoint = new PolylinePoints();
      // polylinePoint.id = element.id;
      // polylinePoint.lat = element.lat;
      // polylinePoint.lon = element.lng;
      // polylinePoint.time = element.dateunix;
      // polylinePoint.heading = element.direction;
      // polylinePoint.type = 'via';
      // polylinePoint.prevType = 'break';
      // if (element.speed < 2) {
      //   polylinePoint.type = 'break';
      // } else {
      //   polylinePoint.type = 'via';
      // }
      geometry.type = 'Point';
      geometry.coordinates = [element.lng, element.lat];
      this.allCoordinates.push(geometry.coordinates);
      features.type = 'Feature';
      features.geometry = geometry;
      const geoProperty = new GeoProperties();
      geoProperty.title = 'Data Point';
      geoProperty.speed = element.speed;
      geoProperty.direction = element.direction;
      geoProperty.id = element.id.toString();
      geoProperty.color = device.spurfarbe;
      geoProperty.deviceID = device.id;

      const dateunix = element.dateunix;
      const date = new Date(dateunix);
      // geoProperty.description = '<p>' + element.id + '<br>' + device.name + '<br>' + date + '<br>' + 'Speed: ' + element.speed;
      geoProperty.description = this.getPopupContent(device, element, 0);
      features.properties = geoProperty;
      allFeatures.push(features);
      // if (element.speed >= 1) {
      //   // if (polylinePoint.prevType === 'via') {
      //   this.polylinePoints.push(polylinePoint);
      //   // }
      //   polylinePoint.prevType = polylinePoint.type;
      // }
    });
    const index = this.deviceMarkers.findIndex(obj =>
      obj.deviceID === + device.id
      );
    this.deviceMarkers[index].allCoordinates = this.allCoordinates;
    geoPoints.features = allFeatures;
    // console.log(this.polylinePoints);
    return geoPoints;
  }

  drawCircle() {
    // Provide the default radius as an option to CircleMode
    this.draw.changeMode('draw_circle', { initialRadiusInKm: 0.5 });
  }

  handleTouch($event) {
    console.log($event);
  }

  async createMarkers(geoPoints, deviceID, map, device) {
    // const map = this.map;
    console.log(geoPoints.features);
    const index = this.deviceMarkers.findIndex(obj =>
      obj.deviceID === + deviceID
      );
    // console.log(this.deviceMarkers);
    if (this.deviceMarkers[index].markers) {
      this.deviceMarkers[index].markers.forEach(marker => {
          marker.remove();
        });
    }
    this.deviceMarkers[index].markers = [];
    const mapboxMarkers: any[] = [];
    let i = 0;
    let imgUrl = null;
    await this.storage.get(Constants.ROUTE_ICON).then(res => {
      this.routeIcon = res;
    });
    let rotate = false;
    // console.log(this.deviceMarkers);
    geoPoints.features.forEach( marker => {
      // create a DOM element for the marker
    if (marker.properties.speed < 1) {
      if (this.routeIcon == 'arrow') {
        imgUrl = '../../../assets/icons/map/tracking_new/track-none.png';
        rotate = false;
      } else {
        // tslint:disable-next-line: max-line-length
        const svgStop = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">'
        + '<g id="Ebene_1"></g>'
        + '<g id="Ebene_2">'
        + '<circle fill="' + device.spurfarbe + '" stroke="#ffffff" stroke-width="1" stroke-mjlimit="10" cx="25" cy="25" r="12"/>'
        + '</g></svg>';
        imgUrl = 'data:image/svg+xml;base64,' + btoa(svgStop);
        rotate = false;
        }
      } else {
        if (this.routeIcon == 'arrow') {
          imgUrl = '../../../assets/icons/map/tracking_new/track-0.png';
          rotate = true;
        } else {
          // tslint:disable-next-line: max-line-length
          const svgRoute = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">'
          + '<g id="Ebene_1"></g>'
          + '<g id="Ebene_2">'
          + '<circle fill="' + device.spurfarbe + '" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" cx="25" cy="25" r="12"/>'
          // tslint:disable-next-line: max-line-length
          // + '<polygon fill="' + device.spurfarbe + '" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" transform = "rotate(' + data.direction + ' 25 25)" points="16.32,8.29 25.00,0.83 33.67,8.29"/></g></svg>';
          // tslint:disable-next-line: max-line-length
          + '<polygon fill="' + device.spurfarbe + '" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" transform = "rotate(' + marker.properties.direction + ' 25 25)" points="16.32,8.29 25.00,0.83 33.67,8.29"/></g></svg>';
          imgUrl = 'data:image/svg+xml;base64,' + btoa(svgRoute);
          rotate = false;
        }
        // console.log('direction set');
      }
      // console.log(imgUrl);

    const el = document.createElement('img');
    const pEl = document.createElement('div');
    pEl.className = 'marker';
    el.setAttribute('src', imgUrl);
    el.style.width = '25px';
    el.style.height = '25px';
    pEl.appendChild(el);
      // add marker to map
    const pointsMarker = new mapboxgl.Marker(pEl)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      // .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
      .setHTML(marker.properties.description));
    if (rotate) {
        const rotateString = 'rotate(' + marker.properties.direction + 'deg)';
        el.style.transform = rotateString;
        // console.log(el.style.transform);
      }

    if (device.deviceshow === 1) {
        pointsMarker.addTo(map);
      }
    this.deviceMarkers[index].markers.push(pointsMarker);

    i = i + 1;
    // console.log(mapboxMarkers);
    });
    // this.deviceMarkers[index].markers = []
    // this.deviceMarkers[index].markers = mapboxMarkers;
    this.deviceMarkers[index].allCoordinates = this.allCoordinates;
    this.copyDeviceMarkers = this.deviceMarkers;

  }

  createLayer(layerID, device, map, allCoordinates, deviceMarkers) {

    const index = deviceMarkers.findIndex(obj =>
      obj.deviceID === + device.id
      );
    deviceMarkers[index].layersIDs.push(layerID.toString());
    // deviceMarkers[index].optimizeCoordinates = deviceMarkers[index].optimizeCoordinates.concat(allCoordinates);
    // const map = this.map;
    let lineColor = '#F7455D';
    if (device.spurfarbe) {
      lineColor = device.spurfarbe;
    }
    // console.log(map);
    map.addLayer({
      id: layerID.toString(),
      type: 'line',
      source: {
        type: 'geojson',
        data: {
        type: 'Feature',
        properties: {},
        geometry: {
        type: 'LineString',
        coordinates: allCoordinates
        }
        }
        },
      layout: {
      'line-join': 'round',
      'line-cap': 'round'
      },
      paint: {
      'line-color': lineColor,
      'line-width': 2
      }
    });
    if (device.deviceshow === 0) {
      map.setLayoutProperty(layerID, 'visibility', 'none');
    }
    const singleLayer = map.getLayer(layerID);
    // if (typeof allCoordinates !== 'undefined' && allCoordinates.length > 0) {
    //   // the array is defined and has at least one element
    //   map.flyTo({
    //     center: [
    //   allCoordinates[0][0], allCoordinates[0][1]],
    //   zoom: 10,
    //     });
    // }
    const layerInfo = new LayerInfo();
    layerInfo.Coordinates = allCoordinates;
    layerInfo.layer = singleLayer;
    deviceMarkers[index].layers.push(layerInfo);
    deviceMarkers[index].allCoordinates = allCoordinates;
    // deviceMarkers[index].dataPoints = dataPoints;
    return deviceMarkers;
  }

  getRenderedPoints(str, precision) {
    let index = 0,
          lat = 0,
          lng = 0,
          coordinates = [],
          shift = 0,
          result = 0,
          byte = null,
          latitudeChange,
          longitudeChange;
    const factor = Math.pow(10, precision || 6);
    const allCoordinates: number [][] = [];
      // Coordinates have variable length when encoded, so just keep
      // track of whether we've hit the end of the string. In each
      // loop iteration, a single coordinate is decoded.
    while (index < str.length) {

      // Reset shift, result, and byte
      byte = null;
      shift = 0;
      result = 0;

      do {
          byte = str.charCodeAt(index++) - 63;
          // tslint:disable-next-line: no-bitwise
          result |= (byte & 0x1f) << shift;
          shift += 5;
      } while (byte >= 0x20);

      // tslint:disable-next-line: no-bitwise
      latitudeChange = ((result & 1) ? ~(result >> 1) : (result >> 1));

      shift = result = 0;

      do {
          byte = str.charCodeAt(index++) - 63;
          // tslint:disable-next-line: no-bitwise
          result |= (byte & 0x1f) << shift;
          shift += 5;
      } while (byte >= 0x20);

      // tslint:disable-next-line: no-bitwise
      longitudeChange = ((result & 1) ? ~(result >> 1) : (result >> 1));

      lat += latitudeChange;
      lng += longitudeChange;
      coordinates = [lng / factor, lat / factor];
      // console.log(coordinates);
      // coordinates.push([lat / factor, lng / factor]);
      allCoordinates.push(coordinates);
      }

    return allCoordinates;
  }

  createSingleMarker(featureProps, routeIcon, markers, keepMarkers, featureID, clusterID, uncluster) {
    let imgUrl = '';
    let rotate = false;
    // console.log(routeIcon);
    // console.log(markers);
    // console.log(featureProps);
    if (featureProps.properties.speed < 1) {
      if (routeIcon === 'arrow') {
        imgUrl = '../../../assets/icons/map/tracking_new/track-none.png';
        rotate = false;
      } else {
        // tslint:disable-next-line: max-line-length
        const svgStop = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">'
        + '<g id="Ebene_1"></g>'
        + '<g id="Ebene_2">'
        + '<circle fill="' + featureProps.properties.color + '" stroke="#ffffff" stroke-width="1" stroke-mjlimit="10" cx="25" cy="25" r="12"/>'
        + '</g></svg>';
        imgUrl = 'data:image/svg+xml;base64,' + btoa(svgStop);
        rotate = false;
        }
      } else {
        if (routeIcon === 'arrow') {
          imgUrl = '../../../assets/icons/map/tracking_new/track-0.png';
          rotate = true;
        } else {
          // console.log('svg called');
          // console.log(featureProps);
          // tslint:disable-next-line: max-line-length
          const svgRoute = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="50px" height="50px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">'
          + '<g id="Ebene_1"></g>'
          + '<g id="Ebene_2">'
          + '<circle fill="' + featureProps.properties.color + '" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" cx="25" cy="25" r="12"/>'
          // tslint:disable-next-line: max-line-length
          // + '<polygon fill="' + device.spurfarbe + '" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" transform = "rotate(' + data.direction + ' 25 25)" points="16.32,8.29 25.00,0.83 33.67,8.29"/></g></svg>';
          // tslint:disable-next-line: max-line-length
          + '<polygon fill="' + featureProps.properties.color + '" stroke="#ffffff" stroke-width="1" stroke-miterlimit="10" transform = "rotate(' + featureProps.properties.direction + ' 25 25)" points="16.32,8.29 25.00,0.83 33.67,8.29"/></g></svg>';
          imgUrl = 'data:image/svg+xml;base64,' + btoa(svgRoute);
          rotate = false;
        }
        // console.log('direction set');
      }
      // console.log(imgUrl);

    const el = document.createElement('img');
    const pEl = document.createElement('div');
    pEl.className = 'marker';
    el.setAttribute('src', imgUrl);
    el.style.width = '25px';
    el.style.height = '25px';
    pEl.appendChild(el);
    // el.innerText = props.point_count;
    const marker = new mapboxgl.Marker(pEl)
    .setLngLat(featureProps.geometry.coordinates);
    // .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    // // .setHTML('<h3>' + marker.properties.title + '</h3><p>' + marker.properties.description + '</p>'));
    // .setHTML(featureProps.properties.description));
    if (rotate) {
      const rotateString = 'rotate(' + featureProps.properties.direction + 'deg)';
      el.style.transform = rotateString;
      // console.log(el.style.transform);
    }
    if (uncluster) {
      // keepMarkers.push(featureID);
      // markers.set(featureID,el);
      marker.setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
      .setHTML(featureProps.properties.description));
      keepMarkers.push(featureID);
      markers.set(featureID, pEl);
    } else {
      keepMarkers.push('cluster_' + featureID);
      markers.set('cluster_' + clusterID, pEl);
    }
    return marker;
  }


  getFeatureWithProps(features) {
    let feature = features[0];
    for (let i = 0; i < features.length; i++) {
      if (features[i].properties.speed > 1) {
        // console.log(features[i]);
        feature = features[i];
        break;
      }
    }
    return feature;
  }

  async getFeatureForDirection(allFeatures, feature) {
    let fLng = feature._geometry.coordinates[0];
    let fLat = feature._geometry.coordinates[1];

    fLat = Math.floor(fLat * 100) / 100;
    fLat = fLat.toFixed(3);

    // console.log(allFeatures);
    fLng = Math.floor(fLng * 100) / 100;
    fLng = fLng.toFixed(3);
    // console.log('called');
    let dataPointFound = false;
    let newDP = await this.getFeatureWithProps(allFeatures._data.features);
    for (let i = 0; i < allFeatures._data.features.length; i++) {
      let dLng = allFeatures._data.features[i].geometry.coordinates[0];
      let dLat = allFeatures._data.features[i].geometry.coordinates[1];
      dLat = Math.floor(dLat * 100) / 100;
      dLat = dLat.toFixed(3);

      dLng = Math.floor(dLng * 100) / 100;
      dLng = dLng.toFixed(3);

      if (Math.abs(dLng - fLng) <= 0.008 && Math.abs(dLat - fLat) <= 0.004) {
        dataPointFound = true;
        newDP = allFeatures._data.features[i];
        break;
      }
    }
    // console.log(newDP);
    return newDP;
  }

  removeSingleDeviceMarkers(deviceMarker, markers, cMarkers, markersOnScreen, unclusterMarkers) {
    // console.log('remove markers for single device called');
    // console.log(deviceMarker.deviceID);
    // console.log(deviceMarker.markers);
    // console.log(markers);
    // console.log(cMarkers);
    // console.log(markersOnScreen);
    // console.log(unclusterMarkers);

    if (deviceMarker.markers) {
      for (const id in deviceMarker.markers) {
        if (id) {
          if (cMarkers[id]) {
            // console.log('removing cMarkers');
            cMarkers[id].remove();
            // console.log(id);
            // console.log(cMarkers[id]);
            const removed = cMarkers.splice(id, 1);
            // console.log(removed);
          }
          if (markersOnScreen[id]) {
            markersOnScreen[id].remove();
            markersOnScreen.splice(id, 1);
          }
          if (unclusterMarkers[id]) {
            unclusterMarkers[id].remove();
            unclusterMarkers.splice(id, 1);
          }
          if (markers) {
            markers.forEach((value, key, map) => {
              // console.log('removing markers')
              if (!key.includes('_')) {
                value.remove();
                map.delete(key);
              } else {
                const featureID = key.split('_');
                // console.log(featureID);
                if (featureID[1] === id || featureID[1] === 'null') {
                  value.remove();
                  map.delete(key);
                }
              }
            });
          }
        }
        // deviceMarker.marker[id].remove();
      }
      // cMarkers = [];
    }
    deviceMarker.markers = [];
    // markersOnScreen = [];
    // unclusterMarkers = [];
    // markers = [];
    // console.log(deviceMarker.deviceID);
    // console.log(deviceMarker.markers);
    // console.log(markers);
    // console.log(cMarkers);
    // console.log(markersOnScreen);
    // console.log(unclusterMarkers);

    // const clusterLayerID = deviceMarker.clusterLayerID;
    // const clusterSourceID = deviceMarker.clusterSourceID;

    // const mapLayer = this.map.getLayer(clusterLayerID);
    // if (typeof mapLayer !== 'undefined') {
    //     // Remove map layer & source.
    //     // this.map.removeLayer(unclusteredPointID);
    //     // this.map.removeLayer(clusterCountID);
    //     console.log('removing cluster');
    //     this.map.removeLayer(clusterLayerID);
    //     this.map.removeSource(clusterSourceID);
    //     // markers.forEach(element => {
    //     //   element.remove();
    //     // });
    // }
    // deviceMarker.marker = [];
  }

  removeAllMarkers(deviceMarkers, markers, cMarkers, markersOnScreen, unclusterMarkers) {
    console.log('removing all markers');
    if (unclusterMarkers) {
      for (const id in unclusterMarkers) {
        unclusterMarkers[id].remove();
        unclusterMarkers.splice(id, 1);
      }
      // unclusterMarkers.forEach(marker => {
      //   // console.log('removing uncluster markers');
      //   marker.remove();
      // })
      unclusterMarkers = [];
    }
    if (markers) {
      markers.forEach((value, key, map) => {
        // console.log('removing markers')
        value.remove();
        map.delete(key);
      });
      markers = [];
    }
    console.log(cMarkers);
    if (cMarkers) {
      // console.log('here');
      for (const id in cMarkers) {
        // console.log(i); // "4", "5", "6"
        // console.log('removing cMarkers markers');
        cMarkers[id].remove();
        cMarkers.splice(id, 1);
      }
      cMarkers = [];
    }
    console.log(cMarkers);
    // console.log(markersOnScreen);
    if (markersOnScreen) {
      for (const id in markersOnScreen) {
        // console.log('removing markersOnScreen markers');
        markersOnScreen[id].remove();
        markersOnScreen.splice(id, 1);
      }
      markersOnScreen = [];
    }
    deviceMarkers.forEach(deviceMarker => {
      if (deviceMarker.markers) {
        deviceMarker.markers.forEach(marker => {
          // console.log('removing all markersssss');
          marker.remove();
        });
        deviceMarker.markers = [];
      }
    });
    const clusterLayerID = this.clusterLayerID;
    const clusterSourceID = this.clusterSourceID;

    const mapLayer = this.map.getLayer(clusterLayerID);
    if (typeof mapLayer !== 'undefined') {
        // Remove map layer & source.
        // this.map.removeLayer(unclusteredPointID);
        // this.map.removeLayer(clusterCountID);
        console.log('removing cluster');
        this.map.removeLayer(clusterLayerID);
        this.map.removeSource(clusterSourceID);
        // markers.forEach(element => {
        //   element.remove();
        // });
    }

    if (this.devices.length > 0) {
      this.devices.forEach(device => {
        const pulseMarkerLayer = this.map.getLayer(device.id.toString() + 'pulsePointLayer');
        if (typeof pulseMarkerLayer !== 'undefined') {
          this.map.removeImage('pulsing-dot' + device.id.toString());
          this.map.removeLayer(device.id.toString() + 'pulsePointLayer');
          this.map.removeSource(device.id.toString() + 'pulsePointSource');
        }
      });
    }
  }

  async updateMarkers(ptr) {
    // console.log(ptr);
    const zoom = ptr.map.getZoom();
    let routeIcon = '';
    await ptr.storage.get(Constants.ROUTE_ICON).then(res => {
      routeIcon = res;
    });
    const newMarkers = [];
    const features = ptr.map.querySourceFeatures(ptr.clusterSourceID);
    // console.log(features);
    const keepMarkers = [];
    let markerAdded = false;
    const imgUrl = null;

    const rotate = false;
    for (let i = 0; i < features.length; i++) {
      const coords = features[ i ].geometry.coordinates;
      const props = features[ i ].properties;
      let featureID = features[ i ].id || features[i].properties.id;
      // console.log(features[ i ]);
      // console.log(markers);
      let clusterCheck = false;
      const clusterID = props.cluster_id || null;
      let marker = ptr.cMarkers[clusterID];
      // console.log(index);
      if (props.cluster && ptr.markers.has('cluster_' + clusterID)) {

          // Cluster marker is already on screen
          keepMarkers.push('cluster_' + clusterID);
          // featureID = features[i].id;
          // console.log('cluster already created');
          markerAdded = false;

      } else if (!marker) {
        featureID = features[i].id;
        const feature = features[i];
        const clusterId = features[i].properties.cluster_id;
        const point_count = features[i].properties.point_count;
        const clusterSource = ptr.map.getSource(ptr.clusterSourceID);
        clusterCheck = true;
        let allFeatures;
        allFeatures = clusterSource.getClusterLeaves(clusterId, point_count, 0, function(err, aFeatures) {
          // This feature is clustered, create an icon for it and use props.point_count for its count
        });
        const newFeature = await ptr.getFeatureForDirection(allFeatures, feature);
        const index = ptr.deviceMarkers.findIndex(obj =>
          obj.deviceID === + newFeature.properties.deviceID
          );

        // console.log(index);
        // console.log(newFeature);
        // This feature is clustered, create an icon for it and use props.point_count for its count
        marker = ptr.cMarkers[clusterID] = ptr.createSingleMarker(newFeature, routeIcon, ptr.markers, keepMarkers, featureID, clusterID, 0);
        // marker.addTo(map);
        if (clusterId) {
          ptr.deviceMarkers[index].markers[clusterId] = marker;
        }
        markerAdded = false;
        // console.log('cluster created');

      } else if (ptr.markers.has(featureID)) {
        // Feature marker is already on screen
        clusterCheck = false;
        if (features[i].id) {
          featureID = features[i].id.toString();
        } else {
          featureID = features[i].properties.id.toString();
        }
        keepMarkers.push(featureID);
        markerAdded = false;
        // console.log('feature already created');
      } else {
        // console.log(markers.has(featureID));
        clusterCheck = false;
        if (features[i].id) {
          featureID = features[i].id.toString();
        } else {
          featureID = features[i].properties.id.toString();
        }
        const index = ptr.deviceMarkers.findIndex(obj =>
          obj.deviceID === + features[i].properties.deviceID
          );
        // Feature is not clustered and has not been created, create an icon for it
        marker = ptr.createSingleMarker(features[i], routeIcon, ptr.markers, keepMarkers, featureID, clusterID, 1);
        if (featureID) {
          ptr.deviceMarkers[index].markers[featureID] = marker;
        }
        marker.addTo(ptr.map);
        markerAdded = true;
        // unclusterMarkers.push(marker);
        ptr.unclusterMarkers[featureID] = marker;
        // console.log(unclusterMarkers);
        // console.log('uncluster marker created');
      }
      // if(!clusterCheck) {
      newMarkers[clusterID] = marker;
      if (!ptr.markersOnScreen[clusterID]) {

          // if(!markerAdded){
            marker.addTo(ptr.map);
            markerAdded = false;
          // }

        // console.log('create new cluster');
            ptr.unclusterMarkers.forEach(unclusterMarker => {
          unclusterMarker.remove();
          // console.log('removing');
        });
            ptr.unclusterMarkers = [];
            ptr.markers.forEach((value, key, map) => {
          if (!key.includes('_')) {
            value.remove();
            map.delete(key);
          }
        });
      }
    }
    for (const id in ptr.markersOnScreen) {
    if (!newMarkers[id]) { ptr.markersOnScreen[id].remove(); }
    }
    ptr.markersOnScreen = newMarkers;
    // console.log(ptr.markersOnScreen);
    // console.log(ptr.markers);
    // console.log(ptr.cMarkers);
  }

  async createSingleCluster(geopoints, map) {
    console.log('creating cluster');
    const mapLayer = this.map.getLayer(this.clusterLayerID);
    if (typeof mapLayer !== 'undefined') {
        // Remove map layer & source.
        // this.map.removeLayer(unclusteredPointID);
        // this.map.removeLayer(clusterCountID);
        console.log('removing cluster');
        this.map.removeLayer(this.clusterLayerID);
        this.map.removeSource(this.clusterSourceID);
        // markers.forEach(element => {
        //   element.remove();
        // });
    }
    map.addSource(this.clusterSourceID, {
      type: 'geojson',
      data: geopoints,
      cluster: true,
      clusterMaxZoom: 14, // Max zoom to cluster points on
      clusterRadius: 16 // Radius of each cluster when clustering points (defaults to 50)
      });
    map.addLayer({
      id: this.clusterLayerID,
      type: 'circle',
      source: this.clusterSourceID,
      filter: ['has', 'point_count'],
      paint: {
      // // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
      // // with three steps to implement three types of circles:
      // //   * Blue, 12px circles when point count is less than 25
      // //   * Yellow, 12px circles when point count is between 25 and 50
      // //   * Pink, 12px circles when point count is greater than or equal to 50
      'circle-radius': [
        'step',
        ['get', 'point_count'],
        12,
        25,
        12,
        50,
        12,
        ],
        'circle-opacity': 0
      }
      });
  }

  async createNewClustorPoints(geopoints, deviceID, map, device, deviceMarker) {
    // const clustorSourceID = 'source' + deviceID;
    // const clusterLayerID = 'cluster' + deviceID;
    // deviceMarker.clusterSourceID = clustorSourceID;
    // deviceMarker.clusterLayerID = clusterLayerID;
    // const clusterCountID = 'cluster-count' +  deviceID;
    // const unclusteredPointID = 'unclustered-point' + deviceID;
    // const storage = this.storage;
    // let routeIcon = '';
    // // this.removeAllMarkers(deviceMarker, this.markers, this.cMarkers, this.markersOnScreen, this.unclusterMarkers);
    // // console.log(this.cMarkers)
    // let markers = this.markers;
    // let cMarkers = this.cMarkers;
    // let markersOnScreen = this.markersOnScreen ;
    // let ptr = this;
    // let unclusterMarkers = this.unclusterMarkers;
    // let moveendCount = this.moveendCount;
    // let deviceMarkers = this.deviceMarkers;
    // // this.removeAllMarkers(deviceMarker, markers, cMarkers, markersOnScreen, unclusterMarkers);
    // // console.log(clustorSourceID);
    // // console.log(clusterLayerID);
    // // console.log(clusterCountID);
    // console.log(deviceMarkers);
  //   const mapLayer = this.map.getLayer(clusterLayerID);
  //   if (typeof mapLayer !== 'undefined') {
  //       // Remove map layer & source.
  //       // this.map.removeLayer(unclusteredPointID);
  //       // this.map.removeLayer(clusterCountID);
  //       console.log('removing cluster');
  //       this.map.removeLayer(clusterLayerID);
  //       this.map.removeSource(clustorSourceID);
  //       // markers.forEach(element => {
  //       //   element.remove();
  //       // });
  //   }
  //   map.addSource(clustorSourceID, {
  //     type: 'geojson',
  //     data: geopoints,
  //     cluster: true,
  //     clusterMaxZoom: 14, // Max zoom to cluster points on
  //     clusterRadius: 16 // Radius of each cluster when clustering points (defaults to 50)
  //     });
  //   map.addLayer({
  //     id: clusterLayerID,
  //     type: 'circle',
  //     source: clustorSourceID,
  //     filter: ['has', 'point_count'],
  //     paint: {
  //     // // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
  //     // // with three steps to implement three types of circles:
  //     // //   * Blue, 12px circles when point count is less than 25
  //     // //   * Yellow, 12px circles when point count is between 25 and 50
  //     // //   * Pink, 12px circles when point count is greater than or equal to 50
  //     'circle-radius': [
  //       'step',
  //       ['get', 'point_count'],
  //       12,
  //       25,
  //       12,
  //       50,
  //       12,
  //       ],
  //       'circle-opacity': 0
  //     }
  //     });
  //     await storage.get(Constants.ROUTE_ICON).then(res => {
  //       routeIcon = res;
  //     });

  //     // map.on('data', function (e) {
  //     //   if (e.sourceId !== clustorSourceID || !e.isSourceLoaded) return;
  //     map.on('zoomend', async function () {
  //       moveendCount = moveendCount + 1;
  //       const zoom = map.getZoom();
  //       // const indexC = deviceMarkers.findIndex(obj =>
  //       //   obj.deviceID === + device.id
  //       //   );
  //       // console.log(indexC);
  //       // ptr.removeSingeDeviceMarkers(deviceMarkers[indexC], markers, cMarkers, markersOnScreen, unclusterMarkers);
  //       let newMarkers = [];
  //       const features = map.querySourceFeatures(clustorSourceID);
  //       console.log(features);
  //       const keepMarkers = [];
  //       let markerAdded = false;
  //       let imgUrl = null;

  //       let rotate = false;
  //       for (let i = 0; i < features.length; i++) {
  //         const coords = features[ i ].geometry.coordinates;
  //         const props = features[ i ].properties;
  //         let featureID = features[ i ].id || features[i].properties.id;
  //         // console.log(features[ i ]);
  //         // console.log(markers);
  //         var clusterCheck = false;
  //         const clusterID = props.cluster_id || null;
  //         var marker = cMarkers[clusterID];
  //         const index = deviceMarkers.findIndex(obj =>
  //                   obj.deviceID === + device.id
  //                   );
  //         // console.log(index);
  //         if (props.cluster && markers.has('cluster_'+clusterID)) {

  //             //Cluster marker is already on screen
  //             keepMarkers.push('cluster_'+clusterID);
  //             // featureID = features[i].id;
  //             // console.log('cluster already created');
  //             markerAdded = false;

  //         } else if (!marker) {
  //           featureID = features[i].id;
  //           var feature = features[i];
  //           var clusterId = features[i].properties.cluster_id;
  //           var point_count = features[i].properties.point_count;
  //           var clusterSource = map.getSource(clustorSourceID);
  //           clusterCheck = true;
  //           var allFeatures;
  //           // feature = await ptr.getFeatureProps(features[i], map, clustorSourceID);
  //           allFeatures = clusterSource.getClusterLeaves(clusterId, point_count, 0, function(err, aFeatures){
  //             // console.log('getClusterLeaves', err, aFeatures);
  //             // test2 = aFeatures[0];
  //             // feature = ptr.getFeatureWithProps(aFeatures)
  //             // console.log(feature);
  //             // return feature;
  //             //This feature is clustered, create an icon for it and use props.point_count for its count
  //           });
  //           // console.log(allFeatures);
  //           // console.log(feature);
  //           var newFeature = await ptr.getFeatureForDirection(allFeatures, feature);
  //           // console.log(feature1);
  //           //This feature is clustered, create an icon for it and use props.point_count for its count
  //           marker = cMarkers[clusterID] = ptr.createSingleMarker(newFeature, routeIcon, markers, keepMarkers, featureID, clusterID, 0);
  //           // marker.addTo(map);
  //           if(clusterId) {
  //             deviceMarkers[index].markers[clusterId] = marker;
  //           }
  //           markerAdded = false;
  //           // console.log('cluster created');

  //         } else if (markers.has(featureID)) {
  //           //Feature marker is already on screen
  //           clusterCheck = false;
  //           if(features[i].id) {
  //             featureID = features[i].id.toString();
  //           } else {
  //             featureID = features[i].properties.id.toString();
  //           }
  //           keepMarkers.push(featureID);
  //           markerAdded = false;
  //           // console.log('feature already created');
  //         } else {
  //           // console.log(markers.has(featureID));
  //           clusterCheck = false;
  //           if(features[i].id) {
  //             featureID = features[i].id.toString();
  //           } else {
  //             featureID = features[i].properties.id.toString();
  //           }
  //           //Feature is not clustered and has not been created, create an icon for it
  //           marker = ptr.createSingleMarker(features[i], routeIcon, markers, keepMarkers, featureID, clusterID, 1);
  //           if(featureID) {
  //             deviceMarkers[index].markers[featureID] = marker;
  //           }
  //           if(device.deviceshow === 1) {
  //             marker.addTo(map);
  //             markerAdded = true;
  //           }
  //           // unclusterMarkers.push(marker);
  //           unclusterMarkers[featureID] = marker;
  //           // console.log(unclusterMarkers);
  //           // console.log('uncluster marker created');
  //         }
  //         // if(!clusterCheck) {
  //           newMarkers[clusterID] = marker;
  //           if (!markersOnScreen[clusterID]) {
  //             if(device.deviceshow === 1) {
  //               // if(!markerAdded){
  //                 marker.addTo(map);
  //                 markerAdded = false;
  //               // }
  //             }
  //             // console.log('create new cluster');
  //             unclusterMarkers.forEach(unclusterMarker => {
  //               unclusterMarker.remove();
  //               // console.log('removing');
  //             });
  //             unclusterMarkers = [];
  //             markers.forEach((value,key,map) => {
  //               if(!key.includes('_')) {
  //                 value.remove();
  //                 map.delete(key);
  //               }
  //             });
  //           }
  //     }
  //     // for every marker we've added previously, remove those that are no longer visible
  //     // console.log(markersOnScreen);
  //     // console.log(markers);
  //     // if(deviceMarker.markers) {
  //     //   deviceMarker.markers.forEach(marker => {
  //     //     marker.remove();
  //     //   });
  //     // }
  //     for (let id in markersOnScreen) {
  //     if (!newMarkers[id]) markersOnScreen[id].remove();
  //     }
  //     // if (deviceMarker.markers) {
  //     //   deviceMarker.markers.forEach(marker => {
  //     //     // console.log('removing markersssss');
  //     //     marker.remove();
  //     //   });
  //     // }
  //     // deviceMarker.markers = markers;
  //     // console.log(cMarkers);
  //     markersOnScreen = newMarkers;
  //     console.log(markersOnScreen);
  //     console.log(markers);
  //     console.log(cMarkers);
  //     // console.log(deviceMarker.markers);
  //     // ptr.removeSingeDeviceMarkers(deviceMarkers[indexC], markers, cMarkers, markersOnScreen, unclusterMarkers);
  //   });
  // // });
  //   // inspect a cluster on click
  //   map.on('click', clusterLayerID, async function(e) {
  //     var features = map.queryRenderedFeatures(e.point, {
  //     layers: [clusterLayerID]
  //     });
  //     // console.log('here');
  //     // console.log(features);
  //     // console.log(e);
  //     var clusterId = features[0].properties.cluster_id;
  //     let point_count = features[0].properties.point_count;
  //     const clusterSource = map.getSource(clustorSourceID);
  //     var feature = features[0];
  //     // feature = await ptr.getFeatureProps(features[0], map, clustorSourceID);
  //     clusterSource.getClusterLeaves(clusterId, point_count, 0, async function(err, aFeatures){
  //       // console.log('getClusterLeaves', err, aFeatures);
  //       feature = await ptr.getFeatureWithProps(aFeatures)
  //       var coordinates = features[0].geometry.coordinates.slice();
  //       // var description = e.features[0].properties.description;

  //       // Ensure that if the map is zoomed out such that multiple
  //       // copies of the feature are visible, the popup appears
  //       // over the copy being pointed to.
  //       while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
  //       coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
  //       }
  //       new mapboxgl.Popup()
  //       .setLngLat(coordinates)
  //       .setHTML(feature.properties.description)
  //       .addTo(map);
  //     });
  //     // console.log(feature);

  //     // var clusterId = features[0].properties.cluster_id;
  //     // map.getSource(clustorSourceID).getClusterExpansionZoom(
  //     //   clusterId,
  //     //   function(err, zoom) {
  //     //     if (err) return;
  //     //       map.easeTo({
  //     //       center: features[0].geometry.coordinates,
  //     //       zoom: zoom
  //     //     });
  //     //   }
  //     // );
  //   });
  //   map.on('mouseenter', clusterLayerID, function() {
  //       map.getCanvas().style.cursor = 'pointer';
  //       });
  //     // tslint:disable-next-line: only-arrow-functions
  //     map.on('mouseleave', clusterLayerID, function() {
  //       map.getCanvas().style.cursor = '';
  //       });
  // });
  }

  createClustorPoints(geopoints, deviceID, map, dataPoints, device, deviceMarkers) {
  //   const clustorSourceID = 'source' + deviceID;
  //   const clusterLayerID = 'cluster' + deviceID;
  //   const clusterCountID = 'cluster-count' +  deviceID;
  //   const unclusteredPointID = 'unclustered-point' + deviceID;
  //   // console.log(clustorSourceID);
  //   // console.log(clusterLayerID);
  //   // console.log(clusterCountID);
  //   console.log(deviceMarkers);
  //   const mapLayer = this.map.getLayer(clusterLayerID);
  //   if (typeof mapLayer !== 'undefined') {
  //       // Remove map layer & source.
  //       this.map.removeLayer(unclusteredPointID);
  //       this.map.removeLayer(clusterCountID);
  //       this.map.removeLayer(clusterLayerID);
  //       this.map.removeSource(clustorSourceID);
  //   }
  //   map.addSource(clustorSourceID, {
  //     type: 'geojson',
  //     data: geopoints,
  //     cluster: true,
  //     clusterMaxZoom: 10, // Max zoom to cluster points on
  //     clusterRadius: 50 // Radius of each cluster when clustering points (defaults to 50)
  //     });
  //   map.addLayer({
  //     id: clusterLayerID,
  //     type: 'circle',
  //     source: clustorSourceID,
  //     filter: ['has', 'point_count'],
  //     paint: {
  //     // Use step expressions (https://docs.mapbox.com/mapbox-gl-js/style-spec/#expressions-step)
  //     // with three steps to implement three types of circles:
  //     //   * Blue, 20px circles when point count is less than 100
  //     //   * Yellow, 30px circles when point count is between 100 and 750
  //     //   * Pink, 40px circles when point count is greater than or equal to 750
  //     'circle-color': [
  //     'step',
  //     ['get', 'point_count'],
  //     '#11b4da',
  //     100,
  //     '#11b4da',
  //     750,
  //     '#11b4da'
  //     ],
  //     'circle-radius': [
  //     'step',
  //     ['get', 'point_count'],
  //     20,
  //     100,
  //     30,
  //     750,
  //     40
  //     ],
  //     'circle-opacity': 0.5
  //     }
  //     });
  //     // console.log(imgUrl);
  //   map.addLayer({
  //     id: clusterCountID,
  //     type: 'symbol',
  //     source: clustorSourceID,
  //     filter: ['has', 'point_count'],
  //     // layout: {
  //     // 'text-field': '{point_count_abbreviated}',
  //     // 'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
  //     // 'text-size': 12
  //     // }
  //     });
  //   // this.createMarkers(geopoints, deviceID, dataPoints, device);
  //   map.addLayer({
  //     id: unclusteredPointID,
  //     type: 'circle',
  //     source: clustorSourceID,
  //     filter: ['!', ['has', 'point_count']],
  //     // layout: {
  //     //   'icon-image': ['get', 'icon'],
  //     //   'icon-size': 12
  //     // },
  //     paint: {
  //     'circle-color': '#11b4da',
  //     'circle-radius': 2,
  //     'circle-stroke-width': 1,
  //     'circle-stroke-color': '#fff',
  //     'circle-opacity': 0.5
  //     }
  //     });
  //   // console.log(map.listImages());
  //     // inspect a cluster on click
  //   // tslint:disable-next-line: only-arrow-functions
  //   const ptr = this;
  //   // map.on('moveend', (e) => {

  //   //   const zoom = map.getZoom();
  //   //   // console.log(zoom);
  //   //   // console.log(deviceMarkers);

  //   //   if (zoom >= 11) {
  //   //     const features = map.queryRenderedFeatures(e.point, {
  //   //       layers: [unclusteredPointID]
  //   //       });
  //   //     // console.log(features);
  //   //     if (features.length > 0) {
  //         // this.createMarkers(features, deviceID, this.map, device);
  //   //     }
  //   //   } else {
  //   //     // console.log(this.deviceMarkers);
  //   //     const index = this.deviceMarkers.findIndex(obj =>
  //   //       obj.deviceID === + deviceID
  //   //       );
  //   //     if (this.deviceMarkers[index].markers) {
  //   //       this.deviceMarkers[index].markers.forEach(marker => {
  //   //       marker.remove();
  //   //       // console.log('removing');
  //   //       });
  //   //     }
  //   //   }
  //   // });

  //   // map.on('click', clusterLayerID, function(e) {
  //   //   const zoom = map.getZoom();
  //   //   let test = map.querySourceFeatures(unclusteredPointID);
  //   //   // console.log(test);
  //   //   test = map.queryRenderedFeatures(unclusteredPointID);
  //   //   // console.log(test);
  //   //   const features = map.queryRenderedFeatures(e.point, {
  //   //   layers: [clusterLayerID]
  //   //   });
  //   //   // console.log(features);
  //   //   const clusterId = features[0].properties.cluster_id;
  //   //   map.getSource(clustorSourceID).getClusterExpansionZoom(
  //   //   clusterId,
  //   //   // tslint:disable-next-line: only-arrow-functions
  //   //   function(err, zoom) {
  //   //   if (err) { return; }
  //   //   map.easeTo({
  //   //   center: features[0].geometry.coordinates,
  //   //   zoom
  //   //   });
  //   //   }
  //   //   );
  //   //   });
  //   // // tslint:disable-next-line: only-arrow-functions
  //   // map.on('mouseenter', clusterLayerID, function() {
  //   //   map.getCanvas().style.cursor = 'pointer';
  //   //   });
  //   // // tslint:disable-next-line: only-arrow-functions
  //   // map.on('mouseleave', clusterLayerID, function() {
  //   //   map.getCanvas().style.cursor = '';
  //   //   });
  }

  degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

  distanceBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
    const earthRadiusKm = 6371;

    const dLat = this.degreesToRadians(lat2 - lat1);
    const dLon = this.degreesToRadians(lon2 - lon1);

    lat1 = this.degreesToRadians(lat1);
    lat2 = this.degreesToRadians(lat2);

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (earthRadiusKm * c) * 1000;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  async renderPolyLine(polylinePoints, device, map, allCoordinates, deviceMarkers, devideID) {
    let renderResponse = null;
    const tempDIDs = devideID;
    this.requestCount = false;
    this.responseCount = false;
    // while(!this.responseCount){

    // }
    await this.delay(2000);
    await this.authService.renderPolyline(polylinePoints).then(
          res => {
            renderResponse = res;
            this.responseCount = true;
            console.log(renderResponse);
            // this.responseCount++;
            const index = deviceMarkers.findIndex(obj =>
              obj.deviceID === + device.id
              );
            deviceMarkers[index].responseCount++;
            // console.log(renderResponse);
            // tslint:disable-next-line: max-line-length
            if (renderResponse && typeof renderResponse.trip !== 'undefined' && renderResponse.trip && renderResponse.trip.summary.length > 0.05) {
              // console.log('not here');
              let localCoordinates = [];
              // if (renderResponse.trip.legs.length > 1) {
              const singleDevice = device;
              renderResponse.trip.legs.forEach(leg => {
                if (leg.summary.length > 0.05) {
                  localCoordinates = this.getRenderedPoints(leg.shape, 6);
                  // console.log(localCoordinates);
                  // console.log(this.optimizeCoordinates);
                  // this.deviceMarkers = this.createLayer(tempDIDs, singleDevice, map, localCoordinates, deviceMarkers);

                  deviceMarkers[index].optimizeCoordinates = deviceMarkers[index].optimizeCoordinates.concat(localCoordinates);
                    // tslint:disable-next-line: max-line-length
                  // console.log(deviceMarkers[index].requestCount);
                  // console.log(deviceMarkers[index].responseCount);
                  if (deviceMarkers[index].responseCount === deviceMarkers[index].requestCount) {
                    console.log('max reached');
                    console.log('creating optimized layer');
                    // if(deviceMarkers[index].optimizeCoordinates.length > 10 ) {
                    //   for(let i = 0; i < deviceMarkers[index].optimizeCoordinates.length; i = i + deviceMarkers[index].optimizeCoordinates.length/10){
                    //     let optCoordinates = deviceMarkers[index].optimizeCoordinates.slice(i, i + deviceMarkers[index].optimizeCoordinates.length/10);
                    //     console.log(optCoordinates);
                    //     this.deviceMarkers = this.createLayer(tempDIDs++, singleDevice, map, optCoordinates, deviceMarkers);
                    //   }
                    // } else {
                    this.deviceMarkers = this.createLayer(tempDIDs, singleDevice, map, deviceMarkers[index].optimizeCoordinates, deviceMarkers);
                    // }
                    deviceMarkers[index].requestCount = 0;
                    deviceMarkers[index].responseCount = 0;
                  }
                  // this.deviceMarkers = this.createLayer(tempDIDs, singleDevice, map, localCoordinates, deviceMarkers);
                  // console.log(tempDIDs);
                }
              });
            // } else {
            //     localCoordinates = this.getRenderedPoints(renderResponse.trip.legs[0].shape, 6);
            //       // tslint:disable-next-line: max-line-length
            //     this.deviceMarkers = this.createLayer(tempDIDs++, device, map, localCoordinates, deviceMarkers);
            // }
            } else {
              deviceMarkers[index].optimizeCoordinates = deviceMarkers[index].optimizeCoordinates.concat(allCoordinates);
              if (deviceMarkers[index].responseCount === deviceMarkers[index].requestCount) {
                console.log('creating straight layer');
                console.log('max reached');
                // console.log(deviceMarkers[index].optimizeCoordinates);
                this.deviceMarkers = this.createLayer(tempDIDs, device, map, deviceMarkers[index].optimizeCoordinates, deviceMarkers);
                deviceMarkers[index].requestCount = 0;
                deviceMarkers[index].responseCount = 0;
              }
                // tslint:disable-next-line: max-line-length

              // console.log(tempDIDs);
              // console.log('render');
              // console.log(this.allCoordinates);
            }
          }
        ).catch (e => {
          console.log(e);
        });
    // console.log(tempDIDs);
    return tempDIDs;
  }

  async ShowPoints(dataPoints: any, deviceID) {

    // dataPoints = await this.removeNearestPoints(dataPoints);
    // console.log(dataPoints);
    const sortedArray: [] = dataPoints.sort((n1, n2) => {
      if (n1.dateunix < n2.dateunix) {
          return 1;
      }

      if (n1.dateunix > n2.dateunix) {
          return -1;
      }
      return 0;
    });
    // console.log(sortedArray);
    let callNewCluster = false;
    this.polylinePoints = [];
    let dID = null;

    if (deviceID) {
      dID = deviceID.toString();
      this.deviceID = dID;
      callNewCluster = false;
    } else {
      await this.storage.get(Constants.SELECTED_DEVICE).then(res => {
        dID = res.toString();
        this.deviceID = dID;
      });
      callNewCluster = true;
      const indexC = this.deviceMarkers.findIndex(obj =>
        obj.deviceID === + dID
        );
      this.removeAllMarkers(this.deviceMarkers, this.markers, this.cMarkers, this.markersOnScreen, this.unclusterMarkers);
    }
    const indx = this.deviceMarkers.findIndex(obj =>
      obj.deviceID === +dID
      );
    this.deviceMarkers[indx].dataPoints = dataPoints;
    this.deviceMarkers[indx].optimizeCoordinates = [];
    const mapLayer = this.map.getLayer(dID);
    console.log(mapLayer);
    if (typeof mapLayer !== 'undefined') {
        // Remove map layer & source.
        // this.map.removeLayer(this.deviceID).removeSource(this.deviceID);
        const indx = this.deviceMarkers.findIndex(obj =>
          obj.deviceID === +dID
          );
        this.deviceMarkers[indx].layersIDs.forEach(layerID => {
          this.map.removeLayer(layerID).removeSource(layerID);
        });
        this.deviceMarkers[indx].layersIDs = [];
        this.deviceMarkers[indx].layers = [];
        const zoom = this.map.getZoom();
    }
    const map = this.map;
    if (sortedArray.length > 0) {
      const indx = this.devices.findIndex(obj =>
        obj.id === + dID
        );
      const geoPoints = await this.createGeoJsonTemplate(dataPoints, this.devices[indx]);
      const indexC = this.deviceMarkers.findIndex(obj =>
        obj.deviceID === + dID
        );
      this.deviceMarkers[indexC].geoPoints = geoPoints;
      // console.log(geoPoints.features);
      // this.createClustorPoints(geoPoints, this.deviceID, this.map, dataPoints, this.devices[indx], this.deviceMarkers[indx]);
      // if(this.devices[indx].deviceshow) {
      //   this.createNewClustorPoints(geoPoints, this.deviceID, this.map, this.devices[indx], this.deviceMarkers[indx]);
      // }
      // this.createMarkers(geoPoints, this.deviceID, this.map, this.devices[indx]);
      // console.log(geoPoints);
      // this.createMarkers(geoPoints, dID, dataPoints, this.devices[indx]);
      // let renderResponse = null;
      // let tempDIDs = dID;
      if (callNewCluster) {
        const allGeoPoints = this.mergeAllGeoPoints(this.deviceMarkers, this.devices);
        this.createSingleCluster(allGeoPoints, this.map);
        callNewCluster = false;
      }
      let lastDataPoint = dataPoints[0];
      let lastElements = [];
      let distanceToPrevPolyline = 0;
      let prevPolylinePoint = dataPoints[0];
      // let type = 'via';
      // let prevType = 'break';
      const tempDID = dID;
      let localCoordinates: number [][] = [];
      dataPoints.forEach(async data => {
        // if (this.polylinePoints.length > 1) {
          if (lastElements[lastElements.length - 1] && data.lat && data.lng) {
            if (lastElements[lastElements.length - 5]) {
                lastElements = lastElements.slice(-5);
            }
            let distanceBtwnCoordinates = 0;
            if (lastElements.length > 0) {
              // tslint:disable-next-line: max-line-length
              distanceBtwnCoordinates = this.distanceBetweenEarthCoordinates(data.lat, data.lng, lastElements[lastElements.length - 1].lat, lastElements[lastElements.length - 1].lng);
            }
            // tslint:disable-next-line: max-line-length
            distanceToPrevPolyline = this.distanceBetweenEarthCoordinates(data.lat, data.lng, prevPolylinePoint.lat, prevPolylinePoint.lng);
            // console.log(distanceBtwnCoordinates);
            const timeDifference = data.dateunix - lastDataPoint.dateunix;
            // console.log(distanceBtwnCoordinates);
            if (distanceBtwnCoordinates > 5000) {
              if (this.polylinePoints.length > 2) {
                this.deviceMarkers[indexC].requestCount++;
                // this.requestCount++;
                this.renderPolyLine(this.polylinePoints, this.devices[indx], this.map, localCoordinates, this.deviceMarkers, tempDID);
              }
              this.polylinePoints = [];
              // const polylinePoint = new PolylinePoints();
              // polylinePoint.id = lastElements[lastElements.length - 1].id;
              // polylinePoint.lat = lastElements[lastElements.length - 1].lat;
              // polylinePoint.lon = lastElements[lastElements.length - 1].lng;
              // polylinePoint.time = lastElements[lastElements.length - 1].dateunix;
              // polylinePoint.heading = lastElements[lastElements.length - 1].direction;
              // this.polylinePoints.push(polylinePoint);
              distanceToPrevPolyline = 0;
              localCoordinates = [];
              // const singleCoordinate = [polylinePoint.lon, polylinePoint.lat];
              // localCoordinates.push(singleCoordinate);
              // tslint:disable-next-line: max-line-length
              // console.log("distance");
              // console.log(tempDID);
              // this.renderPolyLine(this.polylinePoints, this.devices[indx], this.map, this.allCoordinates, this.deviceMarkers, tempDID++);
              // console.log(tempDID);
              // type = 'break';
              // polylinePoint.type = type;
            } else if (lastElements.length > 0) {
                if (data.speed < 5 && lastElements[lastElements.length - 1].speed < 2 && this.polylinePoints.length > 2) {
                  // tslint:disable-next-line: max-line-length
                  // console.log(tempDID);
                  this.deviceMarkers[indexC].requestCount++;
                  // this.requestCount++;
                  this.renderPolyLine(this.polylinePoints, this.devices[indx], this.map, localCoordinates, this.deviceMarkers, tempDID);
                  this.polylinePoints = [];
                  // const polylinePoint = new PolylinePoints();
                  // polylinePoint.id = lastElements[lastElements.length - 1].id;
                  // polylinePoint.lat = lastElements[lastElements.length - 1].lat;
                  // polylinePoint.lon = lastElements[lastElements.length - 1].lng;
                  // polylinePoint.time = lastElements[lastElements.length - 1].dateunix;
                  // polylinePoint.heading = lastElements[lastElements.length - 1].direction;
                  // this.polylinePoints.push(polylinePoint);
                  // distanceToPrevPolyline = 0;
                  localCoordinates = [];
                  // const singleCoordinate = [polylinePoint.lon, polylinePoint.lat];
                  // localCoordinates.push(singleCoordinate);
                  // console.log(tempDID);
                  // type = 'break';
                  // polylinePoint.type = type;
                }
            }
          }
        // }
          const polylinePoint = new PolylinePoints();
          polylinePoint.id = data.id;
          polylinePoint.lat = data.lat;
          polylinePoint.lon = data.lng;
          polylinePoint.time = data.dateunix;
          polylinePoint.heading = data.direction;
          if (distanceToPrevPolyline > 10) {
          this.polylinePoints.push(polylinePoint);
          const singleCoordinate = [polylinePoint.lon, polylinePoint.lat];
          localCoordinates.push(singleCoordinate);
          prevPolylinePoint = data;
        }
        // if (data.speed < 2) {
        //   type = 'break';
        //   polylinePoint.type = type;
        // } else {
        //   type = 'via';
        //   polylinePoint.type = type;
        // }

        // if (prevType === 'via') {
        // this.polylinePoints.push(polylinePoint);
        // }
        // prevType = type;
          lastElements.push(data);
          lastDataPoint = data;
        // console.log(tempDID);
      });
    // console.log(this.polylinePoints);
    // this.optimizeCoordinates = [];
    // this.renderPolyLine(this.polylinePoints, this.devices[indx], this.map, localCoordinates, this.deviceMarkers, tempDID);
    // this.polylinePoints = [];
    // localCoordinates = []
    //   console.log(tempDID);
    //   console.log(this.polylinePoints);
    }
    // if (typeof this.allCoordinates !== 'undefined' && this.allCoordinates.length > 0) {
    //   // the array is defined and has at least one element
    //   map.flyTo({
    //     center: [
    //   this.allCoordinates[0][0], this.allCoordinates[0][1]],
    //   zoom: 10,
    //     });
    // }
  }

  activeFlyToDevice(deviceInfo) {
    console.log(deviceInfo);
    const index = this.devices.findIndex(obj =>
      obj.id === + deviceInfo.deviceID
      );
    if (typeof this.devices[index] !== 'undefined') {
      // the array is defined and has at least one element
      this.map.flyTo({
        center: [
          this.devices[index].last_lng, this.devices[index].last_lat],
      zoom: 10,
        });
    }
  }

  getBatteryPercentageNew(deviceData) {
    if (!deviceData.lastPosition) {
      return '0%';
    }
    if (deviceData.modelNumber === 1010) {
      return deviceData.lastPosition.battery + '%';
    } else {
      switch (deviceData.lastPosition.battery) {
        case 6:
            return '100%';
        case 5:
            return '80-100%';
        case 4:
            return '60-80%';
        case 3:
            return '40-60%';
        case 2:
            return '20-40%';
        case 1:
            return '0-20%';
        case 0:
            return '0%';
        default:
            return '0%';
      }
    }
  }

  drawStreetAddress(streetInfo) {
    this.deviceInfoValues.street = streetInfo.address.road; // + ' ' + streetInfo.address.house_number;
    this.deviceInfoValues.building = streetInfo.address.postcode + ' ' + streetInfo.address.city + ' ' + streetInfo.address.neighbourhood;
    this.deviceInfoValues.city = streetInfo.address.country + ' (' + streetInfo.address.county + ')';
  }

  async loadDeviceInfo(deviceInfo) {
    if (deviceInfo.lastPosition) {
      this.deviceInfoValues.battery = this.getBatteryPercentageNew(deviceInfo);
      this.deviceInfoValues.speed = deviceInfo.lastPosition.speed;
      const gMapsLink = document.getElementById('googleMapsLink');
      const anchorValue = 'https://www.google.de/maps?f=q&hl=de&q=' + deviceInfo.lastPosition.lat + ',' + deviceInfo.lastPosition.lng;
      gMapsLink.setAttribute('href', anchorValue);
      this.deviceInfoValues.time = this.convertDateUnixtoTime(new Date((deviceInfo.lastPosition.dateunix) * 1000));

      if (deviceInfo.lastPosition.dateunix) {
        if (deviceInfo.lastPosition.speed > 2) {
          this.deviceStatus = 'Moving since:';
        } else {
          this.deviceStatus = 'Stopped since:';
        }
        this.deviceInfoValues.lastLogin = this.convertDateUnixtoTime(new Date((deviceInfo.lastPosition.dateunix) * 1000));
        const date = new Date((deviceInfo.lastPosition.dateunix) * 1000);
        const days = date.getDate();
        const currentTimestampt = (+ new Date()) / 1000;
        const seconds = currentTimestampt - deviceInfo.lastPosition.dateunix;
        const measuredTime = new Date(null);
        measuredTime.setSeconds(seconds); // specify value of SECONDS
        const MHSTime = measuredTime.toISOString().substr(11, 8);
        this.deviceInfoValues.days = MHSTime + ' + ' + days.toString() + ' days';

        // tslint:disable-next-line: triple-equals
        // tslint:disable-next-line: max-line-length
        if (!(this.lastLatLng[deviceInfo.deviceID]) || (this.lastLatLng[deviceInfo.deviceID].lat !== deviceInfo.lastPosition.lat && this.lastLatLng[deviceInfo.deviceID].lng !== deviceInfo.lastPosition.lng) ) {
          await this.authService.getStreetAdrress(deviceInfo.lastPosition.lat, deviceInfo.lastPosition.lng).then(
          res => {
            if (res) {
              if (res.address) {
                this.drawStreetAddress(res);

                // save for later:
                deviceInfo.lastAddress = res;
              }
            }
          }
        ).catch (e => {
          console.log(e);
        });
        } else if (deviceInfo.lastAddress.address) {
          this.drawStreetAddress(deviceInfo.lastAddress);
        }

        this.lastLatLng[deviceInfo.deviceID] = {
          lat: deviceInfo.lastPosition.lat,
          lng: deviceInfo.lastPosition.lng
        };
      }
    } else {
      this.deviceInfoValues.battery = 'not defined';
      this.deviceInfoValues.speed = 'not defined';
      this.deviceInfoValues.time = 'not defined';
      this.deviceInfoValues.lastLogin = 'not defined';
      this.deviceInfoValues.days = 'not defined';
      this.deviceInfoValues.street = 'not defined';
      this.deviceInfoValues.building = 'not defined';
      this.deviceInfoValues.city = 'not defined';
    }

  }

  async loadDeviceListModal() {
    await this.dismissAllModules();

    const modal = await this.modalController.create({
      component: DeviceListComponent,
      componentProps: {
        data: this.devices
      },
      cssClass: 'custom-modal'
    });
    modal.onDidDismiss()
      .then(() => {

        // Get the selected device data from storage and fly to device on map
        this.storage.get('selected-device-data').then(res => {
          console.log(res);
          const deviceObj = {
            deviceID: res.deviceID,
            flyInfo: 'Device'
          };
          this.activeFlyToDevice(deviceObj);
        });
    });
    this.allModals.push(modal);
    return await modal.present();
  }

  enableDeviceData(deviceID) {
    const index = this.devices.findIndex(obj =>
      obj.id === deviceID
      );
    const startDate = new Date((this.devices[index].spurdatum)  * 1000);
    const endDate = new Date((this.devices[index].spurdatumbis)  * 1000);
    this.startDate = this.convertDateUnixtoTime(startDate);
    this.endDate = this.convertDateUnixtoTime(endDate);
    this.lastMinutes = this.devices[index].spurminuten;
    this.lastPoints = this.devices[index].spurpunkte;

    console.log(this.devices[index]);
    console.log(this.startDate, this.endDate, this.lastMinutes, this.lastPoints);
  }

  async loadInfoModal() {
    await this.dismissAllModules();

    let selDeviceID;
    let deviceData = {};
    let deviceAllData;
    await this.storage.get('selected-device-data').then(res => {
      deviceData = res;
      selDeviceID = res.deviceID;
      const dIndex = this.deviceMarkers.findIndex(obj =>
        obj.deviceID === selDeviceID
      );
      this.loadDeviceInfo(this.deviceMarkers[dIndex]);
      console.log(dIndex);
      console.log(this.devices);
      deviceAllData = this.devices[dIndex];
    });
    const modal = await this.modalController.create({
      component: InfoComponent,
      componentProps: {
        deviceAllData,
        deviceData,
        deviceInfo: this.deviceInfoValues
      },
      cssClass: 'custom-modal'
    });
    modal.onDidDismiss()
      .then((data) => {
        if (data.data.type === 'loadDevices') {
          this.loadDeviceListModal();
        }
    });
    this.allModals.push(modal);
    return await modal.present();
  }

  async loadRouteModal() {
    await this.dismissAllModules();

    let deviceAllData;
    let deviceId = 0;
    await this.storage.get('selected-device-data').then(res => {
      deviceId = res.deviceID;
      this.enableDeviceData(res.deviceID);

      const dIndex = this.deviceMarkers.findIndex(obj =>
        obj.deviceID === deviceId
      );
      deviceAllData = this.devices[dIndex];
    });
    let deviceData = {};
    await this.storage.get('selected-device-data').then(res => {
      deviceData = res;
    });
    const modal = await this.modalController.create({
      component: RouteComponent,
      componentProps: {
        deviceAllData,
        deviceData,
        startDate:    this.startDate,
        endDate:      this.endDate,
        lastMinutes:  this.lastMinutes,
        lastPoints:   this.lastPoints
      },
      cssClass: 'custom-modal'
    });
    modal.onDidDismiss()
      .then((data) => {
        console.log('after dismis');
        console.log(data.data.updatedRouteData);
        if (data.data.type === 'loadDevices') {
          this.loadDeviceListModal();
        }
        if (data.data.type === 'updateRoute') {
          this.getDevices();
        }
    });
    this.allModals.push(modal);
    return await modal.present();
  }

  async loadAlertModal() {
    await this.dismissAllModules();

    let deviceAllData;
    let deviceId = 0;
    let deviceData = {};
    await this.storage.get('selected-device-data').then(res => {
      deviceData = res;
      deviceId = res.deviceID;
    });
    const index = this.devices.findIndex(obj =>
      obj.id === deviceId
    );
    deviceAllData = this.devices[index];
    const dModelIndex = this.deviceMarkers.findIndex(obj =>
      obj.deviceID === deviceId
    );
    this.deviceModel = this.deviceMarkers[dModelIndex].deviceModel;
    const modal = await this.modalController.create({
      component: AlertComponent,
      componentProps: {
        deviceAllData,
        deviceAlarmsValues: this.devices[index],
        deviceData,
        deviceId,
        deviceInfo: this.deviceInfoValues,
        deviceModel: this.deviceModel
      },
      cssClass: 'custom-modal'
    });
    modal.onDidDismiss()
      .then((data) => {
        if (data.data.type === 'updateDevices') {
          this.getDevices();
        }
        if (data.data.type === 'loadDevices') {
          this.loadDeviceListModal();
        }
    });
    this.allModals.push(modal);
    return await modal.present();
  }

  dismissAllModules() {
    this.allModals.forEach(element => {
      console.log(element);
      element.dismiss();
    });
  }

}
