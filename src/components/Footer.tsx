import { Link } from "react-router-dom";
import logo from "../assets/LOGO.png"; // لوغو IEEE
import linkedinLogo from "../assets/174857.png"; // لوغو لينكدإن الأزرق
import instagramLogo from "../assets/instagram-vector-social-media-icon-7-june-2021-bangkok-thailand_53876-136728.avif"; // لوغو Instagram رسمي الأزرق

const Footer = () => (
  <footer className="border-t border-border bg-muted/50">
    <div className="container mx-auto px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* قسم اللوغو والاسم الرسمي */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <img
              src={logo}
              alt="IEEE INU Logo"
              className="w-25 h-12 rounded-lg object-cover"
            />
            <span className="font-bold text-foreground tracking-tight">
              IEEE INU Student Branch
            </span>
          </div>

          <p className="body-text text-sm mb-4">
            Advancing technology for the benefit of humanity at Irbid National University.
          </p>

          {/* قسم مصممي الموقع */}
          <div className="mb-4">
            <h4 className="label-text mb-2">Developed by</h4>
            <ul className="space-y-2 flex flex-col gap-2">
              {[
                { name: "Salsaabiel Derbas", link: "https://www.linkedin.com/in/salsder/" },
                { name: "Mohmad Ghanem", link: "https://www.linkedin.com/in/mohmad-ghanem-459324365" },
              ].map((designer) => (
                <li key={designer.name} className="flex items-center gap-2">
                  <a
                    href={designer.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                  >
                    {designer.name}
                  </a>
                  <a
                    href={designer.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-shrink-0"
                  >
                    <img
                      src={linkedinLogo}
                      alt="LinkedIn"
                      className="w-5 h-5 object-contain hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* روابط سريعة */}
        <div>
          <h4 className="label-text mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About", "Committees", "Events", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Involved مع أيقونات التواصل الاجتماعي */}
        <div>
          <h4 className="label-text mb-4">Get Involved</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/join"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Join IEEE INU
              </Link>
            </li>
            <li>
              <a
                href="https://www.ieee.org"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                IEEE Global
              </a>
            </li>
          </ul>
         {/* أيقونات التواصل */}
<div className="flex items-center gap-4 mt-4">
  <a
    href="https://www.linkedin.com/in/ieee-inu-5a333a3a1/"
    target="_blank"
    rel="noreferrer"
    className="hover:scale-110 transition-transform duration-300"
  >
    <img
      src={linkedinLogo}
      alt="IEEE INU LinkedIn"
      className="w-5 h-5 object-contain"
    />
  </a>
  <a
    href="https://www.instagram.com/ieee_inu/"
    target="_blank"
    rel="noreferrer"
    className="hover:scale-110 transition-transform duration-300"
  >
    <img
      src={instagramLogo}
      alt="IEEE INU Instagram"
      className="w-8 h-9 object-contain"
    />
  </a>
</div>
        </div>
      </div>

      {/* حقوق الملكية */}
      <div className="mt-10 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} IEEE INU Student Branch. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;