import Link from 'next/link';
import React from 'react';

const termsOfService = [
  {
    title: "",
    description: `<p>These terms and conditions (the "Terms and Conditions") govern the use of www.hiringzen.com (the "Site"). This Site is owned and operated by Fletcher Chase Ltd, a staffing and recruitment consultancy.</p>
                  <p>By using this Site, you indicate that you have read and understand these Terms and Conditions and agree to abide by them at all times.</p>`
  },
  {
    title: "Intellectual Property",
    description: `<p>All content published and made available on our Site is the property of Fletcher Chase Ltd and the Site's creators. This includes, but is not limited to, images, text, logos, documents, downloadable files, and anything that contributes to the composition of our Site.</p>`
  },
  {
    title: "Age Restrictions",
    description: `<p>The minimum age to use our Site is 18 years old. By using this Site, users agree that they are over 18 years old. We do not assume any legal responsibility for false statements about age.</p>`
  },
  {
    title: "Acceptable Use",
    description: `<p>As a user of our Site, you agree to use our Site legally, not to use our Site for illegal purposes, and not to:</p>
                  <ul class="list-disc ml-6">
                    <li>Violate the intellectual property rights of the Site owners or any third party to the Site.</li>
                  </ul>
                  <p>If we believe you are using our Site illegally or in a manner that violates these Terms and Conditions, we reserve the right to limit, suspend or terminate your access to our Site. We also reserve the right to take any legal steps necessary to prevent you from accessing our Site.</p>`
  },
  {
    title: "Links to Other Websites",
    description: `<p>Our Site contains links to third party websites or services that we do not own or control. We are not responsible for the content, policies, or practices of any third party website or service linked to on our Site. It is your responsibility to read the terms and conditions and privacy policies of these third party websites before using these sites.</p>`
  },
  {
    title: "Limitation of Liability",
    description: `<p>Fletcher Chase Ltd and our directors, officers, agents, employees, subsidiaries, and affiliates will not be liable for any actions, claims, losses, damages, liabilities, and expenses, including legal fees, from your use of the Site.</p>`
  },
  {
    title: "Indemnity",
    description: `<p>Except where prohibited by law, by using this Site you indemnify and hold harmless Fletcher Chase Ltd and our directors, officers, agents, employees, subsidiaries, and affiliates from any actions, claims, losses, damages, liabilities, and expenses, including legal fees, arising out of your use of our Site or your violation of these Terms and Conditions.</p>`
  },
  {
    title: "Applicable Law",
    description: `<p>These Terms and Conditions are governed by the laws of Ireland.</p>`
  },
  {
    title: "Severability",
    description: `<p>If at any time any of the provisions set forth in these Terms and Conditions are found to be inconsistent or invalid under applicable laws, those provisions will be deemed void and will be removed from these Terms and Conditions. All other provisions will not be affected by the removal and the rest of these Terms and Conditions will still be considered valid.</p>`
  },
  {
    title: "Changes",
    description: `<p>These Terms and Conditions may be amended from time to time in order to maintain compliance with the law and to reflect any changes to the way we operate our Site and the way we expect users to behave on our Site. We will notify users by email of changes to these Terms and Conditions or post a notice on our Site.</p>`
  },
  {
    title: "Contact Details",
    description: `<p>Please contact us if you have any questions or concerns. Our contact details are as follows:</p>`
  }
];


const PrivacyPolicy = () => {
  return (
    <div className="layout py-10">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="text-sm text-gray-600 mb-3">Effective date: 1st day of October, 2024</p>
      {termsOfService.map((term, index) => (
        <div key={index} className="mb-6 last-of-type:mb-0">
          <h2 className="text-xl font-semibold">{term.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: term.description }} />
        </div>
      ))}
      <Link href={"mailto:hello@hiringzen.com"} className='md:text-lg text-primary hover:underline'>hello@hiringzen.com</Link>
      <p className="text-sm text-gray-600 mt-3">Effective date: 1st day of October, 2024</p>
    </div>
  );
};

export default PrivacyPolicy;
