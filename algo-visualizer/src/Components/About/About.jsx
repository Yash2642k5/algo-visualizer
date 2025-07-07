import React from 'react'
import MyPhoto from '../../assets/my-photo.jpg'

export default function About() {
return (
    <div className="py-16 bg-gradient-to-b from-[#000] via-[#200D42] via-[#4F21A1] to-[#A46EDB] font-dmsans">
        <div className="container m-auto px-6 text-white md:text-xl md:px-12 xl:px-6">
            <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                <div className="md:5/12 lg:w-5/12">
                    <img
                        src={MyPhoto}
                        alt="image"
                    />
                </div>
                <div className="md:7/12 lg:w-6/12">
                    <h1 className="text-2xl bg-gradient-to-r from-[#F87AFF] via-[#FB93D0] via-[#FFDD99] via-[#C3F0B2] to-[#2FD8FE] text-transparent bg-clip-text font-bold md:text-6xl">
                        about the developers of the site
                    </h1>
                    <p className="mt-6">
                        The aim with Algo visualizer is to come up with not so usual ways to visualize algorithms and provide clear, interesting and fun visualizers. We will try to come up with more visualizers in the future.
                    </p>
                    <p className="mt-4">
                        Website's developer Yash Sinha is a Computer Science and Engineering undergrad at Birla Institute Of Technology, Mesra.
                        Currently in his 3rd year of college, Yash has explored many domains, like web development, app devlopment and data analytics.
                        Now exploring things in machine learning, Yash continues to learn and make progress everyday.
                    </p>
                </div>
            </div>
        </div>
    </div>
);
}