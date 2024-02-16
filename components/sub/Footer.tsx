"use client";
import React, { useEffect, useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpForm: React.FC = () => {

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentDate = new Date();
    const options = { timeZone: 'Asia/Kolkata' };
    const formattedDate = currentDate.toLocaleString('en-US', options);
    const dateOnly = formattedDate.split(',')[0];
    const timeOnly = formattedDate.split(',')[1].trim();

    const data = {
      Name: name,
      Subject: subject,
      Email: email,
      Feedback: feedback,
      Date: dateOnly,
      Time: timeOnly, 

    }
    axios.post('https://sheet.best/api/sheets/c53208fa-73e0-4074-9e16-c54b3b880a45',data).then((response)=>{
      // console.log(response);
      setName('');
      setSubject('');
      setEmail('');
      setFeedback('');
      setSuccessMessage('Success vibes!');
      setErrorMessage('');
    })
    .catch((error) => {
      setErrorMessage('Error 404: Success not found.');
      setSuccessMessage('');
    });
  };

  return (
    <div className="relative w-full h-full bg-transparent text-gray-200 shadow-lg p-6 mb-3 ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        
        <h2 className="text-2xl font-semibold mb-6">Got a sec? Share your thoughts</h2>
        <form action="#" method="POST" onSubmit={handleSubmit} className="mt-10">
        {successMessage && (
            <div className="mt-4 alert alert-success d-flex align-items-center justify-content-center">
              {successMessage}
            </div>
          )}

          {errorMessage && (
            <div className="mt-4 alert alert-danger d-flex align-items-center justify-content-center">
              {errorMessage}
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-white-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="mt-1 p-2 w-full border rounded-md text-black"
                required
                onChange={(e)=>setName(e.target.value)} value={name}
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-white-700">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                className="mt-1 p-2 w-full border rounded-md text-black"
                required
                onChange={(e)=>setSubject(e.target.value)} value={subject}
              />
            </div>
          </div>

          
          <div className="mt-4">
            <label htmlFor="email" className="block text-sm font-medium text-white-700">
              Email ID
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 p-2 w-full border rounded-md text-black"
              required
              onChange={(e)=>setEmail(e.target.value)} value={email}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="feedback" className="block text-sm font-medium text-white-700">
              Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              placeholder="Enter your feedback"
              className="mt-1 p-2 w-full border rounded-md text-black"
              required
              onChange={(e)=>setFeedback(e.target.value)} value={feedback}
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full p-3 bg-purple-900 text-white rounded-md hover:bg-blue-900"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
