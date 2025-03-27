import React, { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import leaflet from 'leaflet';
import useMap from '../../useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { City, Point } from '../../types/map-types';

interface MapProps {
  city: City;
  points: Point[];
  selectedPoint: Point | null;
}

const Map: React.FC<MapProps> = ({ city, points, selectedPoint }) => {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: URL_MARKER_CURRENT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.lat,
              lng: point.lng,
            },
            {
              icon:
                selectedPoint && point.title === selectedPoint.title
                  ? currentCustomIcon
                  : defaultCustomIcon,
            }
          )
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint, currentCustomIcon, defaultCustomIcon]);

  return <div style={{ height:'400px' }} ref={mapRef}></div>;
};

export default Map;
