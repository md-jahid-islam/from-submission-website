import React from 'react';
import { FaGooglePlay, FaApple, FaSalesforce } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const FooterComponents = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 py-10 px-4 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">

        {/* Section 1 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Create a Form</h3>
          <ul className="space-y-1">
            <li><Link to={"/MyWorkspace"}>My Workspace</Link></li>
            <li><Link to={"/Pricing"}>Pricing</Link></li>
            <li><Link to={"/Enterprise"}>Mnterprise</Link></li>
            <li><Link to={"/Examples"}>Examples</Link></li>

          </ul>
        </div>

        {/* Section 2 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Products</h3>
          <ul className="space-y-1">
            <li> <Link to={"/Features"}>Features</Link> </li>
            <li> <Link to={"/Tools"}>Tools</Link> </li>
            <li> <Link to={"/Alternatives"}>Alternatives</Link> </li>
            <li> <Link to={"/Marketplace"}>Marketplace</Link> </li>
            <li> <Link to={"/Templates"}>Templates</Link> </li>
            <li> <Link to={"/FormThemes"}>Form Themes</Link> </li>
            <li> <Link to={"/Form Widgets"}>Form Widgets</Link> </li>
            <li> <Link to={"/Integrations"}>Integrations</Link> </li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Support</h3>
          <ul className="space-y-1">
            <li> <Link to={"/Contact Us"}>Contact Us</Link> </li>
            <li> <Link to={"/UserGuide"}>User Guide</Link> </li>
            <li> <Link to={"/Help"}>Help</Link> </li>
            <li> <Link to={"/Jotform Academy"}>Jotform Academy</Link> </li>
            <li> <Link to={"/Webinars"}>Webinars</Link> </li>
            <li> <Link to={"/ProfessionalServices"}>Professional Services</Link> </li>
            <li> <Link to={"/ReportAbuse"}>Report Abuse</Link> </li>
            <li> <Link to={"/ReportIssue"}>Report Copyright Issue</Link> </li>
            <li> <Link to={"/RecoverAccount"}>Recover Jotform Account</Link> </li>
          </ul>
        </div>

        {/* Section 4 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
          <ul className="space-y-1">
            <li> <Link to={"/AboutUs"}>About Us</Link> </li>
            <li> <Link to={"/Media Kit"}>Media Kit</Link> </li>
            <li> <Link to={"/News"}>In the News</Link> </li>
            <li> <Link to={"/Newsletters"}>Newsletters</Link> </li>
            <li> <Link to={"/Partnerships"}>Partnerships</Link> </li>
            <li> <Link to={"/Blog"}>Blog</Link> </li>
          </ul>
        </div>

        {/* Section 5 */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Get the App</h3>
          <ul className="space-y-2">
            <li className='flex items-center gap-2'> <Link to={"#"}>  <FaGooglePlay />Get it on Google Play</Link> </li>
            <li className='flex items-center gap-2'> <Link to={"#"}>  <FaApple /> Download on the App Store</Link> </li>
            <li className='flex items-center gap-2'> <Link to={"#"}>  <FaSalesforce /> Available on AppExchange</Link> </li>
          </ul>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} Your Website Name. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterComponents;
