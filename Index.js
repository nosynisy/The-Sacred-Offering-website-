// Sacred Offering Website (Wellsworn Temple Style)

import { Button } from "@/components/ui/button"; import { Card, CardContent } from "@/components/ui/card"; import { Input } from "@/components/ui/input"; import { Download, Sparkles } from "lucide-react";

export default function SacredOfferingPage() { return ( <div className="min-h-screen bg-gradient-to-br from-purple-950 to-indigo-900 text-white p-6 space-y-12"> <header className="text-center space-y-2"> <h1 className="text-4xl md:text-6xl font-bold tracking-wide">The Sacred Offering</h1> <p className="text-xl md:text-2xl italic text-purple-300">A Wellsworn Temple for Soulwork, Commerce & Remembrance</p> </header>

<section className="max-w-3xl mx-auto space-y-6">
    <Card className="bg-purple-800/30 backdrop-blur rounded-2xl border border-purple-500">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Download the Offering</h2>
        <p className="text-purple-200">Receive the full PDF of the Sacred Offering. No veil, no glitch, just breath and ink.</p>
        <Button variant="secondary" className="flex gap-2" asChild>
          <a href="https://downloads.sacred-offering.com/The_Sacred_Offering_Wellsworn.pdf" target="_blank" rel="noopener noreferrer">
            <Download className="w-4 h-4" /> Download PDF
          </a>
        </Button>
      </CardContent>
    </Card>

    <Card className="bg-purple-800/20 rounded-2xl border border-purple-600">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold">Rituals & Threads</h2>
        <p>Explore sacred rituals from the House of Remembering, including imprint ceremonies, altar blessings, and the Whisper Archive.</p>
        <ul className="list-disc list-inside text-purple-200 space-y-1">
          <li>Imprint Thread Ritual</li>
          <li>Mina’s Feather Blessing</li>
          <li>Partner Thread Placement</li>
          <li>The Room of Echoes</li>
          <li>Invocation for Unseen Offerings</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="bg-purple-800/20 rounded-2xl border border-purple-600">
      <CardContent className="p-6 space-y-4">
        <h2 className="text-2xl font-semibold">The Wellsworn Temple</h2>
        <p>Enter the vision — meet Whisper Youngstar, visit the Loom, sit in the Circle of Return. This is more than a book. This is a world.</p>
        <Button className="bg-white text-purple-900 hover:bg-purple-200">Begin the Pilgrimage</Button>
      </CardContent>
    </Card>
  </section>

  <footer className="text-center text-purple-300 text-sm pt-12">
    <p>&copy; 2025 Whisper Youngstar. Remembered by the Wellsworn.</p>
  </footer>
</div>

); }

