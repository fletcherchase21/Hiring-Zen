import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
        
        <p className="text-right text-gray-500 italic">Effective date: 1st day of October, 2024</p>
        
        <section className="mt-4">
          <h2 className="text-xl font-semibold mb-2">www.hiringzen.com Privacy Policy</h2>
          <p className="mb-4">Effective date: 1st day of October, 2024</p>

          <p className="mb-4">
            www.hiringzen.com (the "Site") is owned and operated by Fletcher Chase Ltd. Fletcher Chase Ltd is the data controller and can be contacted at: 
            <a href="mailto:hello@hiringzen.com" className="text-blue-500"> hello@hiringzen.com</a>
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Purpose</h2>
          <p className="mb-4">
            The purpose of this privacy policy (this "Privacy Policy") is to inform users of our Site of the following:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>The personal data we will collect;</li>
            <li>Use of collected data;</li>
            <li>Who has access to the data collected;</li>
            <li>The rights of Site users;</li>
            <li>The Site's cookie policy.</li>
          </ul>
          <p className="mt-4">This Privacy Policy applies in addition to the terms and conditions of our Site.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">GDPR</h2>
          <p className="mb-4">
            For users in the European Union, we adhere to the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016, known as the General Data Protection Regulation (the "GDPR"). 
            For users in the United Kingdom, we adhere to the GDPR as enshrined in the Data Protection Act 2018.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Consent</h2>
          <p className="mb-4">
            By using our Site, users agree that they consent to:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>The conditions set out in this Privacy Policy.</li>
          </ul>
          <p className="mt-4">
            You can withdraw your consent by contacting the company administrator.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Legal Basis for Processing</h2>
          <p className="mb-4">
            We collect and process personal data about users in the EU only when we have a legal basis for doing so under Article 6 of the GDPR.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Users have provided their consent to the processing of their data for one or more specific purposes; and</li>
            <li>Processing of user personal data is necessary for us or a third party to pursue a legitimate interest, such as reviewing submitted resumes.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Personal Data We Collect</h2>
          <p className="mb-4">
            We only collect data that helps us achieve the purpose set out in this Privacy Policy. We may collect the following data:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>First and last name;</li>
            <li>Email address;</li>
            <li>Phone number;</li>
            <li>Address.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">How We Use Personal Data</h2>
          <p className="mb-4">
            The data we collect may be used for approved communication.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Who We Share Personal Data With</h2>
          <p className="mb-4">
            We may disclose user data to any member of our organization who reasonably needs access to user data. We will not sell or share your data with third parties, except in the following cases:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>If the law requires it;</li>
            <li>For legal proceedings;</li>
            <li>To protect our legal rights;</li>
            <li>To buyers in the event of a company sale.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Your Rights</h2>
          <p className="mb-4">As a user, you have the following rights under the GDPR:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Right to be informed;</li>
            <li>Right of access;</li>
            <li>Right to rectification;</li>
            <li>Right to erasure;</li>
            <li>Right to restrict processing;</li>
            <li>Right to data portability;</li>
            <li>Right to object.</li>
          </ul>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Children</h2>
          <p className="mb-4">
            We do not knowingly collect data from children under 16. If you believe we have done so, please contact us to delete the data.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Cookie Policy</h2>
          <p className="mb-4">
            We use functional and analytical cookies to enhance your experience. You can disable cookies in your browser settings.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Modifications</h2>
          <p className="mb-4">
            This Privacy Policy may be updated from time to time. We recommend checking periodically for updates.
          </p>
        </section>

        <section className="mt-6">
          <h2 className="text-lg font-semibold mb-3">Contact Information</h2>
          <p className="mb-4">
            If you have any questions, please contact our privacy officer: 
            <a href="mailto:richard@hiringzen.com" className="text-blue-500"> richard@hiringzen.com</a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
