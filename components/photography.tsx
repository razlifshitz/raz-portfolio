import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Camera } from "lucide-react"
import Image from "next/image"

export function Photography() {
  return (
    <section id="photography" className="w-full">
      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="h-5 w-5" />
            Photography
          </CardTitle>
          <CardDescription>Capturing moments with a creative eye</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Photography sample 1"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Photography sample 2"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Photography sample 3"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative aspect-square rounded-md overflow-hidden">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Photography sample 4"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>
          <p className="text-gray-600">
            Photography helps me develop a keen eye for detail and composition - skills that enhance my ability to
            create visually appealing and well-structured interfaces.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}

