import {useEffect, useState, useRef, MutableRefObject} from 'react';
import {Map, TileLayer} from 'leaflet';
import { ZOOM } from '../../const';


function useMap(mapRef: MutableRefObject<HTMLElement | null>, coords: number[]): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef(false);

  useEffect(() => {
    if (mapRef.current && !isRenderedRef.current && coords) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: coords[0],
          lng: coords[1]
        },
        zoom: ZOOM,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;

    }
  }, [mapRef, coords]);

  return map;
}

export default useMap;
