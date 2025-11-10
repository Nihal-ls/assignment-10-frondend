import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
    return (
        <div>
            <div className="w-full my-10 max-w-4xl mx-auto mt-10">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={30}
                    slidesPerView={1}
                >
                    <SwiperSlide>
                        <div class="card w-96 mx-auto bg-base-100 shadow-sm">
                            <div class="card-body">
                                <span class="badge badge-xs badge-warning">Most Popular</span>
                                <div class="flex justify-between">
                                    <h2 class="text-3xl font-bold">Premium</h2>
                                    <span class="text-xl">$29/mo</span>
                                </div>
                                <ul class="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Alert For Habits</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Vedio Tutorials</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Trainer Support</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span> image Tutorial</span>
                                    </li>
                                    <li class="opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span class="line-through">Seamless cloud integration</span>
                                    </li>
                                    <li class="opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span class="line-through">Real-time collaboration tools</span>
                                    </li>
                                </ul>
                                <div class="mt-6">
                                    <button className="btn 
                     text-white font-bold bg-gradient-to-r  from-sky-300 to-blue-400  w-full mt-2">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card w-96 mx-auto bg-base-100 shadow-sm">
                            <div class="card-body">
                                <div class="flex justify-between">
                                    <h2 class="text-3xl font-bold">Premium</h2>
                                    <span class="text-xl">$19/mo</span>
                                </div>
                                <ul class="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Alert For Habits</span>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Vedio Tutorials</span>
                                    </li>

                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span> image Tutorial</span>
                                    </li>
                                    <li class="opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span class="line-through">Seamless cloud integration</span>
                                    </li>
                                    <li class="opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span class="line-through">Real-time collaboration tools</span>
                                    </li>
                                </ul>
                                <div class="mt-6">
                                    <button className="btn 
                     text-white font-bold bg-gradient-to-r  from-sky-300 to-blue-400  w-full mt-2">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div class="card w-96 mx-auto bg-base-100 shadow-sm">
                            <div class="card-body">
                                <div class="flex justify-between">
                                    <h2 class="text-3xl font-bold">Premium</h2>
                                    <span class="text-xl">$10/mo</span>
                                </div>
                                <ul class="mt-6 flex flex-col gap-2 text-xs">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span>Alert For Habits</span>
                                    </li>

                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span> image Tutorial</span>
                                    </li>
                                    <li class="opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span class="line-through">Seamless cloud integration</span>
                                    </li>
                                    <li class="opacity-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>
                                        <span class="line-through">Real-time collaboration tools</span>
                                    </li>
                                </ul>
                                <div class="mt-6">
                                    <button className="btn 
                     text-white font-bold bg-gradient-to-r  from-sky-300 to-blue-400  w-full mt-2">Buy Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;