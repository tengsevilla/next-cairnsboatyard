import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <Card className="mb-8 mx-auto max-w-md shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="bg-blue-500 text-white p-4">
          <CardTitle className="text-xl font-semibold">Development Notice</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <p className="text-gray-700">Our website is currently under development. Please check back later for updates.</p>
        </CardContent>
      </Card>
      {/* Other components and content */}
    </div>
  );
}
