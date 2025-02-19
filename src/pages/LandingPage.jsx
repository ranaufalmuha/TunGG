import React from "react";
import dataPembahasan from "./../assets/json/pembahasan.json"
import dataMerchandise from "./../assets/json/merchandise.json"
import dataNontonKuy from "./../assets/json/nonton_kuy.json"

export const LandingPage = () => {
    const pembahasan = dataPembahasan;
    const merchandise = dataMerchandise;
    const nonton_kuy = dataNontonKuy;

    const PembahasanComponent = ({ imgUrl, title, link }) => {
        return (
            <a href={link} target="_blank" className="flex flex-col gap-8 w-1/3 aspect-[2/3] relative overflow-hidden justify-between">
                <img
                    src={imgUrl}
                    alt=""
                    className="object-cover w-full h-full"
                />
                <p className="text-xl ">{title}</p>
            </a>
        );
    };
    const MerchandiseComponent = ({ imgUrl, title, type, price, link }) => {
        return (
            <a href={link} target="_blank" className="flex flex-col gap-6  snap-center relative overflow-hidden justify-between  grayscale hover:grayscale-0 group">
                <img
                    src={imgUrl}
                    alt=""
                    className="object-cover w-[300px] group-hover:w-[400px] h-[420px] duration-300"
                />
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <p className="text-lg line-clamp-1">{title}</p>
                        <p className="line-clamp-1 text-gray-500">{type}</p>
                    </div>
                    <p className="line-clamp-1">IDR {price}</p>
                </div>
            </a>
        );
    };
    const NontonKuyComponent = ({ link }) => {
        return (
            <iframe src={link} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen className="aspect-[16/9] w-1/3"></iframe>
        );
    };

    return (
        <main className="flex flex-col items-center justify-center gap-24 mb-24">
            {/* section 1 */}
            <section className="flex w-full relative h-[68vh]">
                <div className="flex flex-col gap-4 w-full h-full justify-center items-center z-10">
                    <p className="text-5xl font-bold">Tokusatsu Fans</p>
                    <p className="text-xl w-[630px] text-center ">Lorem, ipsum dolor sit amet consectetur elit. Hic, ex? ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, vero.</p>
                </div>
                <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8660b087-d786-4082-af42-2b0709e15a5d/dhhvrrj-5b7d88c4-da72-4798-9d46-c7daa8f6ae62.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2NjBiMDg3LWQ3ODYtNDA4Mi1hZjQyLTJiMDcwOWUxNWE1ZFwvZGhodnJyai01YjdkODhjNC1kYTcyLTQ3OTgtOWQ0Ni1jN2RhYThmNmFlNjIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.r-kAIy272i8y5sL_PACCC6Fh2pTDiuCDDKdCc-f6mvI"
                    alt=""
                    className="w-full h-full object-cover opacity-20 absolute left-0 top-0 "
                />
            </section>

            {/* section 2 */}
            <section className="container flex flex-col gap-10 px-8">
                <p className="text-3xl ">
                    Pembahasan
                </p>
                <div className="w-full flex justify-between gap-8">
                    {pembahasan.slice(0, 3).map((item) => (
                        <PembahasanComponent
                            imgUrl={item.imgUrl}
                            title={item.title}
                            link={item.link}
                        />
                    ))}

                </div>
            </section>

            {/* section 3 */}
            <section className="container flex flex-col gap-10 px-8">
                <p className="text-3xl ">
                    Nonton Kuy
                </p>
                <div className="w-full flex justify-between gap-4">
                    {nonton_kuy.slice(0, 3).map((item) => (
                        <NontonKuyComponent
                            link={item.link}
                        />
                    ))}

                </div>
            </section>

            {/* section 4 */}
            <section className="container flex flex-col gap-10 overflow-x-auto px-8">
                <p className="text-3xl ">
                    Merchandise
                </p>
                <div className="relative">
                    <div className="flex gap-3 overflow-auto">
                        {merchandise.slice(0, 5).map((item, index) => (
                            <MerchandiseComponent
                                key={index}
                                imgUrl={item.imgUrl}
                                title={item.title}
                                price={item.price}
                                type={item.type}
                                link={item.link}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* section 5 */}
            <section className="container flex flex-col gap-10 overflow-x-auto px-8">
                <p className="text-3xl ">
                    Contact Me
                </p>
                <div className="flex flex-col">
                    <div className="flex">
                        <a href="https://www.instagram.com/tungg_id/" target="_blank" className="aspect-[4/3] w-1/2">
                            <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover h-full w-full" alt="" />
                        </a>
                        <a href="https://www.facebook.com/tunggdoang" target="_blank" className="aspect-[4/3] w-1/2">
                            <img src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover h-full w-full" alt="" />
                        </a>
                        <a href="mailto:tunggofficial@gmail.com?subject=Inquiry%20from%20Website" className="aspect-[4/3] w-1/2">
                            <img src="https://plus.unsplash.com/premium_photo-1682309526815-efe5d6225117?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover h-full w-full" alt="" />
                        </a>
                        <a href="https://www.youtube.com/@TunGG/videos" target="_blank" className="aspect-[4/3] w-1/2">
                            <img src="https://images.unsplash.com/photo-1679094837433-32484a621c74?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="object-cover h-full w-full" alt="" />
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
};
