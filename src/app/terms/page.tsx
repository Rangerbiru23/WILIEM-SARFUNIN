'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, ShoppingBag, CreditCard, Users, AlertTriangle, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-blue-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">WILEM SARFUNIN - Terms & Conditions</h1>
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
              <FileText className="w-10 h-10" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Syarat & Ketentuan <span className="text-blue-600">WILEM SARFUNIN</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ketentuan penggunaan layanan minimarket kami untuk pengalaman berbelanja yang aman dan nyaman
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>Pendahuluan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Selamat datang di WILEM SARFUNIN. Syarat dan Ketentuan ini mengatur penggunaan 
                  layanan minimarket kami yang menyediakan perdagangan eceran makanan, minuman, dan tembakau.
                </p>
                <p>
                  Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh 
                  syarat dan ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari 
                  ketentuan ini, Anda tidak boleh menggunakan layanan kami.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold">Informasi Perusahaan:</p>
                  <p><strong>Nama:</strong> WILEM SARFUNIN</p>
                  <p><strong>Alamat:</strong> ARUI BAB, Desa/Kelurahan Arui Bab, Kec. Wer Tamrian, Kab. Kepulauan Tanimbar, Provinsi Maluku</p>
                  <p><strong>Telepon:</strong> 085285703582</p>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5 text-blue-600" />
                  <span>Layanan Kami</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>WILEM SARFUNIN menyediakan layanan berikut:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Perdagangan eceran makanan dan minuman</li>
                  <li>Penjualan tembakau dan produk terkait</li>
                  <li>Layanan pelanggan dan konsultasi produk</li>
                  <li>Informasi promosi dan diskon</li>
                  <li>Layanan pengiriman (jika tersedia)</li>
                  <li>Program loyalitas pelanggan</li>
                </ul>
                <p>
                  Kami berhak mengubah atau menambah layanan yang tersedia sewaktu-waktu 
                  dengan pemberitahuan sebelumnya.
                </p>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span>Kewajiban Pengguna</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>Sebagai pengguna layanan kami, Anda setuju untuk:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Mematuhi semua peraturan yang berlaku</li>
                  <li>Tidak menggunakan layanan untuk kegiatan ilegal</li>
                  <li>Memperlakukan staf dan pelanggan lain dengan hormat</li>
                  <li>Mematuhi batasan usia untuk pembelian tembakau (18+)</li>
                  <li>Tidak merusak atau mencuri properti toko</li>
                  <li>Melakukan pembayaran sesuai dengan harga yang ditetapkan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                  <span>Syarat Pembayaran</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Metode Pembayaran</h4>
                  <p>Kami menerima metode pembayaran berikut:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Tunai</li>
                    <li>Transfer bank (jika tersedia)</li>
                    <li>E-wallet (jika tersedia)</li>
                    <li>Kartu debit/kredit (jika tersedia)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Kebijakan Harga</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Harga yang tertera adalah harga akhir</li>
                    <li>Kami berhak mengubah harga tanpa pemberitahuan sebelumnya</li>
                    <li>Harga dapat berbeda untuk produk promosi</li>
                    <li>Pajak yang berlaku sudah termasuk dalam harga</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Pengembalian Dana</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Pengembalian dana hanya untuk produk rusak atau kadaluarsa</li>
                    <li>Bukti pembelian diperlukan untuk pengembalian</li>
                    <li>Pengembalian diproses dalam 3-5 hari kerja</li>
                    <li>Produk yang sudah dibuka tidak dapat dikembalikan</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Product Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <ShoppingBag className="w-5 h-5 text-blue-600" />
                  <span>Informasi Produk</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Kami berusaha menyediakan informasi produk yang akurat, namun:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kami tidak bertanggung jawab atas kesalahan kecil dalam informasi produk</li>
                  <li>Kemasan produk dapat berbeda dari gambar yang ditampilkan</li>
                  <li>Ketersediaan produk dapat berubah sewaktu-waktu</li>
                  <li>Kami berhak membatasi jumlah pembelian per produk</li>
                  <li>Produk tembakau hanya dijual kepada pembeli yang memenuhi syarat usia</li>
                </ul>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-blue-600" />
                  <span>Batasan Tanggung Jawab</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Sejauh diizinkan oleh hukum, WILEM SARFUNIN tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Kerugian tidak langsung, insidental, atau konsekuensial</li>
                  <li>Kehilangan keuntungan atau data</li>
                  <li>Kerusakan yang disebabkan oleh penggunaan produk yang tidak tepat</li>
                  <li>Gangguan layanan yang disebabkan oleh faktor di luar kendali kami</li>
                  <li>Alergi atau reaksi terhadap produk yang dikonsumsi</li>
                </ul>
                <p>
                  Tanggung jawab maksimal kami tidak melebihi nilai pembelian produk yang bersangkutan.
                </p>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>Hak Kekayaan Intelektual</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Semua konten, merek dagang, logo, dan materi intelektual lainnya yang 
                  terdapat dalam layanan kami adalah milik WILEM SARFUNIN atau pemberi lisensi kami.
                </p>
                <p>
                  Anda dilarang:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Menggunakan merek dagang atau logo kami tanpa izin</li>
                  <li>Menyalin, mendistribusikan, atau menampilkan ulang konten kami</li>
                  <li>Menggunakan konten kami untuk tujuan komersial</li>
                  <li>Membuat karya turunan dari materi kami</li>
                </ul>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Privasi dan Data</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Privasi Anda penting bagi kami. Penggunaan data pribadi Anda diatur 
                  oleh Kebijakan Privasi kami yang tersedia terpisah.
                </p>
                <p>
                  Dengan menggunakan layanan kami, Anda setuju dengan:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Pengumpulan data sesuai Kebijakan Privasi kami</li>
                  <li>Penggunaan cookie dan teknologi pelacakan</li>
                  <li>Pengiriman komunikasi promosi (dengan persetujuan)</li>
                  <li>Analisis data untuk meningkatkan layanan</li>
                </ul>
              </CardContent>
            </Card>

            {/* Prohibited Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-blue-600" />
                  <span>Aktivitas yang Dilarang</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Anda dilarang melakukan aktivitas berikut saat menggunakan layanan kami:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Membeli produk tembakau jika di bawah 18 tahun</li>
                  <li>Menjual kembali produk kami tanpa izin</li>
                  <li>Memalsukan produk atau merek</li>
                  <li>Mengganggu operasional toko</li>
                  <li>Melakukan pencurian atau penipuan</li>
                  <li>Menggunakan layanan untuk kegiatan ilegal</li>
                  <li>Melecehkan staf atau pelanggan lain</li>
                </ul>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-blue-600" />
                  <span>Terminasi Layanan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Kami berhak:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Menangguhkan atau menghentikan layanan Anda sewaktu-waktu</li>
                  <li>Menolak layanan kepada siapa pun dengan alasan apa pun</li>
                  <li>Mengubah atau menghentikan layanan tanpa pemberitahuan</li>
                </ul>
                <p>
                  Pelanggaran terhadap syarat dan ketentuan ini dapat mengakibatkan 
                  penghentian segera akses layanan Anda.
                </p>
              </CardContent>
            </Card>

            {/* Governing Law */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>Hukum yang Berlaku</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan 
                  hukum yang berlaku di Republik Indonesia.
                </p>
                <p>
                  Setiap sengketa yang timbul dari atau berhubungan dengan syarat dan 
                  ketentuan ini akan diselesaikan melalui perundingan baik-baik. 
                  Jika tidak mencapai kesepakatan, sengketa akan diselesaikan melalui 
                  pengadilan yang berwenang di wilayah hukum kami.
                </p>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span>Hubungi Kami</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, 
                  silakan hubungi kami:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-semibold">WILEM SARFUNIN</p>
                  <p>Alamat: ARUI BAB, Desa/Kelurahan Arui Bab, Kec. Wer Tamrian, Kab. Kepulauan Tanimbar, Provinsi Maluku</p>
                  <p>Telepon: 085285703582</p>
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>Pembaruan Syarat & Ketentuan</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Kami dapat memperbarui Syarat dan Ketentuan ini dari waktu ke waktu. 
                  Perubahan akan berlaku efektif segera setelah dipublikasikan di website kami.
                </p>
                <p>
                  Penggunaan berkelanjutan layanan kami setelah perubahan merupakan 
                  penerimaan Anda terhadap syarat dan ketentuan yang diperbarui.
                </p>
                <p className="text-sm text-gray-600">
                  Syarat dan Ketentuan ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID', { 
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
                  <FileText className="w-5 h-5 text-white" />
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