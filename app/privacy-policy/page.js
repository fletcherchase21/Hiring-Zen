// pages/privacy-policy.js
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className=" py-10 px-6 sm:px-10 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500">Effective date: 1st day of October, 2024</p>

        <section className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800">www.hiringzen.com Privacy Policy</h2>
          <p className="mt-4 text-gray-700">
            Effective date: 1st day of October, 2024
            <br />
            www.hiringzen.com (the "Site") is owned and operated by Fletcher Chase Ltd. Fletcher
            Chase Ltd is the data controller and can be contacted at: <a href="mailto:hello@hiringzen.com" className="text-blue-500">hello@hiringzen.com</a>
          </p>
        </section>

        <section className="mt-10">
          <h3 className="text-lg font-medium text-gray-800">Purpose</h3>
          <p className="mt-4 text-gray-700">
            The purpose of this privacy policy (this "Privacy Policy") is to inform users of our Site of the following:
          </p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>The personal data we will collect;</li>
            <li>Use of collected data;</li>
            <li>Who has access to the data collected;</li>
            <li>The rights of Site users;</li>
            <li>The Site's cookie policy.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h3 className="text-lg font-medium text-gray-800">GDPR Compliance</h3>
          <p className="mt-4 text-gray-700">
            For users in the European Union, we adhere to the Regulation (EU) 2016/679, known as the General Data Protection Regulation (the "GDPR"). For users in the United Kingdom, we adhere to the GDPR as enshrined in the Data Protection Act 2018.
          </p>
        </section>

        <section className="mt-10">
          <h3 className="text-lg font-medium text-gray-800">Consent</h3>
          <p className="mt-4 text-gray-700">
            By using our Site users agree that they consent to the conditions set out in this Privacy Policy. You can withdraw your consent at any time by contacting the company administrator.
          </p>
        </section>

        <section className="mt-10">
          <h3 className="text-lg font-medium text-gray-800">Personal Data We Collect</h3>
          <p className="mt-4 text-gray-700">We only collect data that helps us achieve the purpose set out in this Privacy Policy. We may collect the following data:</p>
          <ul className="list-disc list-inside mt-4 text-gray-700 space-y-2">
            <li>First and last name;</li>
            <li>Email address;</li>
            <li>Phone number;</li>
            <li>Address.</li>
          </ul>
        </section>

        <section className="mt-10">
          <h3 className="text-lg font-medium text-gray-800">Who We Share Personal Data With</h3>
          <p className="mt-4 text-gray-700">We may disclose user data to any member of our organization who reasonably needs access to user data to achieve the purposes set out in this Privacy Policy. We do not sell user data.</p>
        </section>

        <section className="mt-10">
          <h3 className="text-lg font-medium text-gray-800">Cookie Policy</h3>
          <p className="mt-4 text-gray-700">
            We use cookies to enhance the user experience and analyze traffic on our website. Users can choose to disable cookies in their browser settings.
          </p>
        </section>

        <section className="mt-10">
          <h3 className="text-lg font-medium text-gray-800">Your Rights</h3>
          <p className="mt-4 text-gray-700">
            As a user, you have rights under the GDPR including the right to be informed, access, rectify, erase, and more. Contact our privacy officer at: <a href="mailto:richard@hiringzen.com" className="text-blue-500">richard@hiringzen.com</a> for more information.
          </p>
        </section>

        <section className="mt-10">
          <h3 className="text-lg font-medium text-gray-800">Contact Information</h3>
          <p className="mt-4 text-gray-700">
            If you have any questions, concerns, or complaints, you can contact our privacy officer, Richard Snowden, at: <a href="mailto:richard@hiringzen.com" className="text-blue-500">richard@hiringzen.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
