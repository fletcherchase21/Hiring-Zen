'use client'
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'react-toastify';

const PricingCalculator = () => {
	const [plan, setPlan] = useState('3 Month');
	const [additionalRoles, setAdditionalRoles] = useState(0);
	const [additionalExecutiveRoles, setAdditionalExecutiveRoles] = useState(0);
	const [quote, setQuote] = useState(null);
	const [contact, setContact] = useState({ name: '', email: '', phone: '', message: '' });
	const [showEmailForm, setShowEmailForm] = useState(false);

	const initialTotals = [
		{ label: 'Base Price', value: 0 },
		{ label: 'Base Price with VAT', value: 0 },
		{ label: 'Additional Roles Total', value: 0 },
		{ label: 'Additional Executive Roles Total', value: 0 },
	];

	const [totals, setTotals] = useState(initialTotals);

	const pricingPlans = {
		'3 Month': {
			name: "Zen Starter (3-Month Package)",
			durationInMonth: 3,
			base: 2325,
			additional: 930,
			additionalExecutive: 1000,
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
			durationInMonth: 6,
			base: 2045,
			additional: 835,
			additionalExecutive: 900,
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
			durationInMonth: 12,
			base: 1875,
			additional: 700,
			additionalExecutive: 800,
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
		const additionalPrice = pricingPlans[plan].additional * additionalRoles + pricingPlans[plan].additionalExecutive * additionalExecutiveRoles;
		const total = basePrice + additionalPrice;
		const vat = total * 0.23;
		const finalTotal = total + vat;

		const month = pricingPlans[plan].durationInMonth;

		setTotals([
			{ ...totals[0], value: basePrice * month },
			{ ...totals[1], value: basePrice * month * 1.23 },
			{ ...totals[2], value: (basePrice + pricingPlans[plan].additional) * month * 1.23 },
			{ ...totals[3], value: finalTotal * month },
		]);

		setQuote(finalTotal.toFixed(2));
		setShowEmailForm(true);
	};

	const handleContactChange = (e) => {
		const { name, value } = e.target;
		setContact({ ...contact, [name]: value });
	};


	useEffect(() => {
		if (showEmailForm) {
			calculateQuote();
		}
		// if (additionalExecutiveRoles > additionalRoles) {
		// 	setAdditionalRoles(additionalExecutiveRoles);
		// }
	}, [plan, additionalRoles, additionalExecutiveRoles, showEmailForm]);

	const TabButton = ({ id, label, labelSmall }) => (
		<button
			className={` py-2 px-4 w-full text-center transition-all ${plan === id ? 'bg-primary text-black rounded-full' : 'border-transparent text-gray-50'}`}
			onClick={() => {
				setPlan(id)
			}}
		>
			{label} {labelSmall && <span className='hidden md:block text-xs'>({labelSmall})</span>}
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

	const [isSubmitting, setIsSubmitting] = useState(false);

	const sendQuoteEmail = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			const response = await fetch('/api/sendMail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ contact, plan, additionalRoles, additionalExecutiveRoles, quote }),
			});

			const result = await response.json();

			if (response.ok && result.success) {
				toast.success('Message sent successfully');
			} else {
				toast.error(result.message || 'Failed to send message');
			}
		} catch (error) {
			console.error('Error:', error);
			toast.error('An error occurred while sending the message');
		}
		finally {
			setIsSubmitting(false);
			setContact({ name: '', email: '', phone: '', message: '' });
		}
	};



	const handleAdditionalRolesChange = (e) => {
		const newAdditionalRoles = Number(e.target.value);
		if (newAdditionalRoles < additionalExecutiveRoles) {
			setAdditionalExecutiveRoles(newAdditionalRoles);
		}
		setAdditionalRoles(newAdditionalRoles);
	};
	const handleAdditionalExecutiveRolesChange = (e) => {
		const newAdditionalExecutiveRoles = Number(e.target.value);
		if (newAdditionalExecutiveRoles > additionalExecutiveRoles && newAdditionalExecutiveRoles > additionalRoles) {
			setAdditionalRoles((prev) => prev + (newAdditionalExecutiveRoles - additionalExecutiveRoles));
		}
		if (newAdditionalExecutiveRoles < additionalExecutiveRoles && newAdditionalExecutiveRoles > additionalRoles) {
			setAdditionalRoles((prev) => Math.max(prev - (additionalExecutiveRoles - newAdditionalExecutiveRoles), 0));
		}
		setAdditionalExecutiveRoles(newAdditionalExecutiveRoles);
	};




	return (
		<>
			<div className='flex flex-col md:flex-row gap-10 layout py-12 md:py-16 border' id='pricing'>
				{/* Pricing Section */}
				<div className={`${showEmailForm ? 'md:w-1/2' : 'w-full'} max-w-screen-sm mx-auto p-2 md:p-6 bg-white shadow-lg rounded-lg flex flex-col`}>
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

					<AnimatePresence mode="wait">
						<motion.div
							key={plan}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="h-full flex flex-col justify-between"
						>
							<div className='p-4 md:p-0'>
								<div>
									<div className="my-1">
										<label className="block md:hidden text-gray-700 font-semibold">{pricingPlans[plan].name}</label>
										<label className="block text-gray-700 font-semibold text-lg">Base Price: <span className="text-gray-700 text-2xl">€{pricingPlans[plan].base}</span>/month</label>
									</div>
									<p>What's included:</p>
									<ul className="list-disc list-inside text-gray-700">
										{pricingPlans[plan].features.map((feature, index) => (
											<li key={index}>{feature}</li>
										))}
									</ul>
								</div>
								<div className="my-4 flex flex-col md:flex-row gap-4 items-center">
									<div className='w-full'>
										<label className="block text-gray-700 font-semibold">Additional Roles:</label>
										<input
											type="number"
											value={additionalRoles}
											// onChange={(e) => setAdditionalRoles(Number(e.target.value))}
											onChange={handleAdditionalRolesChange}
											min="0"
											max={999}
											className="w-full mt-2 p-2 border border-gray-300 rounded"
											placeholder="Number of additional roles"
										/>
									</div>
									<div className='w-full'>
										<label className="block text-gray-700 font-semibold">Additional Executive Roles:</label>
										<input
											type="number"
											value={additionalExecutiveRoles}
											// onChange={(e) => setAdditionalExecutiveRoles(Number(e.target.value))}
											onChange={handleAdditionalExecutiveRolesChange}
											min="0"
											max={999}
											className="w-full mt-2 p-2 border border-gray-300 rounded"
											placeholder="Number of additional roles"
										/>
									</div>
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

				<AnimatePresence>
					{showEmailForm && (
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 50 }}
							transition={{ duration: 0.5 }}
							className="md:w-1/2 bg-black-1 text-white px-4 py-6 md:p-6 rounded-lg shadow-lg flex flex-col"
						>
							<div>
								<h3 className="text-lg font-semibold mb-4 text-center">Send Your Quote</h3>
								{quote && (
									<div className="my-6">
										<h2 className="text-xl font-semibold text-center">
											{/* Your Total Quote: €{quote} */}
											<span className='text-3xl xl:text-5xl'>€ {quote}</span> / month
											<br />
											<span className='text-xs md:text-sm'>
												(including VAT)
											</span>
										</h2>
									</div>
								)}
							</div>
							<div>
								<h2 className="text-lg">Total Summary for {pricingPlans[plan].durationInMonth} month</h2>
								<div className="mt-1 my-3">
									{totals.map((item) => (
										<p key={item.label}>
											<span className="">{item.label}:</span> € {item.value.toFixed(2)}
										</p>
									))}
								</div>
							</div>

							<form onSubmit={sendQuoteEmail} className="h-full flex flex-col gap-5 justify-between ">
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
									className="w-full bg-primary/90 text-white py-2 px-4 rounded hover:bg-primary transition-all disabled:opacity-80 disabled:cursor-not-allowed"
									disabled={quote === null || contact.name === '' || contact.email === '' || isSubmitting}
								>
									{isSubmitting ? 'Sending...' : 'Send Quote'}
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
