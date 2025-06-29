import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Shield, Zap } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              {/* <ShoppingBag className="h-8 w-8 text-green-600" /> */}
              <Image src="/temuDataku.png" alt="Logo" width={40} height={40} />
              <span className="ml-2 text-2xl font-bold text-gray-900">TemuDataku</span>
            </div>
            <Link href="/login">
              <Button className="cursor-pointer ">Masuk</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
            Selamat Datang di <span className="text-green-600">TemuDataku</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Platform terpercaya untuk menemukan dan mengelola data produk berkualitas tinggi. Akses ribuan produk data dengan mudah dan aman.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Link href="/login">
              <Button size="lg" className="w-full sm:w-auto cursor-pointer">
                Mulai Sekarang
              </Button>
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-green-600" />
                <CardTitle>Komunitas Terpercaya</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Bergabung dengan ribuan pengguna yang telah mempercayai TemuDataku untuk kebutuhan data mereka.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-8 w-8 text-green-600" />
                <CardTitle>Keamanan Terjamin</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Data Anda dilindungi dengan enkripsi tingkat enterprise dan sistem keamanan berlapis.</CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="h-8 w-8 text-green-600" />
                <CardTitle>Akses Cepat</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Temukan dan akses data yang Anda butuhkan dalam hitungan detik dengan sistem pencarian canggih.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-green-600 rounded-lg shadow-xl">
          <div className="px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white">Siap untuk memulai?</h2>
              <p className="mt-4 text-lg text-green-100">Masuk sekarang dan jelajahi katalog produk data terlengkap.</p>
              <div className="mt-8">
                <Link href="/login">
                  <Button size="lg" variant="secondary" className="cursor-pointer">
                    Masuk ke TemuDataku
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 TemuDataku. Semua hak dilindungi.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
