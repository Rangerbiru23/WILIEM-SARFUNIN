'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, MapPin, ShoppingCart, Store, TrendingUp, Users, Target } from 'lucide-react'

export default function Home() {
  const [activeService, setActiveService] = useState<number | null>(null)

  const services = [
    {
      id: 1,
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Produk Berkualitas",
      description: "Menyediakan berbagai makanan, minuman, dan tembakau berkualitas tinggi"
    },
    {
      id: 2,
      icon: <Store className="w-8 h-8" />,
      title: "Layanan Prima",
      description: "Pelayanan ramah dan profesional untuk kepuasan pelanggan"
    },
    {
      id: 3,
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Harga Kompetitif",
      description: "Harga terjangkau dengan kualitas terbaik di pasaran"
    },
    {
      id: 4,
      icon: <Users className="w-8 h-8" />,
      title: "Meta Ads Integration",
      description: "Promosi digital modern untuk menjangkau lebih banyak pelanggan"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Store className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">WILEM SARFUNIN</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">Privasi</a>
              <a href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">Syarat & Ketentuan</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4 relative">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/minimarket-storefront.png" 
            alt="WILEM SARFUNIN Minimarket" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
            <Target className="w-4 h-4 mr-2" />
            Meta Ads Powered
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            WILEM SARFUNIN
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Minimarket Modern dengan Perdagangan Eceran Makanan, Minuman, dan Tembakau Berkualitas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Belanja Sekarang
            </Button>
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Layanan Unggulan Kami</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan terbaik untuk memenuhi kebutuhan sehari-hari Anda
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id} 
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  activeService === service.id ? 'ring-2 ring-blue-600 shadow-lg' : ''
                }`}
                onClick={() => setActiveService(service.id)}
              >
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-blue-600">WILEM SARFUNIN</span>
              </h3>
              <p className="text-gray-600 mb-6">
                WILEM SARFUNIN adalah minimarket modern yang berdedikasi untuk menyediakan 
                produk makanan, minuman, dan tembakau berkualitas tinggi untuk masyarakat 
                Kepulauan Tanimbar dan sekitarnya.
              </p>
              <p className="text-gray-600 mb-6">
                Dengan integrasi Meta Ads, kami memastikan promosi yang efektif dan 
                jangkauan yang luas untuk memberikan layanan terbaik kepada pelanggan kami.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">ARUI BAB, Desa/Kelurahan Arui Bab, Kec. Wer Tamrian, Kab. Kepulauan Tanimbar, Provinsi Maluku</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">085285703582</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/minimarket-interior.png" 
                alt="Interior Minimarket WILEM SARFUNIN" 
                className="rounded-2xl shadow-lg w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Siap Berbelanja dengan Nyaman?
          </h3>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Dapatkan produk berkualitas dengan harga terbaik hanya di WILEM SARFUNIN minimarket
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            <Phone className="w-5 h-5 mr-2" />
            Hubungi Sekarang: 085285703582
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Store className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-xl font-bold">WILEM SARFUNIN</h4>
              </div>
              <p className="text-gray-400">
                Minimarket modern dengan produk berkualitas dan layanan prima
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Kontak Kami</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="w-4 h-4" />
                  <span>085285703582</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>ARUI BAB, Kepulauan Tanimbar, Maluku</span>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Links</h5>
              <div className="space-y-2">
                <a href="/privacy" className="block text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                <a href="/terms" className="block text-gray-400 hover:text-white transition-colors">Terms & Conditions</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WILEM SARFUNIN. All rights reserved. Powered by Meta Ads</p>
          </div>
        </div>
      </footer>
    </div>
  )
}