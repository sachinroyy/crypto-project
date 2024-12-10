// src/pages/Policies.jsx
// import React from 'react';

const Policies = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-6">
        Policies and Regulations
      </h1>
      <p className="text-gray-700 mb-4">
        Welcome to Crypto Ventures. We are committed to ensuring that our
        platform is transparent, secure, and compliant with all regulations
        applicable to cryptocurrency. Please read our policies carefully.
      </p>

      <h2 className="text-2xl font-semibold mt-6">1. User Privacy Policy</h2>
      <p className="text-gray-700 mb-4">
        At Crypto Ventures, your privacy is our priority. We do not sell or
        share your personal information without your consent. All data is
        encrypted and stored securely.
      </p>

      <h2 className="text-2xl font-semibold mt-6">2. Data Security</h2>
      <p className="text-gray-700 mb-4">
        We implement robust security measures to protect your data from
        unauthorized access and breaches. Our platform uses advanced encryption
        technologies and security protocols.
      </p>

      <h2 className="text-2xl font-semibold mt-6">
        3. Compliance with Regulations
      </h2>
      <p className="text-gray-700 mb-4">
        Crypto Ventures adheres to all applicable laws and regulations governing
        cryptocurrency operations. We continuously monitor changes in the
        regulatory landscape to ensure compliance.
      </p>

      <h2 className="text-2xl font-semibold mt-6">4. Risk Disclosure</h2>
      <p className="text-gray-700 mb-4">
        Trading and investing in cryptocurrencies involves a significant risk of
        loss. Crypto Ventures encourages users to carefully assess their
        investment objectives and risk tolerance before engaging in any
        transactions.
      </p>

      <h2 className="text-2xl font-semibold mt-6">5. Terms of Service</h2>
      <p className="text-gray-700 mb-4">
        By using our platform, you agree to comply with our Terms of Service.
        These terms govern your access to and use of Crypto Ventures and its
        services. Please review them periodically for updates.
      </p>

      <h2 className="text-2xl font-semibold mt-6">6. Customer Support</h2>
      <p className="text-gray-700 mb-4">
        If you have any questions or concerns regarding our policies, please
        contact our support team. We are here to assist you and ensure that your
        experience with Crypto Ventures is positive and secure.
      </p>

      <h2 className="text-2xl font-semibold mt-6">7. Changes to Policies</h2>
      <p className="text-gray-700 mb-4">
        Crypto Ventures reserves the right to modify these policies at any time.
        We will notify users of significant changes through our platform.
        Continued use of our services constitutes acceptance of the updated
        policies.
      </p>

      <h2 className="text-2xl font-semibold mt-6">8. Contact Information</h2>
      <p className="text-gray-700 mb-4">
        For inquiries regarding our policies, please reach out to us at
        support@cryptoventures.com.
      </p>

      <div className="text-center mt-8">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Crypto Ventures. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Policies;
