/* VALERI — legal drafts. Pending final legal review before publication.
   Rendered verbatim from the client-supplied drafts. */

export type LegalSection = { id: string; title: string; body: string[] | { list: string[]; before?: string[]; after?: string[] } };

export const termsIntro =
  "These Terms & Conditions apply to the purchase and use of classes, class packs, memberships, private and semi-private sessions and other services provided by Valeri Pilates Fitness Club LLC (“VALERI”, “we”, “us” or “our”). By purchasing, booking or using a VALERI service, you agree to these Terms & Conditions.";

export const terms: LegalSection[] = [
  { id: "bookings", title: "Bookings", body: [
    "All classes and sessions must be booked in advance through VALERI’s designated booking platform and are subject to availability.",
    "Clients are responsible for ensuring that their booking details are correct and for managing their bookings through their client account.",
  ]},
  { id: "class-cancellations", title: "Class Cancellations", body: [
    "Classes may be cancelled or rescheduled without charge up to 12 hours before the scheduled start time.",
    "If a cancellation is made less than 12 hours before the class, the class credit will be deducted from the client’s class pack or membership. No additional late-cancellation fee will be charged.",
  ]},
  { id: "no-shows", title: "No-Shows", body: [
    "If a client does not attend a booked class and has not cancelled it at least 12 hours in advance, the class credit will be deducted. No additional no-show fee will be charged.",
  ]},
  { id: "class-packs", title: "Class Packs", body: {
    before: ["VALERI class packs have the following validity periods:"],
    list: ["5 Classes — valid for 1 month", "10 Classes — valid for 2 months", "20 Classes — valid for 3 months"],
    after: [
      "The validity period begins on the date of the first class used from the package. A class pack must be activated within 30 days of purchase.",
      "All classes must be used within the applicable validity period. Any unused classes remaining after the expiry date will be forfeited.",
      "Class packs cannot normally be paused, frozen or extended. An extension may be considered in documented medical circumstances or other exceptional circumstances, at VALERI’s discretion.",
    ],
  }},
  { id: "memberships", title: "Memberships", body: [
    "VALERI memberships provide a specified number of classes per monthly billing cycle.",
    "Memberships renew automatically each month using the payment method associated with the client’s account unless cancelled in accordance with Section 6 below.",
    "There is no minimum membership commitment unless clearly stated otherwise at the time of purchase.",
    "The recurring nature of the membership and automatic monthly renewal will be clearly displayed at the time of purchase.",
    "Membership classes must be used within the applicable monthly billing cycle. Unused membership classes do not roll over to the following month and expire at the end of each billing cycle.",
  ]},
  { id: "membership-cancellation", title: "Membership Cancellation", body: [
    "A membership may be cancelled at any time by submitting a cancellation request at least 7 days before the next billing date.",
    "Where technically supported by VALERI’s booking platform, clients will be able to submit the cancellation request through their online account or app. If online cancellation is not available, VALERI will provide a clear alternative cancellation method.",
    "Once a cancellation has been processed, no further membership payments will be charged. The membership remains active until the end of the billing period already paid for, and any remaining class credits may be used until that period ends.",
    "Cancellation requests received less than 7 days before the next billing date may take effect from the following billing cycle.",
  ]},
  { id: "membership-freeze", title: "Membership Freeze", body: [
    "A membership may be frozen once during any 12-month membership period for up to 30 consecutive days.",
    "Freeze requests must be submitted in advance.",
    "During an approved freeze, membership access and billing will be adjusted in accordance with the capabilities of VALERI’s booking and payment platform.",
    "Additional freezes may be considered in documented medical circumstances or other exceptional circumstances at VALERI’s discretion.",
  ]},
  { id: "refunds", title: "Refunds", body: [
    "Class packs, memberships and individual sessions are non-refundable, except where a refund is required under applicable law.",
    "Unused or partially used packages and memberships are not eligible for cash refunds.",
    "Where VALERI is unable to provide a purchased service, VALERI may, depending on the circumstances, offer a replacement class, account credit, extension or refund.",
  ]},
  { id: "transfers-and-sharing", title: "Transfers and Sharing", body: [
    "Class packs, memberships and individual class credits are personal to the client who purchased them. They are non-transferable and may not be shared, resold or transferred to another person.",
  ]},
  { id: "introductory-offers", title: "Introductory Offers", body: [
    "Introductory offers, including the VALERI First Class and any new-client offers, are available only to eligible first-time clients unless otherwise stated.",
    "Introductory offers are personal, non-transferable and may be purchased only once per client. Any specific validity period or additional conditions will be displayed at the time of purchase.",
  ]},
  { id: "private-semi-private", title: "Private and Semi-Private Sessions", body: [
    "Private and semi-private sessions must be booked in advance and are subject to instructor and studio availability.",
    "The same 12-hour cancellation policy applies unless otherwise stated at the time of booking. Cancellations made less than 12 hours before the scheduled session and no-shows will result in the session being forfeited.",
  ]},
  { id: "late-arrivals", title: "Late Arrivals", body: [
    "Clients are encouraged to arrive before the scheduled class start time.",
    "For safety reasons, clients arriving late may not be permitted to join a class once it has started, particularly where the instructor determines that joining late could disrupt the class or compromise safety.",
    "If entry is refused due to late arrival, the class may be treated as a late cancellation and the class credit may be forfeited.",
  ]},
  { id: "health-and-safety", title: "Health and Safety", body: [
    "Clients are responsible for informing VALERI and their instructor of any injury, medical condition, pregnancy, physical limitation or other relevant circumstance that may affect their ability to participate safely.",
    "Participation in Pilates and other physical activity involves inherent risks. Clients should seek appropriate medical advice before participating if they have concerns about their health or ability to exercise.",
    "VALERI may require clients to complete a separate health declaration, informed consent and/or liability waiver before participating in classes or sessions.",
  ]},
  { id: "schedules-and-instructors", title: "Class Schedules and Instructors", body: [
    "VALERI reserves the right to make reasonable changes to class schedules, instructors and class formats where necessary.",
    "Where VALERI cancels a class, the relevant class credit will be returned to the client’s account or otherwise restored.",
  ]},
  { id: "prices-and-payments", title: "Prices and Payments", body: [
    "Current prices are displayed on the VALERI website and/or booking platform.",
    "VALERI may change its prices from time to time. Any price changes affecting recurring memberships will be communicated before they take effect, in accordance with applicable requirements.",
    "All payments must be made through VALERI’s approved payment methods.",
  ]},
  { id: "third-party-booking-platform", title: "Third-Party Booking Platform", body: [
    "VALERI may use a third-party studio management and booking provider, such as Glofox, Mindbody or another provider, to manage bookings, memberships, payments and client accounts.",
    "Use of those services may also be subject to the relevant provider’s own terms and privacy policies.",
  ]},
  { id: "personal-belongings", title: "Personal Belongings", body: [
    "Clients are responsible for their personal belongings while visiting the studio. VALERI is not responsible for loss, theft or damage to personal belongings except where liability cannot legally be excluded.",
  ]},
  { id: "studio-conduct", title: "Studio Conduct", body: [
    "VALERI is committed to providing a welcoming, respectful and comfortable environment.",
    "Clients are expected to treat instructors, staff and other clients with respect. VALERI reserves the right to refuse service or terminate a membership in cases of abusive, threatening, discriminatory, unsafe or seriously disruptive behaviour, subject to applicable law.",
  ]},
  { id: "changes-to-terms", title: "Changes to These Terms", body: [
    "VALERI may update these Terms & Conditions from time to time. The current version will be published on the VALERI website with the date of the latest update.",
    "Material changes affecting an active recurring membership will be communicated where appropriate or required.",
  ]},
  { id: "governing-law", title: "Governing Law", body: [
    "These Terms & Conditions are governed by the applicable laws of the United Arab Emirates and the Emirate of Dubai.",
    "Nothing in these Terms & Conditions limits any rights that cannot legally be excluded or restricted under applicable consumer protection law.",
  ]},
  { id: "contact", title: "Contact", body: [
    "For questions regarding bookings, memberships, cancellations or these Terms & Conditions, please contact:",
    "Valeri Pilates Fitness Club LLC\nOxford Gardens, Arjan, Dubai, United Arab Emirates\nEmail: [EMAIL]\nPhone / WhatsApp: [NUMBER]",
  ]},
];

