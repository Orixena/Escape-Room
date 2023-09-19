import { Icon, Marker, MarkerOptions, LeafletMouseEvent, layerGroup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map/use-map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT, ZOOM } from '../../const';
import { BookingQuest } from '../../types/types';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getSelectedQuestPlace } from '../../store/quest-data/quest-data.selectors';
import { setSelectedQuestPlace } from '../../store/quest-data/quest-data.slice';

type CustomMarkerOptions = {
  title: string;
  clickable: boolean;
  icon: Icon;
  id: string;
}

type LeafletBaloonTarget = {
  options: MarkerOptions;
}

type MapProps = {
  bookingInfo: BookingQuest[];
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27,39],
  iconAnchor: [13.5, 39]
});


function Map({bookingInfo}: MapProps): JSX.Element {

  const dispatch = useAppDispatch();
  const selectedQuestPlace = useAppSelector(getSelectedQuestPlace);

  console.log(selectedQuestPlace, 'selected');

  const questFirstPointLocation = selectedQuestPlace.location.coords;
  const mapRef = useRef(null);
  const map = useMap(mapRef, questFirstPointLocation);
  console.log('first', questFirstPointLocation);

  function handleBaloonClick(placeId: string) {
    const selectedPlace = bookingInfo.find((place) => place.id === placeId) || bookingInfo[0];
    dispatch(setSelectedQuestPlace(selectedPlace));
    //dispatch(setFormPlaceId(placeId));
  }
console.log('1');
  useEffect(() => {
    if (map && questFirstPointLocation) {
      const markerLayer = layerGroup().addTo(map);
      console.log('2');
      bookingInfo.forEach((point) => {
        const markerOptions: CustomMarkerOptions = {
          title: point.location.address,
          clickable: true,
          icon: selectedQuestPlace.id === point.id ? currentCustomIcon : defaultCustomIcon,
          id: point.id
        };
        const marker = new Marker({
          lat: point.location.coords[0],
          lng: point.location.coords[1],
        }, markerOptions).addEventListener('click',(evt: LeafletMouseEvent) => {
          handleBaloonClick(((evt.target as LeafletBaloonTarget).options as CustomMarkerOptions).id);
        });
        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, bookingInfo, questFirstPointLocation]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
