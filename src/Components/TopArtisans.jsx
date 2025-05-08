import Star from '../assets/icons/star-icon.png';
const TopArtisans = () => {
    const artisans = new Array(3).fill({ name: 'Artisan Name', rating: 5 });
  
    return (
      <section className="py-8 px-4">
        <h2 className="text-[#110000C2] text-2xl font-semibold mb-4">Top Artisans</h2>
        <div className="flex bg-[#ECF1FC] gap-4">
          {artisans.map((artisan, idx) => (
            <div key={idx} className="bg-[#A1B7F2] h-[250px] w-[200px] text-white rounded-lg p-6 text-center">
              <div className="w-16 h-16 mx-auto bg-black items-center justify-center rounded-full mb-2"></div>
              <p>{artisan.name}</p>
              <p className='repeat-star'>
                {Array.from({ length: artisan.rating }, (_, i) => (
                     <img src={Star} alt="Star" className="inline-block w-4 h-4" />
                    ))}
              </p>
              {/* <p>{"⭐".repeat(artisan.rating)}</p> */}
            </div>
          ))}
        </div>
      </section>
    );
  }
   
  export default TopArtisans;





