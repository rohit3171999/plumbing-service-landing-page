// src/App.jsx

import React, { useState } from 'react';
import './App.css'; // Import custom CSS

// Simple icon components (can be replaced with an icon library like react-icons)
const WrenchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
const DropletIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a7 7 0 100-12 7 7 0 000 12z" /></svg>;
const FireIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7.014A8.003 8.003 0 0117.657 18.657z" /></svg>;

function App() {
    // State for the quote form
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        service: 'Leak Repairs',
        date: '',
        message: '',
    });

    // Handler for form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handler for form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would send the data to a backend or service like EmailJS
        console.log('Form Submitted:', formData);
        alert(`Thank you, ${formData.name}! Your quote request has been sent. We will contact you shortly.`);
        // Reset form after submission
        setFormData({
            name: '', email: '', phone: '', address: '', service: 'Leak Repairs', date: '', message: ''
        });
    };

    const services = [
        { name: 'Leak Repairs', icon: <DropletIcon />, description: 'Quick and efficient detection and repair of all types of water leaks.' },
        { name: 'Drain Cleaning', icon: <WrenchIcon />, description: 'Professional cleaning for clogged drains to restore proper flow.' },
        { name: 'Water Heater Repair', icon: <FireIcon />, description: 'Servicing and repair for all major brands of water heaters.' },
        { name: 'Pipe Installation', icon: <WrenchIcon />, description: 'Expert installation of new plumbing pipes for renovations or new builds.' },
        { name: 'Emergency Services', icon: <FireIcon />, description: '24/7 availability for urgent plumbing issues that can\'t wait.' },
    ];

    return (
        <div className="bg-gray-900 text-white font-sans">
            {/* Header */}
            <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-400">FlowFix Plumbing</h1>
                    <a href="#quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                        Request a Quote
                    </a>
                </nav>
            </header>

            <main>
                {/* 4.1 Hero Section */}
                <section id="home" className="hero-bg min-h-screen flex items-center">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
                            Reliable Plumbing, <br />Anytime You Need It.
                        </h2>
                        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                            Your trusted local experts for all plumbing repairs, installations, and emergencies.
                        </p>
                        <a href="#quote" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                            Get a Free Quote Now
                        </a>
                    </div>
                </section>

                {/* 4.2 Services Section */}
                <section id="services" className="py-20 bg-gray-800">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white">Our Services</h2>
                            <p className="text-gray-400 mt-2">We offer a wide range of plumbing solutions.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <div key={index} className="bg-gray-900 p-8 rounded-lg text-center transform hover:-translate-y-2 transition duration-300">
                                    <div className="inline-block mb-4">{service.icon}</div>
                                    <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                                    <p className="text-gray-400">{service.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 4.3 About Section */}
                <section id="about" className="py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-4">About FlowFix</h2>
                        <p className="max-w-3xl mx-auto text-gray-300">
                            With over 15 years of experience, FlowFix Plumbing Solutions is dedicated to providing top-quality service to our community. Our certified and licensed plumbers are committed to customer satisfaction, ensuring every job is done right the first time. We believe in transparent pricing and reliable work.
                        </p>
                    </div>
                </section>

                {/* 4.4 "Request a Quote" Form Section */}
                <section id="quote" className="py-20 bg-gray-800">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-white">Request a Quote</h2>
                            <p className="text-gray-400 mt-2">Fill out the form below and we'll get back to you shortly.</p>
                        </div>
                        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" required className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                                <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Service Address" required className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <select name="service" value={formData.service} onChange={handleChange} className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    {services.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                                </select>
                                <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            </div>
                            <div className="mb-6">
                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Briefly describe your issue..." rows="4" className="w-full bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 w-full md:w-auto">
                                    Submit Request
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* 4.5 Contact & Location Section */}
                <section id="contact" className="py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
                            <a href="tel:+911234567890" className="text-xl text-blue-400 hover:text-blue-300">📞 Phone: +91 123-456-7890</a>
                            <a href="mailto:contact@flowfix.com" className="text-xl text-blue-400 hover:text-blue-300">✉️ Email: contact@flowfix.com</a>
                        </div>
                        {/* Embedded Google Map */}
                        <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
                            <iframe
                                title="Service Area Map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113943.83262656113!2d82.49842445831518!3d26.82885440730101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7b0f02e13205%3A0x7475d140f47e2523!2sAyodhya%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1725619553641!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 py-6">
                <div className="container mx-auto px-6 text-center text-gray-400">
                    <p>&copy; 2025 FlowFix Plumbing Solutions. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;