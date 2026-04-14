<footer className="h-50 w-full bg-[#1e4637] text-white flex flex-col justify-between px-10 py-8">
  {/* Top Section: Branding and Socials */}
  <div className="flex flex-col items-center justify-center flex-1 text-center">
    <h2 className="text-4xl font-bold mb-2">KeenKeeper</h2>
    <p className="text-sm opacity-80 max-w-xl mb-4">
      Your personal shelf of meaningful connections. Browse, tend, and nurture
      the relationships that matter most.
    </p>

    <div className="flex flex-col items-center gap-3">
      <span className="text-sm font-medium">Social Links</span>
      <div className="flex gap-4">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
          <i className="fa-brands fa-facebook-f"></i>
        </div>
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-black">
          <i className="fa-brands fa-x-twitter"></i>
        </div>
      </div>
    </div>
  </div>

  {/* Bottom Section: Copyright and Links */}
  <div className="flex justify-between items-center text-xs opacity-60 border-t border-white/10 pt-4">
    <p>© 2026 KeenKeeper. All rights reserved.</p>
    <div className="flex gap-6">
      <a href="#" className="hover:underline">
        Privacy Policy
      </a>
      <a href="#" className="hover:underline">
        Terms of Service
      </a>
      <a href="#" className="hover:underline">
        Cookies
      </a>
    </div>
  </div>
</footer>;
