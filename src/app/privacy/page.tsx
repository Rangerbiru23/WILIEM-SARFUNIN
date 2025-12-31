'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Database, Lock, UserCheck, Cookie } from 'lucide-react'
import Link from 'next/link'

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">WILEM SARFUNIN - Privacy Policy</h1>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="mx-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
              <Shield className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Kebijakan Privasi <span className="text-blue-600">WILEM SARFUNIN</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kami berkomitmen untuk melindungi privasi dan keamanan data pelanggan kami
            </p>
          </div>

          {/* Privacy Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  <span>Pendahuluan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Selamat datang di Kebijakan Privasi WILEM SARFUNIN. Dokumen ini menjelaskan bagaimana kami 
                  mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda ketika Anda 
                  menggunakan layanan minimarket kami.
                </p>
                <p>
                  WILEM SARFUNIN beroperasi sebagai minimarket yang menyediakan perdagangan eceran 
                  makanan, minuman, dan tembakau di ARUI BAB, Kepulauan Tanimbar, Maluku.
                </p>
                <p>
                  Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Information Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  <span>Informasi yang Kami Kumpulkan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Informasi Pribadi</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Nama lengkap</li>
                    <li>Nomor telepon</li>
                    <li>Alamat email (jika ada)</li>
                    <li>Alamat pengiriman</li>
                    <li>Informasi pembayaran</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Informasi Transaksi</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Riwayat pembelian</li>
                    <li>Produk yang dilihat</li>
                    <li>Preferensi produk</li>
                    <li>Waktu dan tanggal transaksi</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Informasi Teknis</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Alamat IP</li>
                    <li>Jenis perangkat</li>
                    <li>Browser yang digunakan</li>
                    <li>Data lokasi (dengan persetujuan)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                  <span>Cara Kami Menggunakan Informasi</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>Kami menggunakan informasi yang dikumpulkan untuk:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Memproses dan menyelesaikan transaksi pembelian</li>
                  <li>Menyediakan layanan pelanggan yang lebih baik</li>
                  <li>Mengirimkan informasi tentang produk dan promosi</li>
                  <li>Mempersonalisasi pengalaman berbelanja Anda</li>
                  <li>Meningkatkan kualitas produk dan layanan kami</li>
                  <li>Melakukan analisis pasar dan penelitian</li>
                  <li>Memenuhi kewajiban hukum dan peraturan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-blue-600" />
                  <span>Keamanan Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  WILEM SARFUNIN berkomitmen untuk melindungi keamanan informasi pribadi Anda. 
                  Kami menerapkan langkah-langkah keamanan yang wajar termasuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Enkripsi data sensitif</li>
                  <li>Akses terbatas ke informasi pribadi</li>
                  <li>Keamanan fisik dan digital lokasi penyimpanan data</li>
                  <li>Monitoring keamanan berkelanjutan</li>
                  <li>Pelatihan staf tentang keamanan data</li>
                </ul>
                <p>
                  Namun, perlu dipahami bahwa tidak ada metode transmisi internet atau penyimpanan 
                  elektronik yang 100% aman.
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Cookie className="w-5 h-5 text-blue-600" />
                  <span>Kebijakan Cookie</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Kami menggunakan cookie dan teknologi pelacakan serupa untuk meningkatkan pengalaman 
                  pengguna dan menganalisis traffic website. Cookie membantu kami:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mengingat preferensi Anda</li>
                  <li>Memahami bagaimana Anda menggunakan situs kami</li>
                  <li>Menyediakan konten yang relevan</li>
                  <li>Menganalisis efektivitas kampanye Meta Ads kami</li>
                </ul>
                <p>
                  Anda dapat mengatur browser untuk menolak cookie, namun ini dapat mempengaruhi 
                  fungsionalitas situs kami.
                </p>
              </CardContent>
            </Card>

            {/* Third Party Sharing */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                  <span>Pembagian Informasi dengan Pihak Ketiga</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Kami tidak menjual, memperdagangkan, atau menyewakan informasi pribadi Anda kepada pihak ketiga. 
                  Kami hanya berbagi informasi dalam keadaan berikut:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dengan persetujuan eksplisit Anda</li>
                  <li>Untuk memproses pembayaran (mitra pembayaran)</li>
                  <li>Untuk pengiriman produk (jasa pengiriman)</li>
                  <li>Untuk kepatuhan hukum atau perintah pengadilan</li>
                  <li>Dengan Meta untuk keperluan iklan dan analitik (dengan persetujuan)</li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                  <span>Hak Anda sebagai Pengguna</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>Sebagai pengguna, Anda memiliki hak untuk:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbaiki informasi yang tidak akurat</li>
                  <li>Menghapus informasi pribadi Anda (dengan batasan tertentu)</li>
                  <li>Menolak pemrosesan data tertentu</li>
                  <li>Meminta portabilitas data</li>
                  <li>Menarik persetujuan kapan saja</li>
                </ul>
                <p>
                  Untuk menggunakan hak-hak ini, silakan hubungi kami di nomor 085285703582.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserCheck className="w-5 h-5 text-blue-600" />
                  <span>Hubungi Kami</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau bagaimana kami 
                  menangani informasi pribadi Anda, silakan hubungi:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold">WILEM SARFUNIN</p>
                  <p>Alamat: ARUI BAB, Desa/Kelurahan Arui Bab, Kec. Wer Tamrian, Kab. Kepulauan Tanimbar, Provinsi Maluku</p>
                  <p>Telepon: 085285703582</p>
                </div>
              </CardContent>
            </Card>

            {/* Policy Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span>Pembaruan Kebijakan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu untuk mencerminkan 
                  perubahan dalam praktik kami atau perubahan hukum yang berlaku. Versi terbaru 
                  selalu tersedia di website kami.
                </p>
                <p className="text-sm text-gray-600">
                  Kebijakan Privasi ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <Link href="/">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                Kembali ke Beranda
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
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
                <p>085285703582</p>
                <p>ARUI BAB, Kepulauan Tanimbar, Maluku</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Links</h5>
              <div className="space-y-2">
                <a href="/" className="block text-gray-400 hover:text-white transition-colors">Beranda</a>
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