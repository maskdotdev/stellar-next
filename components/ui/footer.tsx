import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const stellarRepo = "https://github.com/maskdotdev/stellar";
  const [detectedPlatform, setDetectedPlatform] = useState<string | null>(null);

  const releaseLinks = {
    "linux": [
      {
        name: "AppImage (x64)",
        url: "https://github.com/maskdotdev/stellar/releases/download/v0.0.2/Stellar_0.0.2_amd64.AppImage",
        description: "Universal Linux package (92.7 MB)"
      },
      {
        name: "AppImage (ARM64)",
        url: "https://github.com/maskdotdev/stellar/releases/download/v0.0.2/Stellar_0.0.2_aarch64.AppImage",
        description: "For ARM64 processors"
      },
      {
        name: "DEB Package",
        url: "https://github.com/maskdotdev/stellar/releases/download/v0.0.2/Stellar_0.0.2_amd64.deb",
        description: "For Debian/Ubuntu (10.3 MB)"
      },
      {
        name: "RPM Package",
        url: "https://github.com/maskdotdev/stellar/releases/download/v0.0.2/Stellar-0.0.2-1.x86_64.rpm",
        description: "For Red Hat/Fedora (10.3 MB)"
      }
    ],
    "macos": [
      {
        name: "macOS (Intel)",
        url: "https://github.com/maskdotdev/stellar/releases/download/v0.0.2/Stellar_0.0.2_x64.dmg",
        description: "For Intel Macs (9.2 MB)"
      },
      {
        name: "macOS (Apple Silicon)",
        url: "https://github.com/maskdotdev/stellar/releases/download/v0.0.2/Stellar_0.0.2_aarch64.dmg",
        description: "For M1/M2/M3 Macs (8.89 MB)"
      },
      {
        name: "macOS App (Intel)",
        url: "https://github.com/maskdotdev/stellar/releases/download/v0.0.2/Stellar_x64.app.tar.gz",
        description: "Intel Mac app archive"
      },
      {
        name: "macOS App (Apple Silicon)",
        url: "https://github.com/maskdotdev/stellar/releases/download/v0.0.2/Stellar_aarch64.app.tar.gz",
        description: "Apple Silicon app archive (8.66 MB)"
      }
    ],
    "windows": [
      {
        name: "Windows Installer (MSI)",
        url: "https://github.com/maskdotdev/stellar/releases/download/v0.0.2/Stellar_0.0.2_x64_en-US.msi",
        description: "For Windows x64 (8.57 MB)"
      },
      {
        name: "Windows Setup (EXE)",
        url: "https://github.com/maskdotdev/stellar/releases/download/v0.0.2/Stellar_0.0.2_x64-setup.exe",
        description: "Windows setup executable (6.18 MB)"
      }
    ]
  };

  useEffect(() => {
    const detectPlatform = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const platform = navigator.platform.toLowerCase();
      
      if (userAgent.includes('mac') || platform.includes('mac')) {
        setDetectedPlatform('macos');
      } else if (userAgent.includes('linux') || platform.includes('linux')) {
        setDetectedPlatform('linux');
      } else if (userAgent.includes('win') || platform.includes('win')) {
        setDetectedPlatform('windows');
      } else {
        setDetectedPlatform(null);
      }
    };

    detectPlatform();
  }, []);

  const handleDownloadClick = (url: string) => {
    window.open(url, "_blank");
  };

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case 'macos': return 'macOS';
      case 'linux': return 'Linux';
      case 'windows': return 'Windows';
      default: return 'Unknown';
    }
  };

  return (
    <footer className="border-t [border-image:linear-gradient(to_right,transparent,--theme(--color-teal-300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,--theme(--color-teal-300/.16),transparent)1] shadow-[0_1px_0_0_--theme(--color-white/.2)] dark:shadow-none">
      <div className="px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="py-8">
            {/* Top section with buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                    <Download className="w-4 h-4" />
                    Download for {detectedPlatform ? getPlatformName(detectedPlatform) : 'Your Platform'}
                    <ChevronDown className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80">
                  <DropdownMenuLabel>
                    Download for {detectedPlatform ? getPlatformName(detectedPlatform) : 'Your Platform'}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {detectedPlatform && releaseLinks[detectedPlatform as keyof typeof releaseLinks].map((release, index) => (
                    <DropdownMenuItem 
                      key={index}
                      onClick={() => handleDownloadClick(release.url)}
                      className="cursor-pointer p-3"
                    >
                      <div className="flex flex-col">
                        <div className="font-medium">{release.name}</div>
                        <div className="text-sm text-muted-foreground">{release.description}</div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                  {!detectedPlatform && (
                    <DropdownMenuItem onClick={() => handleDownloadClick(stellarRepo)}>
                      <div className="flex flex-col">
                        <div className="font-medium">View All Releases</div>
                        <div className="text-sm text-muted-foreground">Visit GitHub for download options</div>
                      </div>
                    </DropdownMenuItem>
                  )}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                variant="outline" 
                onClick={() => window.open(stellarRepo, "_blank")}
                className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-900/20"
              >
                View on GitHub
              </Button>
            </div>
            
            {/* Bottom section with logo and copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t [border-image:linear-gradient(to_right,transparent,--theme(--color-teal-300/.4),transparent)1] dark:[border-image:linear-gradient(to_right,transparent,--theme(--color-teal-300/.16),transparent)1]">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Link href="/">
                <Image
                  src="/images/stellar.svg"
                  alt="Stellar Logo"
                  width={100}
                  height={100}
                  className="w-10 h-10"
                />
              </Link>
                <span className="text-xl font-bold text-gray-800 dark:text-white">Stellar</span>
              </div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">
                © 2024 Stellar. Built for learners, by learners.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
