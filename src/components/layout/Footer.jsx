

export const Footer = () => {

    return (
        <footer className="flex flex-col justify-center items-center p-14 relative overflow-hidden gap-8">
            {/* logo  */}
            <div className="flex items-center gap-3 text-xl font-bold uppercase">
                <img src="./img/logo_tungg.png" alt="" className='h-10 object-contain' />
                <p>TunGG</p>
            </div>
            <p className="text-center w-[700px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi obcaecati illum reprehenderit quisquam doloribus minima ut voluptatum tempore, odit placeat.</p>
            <p className="text-sm">&reg;2025 TunGG, All Rights Reserved</p>
            {/* bg  */}
            <img src="https://ukiyaseed.weebly.com/uploads/5/8/8/7/58878313/kamen-rider-issue-1-interiors-page-0_orig.jpg" alt="" className="absolute top-0 left-0 w-full object-cover opacity-5 grayscale" />
        </footer>
    );
}
