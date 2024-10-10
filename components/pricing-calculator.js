'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PricingCalculator = () => {
	const [plan, setPlan] = useState('3 Month');
	const [additionalRoles, setAdditionalRoles] = useState(0);
	const [quote, setQuote] = useState(null);
	const [contact, setContact] = useState({ name: '', email: '', phone: '', message: '' });
	const [showEmailForm, setShowEmailForm] = useState(false);

	const pricingPlans = {
		'3 Month': {
			name: "Zen Starter (3-Month Package)",
			base: 2325,
			additional: 930,
			features: [
				'Unlimited Roles (1 role at a time)',
				'Dedicated recruiter support.',
				'30 min Kickoff meeting + bi-weekly updates.',
				'Job description creation.',
				'Shortlisting, interviewing and reference checking.',
				'Offer management assistance.',
			]
		},
		'6 Month': {
			name: "Zen Growth (6-Month Package)",
			base: 2045,
			additional: 835,
			features: [
				'Unlimited Roles (1 role at a time)',
				'Dedicated recruiter support.',
				'30 min Kickoff meeting + bi-weekly updates.',
				'Job description creation.',
				'Shortlisting, interviewing and reference checking.',
				'Offer management assistance.',
			]
		},
		'12 Month': {
			name: "Zen Elite (12-Month Package)",
			base: 1875,
			additional: 700,
			features: [
				'Unlimited Roles (1 role at a time)',
				'Dedicated recruiter support.',
				'30 min Kickoff meeting + bi-weekly updates.',
				'Job description creation.',
				'Shortlisting, interviewing and reference checking.',
				'Offer management assistance.',
			]
		},
	};

	const calculateQuote = () => {
		const basePrice = pricingPlans[plan].base;
		const additionalPrice = pricingPlans[plan].additional * additionalRoles;
		const total = basePrice + additionalPrice;
		const vat = total * 0.23;
		const finalTotal = total + vat;

		setQuote(finalTotal.toFixed(2));
		setShowEmailForm(true);
	};

	const handleContactChange = (e) => {
		const { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	};

	const sendQuoteEmail = async (e) => {
		e.preventDefault();

		const response = await fetch('/api/sendEmail', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ contact, plan, additionalRoles, quote }),
		});

		if (response.ok) {
			alert('Quote emailed successfully!');
			setShowEmailForm(false);
		} else {
			alert('Failed to send quote.');
		}
	};

	const TabButton = ({ id, label, labelSmall }) => (
		<button
			className={` py-2 px-4 w-full text-center transition-all ${plan === id ? 'bg-primary text-black rounded-full' : 'border-transparent text-gray-50'}`}
			onClick={() => {
				setPlan(id)
				showEmailForm && calculateQuote()
			}}
		>
			{/* {id} */}
			{label} {labelSmall && <span className='block text-xs'>({labelSmall})</span>}
		</button>
	);

	const tabOptions = [
		{
			id: '3 Month',
			labelBig: 'Zen Starter',
			labelSmall: '3-Month Package'
		},
		{
			id: '6 Month',
			labelBig: 'Zen Growth',
			labelSmall: '6-Month Package'
		},
		{
			id: '12 Month',
			labelBig: 'Zen Elite',
			labelSmall: '12-Month Package',
		}
	]

	return (
		<>
			<div className='flex flex-col md:flex-row gap-10 layout py-12 md:py-16 border' id='pricing'>
				{/* Pricing Section */}
				<div className={`${showEmailForm ? 'md:w-1/2' : 'w-full'} max-w-screen-sm mx-auto p-6 bg-white shadow-lg rounded-lg flex flex-col`}>
					<div>
						<h1 className="text-2xl font-bold mb-6 text-center">Hiring Zen Pricing Calculator</h1>
						<div className="flex justify-around border-b mb-4 bg-black rounded-full p-1">
							{
								tabOptions.map((tab, index) => (
									<TabButton
										key={index}
										id={tab.id}
										label={tab?.labelBig}
										labelSmall={tab?.labelSmall}
									/>
								))
							}
						</div>
					</div>

					{/* Plan Features with Animation */}
					<AnimatePresence mode="wait">
						<motion.div
							key={plan}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="h-full flex flex-col justify-between"
						>
							<div className=''>
								<div>

									{/* <h3 className="text-lg font-semibold mb-2">{plan} Plan Features:</h3> */}
									{/* base price */}
									<div className="my-1">
										<label className="block text-gray-700 font-semibold text-lg">Base Price: <span className="text-gray-700 text-2xl">€{pricingPlans[plan].base}</span>/month</label>

									</div>
									<p>What's included:</p>
									<ul className="list-disc list-inside text-gray-700">
										{pricingPlans[plan].features.map((feature, index) => (
											<li key={index}>{feature}</li>
										))}
									</ul>
								</div>
								<div className="my-4">
									<label className="block text-gray-700 font-semibold">Additional Roles:</label>
									<input
										type="number"
										value={additionalRoles}
										onChange={(e) => setAdditionalRoles(Number(e.target.value))}
										min="0"
										className="w-full mt-2 p-2 border border-gray-300 rounded"
										placeholder="Number of additional roles"
									/>
								</div>
							</div>

							<button
								onClick={calculateQuote}
								className="block w-full bg-black-1 text-white py-2 px-4 rounded hover:bg-black-2 transition-all"
							>
								Calculate Cost
							</button>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Email Form Section with Animation */}
				<AnimatePresence>
					{showEmailForm && (
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 50 }}
							transition={{ duration: 0.5 }}
							className="md:w-1/2 bg-black-1 text-white p-6 rounded-lg shadow-lg flex flex-col"
						>
							<div>
								<h3 className="text-lg font-semibold mb-4 text-center">Send Your Quote</h3>
								{quote && (
									<div className="my-6">
										<h2 className="text-xl font-semibold text-center">
											{/* Your Total Quote: €{quote} */}
											<span className='text-5xl'>€ {quote}</span> / month
										</h2>
									</div>
								)}
							</div>
							<form onSubmit={sendQuoteEmail} className="h-full flex flex-col justify-between ">
								<div className='space-y-4'>
									<input
										type="text"
										name="name"
										placeholder="Your Name"
										value={contact.name}
										onChange={handleContactChange}
										className="w-full p-2 border border-gray-300 rounded bg-black-2"
										required
									/>
									<input
										type="email"
										name="email"
										placeholder="Your Email"
										value={contact.email}
										onChange={handleContactChange}
										className="w-full p-2 border border-gray-300 rounded bg-black-2"
										required
									/>
									<input
										type="tel"
										name="phone"
										placeholder="Your Phone (optional)"
										value={contact.phone}
										onChange={handleContactChange}
										className="w-full p-2 border border-gray-300 rounded bg-black-2"
									/>
									<textarea
										name="message"
										placeholder="Additional Message (optional)"
										value={contact.message}
										onChange={handleContactChange}
										className="w-full p-2 border border-gray-300 rounded bg-black-2 h-[88px]"
									/>
								</div>
								<button
									type="submit"
									className="w-full bg-primary/90 text-white py-2 px-4 rounded hover:bg-primary transition-all"
								>
									Send Quote
								</button>
							</form>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export { PricingCalculator };
