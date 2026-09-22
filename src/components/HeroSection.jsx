function HeroSection({ titulo, subtitulo, textoBotao, imagemHero }) {
  return (
    <section className="banner">
      <div className="banner-text">
        <h1>{titulo}</h1>
        <p>{subtitulo}</p>
        <a className="btn-primary" href="#produtos">
          {textoBotao}
        </a>
      </div>
      <img
        className="banner-image"
        src={imagemHero}
        alt="Banner de promoção da loja"
      />
    </section>
  )
}

export default HeroSection
