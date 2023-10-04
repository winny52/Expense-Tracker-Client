import React from 'react';

const ContactPage = () => {
    return (
        <div className="bg-blue-200 h-screen flex flex-col">
            <div className="flex justify-center p-4">
                
                
            </div>
            <div className="flex-grow flex items-center justify-center text-white text-black">
                <div className="lg:w-1/2 p-8">
                    <h1 className="text-4xl mb-4">Contact Us</h1>
                    <p className="text-lg mb-4">
                        Feel free to get in touch with us if you have any questions, feedback, or inquiries about our Expense Tracker.
                    </p>
                    <div className="mb-4">
                        <h2 className="text-xl mb-2"><u>Contact Information:</u></h2>
                        <p>Email:Latto Expense Tracker@gmail.com</p>
                        <p>Phone: +354721689347</p>
                    </div>
                    <div className="mb-4">
                        <h2 className="text-xl mb-2">23021:</h2>
                        <p></p>Nairobi
                        <p>Kilimani</p>
                        <p>KENYA</p>
                    </div>
                    <p className="text-lg">We look forward to hearing from you!</p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
