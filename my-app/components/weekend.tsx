"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import Image from "next/image";
import { GalleryModal } from "@/components/gallery-modal";

export function Weekend() {
  const albums = [
    {
      key: "bredene-2025",
      title: "Bredene 2025",
      cover: "/Bredene/20250315_144632.jpg",
      images: [
        "/Bredene/20250314_215347_001.jpg",
        "/Bredene/20250314_221916.jpg",
        "/Bredene/20250315_144632.jpg",
        "/Bredene/IMG-20250314-WA0004.jpg",
        "/Bredene/IMG-20250315-WA0005.jpg",
        "/Bredene/IMG-20250316-WA0012.jpg",
      ],
    },
    {
      key: "aubel-2023",
      title: "Aubel 2023",
      cover: "/Aubel/IMG_6355.jpg",
      images: [
        "/Aubel/IMG_6355.jpg",
        "/Aubel/006f4fc5-6bc8-403b-af1e-9cc4660673b4.JPG",
        "/Aubel/0f41e5f3-ce08-4bc5-918c-e58098fa452d.JPG",
        "/Aubel/5e1ecdd1-0ca5-4fb2-bc69-62a57aad34ba.JPG",
        "/Aubel/d837ecdd-988c-4cc2-85be-dab3901eaa33.JPG",
        "/Aubel/f1c105f0-35a3-4400-a844-7ae368cc7366.JPG",
        "/Aubel/fe413180-be53-491c-bcf5-61aa8d4bddba.JPG",
      ],
    },
    {
      key: "vencimont-2022",
      title: "Vencimont (La Pantoufle) 2022",
      cover: "/LaPantoufle/812e3af1-3da0-4d26-8834-ec07b50032bb.JPG",
      images: [
        "/LaPantoufle/47f1c3ff-6f1f-44f0-bc75-d11b6f303745.JPG",
        "/LaPantoufle/1605feee-7f34-44b6-a354-e274b0187fa2.JPG",
        "/LaPantoufle/34d9157b-8b69-4032-a693-660189afed48.JPG",
        "/LaPantoufle/812e3af1-3da0-4d26-8834-ec07b50032bb.JPG",
        "/LaPantoufle/b7bc3fda-11ea-443d-976c-dcf8e5b58be2.JPG",
        "/LaPantoufle/d1911f9b-110c-4b7d-9fd6-7265d8d6fc31.JPG",
      ],
    },
  ];

  const [activeAlbumKey, setActiveAlbumKey] = useState<string | null>(null);
  const activeAlbum = albums.find((a) => a.key === activeAlbumKey) || null;

  return (
    <section id="weekend" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Schaakweekend
            </h2>
            <p className="text-xl text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              In de tweede helft van het seizoen organiseren we nog een leuk
              schaakweekend, telkens op een rustige locatie ergens in een
              uithoek van België. Volledig vrijblijvend maar het is wel een
              grote aanrader!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {albums.map((album) => (
              <Card key={album.key} className="overflow-hidden border-2 hover:shadow-xl transition-shadow gap-0">
                <button
                  className="aspect-[4/3] bg-muted relative overflow-hidden group cursor-pointer"
                  onClick={() => setActiveAlbumKey(album.key)}
                  aria-label={`Open galerij ${album.title}`}
                >
                  <Image
                    src={album.cover}
                    alt={album.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                </button>
                <CardContent className="pt-3">
                  <h3 className="text-xl font-semibold mb-1">{album.title}</h3>
                  <Button onClick={() => setActiveAlbumKey(album.key)} size="sm" className="cursor-pointer">Bekijk foto's</Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex gap-3 mt-1">
                    <Trophy className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">
                      Einddiner met prijsuitreiking
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Op het einde van het seizoen houden we nog een culinair
                      diner als afsluiter. De winnaars worden daarbij
                      uitgeroepen en krijgen een flesje wijn of bier.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <GalleryModal
        isOpen={Boolean(activeAlbum)}
        onClose={() => setActiveAlbumKey(null)}
        title={activeAlbum?.title || ""}
        imagePaths={activeAlbum?.images || []}
      />
    </section>
  );
}
