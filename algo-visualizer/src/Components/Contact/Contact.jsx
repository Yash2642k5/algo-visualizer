import React from 'react'
import { useState, useEffect } from "react";
import { useLoaderData,Form } from 'react-router-dom'
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

export const loader = async () => {
    try {
        const response = await fetch('/get_contact_key', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if (!response.ok) {
            throw new Error(`Server error: ${response.statusText}`);
        }

        const jsonKey = await response.json();

        const accessKey = jsonKey.key;
    
        return { accessKey }; 
    } catch (error) {
        console.error('Error in loader:', error);
        throw error; 
    }
};



export default function Contact() {

    const {register, reset, handleSubmit} = useForm();

    const [isSuccess, setIsSuccess] = useState(false);
    const [result, setResult] = useState(null);

    const { accessKey } = useLoaderData() 

    const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
        subject: "New Contact Message from your Algo Vizualizer",
    },
    onSuccess: (msg, data) => {
        alert("information sent will contact you soon!")
        setIsSuccess(true);
        setResult(msg);
        reset();
    },
    onError: (msg, data) => {
        alert(msg)
        setIsSuccess(false);
        setResult(msg);

    },
    });
    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-gradient-to-b from-[#000] via-[#200D42] via-[#4F21A1] to-[#A46EDB] sm:items-center sm:pt-0 font-dmsans">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-transparent sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-[#A46EDB] font-extrabold tracking-tight">
                                Get in touch: 
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-white mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-white">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-[#A46EDB]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Birla Institute Of Technology, Mesra
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-white">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-[#A46EDB]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 7762911156
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-white">
                                <svg
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                    viewBox="0 0 24 24"
                                    className="w-8 h-8 text-[#A46EDB]"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    yashpiyush2642005@gmail.com
                                </div>
                            </div>
                        </div>

                        <form  className="p-6 flex flex-col justify-center" >
                            <div className="flex flex-col">
                                <label htmlFor="name" className="hidden">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    {...register("name")}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#A46EDB] focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="email" className="hidden">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    {...register("email")}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#A46EDB] focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <label htmlFor="tel" className="hidden">
                                    Number
                                </label>
                                <input
                                    type="tel"
                                    name="tel"
                                    id="tel"
                                    placeholder="Telephone Number"
                                    {...register("tel")}
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-[#A46EDB] focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-[#A46EDB] hover:bg-blue-dark text-white hover:text-black font-bold py-3 px-6 rounded-lg mt-3 hover:bg-gradient-to-r from-[#F87AFF] via-[#FB93D0] via-[#FFDD99] via-[#C3F0B2] to-[#2FD8FE] transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
