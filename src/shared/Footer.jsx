import logo from "../assets/images/logo-black.png";
import bgImg from "../assets/images/bgImg3.jpg";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-b from-zinc-500 to-neutral-600 text-black py-8 px-20 md:px-12 shadow-[0_-4px_20px_rgba(0,0,0,0.4)] overflow-hidden">
      {/* Background Image with Opacity */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      ></div> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex justify-between mb-11">
          {/* Logo and Description */}
          <div className="flex flex-col justify-start items-start space-y-6">
            <div>
              <img src={logo} alt="logo" className="w-[232px] h-[72px]" />
            </div>
            <p className="w-96 text-black text-xs font-normal font-unbounded leading-tight">
              The Radical Commons is a platform for sharing and exploring
              radical ideas and resources for collective liberation.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-black font-unbounded leading-normal flex flex-col justify-start items-start">
            <h3 className="text-base font-medium mb-5">Navigation</h3>
            <ul className="space-y-3 text-xs font-normal">
              <li>
                <a href="/" className="hover:text-[#EB4DAC] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/database"
                  className="hover:text-[#EB4DAC] transition-colors"
                >
                  Database
                </a>
              </li>
              <li>
                <a
                  href="/vaults"
                  className="hover:text-[#EB4DAC] transition-colors"
                >
                  Vaults
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="hover:text-[#EB4DAC] transition-colors"
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-black font-unbounded leading-normal flex flex-col justify-start items-start">
            <h3 className="text-base font-medium mb-5">Legal</h3>
            <ul className="space-y-3 text-xs font-normal">
              <li>
                <a
                  href="/terms"
                  className="hover:text-[#EB4DAC] transition-colors"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-[#EB4DAC] transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-[#EB4DAC] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-black pt-2">
          <p className="text-start text-black text-xs font-normal font-['Unbounded'] leading-tight">
            © 2025. The Radical Commons. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
