import React from "react";
import dataPembahasan from "./../assets/json/pembahasan.json"

export const LandingPage = () => {
    const pembahasan = dataPembahasan;

    const CoverComponent = ({ imgUrl, title, description, link }) => {
        return (
            <a href={link} target="_blank" className="flex flex-col gap-4 w-[200px] aspect-[3/4] bg-accent relative overflow-hidden rounded-lg p-4 justify-between">
                <p className="font-bold text-xl italic">{title}</p>
                <p className="text-sm italic">{description}</p>
                <img
                    src={imgUrl}
                    alt=""
                    className="object-cover opacity-10 w-full h-full absolute top-0 left-0"
                />
            </a>
        );
    };
    return (
        <main className="flex flex-col items-center justify-center gap-24 mb-80">
            {/* section 1 */}
            <section className="flex w-full ">
                <img
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8660b087-d786-4082-af42-2b0709e15a5d/dhhvrrj-5b7d88c4-da72-4798-9d46-c7daa8f6ae62.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2NjBiMDg3LWQ3ODYtNDA4Mi1hZjQyLTJiMDcwOWUxNWE1ZFwvZGhodnJyai01YjdkODhjNC1kYTcyLTQ3OTgtOWQ0Ni1jN2RhYThmNmFlNjIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.r-kAIy272i8y5sL_PACCC6Fh2pTDiuCDDKdCc-f6mvI"
                    alt=""
                    className="w-full h-[80vh] object-cover opacity-20"
                />
            </section>

            {/* section 2 */}
            <section className="container flex flex-col gap-10">
                <p className="text-3xl text-center uppercase italic font-black">
                    Pembahasan
                </p>
                <div className="flex flex-wrap gap-8 justify-center">
                    {pembahasan.map((item) => (
                        <CoverComponent
                            imgUrl={item.imgUrl}
                            title={item.title}
                            description={item.description}
                            link={item.link}
                        />
                    ))}

                </div>
            </section>

            {/* section 3 */}
            {/* <section className="container flex flex-col gap-10">
                <p className="text-3xl text-center uppercase italic font-black">
                    Contact me
                </p>
            </section> */}
        </main>
    );
};
