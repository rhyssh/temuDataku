"use client";

import type React from "react";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate login process
    setTimeout(() => {
      if (email && password) {
        // Store login status in localStorage (simple simulation)
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);
        router.push("/katalog");
      } else {
        setError("Email dan password harus diisi");
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Beranda
          </Link>
          <div className="flex items-center justify-center mb-4">
            {/* <ShoppingBag className="h-8 w-8 text-green-600" /> */}
            <Image src="/temuDataku.png" alt="Logo" width={40} height={40} />
            <span className="ml-2 text-2xl font-bold text-gray-900">TemuDataku</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-center">Masuk ke Akun Anda</CardTitle>
            <CardDescription className="text-center">Masukkan email dan password untuk mengakses katalog produk</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="nama@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Masukkan password apa saja" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" className="w-full cursor-pointer" disabled={isLoading}>
                {isLoading ? "Memproses..." : "Masuk"}
              </Button>
            </form>

            <div className="mt-6 text-center text-sm text-gray-600">
              <p>
                💡 <strong>Tips:</strong> Gunakan email apa saja dan password apa saja untuk masuk
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