export const privacyIntro =
  "This Privacy Policy explains how Valeri Pilates Fitness Club LLC (“VALERI”, “we”, “us” or “our”) collects, uses, stores and shares personal data when you visit our website, create an account, book or purchase services, contact us, attend our studio, or otherwise interact with VALERI. We aim to process personal data in accordance with applicable data protection laws in the United Arab Emirates, including Federal Decree-Law No. 45 of 2021 Concerning the Protection of Personal Data, where applicable.";

export const privacy: LegalSection[] = [
  { id: "who-we-are", title: "Who We Are", body: [
    "Valeri Pilates Fitness Club LLC is the entity responsible for the personal data described in this Privacy Policy, except where a third-party service provider processes data under its own privacy terms.",
    "Studio location: Oxford Gardens, Arjan, Dubai, United Arab Emirates.",
    "Privacy contact: [EMAIL]\nPhone / WhatsApp: [NUMBER]",
  ]},
  { id: "data-we-collect", title: "Personal Data We May Collect", body: {
    before: ["We may collect personal data that you provide directly to us or through our booking and payment providers, including:"],
    list: [
      "Identity and contact information, such as your name, email address and telephone number.",
      "Account and booking information, including class bookings, attendance history, class packs, memberships and related account activity.",
      "Transaction information relating to purchases and payments. Full payment-card details may be processed directly by our payment provider rather than stored by VALERI.",
      "Information you choose to provide in a First Visit profile, health declaration or communication with an instructor, including relevant injuries, pregnancy, physical limitations or other information needed to support safe participation.",
      "Communications with VALERI, including enquiries, feedback and customer-service requests.",
      "Marketing preferences, including whether you have agreed to receive promotional communications.",
      "Technical and website-use information, such as device, browser, IP address, cookie identifiers and interaction data, where collected through our website or analytics tools.",
    ],
  }},
  { id: "how-we-use-data", title: "How We Use Personal Data", body: {
    before: ["We may use personal data to:"],
    list: [
      "Create and manage client accounts.",
      "Process bookings, class packs, memberships, cancellations, freezes and other service requests.",
      "Process payments and maintain transaction records.",
      "Provide Pilates classes and related services and support safe participation.",
      "Communicate about bookings, schedule changes, memberships, payments and customer-service matters.",
      "Respond to enquiries, complaints and feedback.",
      "Send marketing communications where permitted and in accordance with your preferences.",
      "Operate, secure, troubleshoot and improve our website, booking experience and services.",
      "Maintain records and comply with applicable legal, regulatory, accounting and dispute-resolution requirements.",
      "Protect the rights, safety and legitimate interests of VALERI, our clients, staff and others.",
    ],
  }},
  { id: "legal-basis", title: "Legal Basis and Consent", body: [
    "Depending on the circumstances and applicable law, we may process personal data where it is necessary to provide a service or perform our obligations to you, where you have given consent, where processing is required by law, or where another lawful basis applies.",
    "Where we rely on consent, you may withdraw that consent, subject to applicable law and any processing that remains necessary on another lawful basis.",
  ]},
  { id: "health-information", title: "Health and Other Sensitive Information", body: [
    "Certain information you voluntarily provide about injuries, pregnancy, medical conditions or physical limitations may be sensitive personal data.",
    "We will seek to collect only information reasonably necessary to support safe participation and appropriate service delivery. Access should be limited to staff or instructors who need the information for that purpose.",
    "Where required, VALERI may ask you to complete a separate health declaration, informed consent or liability waiver.",
  ]},
  { id: "providers", title: "Booking, Membership and Payment Providers", body: [
    "VALERI intends to use a third-party studio management and booking platform, such as Glofox, Mindbody or another provider, for functions including bookings, memberships, payments and client accounts.",
    "These providers may process personal data on VALERI’s behalf and/or under their own terms and privacy policies, depending on the service and configuration.",
    "Payment processing may also be provided by third-party payment processors. VALERI does not intend to store full payment-card details where those details are handled directly by an authorised payment provider.",
  ]},
  { id: "sharing", title: "Other Parties We May Share Data With", body: {
    before: ["We may share personal data only where reasonably necessary with:"],
    list: [
      "Booking, membership and payment service providers.",
      "Website hosting, analytics, communications, email, CRM and other technology providers used to operate VALERI.",
      "Professional advisers, such as lawyers, accountants or insurers, where necessary.",
      "Government authorities, regulators, courts or law-enforcement bodies where disclosure is required or permitted by law.",
      "A successor or relevant party in connection with a reorganisation, sale or transfer of all or part of the business, subject to appropriate safeguards.",
    ],
    after: ["We do not sell personal data."],
  }},
  { id: "international-transfers", title: "International Data Transfers", body: [
    "Some third-party service providers may store or process personal data outside the United Arab Emirates.",
    "Where personal data is transferred internationally, VALERI will seek to ensure that the transfer is handled in accordance with applicable UAE data protection requirements and appropriate safeguards.",
  ]},
  { id: "retention", title: "Data Retention", body: [
    "We retain personal data only for as long as reasonably necessary for the purposes for which it was collected, including providing services, maintaining business and transaction records, resolving disputes and meeting legal, accounting or regulatory obligations.",
    "Retention periods may vary depending on the type of data and the reason it is held. When personal data is no longer required, we will take reasonable steps to delete, anonymise or securely dispose of it, subject to applicable legal requirements.",
  ]},
  { id: "security", title: "Data Security", body: [
    "We take reasonable organisational and technical measures designed to protect personal data against unauthorised access, loss, misuse, alteration or disclosure.",
    "No website, app, transmission or storage system can be guaranteed to be completely secure, and clients should also take reasonable steps to protect their account credentials.",
  ]},
  { id: "your-rights", title: "Your Privacy Rights", body: [
    "Subject to applicable UAE law and any relevant exceptions, you may have rights relating to your personal data, including rights to obtain information about processing, request access or transfer, request correction of inaccurate data, request deletion in certain circumstances, restrict or object to certain processing, and withdraw consent where processing is based on consent.",
    "To make a privacy request, contact us at [EMAIL]. We may need to verify your identity before completing a request.",
  ]},
  { id: "marketing", title: "Marketing Communications", body: [
    "Where permitted, VALERI may send news, offers, studio updates or other marketing communications.",
    "You may opt out of marketing communications at any time by using the unsubscribe option provided in the communication or by contacting VALERI.",
    "Opting out of marketing does not prevent us from sending service-related communications that are necessary for your bookings, memberships, payments or account.",
  ]},
  { id: "cookies", title: "Cookies and Analytics", body: [
    "Our website may use cookies and similar technologies for essential website functions, security, preferences, analytics and, if introduced, marketing.",
    "Where required, we will provide appropriate cookie information and consent choices. The exact cookie notice should be updated once the website’s final analytics, advertising and third-party tools are confirmed.",
  ]},
  { id: "third-party-links", title: "Third-Party Links and Services", body: [
    "Our website or booking journey may contain links to or integrations with third-party websites, apps or services. Those third parties may have their own privacy policies and practices.",
    "We encourage you to review the privacy information provided by any third-party service you use.",
  ]},
  { id: "children", title: "Children and Minors", body: [
    "VALERI is primarily intended for adult clients. If VALERI introduces classes or services for minors, additional consent and privacy procedures may apply, including parental or guardian consent where required.",
    "Specific age requirements for any youth or teen offering will be communicated before such services are launched.",
  ]},
  { id: "photography", title: "Photography and Social Media", body: [
    "VALERI may create photography or video content in the studio or at events. Where identifiable clients are the focus of promotional content, VALERI will seek appropriate permission before using that content for marketing purposes.",
    "Clients may also voluntarily tag VALERI or share content with us through social media. Any reposting or use by VALERI will be handled in accordance with the permissions applicable to that content.",
  ]},
  { id: "changes", title: "Changes to This Privacy Policy", body: [
    "We may update this Privacy Policy from time to time to reflect changes in our services, technology, service providers or legal requirements.",
    "The current version will be published on the VALERI website with the date of the latest update.",
  ]},
  { id: "contact-us", title: "Contact Us", body: [
    "If you have questions about this Privacy Policy, how VALERI handles personal data, or wish to exercise a privacy right, please contact:",
    "Valeri Pilates Fitness Club LLC\nOxford Gardens, Arjan, Dubai, United Arab Emirates\nEmail: [EMAIL]\nPhone / WhatsApp: [NUMBER]",
  ]},
];
