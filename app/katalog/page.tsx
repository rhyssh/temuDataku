"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Search, LogOut, Database, FileText, BarChart3, Users } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: string;
  rating: number;
  dataSize: string;
  format: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Dataset E-commerce Indonesia",
    description: "Data transaksi e-commerce lengkap dengan analisis perilaku konsumen",
    category: "E-commerce",
    price: "Rp 2.500.000",
    rating: 4.8,
    dataSize: "50GB",
    format: "CSV, JSON",
  },
  {
    id: 2,
    name: "Data Demografi Jakarta",
    description: "Informasi demografis lengkap wilayah DKI Jakarta terbaru",
    category: "Demografi",
    price: "Rp 1.800.000",
    rating: 4.6,
    dataSize: "25GB",
    format: "Excel, CSV",
  },
  {
    id: 3,
    name: "Dataset Media Sosial",
    description: "Analisis sentimen dan trend media sosial Indonesia",
    category: "Social Media",
    price: "Rp 3.200.000",
    rating: 4.9,
    dataSize: "75GB",
    format: "JSON, XML",
  },
  {
    id: 4,
    name: "Data Keuangan Perusahaan",
    description: "Laporan keuangan perusahaan publik Indonesia 5 tahun terakhir",
    category: "Finance",
    price: "Rp 4.500.000",
    rating: 4.7,
    dataSize: "30GB",
    format: "Excel, PDF",
  },
  {
    id: 5,
    name: "Dataset Transportasi Online",
    description: "Data perjalanan dan pola mobilitas transportasi online",
    category: "Transportation",
    price: "Rp 2.800.000",
    rating: 4.5,
    dataSize: "40GB",
    format: "CSV, JSON",
  },
  {
    id: 6,
    name: "Data Properti Indonesia",
    description: "Harga dan trend properti di kota-kota besar Indonesia",
    category: "Real Estate",
    price: "Rp 3.500.000",
    rating: 4.8,
    dataSize: "35GB",
    format: "Excel, CSV",
  },
];

export default function KatalogPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const loggedIn = localStorage.getItem("isLoggedIn");
    const email = localStorage.getItem("userEmail");

    if (!loggedIn) {
      router.push("/login");
    } else {
      setIsLoggedIn(true);
      setUserEmail(email || "");
    }
  }, [router]);

  useEffect(() => {
    // Filter products based on search term
    const filtered = products.filter(
      (product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase()) || product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    router.push("/");
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "e-commerce":
        return <ShoppingBag className="h-4 w-4" />;
      case "demografi":
        return <Users className="h-4 w-4" />;
      case "social media":
        return <BarChart3 className="h-4 w-4" />;
      case "finance":
        return <FileText className="h-4 w-4" />;
      default:
        return <Database className="h-4 w-4" />;
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Memuat...</p>
        </div>
      </div>
    );
  }

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
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Halo, {userEmail}</span>
              <Button variant="outline" onClick={handleLogout} className="cursor-pointer">
                <LogOut className="h-4 w-4 mr-2" />
                Keluar
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Katalog Produk Data</h1>
          <p className="text-gray-600">Temukan dataset berkualitas tinggi untuk kebutuhan bisnis Anda</p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input type="text" placeholder="Cari produk data..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    {getCategoryIcon(product.category)}
                    {product.category}
                  </Badge>
                  <div className="flex items-center">
                    <span className="text-yellow-500">★</span>
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Ukuran Data:</span>
                    <span className="font-medium">{product.dataSize}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-medium">{product.format}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  <Button>Lihat Detail</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Database className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Tidak ada produk ditemukan</h3>
            <p className="text-gray-600">Coba ubah kata kunci pencarian Anda</p>
          </div>
        )}
      </main>
    </div>
  );
}
