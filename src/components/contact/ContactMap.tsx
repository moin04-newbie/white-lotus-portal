
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [-73.935242, 40.730610], // Default coordinates
      zoom: 13
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([-73.935242, 40.730610])
      .addTo(map.current);

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="grid lg:grid-cols-2 gap-8 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5 text-hospital-600" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p>Main: (123) 456-7890</p>
              <p>Emergency: 911</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="h-5 w-5 text-hospital-600" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p>info@whitelotushospital.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <MapPin className="h-5 w-5 text-hospital-600" />
            <div>
              <h4 className="font-semibold">Address</h4>
              <p>123 Medical Center Dr,</p>
              <p>Healthcare City, HC 12345</p>
            </div>
          </div>

          <div className="mt-6">
            <Label htmlFor="mapbox-token">Mapbox Token (Required for map display)</Label>
            <Input
              id="mapbox-token"
              type="text"
              placeholder="Enter your Mapbox public token"
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="mt-1"
            />
          </div>
        </CardContent>
      </Card>

      <div className="h-[400px] relative">
        {!mapboxToken ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <p className="text-gray-500">Please enter a Mapbox token to display the map</p>
          </div>
        ) : (
          <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
        )}
      </div>
    </div>
  );
};

export default ContactMap;
