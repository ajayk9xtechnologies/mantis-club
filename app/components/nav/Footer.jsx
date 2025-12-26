import FormField from "./../forms/FormField";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0b] text-white px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

        {/* LEFT */}
        <div className="lg:col-span-2">
           

          <p className="text-gray-400 mt-6 max-w-xl">
            I am currently not available for freelance work. I am accepting
            new projects starting from February 2022.
          </p>

           <FormField/>
        </div>

        {/* RIGHT */}
        <div className="space-y-10 text-gray-400">
          <div>
            <h4 className="text-white font-medium mb-2">Contact Details</h4>
            <p>hello@huyng.xyz</p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-3">My Digital Spaces</h4>
            <ul className="space-y-2">
              <li className="hover:text-white cursor-pointer">Bento</li>
              <li className="hover:text-white cursor-pointer">GitHub</li>
              <li className="hover:text-white cursor-pointer">LinkedIn</li>
              <li className="hover:text-white cursor-pointer">YouTube</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-2">Location</h4>
            <p>Melbourne, Australia</p>
            <p className="mt-1 text-sm">5:30:33 PM</p>
          </div>
        </div>
      </div>
     </footer>
  );
}
