
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EmergencyHelpline = () => {
  return (
    <Card className="bg-red-50">
      <CardHeader>
        <CardTitle className="text-red-600 flex items-center gap-2">
          <Phone className="h-6 w-6" />
          Emergency Helpline
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl text-red-600">911</h3>
            <p className="text-gray-600">For immediate medical emergencies</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl text-hospital-600">(123) 456-7890</h3>
            <p className="text-gray-600">24/7 Hospital Emergency Room</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-bold text-xl text-hospital-600">(123) 456-7891</h3>
            <p className="text-gray-600">Ambulance Services</p>
          </div>
        </div>

        <div className="mt-4">
          <Button className="w-full bg-red-600 hover:bg-red-700">
            <Phone className="mr-2 h-4 w-4" />
            Call Emergency Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyHelpline;
