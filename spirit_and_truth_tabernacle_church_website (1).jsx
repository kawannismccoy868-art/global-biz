import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Globe,
  BookOpen,
  Users,
  Mail,
  PlayCircle,
  HeartHandshake,
  MapPin,
  Clock,
} from "lucide-react";

export default function ChurchWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-black to-purple-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md shadow-xl">
        <div className="flex items-center justify-between px-8 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="The Spirit and Truth Tabernacle Global Missions Ministries Logo"
              className="h-16 w-auto object-contain"
            />
            <div className="text-left">
              <h1 className="text-xl md:text-2xl font-bold text-[#D4AF37]">
                The Spirit and Truth Tabernacle
              </h1>
              <p className="text-xs md:text-sm text-purple-300">
                Global Missions Ministries
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium text-[#D4AF37]">
            <a href="#about">About</a>
            <a href="#pastor">Pastor</a>
            <a href="#staff">Staff</a>
            <a href="#services">Services</a>
            <a href="#missions">Missions</a>
            <a href="#gallery">Gallery</a>
            <a href="#sermons">Sermons</a>
            <a href="#give">Give</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative text-center px-6 py-36">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl font-extrabold text-[#D4AF37]"
        >
          Worshipping God in Spirit & Truth
        </motion.h2>

        <p className="mt-6 max-w-3xl mx-auto text-purple-200 text-lg">
          A local and global ministry advancing the Kingdom of God through apostolic teaching,
          prophetic worship, and worldwide missions.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button className="bg-[#D4AF37] text-black hover:bg-yellow-400">
            Plan Your Visit
          </Button>

          <Button
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37] flex gap-2"
            onClick={() =>
              document
                .getElementById("livestream")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <PlayCircle size={18} /> Watch Live
          </Button>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-8 py-28 bg-black/60">
        <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-10">
          Who We Are
        </h3>
        <p className="max-w-4xl mx-auto text-center text-purple-200 text-lg">
          The Spirit and Truth Tabernacle Global Missions Ministries is a Christ‑centered,
          Spirit‑led church committed to the uncompromised Word of God, spiritual maturity,
          and transforming lives and nations through Jesus Christ.
        </p>
      </section>

      {/* Pastor */}
      <section id="pastor" className="px-8 py-28">
        <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-12">
          Senior Pastor
        </h3>
        <div className="max-w-5xl mx-auto">
          <Card className="bg-purple-950/80 border-[#D4AF37] shadow-xl">
            <CardContent className="p-10 text-center">
              <h4 className="text-2xl font-semibold text-[#D4AF37]">
                Pastor Kawannis McCoy
              </h4>
              <p className="mt-6 text-purple-200 text-lg">
                Pastor Kawannis McCoy is a visionary pastor, teacher, and global voice with a passion
                for sound doctrine, spiritual growth, and equipping believers to walk in truth,
                authority, and purpose.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Staff */}
      <section id="staff" className="px-8 py-28 bg-black/60">
        <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-12">
          Meet Our Staff
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Associate Pastor", "Ministry Coordinator", "Worship Leader"].map((role, i) => (
            <Card key={i} className="bg-purple-950/80 border-[#D4AF37] shadow-lg">
              <CardContent className="p-8 text-center">
                <Users className="mx-auto text-[#D4AF37]" />
                <h4 className="mt-4 text-xl font-semibold text-[#D4AF37]">
                  Staff Member Name
                </h4>
                <p className="text-purple-300 mt-2">{role}</p>
                <p className="text-purple-200 mt-4 text-sm">
                  Dedicated servant supporting the vision and ministry of the church.
                </p>
                <Button
                  variant="outline"
                  className="mt-5 border-[#D4AF37] text-[#D4AF37] flex items-center gap-2 mx-auto"
                  asChild
                >
                  <a href="mailto:staff@spiritandtruthtabernacle.org">
                    <Mail size={16} /> Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="px-8 py-28 bg-black/60">
        <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-12">
          Service Times
        </h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="bg-purple-950/80 border-[#D4AF37]">
            <CardContent className="p-8 text-center">
              <Clock className="mx-auto text-[#D4AF37]" />
              <h5 className="mt-4 font-semibold text-[#D4AF37]">Sunday Worship</h5>
              <p className="text-purple-200 mt-2">10:00 AM (In‑Person & Online)</p>
            </CardContent>
          </Card>
          <Card className="bg-purple-950/80 border-[#D4AF37]">
            <CardContent className="p-8 text-center">
              <BookOpen className="mx-auto text-[#D4AF37]" />
              <h5 className="mt-4 font-semibold text-[#D4AF37]">Bible Study</h5>
              <p className="text-purple-200 mt-2">Wednesday • 7:00 PM (Online)</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Missions */}
      <section id="missions" className="px-8 py-28">
        <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-12">
          Our Mission
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-purple-950/80 border-[#D4AF37]">
            <CardContent className="p-6 text-center">
              <Globe className="mx-auto text-[#D4AF37]" />
              <h5 className="mt-4 font-semibold text-[#D4AF37]">Global Outreach</h5>
              <p className="text-purple-200 mt-2">
                Carrying the Gospel across nations and cultures.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-purple-950/80 border-[#D4AF37]">
            <CardContent className="p-6 text-center">
              <Users className="mx-auto text-[#D4AF37]" />
              <h5 className="mt-4 font-semibold text-[#D4AF37]">Discipleship</h5>
              <p className="text-purple-200 mt-2">
                Building mature believers rooted in truth.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-purple-950/80 border-[#D4AF37]">
            <CardContent className="p-6 text-center">
              <HeartHandshake className="mx-auto text-[#D4AF37]" />
              <h5 className="mt-4 font-semibold text-[#D4AF37]">Community Impact</h5>
              <p className="text-purple-200 mt-2">
                Serving people with compassion and power.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="px-8 py-28 bg-black/60">
        <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-12">
          Ministry Gallery
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["/gallery/1.jpg", "/gallery/2.jpg", "/gallery/3.jpg", "/gallery/4.jpg", "/gallery/5.jpg", "/gallery/6.jpg"].map(
            (img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-[#D4AF37] shadow-lg"
              >
                <img
                  src={img}
                  alt="Church Gallery"
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            )
          )}
        </div>
      </section>

      {/* Sermons */}
      <section id="sermons" className="px-8 py-28">
        <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-12">
          Sermon Library
        </h3>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {["VIDEO_ID_1", "VIDEO_ID_2"].map((vid, i) => (
            <div
              key={i}
              className="aspect-video rounded-2xl overflow-hidden border border-[#D4AF37] shadow-xl"
            >
              <iframe
                src={`https://www.youtube.com/embed/${vid}`}
                title="Sermon Video"
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      </section>

      {/* Livestream */}
      <section id="livestream" className="px-8 py-28 bg-black/60">
        <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-12">
          Live Stream Schedule
        </h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bg-purple-950/80 border-[#D4AF37]">
            <CardContent className="p-8 text-center">
              <PlayCircle className="mx-auto text-[#D4AF37]" />
              <h5 className="mt-4 font-semibold text-[#D4AF37]">
                Sunday Worship Live
              </h5>
              <p className="text-purple-200 mt-2">Sundays • 10:00 AM EST</p>
              <Button className="mt-4 bg-[#D4AF37] text-black hover:bg-yellow-400">
                Watch Live
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-purple-950/80 border-[#D4AF37]">
            <CardContent className="p-8 text-center">
              <PlayCircle className="mx-auto text-[#D4AF37]" />
              <h5 className="mt-4 font-semibold text-[#D4AF37]">
                Midweek Bible Study
              </h5>
              <p className="text-purple-200 mt-2">Wednesdays • 7:00 PM EST</p>
              <Button className="mt-4 bg-[#D4AF37] text-black hover:bg-yellow-400">
                Join Live
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Giving */}
      <section id="give" className="px-8 py-28 bg-black/60 text-center">
        <h3 className="text-3xl font-bold text-[#D4AF37] mb-6">Give & Support</h3>
        <p className="max-w-2xl mx-auto text-purple-200 mb-10">
          Your generosity helps us advance the Gospel locally and globally.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            className="bg-[#D4AF37] text-black hover:bg-yellow-400"
            asChild
          >
            <a href="https://www.givelify.com" target="_blank" rel="noreferrer">
              Give with Givelify
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37]"
            asChild
          >
            <a href="https://tithe.ly" target="_blank" rel="noreferrer">
              Give with Tithe.ly
            </a>
          </Button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 py-28">
        <h3 className="text-3xl font-bold text-center text-[#D4AF37] mb-10">
          Connect With Us
        </h3>
        <div className="text-center space-y-4">
          <Mail className="mx-auto text-[#D4AF37]" />
          <p className="text-purple-200">info@spiritandtruthtabernacle.org</p>
          <div className="flex justify-center gap-2 text-purple-300">
            <MapPin size={16} /> <span>Local & Global Ministry</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-center py-6 text-sm text-purple-300">
        © {new Date().getFullYear()} The Spirit and Truth Tabernacle Global Missions Ministries. All rights reserved.
      </footer>
    </div>
  );
}
