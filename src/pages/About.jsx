import "./About.css";

export default function About() {
  return (
    <>
      <section className="about-hero">
        <div className="about-hero-inner">
          <h1 className="about-hero-title">About Chilltree</h1>
        </div>
      </section>

      <section className="about-mission">
        <p>
            At Chilltree, we believe that premium energy should come from nature, not
            synthetic stimulants. Our mission is to provide you with thoughtfully crafted
            energy solutions that enhance your focus, support your recovery, and bring
            calm to your daily routine—all while maintaining the highest standards of
            quality and transparency.
          </p>

        <p>
            Every product we create is small-batch crafted using naturally sourced
            ingredients, carefully selected for their proven benefits. We harness the
            power of adaptogens, nootropics, and botanical extracts to deliver clean,
            sustained energy without the crash. Our commitment to natural energy means
            you can trust what you're putting into your body, knowing it's been
            rigorously tested and verified.
          </p>

        <p>
            Quality isn't just a promise—it's our foundation. From sourcing the finest
            ingredients to third-party lab testing every batch, we ensure that every
            Chilltree product meets our exacting standards. We're transparent about our
            process, our ingredients, and our results, because you deserve to know exactly
            what you're consuming and why it works.
          </p>
      </section>

      <section className="about-values">
        <h2 className="about-values-title">Our Core Values</h2>
        <div className="about-values-grid">
          <div className="about-value-card" style={{'--value-index': 0}}>
            <div className="about-value-icon">⭐</div>
            <h3 className="about-value-name">Quality</h3>
            <p className="about-value-desc">
              We source only the finest natural ingredients and subject every batch to
              rigorous third-party testing to ensure purity, potency, and safety.
            </p>
          </div>

          <div className="about-value-card" style={{'--value-index': 1}}>
            <div className="about-value-icon">🔍</div>
            <h3 className="about-value-name">Transparency</h3>
            <p className="about-value-desc">
              Complete openness about our ingredients, processes, and lab results. Every
              product comes with full documentation so you know exactly what you're getting.
            </p>
          </div>
          <div className="about-value-card" style={{'--value-index': 2}}>
            <div className="about-value-icon">⚡</div>
            <h3 className="about-value-name">Performance</h3>
            <p className="about-value-desc">
              Scientifically formulated blends that deliver real results. Clean, sustained
              energy, enhanced focus, and natural recovery—without the crash or jitters.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
