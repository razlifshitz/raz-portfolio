import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import Image from "next/image"

export function ChessSection() {
  return (
    <section id="chess" className="w-full">
      <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <Image src="/placeholder.svg?height=32&width=32" alt="Chess piece" fill className="object-contain" />
            </div>
            Chess Player
          </CardTitle>
          <CardDescription>Professional chess enthusiast</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
            <Image src="/placeholder.svg?height=200&width=400" alt="Chess board" fill className="object-cover" />
          </div>
          <p className="text-gray-600 mb-4">
            Chess has taught me strategic thinking, patience, and the ability to see multiple steps ahead - skills that
            translate directly to my approach to software development.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-gray-100 p-3 rounded-md text-center">
              <div className="font-medium">Strategic Thinking</div>
              <div className="text-sm text-gray-600">Planning multiple moves ahead</div>
            </div>
            <div className="bg-gray-100 p-3 rounded-md text-center">
              <div className="font-medium">Pattern Recognition</div>
              <div className="text-sm text-gray-600">Identifying opportunities</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

