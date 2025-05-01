import {
  GoogleMap,
  LoadScript,
  Marker,
} from '@react-google-maps/api';
import { useEffect, useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const defaultCenter = {
  lat: 35.681236,
  lng: 139.767125,
};

const generateRandomPoints = (
  center: google.maps.LatLngLiteral,
  radiusInMeters: number,
  count: number
): google.maps.LatLngLiteral[] => {
  const points: google.maps.LatLngLiteral[] = [];

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * radiusInMeters;

    // 地球の半径: 約6,371,000m
    const deltaLat = (distance * Math.cos(angle)) / 111320; // 1度緯度 ≈ 111.32km
    const deltaLng =
      (distance * Math.sin(angle)) /
      (111320 * Math.cos((center.lat * Math.PI) / 180));

    points.push({
      lat: center.lat + deltaLat,
      lng: center.lng + deltaLng,
    });
  }

  return points;
};

const Home = () => {
  const [currentPosition, setCurrentPosition] = useState<google.maps.LatLngLiteral | null>(null);
  const [randomMarkers, setRandomMarkers] = useState<google.maps.LatLngLiteral[]>([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setCurrentPosition(pos);

          const randomPins = generateRandomPoints(pos, 50, 5); // 半径50m内に5つ
          setRandomMarkers(randomPins);
        },
        () => {
          alert('位置情報の取得に失敗しました。');
        }
      );
    } else {
      alert('このブラウザは位置情報に対応していません。');
    }
  }, []);

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition ?? defaultCenter}
        zoom={17}
      >
        {currentPosition && (
          <Marker position={currentPosition} title="あなたの現在地" />
        )}

        {randomMarkers.map((pos, idx) => (
          <Marker
            key={idx}
            position={pos}
            icon={{
              url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
            }}
            title={`ランダムピン ${idx + 1}`}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Home;