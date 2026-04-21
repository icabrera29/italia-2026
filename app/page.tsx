import Image from "next/image";
import Countdown from "./components/Countdown";

export default function Home() {
  return (
    <>
      {/* TopAppBar */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center w-full px-8 py-6 bg-background/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="text-2xl font-headline italic text-primary">L'Italia Curata</div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#rome">Roma</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#positano">Positano</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#venice">Venecia</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors duration-300" href="#experience">La Experiencia</a>
        </div>
        <button className="md:hidden text-primary">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-[921px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
        <Image
          src="/rome-1.jpg"
          alt="Vistas de la costa italiana"
          fill
          className="object-cover contrast-[1.02] brightness-[0.95]"
          priority
          unoptimized
        />
        <div className="relative z-20 text-center text-white px-6 mt-20">
          <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl mb-6 tracking-tight drop-shadow-lg">Il Nostro Viaggio <br/><span className="italic text-tertiary-fixed">in Italia</span></h1>
          <p className="font-body text-xl md:text-2xl mb-12 text-surface-container-low max-w-2xl mx-auto">Un viaje seleccionado a través del corazón del Mediterráneo.</p>
          <div className="bg-surface/80 backdrop-blur-md rounded-xl p-8 max-w-xl mx-auto border border-outline-variant/30">
            <p className="font-label text-sm uppercase tracking-widest text-primary mb-6 font-semibold">Cuenta atrás para el 16 de mayo</p>
            <Countdown />
          </div>
        </div>
      </header>

      <main>
        {/* Destinations Section */}
        <section className="py-24 px-6 md:px-12 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center md:text-left ml-[5%]">
              <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">Los Destinos</h2>
              <p className="font-body text-lg text-on-surface-variant max-w-xl">Tres capítulos distintos en nuestra narrativa italiana. Desde ruinas antiguas hasta acantilados costeros y palazzos flotantes.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Roma */}
              <div className="col-span-1 lg:col-span-12 flex flex-col lg:flex-row gap-8 items-center lg:items-end mb-12" id="rome">
                <div className="w-full lg:w-7/12 relative group h-[500px]">
                  <Image 
                    src="/coliseo.jpg" 
                    alt="Coliseo de Roma" 
                    fill 
                    className="object-cover rounded-DEFAULT"
                    unoptimized
                  />
                </div>
                <div className="w-full lg:w-4/12 bg-surface-container-low p-10 -mt-20 lg:-mt-0 lg:-ml-20 relative z-10">
                  <span className="inline-block px-4 py-1 bg-tertiary-container text-on-tertiary-container rounded-full font-label text-xs tracking-wider mb-4">Capítulo I</span>
                  <h3 className="font-headline text-3xl mb-2 text-on-surface">Roma</h3>
                  <p className="font-body text-sm text-primary mb-6 italic">La Ciudad Eterna</p>
                  <p className="font-body text-on-surface-variant leading-relaxed mb-8">Donde la vida moderna bulle entre milenios de historia. Un espresso en el Panteón, deambulando por el foro al atardecer y descubrimientos culinarios en el Trastevere.</p>
                  <button className="text-secondary font-label text-sm uppercase tracking-wider flex items-center hover:text-primary transition-colors">
                      Explorar Itinerario <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
              {/* Positano */}
              <div className="col-span-1 lg:col-span-12 flex flex-col lg:flex-row-reverse gap-8 items-center lg:items-end mb-12" id="positano">
                <div className="w-full lg:w-7/12 relative group h-[500px]">
                  <Image 
                    src="/positano-1.jpg" 
                    alt="Costa de Positano" 
                    fill 
                    className="object-cover rounded-DEFAULT"
                    unoptimized
                  />
                </div>
                <div className="w-full lg:w-4/12 bg-surface-container-lowest p-10 -mt-20 lg:-mt-0 lg:-mr-20 relative z-10 border border-outline-variant/20">
                  <span className="inline-block px-4 py-1 bg-secondary-container text-on-secondary-container rounded-full font-label text-xs tracking-wider mb-4">Capítulo II</span>
                  <h3 className="font-headline text-3xl mb-2 text-on-surface">Positano</h3>
                  <p className="font-body text-sm text-secondary mb-6 italic">La Perla de la Costa</p>
                  <p className="font-body text-on-surface-variant leading-relaxed mb-8">Limonares en los acantilados, empinados senderos que conducen a playas ocultas y tardes contemplando cómo el sol se funde en el mar Tirreno desde una terraza privada.</p>
                  <button className="text-secondary font-label text-sm uppercase tracking-wider flex items-center hover:text-primary transition-colors">
                      Explorar Itinerario <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
              {/* Venezia */}
              <div className="col-span-1 lg:col-span-12 flex flex-col lg:flex-row gap-8 items-center lg:items-end" id="venice">
                <div className="w-full lg:w-7/12 relative group h-[500px]">
                  <Image 
                    src="/venezia.jpg" 
                    alt="Canales de Venecia" 
                    fill 
                    className="object-cover rounded-DEFAULT"
                    unoptimized
                  />
                </div>
                <div className="w-full lg:w-4/12 bg-surface-container p-10 -mt-20 lg:-mt-0 lg:-ml-20 relative z-10">
                  <span className="inline-block px-4 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full font-label text-xs tracking-wider mb-4">Capítulo III</span>
                  <h3 className="font-headline text-3xl mb-2 text-on-surface">Venezia</h3>
                  <p className="font-body text-sm text-tertiary mb-6 italic">La Ciudad Flotante</p>
                  <p className="font-body text-on-surface-variant leading-relaxed mb-8">Navegando por las laberínticas calli, saboreando Bellinis en Harry's Bar y experimentando la magia silenciosa del Gran Canal mientras la niebla aparece.</p>
                  <button className="text-secondary font-label text-sm uppercase tracking-wider flex items-center hover:text-primary transition-colors">
                      Explorar Itinerario <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience/Notes Section */}
        <section className="py-24 bg-surface-container-low px-6" id="experience">
          <div className="max-w-4xl mx-auto text-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-6 block">book_4</span>
            <h2 className="font-headline text-3xl md:text-4xl text-on-surface mb-8">Notas Seleccionadas</h2>
            <div className="bg-surface p-10 md:p-16 rounded-lg relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface px-4">
                <span className="material-symbols-outlined text-outline-variant text-3xl">format_quote</span>
              </div>
              <p className="font-headline text-xl md:text-2xl text-on-surface-variant leading-relaxed italic mb-8">
                  &quot;The creator made Italy from designs by Michelangelo.&quot;
              </p>
              <p className="font-body text-sm text-outline tracking-widest uppercase">Mark Twain</p>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-outline-variant/20 pt-12">
                <div>
                  <h4 className="font-headline text-lg text-primary mb-3">Lista de Equipaje</h4>
                  <ul className="font-body text-on-surface-variant space-y-2 text-sm">
                    <li>Camisas y vestidos de lino</li>
                    <li>Calzado cómodo para caminar</li>
                    <li>Atuendo de noche para cenar</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-headline text-lg text-primary mb-3">Reservas</h4>
                  <ul className="font-body text-on-surface-variant space-y-2 text-sm">
                    <li>Da Enzo al 29 (Roma)</li>
                    <li>La Sponda (Positano)</li>
                    <li>Caffè Florian (Venecia)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-headline text-lg text-primary mb-3">Lista de Lectura</h4>
                  <ul className="font-body text-on-surface-variant space-y-2 text-sm">
                    <li>Novelas de Elena Ferrante</li>
                    <li>La agonía y el éxtasis</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
            <h2 className="font-headline text-4xl md:text-5xl text-on-primary mb-6">¿Listo para Explorar?</h2>
            <p className="font-body text-lg text-on-primary/80 mb-12">Consulta el mapa interactivo completo y el itinerario diario detallado.</p>
            <button className="bg-surface text-primary font-label px-8 py-4 rounded-DEFAULT hover:bg-surface-container-high transition-colors duration-300 flex items-center justify-center mx-auto gap-3 text-lg">
              <span className="material-symbols-outlined">map</span>
                  Ver el Mapa
              </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-stone-100 dark:bg-stone-900 w-full py-12 border-t border-stone-200/20 dark:border-stone-800/20 grid grid-cols-1 md:grid-cols-2 gap-8 px-12 max-w-7xl mx-auto">
        <div>
          <div className="text-lg font-serif text-[#984126] dark:text-[#b8593b] mb-4">L'Italia Curata</div>
          <p className="font-['Manrope'] text-sm tracking-wide text-[#70582f] dark:text-[#9b855b]">© 2024 L'Italia Curata. Una Monografía Digital.</p>
        </div>
        <div className="flex flex-wrap gap-6 md:justify-end items-end">
          <a className="font-['Manrope'] text-sm tracking-wide text-stone-500 hover:text-[#276489] transition-all ease-in-out duration-300" href="#">Diario</a>
          <a className="font-['Manrope'] text-sm tracking-wide text-stone-500 hover:text-[#276489] transition-all ease-in-out duration-300" href="#">Los Ateliers</a>
          <a className="font-['Manrope'] text-sm tracking-wide text-stone-500 hover:text-[#276489] transition-all ease-in-out duration-300" href="#">Política de Privacidad</a>
          <a className="font-['Manrope'] text-sm tracking-wide text-stone-500 hover:text-[#276489] transition-all ease-in-out duration-300" href="#">Contacto</a>
        </div>
      </footer>
    </>
  );
}
