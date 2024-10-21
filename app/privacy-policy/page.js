// pages/privacy-policy.js
import React from 'react';

const privacyPolicy = [
  {
    title: "",
    description: `<p><a href="https://www.hiringzen.com" target="_blank" rel="noopener noreferrer">www.hiringzen.com</a> (the "Site") is owned and operated by Fletcher Chase Ltd. Fletcher Chase Ltd is the data controller and can be contacted at: <a href="mailto:hello@hiringzen.com">hello@hiringzen.com</a>.</p>`
  },
  {
    title: "Purpose",
    description: `<p>The purpose of this privacy policy (this "Privacy Policy") is to inform users of our Site of the following:</p>
                  <ul class="list-disc ml-6">
                   <li> <p>The personal data we will collect;</p></li>
                   <li> <p>Use of collected data;</p></li>
                   <li> <p>Who has access to the data collected;</p></li>
                   <li> <p>The rights of Site users; and</p></li>
                   <li> <p>The Site's cookie policy.</p></li>
                  </ul>
                  <p>This Privacy Policy applies in addition to the terms and conditions of our Site.</p>`
  },
  {
    title: "GDPR",
    description: `<p>For users in the European Union, we adhere to the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016, known as the General Data Protection Regulation (the "GDPR"). For users in the United Kingdom, we adhere to the GDPR as enshrined in the Data Protection Act 2018.</p>
                  <p>We have not appointed a Data Protection Officer as we do not fall within the categories of controllers and processors required to appoint a Data Protection Officer under Article 37 of the GDPR.</p>`
  },
  {
    title: "Consent",
    description: `<p>By using our Site users agree that they consent to:</p>
                  <ul class="list-disc ml-6">
                   <li> <p>The conditions set out in this Privacy Policy.</p></li>
                  </ul>
                  <p>When the legal basis for us processing your personal data is that you have provided your consent to that processing, you may withdraw your consent at any time. If you withdraw your consent, it will not make processing which we completed before you withdrew your consent unlawful.</p>
                  <p>You can withdraw your consent by: Contacting the company administrator.</p>`
  },
  {
    title: "Legal Basis for Processing",
    description: `<p>We collect and process personal data about users in the EU only when we have a legal basis for doing so under Article 6 of the GDPR.</p>
                  <p>We rely on the following legal bases to collect and process the personal data of users in the EU:</p>
                  <ul class="list-disc ml-6">
                   <li> <p>Users have provided their consent to the processing of their data for one or more specific purposes; and</p></li>
                   <li> <p>Processing of user personal data is necessary for us or a third party to pursue a legitimate interest. Our legitimate interest is not overridden by the interests or fundamental rights and freedoms of users. Our legitimate interest(s) are: Reviewing submitted resumes.</p></li>
                  </ul>`
  },
  {
    title: "Personal Data We Collect",
    description: `<p>We only collect data that helps us achieve the purpose set out in this Privacy Policy. We will not collect any additional data beyond the data listed below without notifying you first.</p>
                  <p>Data Collected in a Non-Automatic Way:</p>
                  <ul class="list-disc ml-6">
                   <li> <p>First and last name;</p></li>
                   <li> <p>Email address;</p></li>
                   <li> <p>Phone number; and</p></li>
                   <li> <p>Address.</p></li>
                  </ul>
                  <p>This data may be collected using the following methods: You may give us information by filling in forms on our website or by corresponding with us by phone, e-mail, in person, or otherwise. We ask you to disclose only as much information as is necessary to provide you with our services.</p>`
  },
  {
    title: "How We Use Personal Data",
    description: `<p>Data collected on our Site will only be used for the purposes specified in this Privacy Policy or indicated on the relevant pages of our Site. We will not use your data beyond what we disclose in this Privacy Policy.</p>
                  <p>The data we collect when the user performs certain functions may be used for the following purposes:</p>
                  <ul class="list-disc ml-6">
                   <li> <p>Approved communication.</p></li>
                  </ul>`
  },
  {
    title: "Who We Share Personal Data With",
    description: `<p><strong>Employees:</strong> We may disclose user data to any member of our organization who reasonably needs access to user data to achieve the purposes set out in this Privacy Policy.</p>
                  <p><strong>Other Disclosures:</strong> We will not sell or share your data with other third parties, except in the following cases:</p>
                  <ul class="list-disc ml-6">
                   <li> <p>If the law requires it;</p></li>
                   <li> <p>If it is required for any legal proceeding;</p></li>
                   <li> <p>To prove or protect our legal rights; and</p></li>
                   <li> <p>To buyers or potential buyers of this company in the event that we seek to sell the company.</p></li>
                  </ul>
                  <p>If you follow hyperlinks from our Site to another Site, please note that we are not responsible for and have no control over their privacy policies and practices.</p>`
  },
  {
    title: "How Long We Store Personal Data",
    content: `User data will be stored until the purpose the data was collected for has been achieved.
You will be notified if your data is kept for longer than this period.`
  },
  {
    title: "How We Protect Your Personal Data",
    content: `We use the strongest available encryption and all data is stored on servers in secure
facilities. All data is only accessible to our employees who are bound by strict confidentiality
agreements.
While we take all reasonable precautions to ensure that user data is secure and that users
are protected, there always remains the risk of harm. The Internet as a whole can be
insecure at times and therefore we are unable to guarantee the security of user data beyond
what is reasonably practical.`
  },
  {
    title: "Your Rights as a User",
    points: [
      "Right to be informed;",
      "Right of access;",
      "Right to rectification;",
      "Right to erasure;",
      "Right to restrict processing;",
      "Right to data portability;",
      "Right to object."
    ]
  },
  {
    title: "Children",
    content: `The minimum age to use our website is 21 years of age. We do not knowingly collect or use
personal data from children under 16 years of age. If we learn that we have collected
personal data from a child under 16 years of age, the personal data will be deleted as soon
as possible. If a child under 16 years of age has provided us with personal data their parent
or guardian may contact our privacy officer.`
  },
  {
    title: "How to Access, Modify, Delete, or Challenge the Data Collected",
    content: `If you would like to know if we have collected your personal data, how we have used your
personal data, if we have disclosed your personal data and to who we disclosed your
personal data, if you would like your data to be deleted or modified in any way, or if you
would like to exercise any of your other rights under the GDPR, please contact our privacy
officer here:
Richard Snowden
richard@hiringzen.com`
  },
  {
    title: "How to Opt-Out of Data Collection, Use or Disclosure",
    content: `In addition to the method(s) described in the How to Access, Modify, Delete, or Challenge
the Data Collected section, we provide the following specific opt-out methods for the forms of
collection, use, or disclosure of your personal data specified below:

1. You can opt-out or unsubscribe anytime. You can opt-out by clicking unsubscribe on
any email or marketing or emailing to request to be removed from database.`
  },
  {
    title: "Cookie Policy",
    content: `A cookie is a small file, stored on a user's hard drive by a website. Its purpose is to collect
data relating to the user's browsing habits. You can choose to be notified each time a cookie
is transmitted. You can also choose to disable cookies entirely in your internet browser, but
this may decrease the quality of your user experience.`
  },
  {
    title: "Types of Cookies We Use",
    points: [
      "Functional cookies are used to remember the selections you make on our Site so that your selections are saved for your next visits;",
      "Analytical cookies allow us to improve the design and functionality of our Site by collecting data on how you access our Site, for example data on the content you access, how long you stay on our Site, etc."
    ]
  },
  {
    title: "Modifications",
    content: `This Privacy Policy may be amended from time to time in order to maintain compliance with
the law and to reflect any changes to our data collection process. When we amend this
Privacy Policy we will update the "Effective Date" at the top of this Privacy Policy. We
recommend that our users periodically review our Privacy Policy to ensure that they are
notified of any updates. If necessary, we may notify users by email of changes to this Privacy
Policy.`
  },
  {
    title: "Complaints",
    content: `If you have any complaints about how we process your personal data, please contact us
through the contact methods listed in the Contact Information section so that we can, where
possible, resolve the issue. If you feel we have not addressed your concern in a satisfactory
manner you may contact a supervisory authority. You also have the right to directly make a
complaint to a supervisory authority. You can lodge a complaint with a supervisory authority
by contacting the Data Protection Commission.`
  },
  {
    title: "Contact Information",
    content: `If you have any questions, concerns or complaints, you can contact our privacy officer,
Richard Snowden, at:
richard@hiringzen.com`
  }
];


const PrivacyPolicy = () => {
  return (
    <div className="layout py-10">
      <div className="">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-600">Effective date: 1st day of October, 2024</p>
        {privacyPolicy.map((section, index) => (
          <div key={index} className="section mb-8">
            <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
            {section.description && <div dangerouslySetInnerHTML={{ __html: section?.description }} />}
            {section.content && <p className="mb-4">{section.content}</p>}
            {section.points && (
              <ul className="list-disc pl-5 my-3">
                {section.points.map((point, idx) => (
                  <li key={idx}><p>{point}</p></li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

    </div>
  );
};

export default PrivacyPolicy;
