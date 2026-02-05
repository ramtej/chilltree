import { Link } from "react-router-dom";



import Marquee from "../components/Marquee";



import OrbitCarousel from "../components/OrbitCarousel";







export default function Home() {



  const handleAddToCart = (productId) => {



    console.log("Add to cart:", productId);



  };







  return (



    <>



      {/* Large Logo Section */}



      <div style={{



        position: 'fixed',



        top: '20px',



        left: '20px',



        zIndex: 999,



        display: 'flex',



        alignItems: 'center',



      }}>



        <Link



          to="/"



          style={{



            display: 'flex',



            alignItems: 'center',



          }}



          onMouseEnter={(e) => {



            e.currentTarget.style.transform = 'scale(1.1)';



            e.currentTarget.style.filter = 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.6))';



          }}



          onMouseLeave={(e) => {



            e.currentTarget.style.transform = 'scale(1)';



            e.currentTarget.style.filter = 'none';



          }}



        >



          <img



            src="/chill tree white.png"



            alt="Chilltree"



            style={{



              height: "120px",



              width: "auto",



              objectFit: "contain",



            }}



          />



        </Link>



      </div>







      <div style={{ marginTop: '120px' }}>



        {/* Hero Section - Luxury Minimal Experience */}



        <section className="image-section" style={{ minHeight: '100vh', position: 'relative' }}>



          {/* Hero Background Video */}



          <video



            autoPlay



            muted



            loop



            playsInline



            style={{



              position: 'absolute',



              top: 0,



              left: 0,



              width: '100%',



              height: '100%',



              objectFit: 'cover',



              zIndex: 0,



            }}

          >



            <source src="/kling_20260203_Image_to_Video___PREMIUM_3940_0 (1).mp4" type="video/mp4" />



          </video>







          {/* Cinematic Obsidian Overlay */}



          <div style={{



            position: 'absolute',



            top: 0,



            left: 0,



            width: '100%',



            height: '100%',



            background: 'linear-gradient(135deg, rgba(11, 15, 26, 0.3) 0%, rgba(17, 22, 42, 0.25) 25%, rgba(26, 31, 58, 0.2) 50%, rgba(11, 15, 26, 0.3) 100%)',



            zIndex: 1,



          }} />







          {/* Liquid Gold Mist - Luxury Effect */}



          <div style={{



            position: 'absolute',



            top: 0,



            left: 0,



            width: '100%',



            height: '100%',



            background: 'radial-gradient(circle at 30% 20%, rgba(0, 255, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0, 255, 255, 0.06) 0%, transparent 50%)',



            zIndex: 2,



          }} />







          {/* Premium Grain Overlay */}



          <div className="grain-overlay" style={{ zIndex: 3 }} />







          <div className="image-section-content" style={{ zIndex: 4 }}>



            <div className="premium-container">



              {/* Professional Headline */}



              <h1
  style={{
    fontSize: 'clamp(4rem, 8vw, 8rem)',
    fontWeight: 900,
    margin: '0 0 2.5rem 0',
    lineHeight: 1.1,
    letterSpacing: '-0.05em',
    textTransform: 'uppercase',
    color: '#fff',
    background: 'none',
    WebkitTextFillColor: '#fff',
    textShadow: '0 4px 8px rgba(0,0,0,0.3)',
  }}
>
  <span
    style={{
      color: '#00FFFF',
      background: 'none',
      WebkitTextFillColor: '#00FFFF',
      textShadow: '0 4px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 255, 255, 0.4)',
    }}
  >
    Powerful
  </span>{' '}
  <span
    style={{
      color: '#FFFFFF',
      background: 'none',
      WebkitTextFillColor: '#FFFFFF',
    }}
  >
    Energy
  </span>
  <br />
  <span
    style={{
      fontSize: 'clamp(3rem, 6vw, 5.5rem)',
      display: 'block',
      marginTop: '1rem',
      color: '#fff',
      background: 'none',
      WebkitTextFillColor: '#fff',
    }}
  >
    Absolute Focus.
  </span>
</h1>








              )



              <div className="fade-in-up" style={{

                animationDelay: '0.4s',

                maxWidth: '800px',

                margin: '0 auto 4rem auto',

                background: 'transparent',

                border: '1px solid rgba(255,255,255,0.18)',

                padding: '3rem',

                borderRadius: 'var(--radius-3xl)',

              }}>



                <p style={{



                  fontSize: 'var(--scale-2xl)',



                  color: '#FFFFFF',



                  lineHeight: 1.8,



                  margin: 0,



                  fontFamily: 'var(--font-body)',



                  fontWeight: 500,



                  textAlign: 'center',



                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.4)',



                }}>



                  Lab-tested botanicals that deliver calm, focus, and clarity in minutes. Experience the future of professional wellness without synthetic stimulants.



                </p>



              </div>







              {/* Professional Dual CTA */}



              <div className="fade-in-up" style={{



                animationDelay: '0.6s',



                display: 'flex',



                flexDirection: 'column',



                alignItems: 'center',



                gap: '2rem',



              }}>



                <button className="premium-btn" style={{



                  fontSize: 'var(--scale-xl)',



                  padding: '1.75rem 5rem',



                  minWidth: '350px',



                  background: 'transparent',



                  color: '#00FFFF',



                }}>



                  Start My Subscription



                </button>



                <button className="premium-btn premium-btn-secondary" style={{



                  fontSize: 'var(--scale-lg)',



                  padding: '1.5rem 4rem',



                  minWidth: '300px',



                  color: '#FFFFFF',



                  borderColor: 'rgba(255,255,255,0.18)',



                }}>



                  One-time Purchase



                </button>



              </div>



            </div>



          </div>



        </section>







        {/* Premium Marquee */}



        <Marquee />







        {/* Premium Collection - Hero Section Format */}



        <section className="premium-section" style={{



          position: 'relative',



          minHeight: '100vh',



          overflow: 'hidden',



        }}>



          {/* Background Image Removed */}



          {/* Cinematic Blue Overlay - Same as Hero */}



          <div style={{



            position: 'absolute',



            top: 0,



            left: 0,



            width: '100%',



            height: '100%',



            background: 'linear-gradient(135deg, rgba(11, 15, 26, 0.3) 0%, rgba(17, 22, 42, 0.25) 50%, rgba(26, 31, 58, 0.2) 100%)',



            zIndex: 1,



          }} />







          {/* Light Silver Mist - Luxury Effect */}



          <div style={{



            position: 'absolute',



            top: 0,



            left: 0,



            width: '100%',



            height: '100%',



            background: 'radial-gradient(circle at 30% 20%, rgba(0, 255, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0, 255, 255, 0.06) 0%, transparent 50%)',



            zIndex: 2,



          }} />



          <div className="premium-container" style={{ position: 'relative', zIndex: 4 }}>



            {/* Section Header */}



            <div className="fade-in-up" style={{



              textAlign: 'center',



              marginBottom: '6rem',



              animationDelay: '0.2s',



            }}>



              <h2 style={{



                fontSize: 'clamp(3.5rem, 6vw, 5.5rem)',



                fontWeight: 800,



                margin: '0 0 2.5rem 0',



                fontFamily: 'var(--font-display)',



                textTransform: 'uppercase',



                letterSpacing: '-0.04em',



                color: '#F8FAFC',



                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(232,236,243,0.2)',



              }}>



                <span style={{



                  color: '#00FFFF',



                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 255, 255, 0.4)',



                }}>Professional</span> Collection



              </h2>







              <div className="premium-divider" style={{



                width: '150px',



                height: '3px',



                margin: '2.5rem auto',



                background: '#00FFFF',



              }} />







              <div className="fade-in-up glass-panel" style={{



                animationDelay: '0.4s',



                maxWidth: '800px',



                margin: '0 auto 4rem auto',



              }}>



                <p style={{



                  fontSize: 'var(--scale-2xl)',



                  color: '#FFFFFF',



                  lineHeight: 1.8,



                  margin: 0,



                  fontFamily: 'var(--font-body)',



                  fontWeight: 500,



                  textAlign: 'center',



                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',



                }}>



                  Experience our elite portfolio of precision-engineered wellness solutions, formulated for peak performance and advanced cognitive enhancement



                </p>



              </div>



            </div>







            {/* Orbiting Product Carousel */}



            <div className="fade-in-up" style={{ animationDelay: '0.6s' }}>



              <OrbitCarousel />



            </div>







            {/* View Full Collection Button with Badges */}



            <div className="fade-in-up" style={{



              textAlign: 'center',



              animationDelay: '1.2s',



              display: 'flex',



              alignItems: 'center',



              justifyContent: 'center',



              gap: '2rem',



              flexWrap: 'wrap',



            }}>



              {/* Left Badge */}



              <div className="premium-badge" style={{
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>

                <span>✓</span>

                <span>Lab Verified</span>

              </div>







              {/* Center Button */}



              <button className="premium-btn premium-btn-secondary" style={{



                fontSize: 'var(--scale-xl)',



                padding: '1.75rem 5rem',



                minWidth: '350px',



                color: '#FFFFFF',



              }}>



                View Full Collection



              </button>







              {/* Right Badge */}



              <div className="premium-badge" style={{
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>

                <span>⭐</span>

                <span>Premium Quality</span>

              </div>



            </div>



          </div>



        </section>



        {/* Subscribe & Save - Hero Section Format */}



        <section className="image-section premium-section" style={{ minHeight: '80vh' }}>



          {/* Background Video */}



          <video



            autoPlay



            muted



            loop



            playsInline



            style={{



              position: 'absolute',



              top: 0,



              left: 0,



              width: '100%',



              height: '100%',



              objectFit: 'cover',



              zIndex: 0,



            }}



            onError={(e) => {



              // Fallback to image if video fails



              const img = document.createElement('img');



              img.src = "/kling_20260203_Image_to_Video___PREMIUM_4871_0.jpg";



              img.alt = "Blue subscription experience";



              img.className = "image-section-bg";



              img.style.opacity = "0.3";



              img.style.position = "absolute";



              img.style.top = "0";



              img.style.left = "0";



              img.style.width = "100%";



              img.style.height = "100%";



              img.style.objectFit = "cover";



              img.style.zIndex = "0";



              e.target.parentNode.replaceChild(img, e.target);



            }}



          >



            <source src="/kling_20260203_Image_to_Video___PREMIUM_4871_0.mp4" type="video/mp4" />



          </video>







          {/* Dark Blue Gradient Overlay */}



          <div style={{



            position: 'absolute',



            top: 0,



            left: 0,



            width: '100%',



            height: '100%',



            background: 'linear-gradient(135deg, rgba(11, 15, 26, 0.3) 0%, rgba(17, 22, 42, 0.25) 50%, rgba(26, 31, 58, 0.2) 100%)',



            zIndex: 1,



          }} />







          {/* Subtle Silver Light from Top */}



          <div style={{



            position: 'absolute',



            top: 0,



            left: 0,



            width: '100%',



            height: '100%',



            background: 'radial-gradient(circle at 40% 30%, rgba(0, 255, 255, 0.06) 0%, transparent 60%), radial-gradient(circle at 60% 70%, rgba(0, 255, 255, 0.04) 0%, transparent 60%)',



            zIndex: 2,



          }} />







          {/* Premium Grain Overlay */}



          <div className="grain-overlay" style={{ zIndex: 3 }} />







          <div className="image-section-content" style={{ zIndex: 4 }}>



            <div className="premium-container">



              {/* Section Header */}



              <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>



                <h2 style={{



                  fontSize: 'clamp(3rem, 6vw, 4.5rem)',



                  fontWeight: 800,



                  margin: '0 0 2.5rem 0',



                  fontFamily: 'var(--font-display)',



                  textTransform: 'uppercase',



                  letterSpacing: '-0.04em',



                  color: '#FFFFFF',



                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(232,236,243,0.2)',



                }}>



                  <span style={{



                    color: '#00FFFF',



                    textShadow: '0 4px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 255, 255, 0.4)',



                  }}>Subscribe</span> & Save 25%



                </h2>







                <div className="premium-divider" style={{



                  width: '120px',



                  height: '3px',



                  margin: '2.5rem auto',



                  background: '#00FFFF',



                }} />







                <p style={{



                  fontSize: 'var(--scale-2xl)',



                  color: '#FFFFFF',



                  maxWidth: '800px',



                  margin: '0 auto 2.5rem auto',



                  fontFamily: 'var(--font-body)',



                  lineHeight: 1.8,



                  fontWeight: 500,



                  textShadow: '0 2px 4px rgba(0,0,0,0.4)',



                }}>



                  Join our professional subscription program and enjoy premium savings, exclusive benefits, and never run out of your favorite wellness products.



                </p>



              </div>







              {/* Benefits Grid - Transparent Cards */}



              <div className="fade-in-up" style={{



                animationDelay: '1s',



                marginBottom: '4rem',



                display: 'flex',



                gap: '2rem',



                justifyContent: 'center',



                maxWidth: '1400px',



                margin: '0 auto 4rem auto',



              }}>



                <div className="premium-card" style={{



                  textAlign: 'center',



                  flex: '1',



                  maxWidth: '400px',



                  background: 'rgba(255,255,255,0.08)',



                  backdropFilter: 'blur(12px)',



                  border: '1px solid rgba(255,255,255,0.18)',



                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',



                }}>



                  <div style={{



                    fontSize: 'var(--scale-4xl)',



                    marginBottom: '1.5rem',



                  }}>



                    💰



                  </div>



                  <div style={{



                    fontSize: 'var(--scale-xl)',



                    fontWeight: 600,



                    marginBottom: '0.75rem',



                    fontFamily: 'var(--font-display)',



                    color: '#FFFFFF',



                  }}>



                    Save 25%



                  </div>



                  <div style={{



                    fontSize: 'var(--scale-base)',



                    color: '#9CA3AF',



                    fontFamily: 'var(--font-body)',



                  }}>



                    Every order, every time



                  </div>



                </div>







                <div className="premium-card" style={{



                  textAlign: 'center',



                  flex: '1',



                  maxWidth: '400px',



                  background: 'rgba(255,255,255,0.08)',



                  backdropFilter: 'blur(12px)',



                  border: '1px solid rgba(255,255,255,0.18)',



                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',



                }}>



                  <div style={{



                    fontSize: 'var(--scale-4xl)',



                    marginBottom: '1.5rem',



                  }}>



                    🚚



                  </div>



                  <div style={{



                    fontSize: 'var(--scale-xl)',



                    fontWeight: 600,



                    marginBottom: '0.75rem',



                    fontFamily: 'var(--font-display)',



                    color: '#FFFFFF',



                  }}>



                    Free Shipping



                  </div>



                  <div style={{



                    fontSize: 'var(--scale-base)',



                    color: '#9CA3AF',



                    fontFamily: 'var(--font-body)',



                  }}>



                    On all subscription orders



                  </div>



                </div>







                <div className="premium-card" style={{



                  textAlign: 'center',



                  flex: '1',



                  maxWidth: '400px',



                  background: 'rgba(255,255,255,0.08)',



                  backdropFilter: 'blur(12px)',



                  border: '1px solid rgba(255,255,255,0.18)',



                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',



                }}>



                  <div style={{



                    fontSize: 'var(--scale-4xl)',



                    marginBottom: '1.5rem',



                  }}>



                    ⏰



                  </div>



                  <div style={{



                    fontSize: 'var(--scale-xl)',



                    fontWeight: 600,



                    marginBottom: '0.75rem',



                    fontFamily: 'var(--font-display)',



                    color: '#FFFFFF',



                  }}>



                    Flexible Timing



                  </div>



                  <div style={{



                    fontSize: 'var(--scale-base)',



                    color: '#9CA3AF',



                    fontFamily: 'var(--font-body)',



                  }}>



                    Skip or cancel anytime



                  </div>



                </div>



              </div>







              {/* CTA Button */}



              <div className="fade-in-up" style={{



                animationDelay: '1.2s',



              }}>



                <button className="premium-btn" style={{

                  fontSize: 'var(--scale-xl)',

                  padding: '1.75rem 5rem',

                  background: 'transparent',

                  color: '#FFFFFF',

                  fontWeight: 700,

                  minWidth: '350px',

                  border: '2px solid #00FFFF',

                }}>



                  Start Professional Savings



                </button>



              </div>



            </div>



          </div>



        </section>



        {/* Additional Marquee Section */}



        <Marquee />







        {/* Trust Section - Hero Section Format */}



        <section className="image-section premium-section" style={{ minHeight: '80vh' }}>



          {/* Background Image */}



          <img



            src="/woman-looking-tube-medium-shot.jpg"



            alt="Lab tested professional experience"



            className="image-section-bg"


            style={{ opacity: 0.6 }}



          />







          {/* Cinematic Blue Overlay - Same as Hero */}



          <div style={{



            position: 'absolute',



            top: 0,



            left: 0,



            width: '100%',



            height: '100%',



            background: 'linear-gradient(135deg, rgba(11, 15, 26, 0.3) 0%, rgba(17, 22, 42, 0.25) 50%, rgba(26, 31, 58, 0.2) 100%)',



            zIndex: 1,



          }} />







          {/* Light Silver Mist - Luxury Effect */}



          <div style={{



            position: 'absolute',



            top: 0,



            left: 0,



            width: '100%',



            height: '100%',



            background: 'radial-gradient(circle at 30% 20%, rgba(0, 255, 255, 0.08) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(0, 255, 255, 0.06) 0%, transparent 50%)',



            zIndex: 2,



          }} />







          {/* Premium Grain Overlay */}



          <div className="grain-overlay" style={{ zIndex: 3 }} />







          <div className="image-section-content" style={{ zIndex: 4 }}>



            <div className="premium-container">



              {/* Section Header */}



              <div className="fade-in-up glass-panel" style={{



                animationDelay: '0.2s',



                maxWidth: '900px',



                margin: '0 auto 5rem auto',



              }}>



                <h2 style={{



                  fontSize: 'clamp(3rem, 6vw, 4.5rem)',



                  fontWeight: 800,



                  letterSpacing: '-0.04em',



                  lineHeight: 1.2,



                  fontFamily: 'var(--font-display)',



                  color: '#FFFFFF',



                  margin: '0 0 2.5rem 0',



                  textTransform: 'uppercase',



                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(232,236,243,0.2)',



                }}>



                  <span style={{



                    color: '#00FFFF',



                    textShadow: '0 4px 8px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 255, 255, 0.4)',



                  }}>Lab Tested.</span> Professional.



                </h2>







                <div className="premium-divider" style={{



                  width: '100px',



                  height: '3px',



                  margin: '2.5rem auto',



                  background: '#00FFFF',



                }} />







                <p style={{



                  fontSize: 'var(--scale-2xl)',



                  color: '#FFFFFF',



                  lineHeight: 1.8,



                  fontFamily: 'var(--font-body)',



                  fontWeight: 500,



                  margin: 0,



                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',



                }}>



                  Every Chilltree product undergoes rigorous third-party lab testing to ensure purity, potency, and safety. We believe in complete professional transparency.



                </p>



              </div>







              {/* Professional Trust Cards - Side by Side */}



              <div className="fade-in-up" style={{



                animationDelay: '0.4s',



                marginBottom: '5rem',



                display: 'flex',



                gap: '2rem',



                justifyContent: 'center',



                maxWidth: '1400px',



                margin: '0 auto 5rem auto',



              }}>



                {/* Trust Card 1 */}



                <div className="premium-card" style={{



                  padding: '3rem',



                  textAlign: 'center',



                  flex: '1',



                  maxWidth: '400px',



                  background: 'rgba(255,255,255,0.08)',



                  backdropFilter: 'blur(12px)',



                  border: '1px solid rgba(255,255,255,0.18)',



                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',



                }}



                  onMouseEnter={(e) => {



                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';



                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';



                  }}



                  onMouseLeave={(e) => {



                    e.currentTarget.style.transform = 'translateY(0) scale(1)';



                    e.currentTarget.style.boxShadow = 'none';



                  }}>



                  <div style={{

                    width: '100px',

                    height: '100px',

                    background: '#000000',

                    borderRadius: '50%',

                    display: 'flex',

                    alignItems: 'center',

                    justifyContent: 'center',

                    fontSize: 'var(--scale-3xl)',

                    color: '#FFFFFF',

                    fontWeight: 700,

                    fontFamily: 'var(--font-body)',

                    margin: '0 auto 2.5rem auto',

                  }}>



                    ✓



                  </div>



                  <div style={{



                    fontSize: 'var(--scale-xl)',



                    fontWeight: 600,



                    fontFamily: 'var(--font-display)',



                    color: '#FFFFFF',



                    marginBottom: '1.5rem',



                    letterSpacing: '-0.03em',



                  }}>



                    Third-Party Tested



                  </div>



                  <p style={{



                    fontSize: 'var(--scale-lg)',



                    color: 'rgba(255, 255, 255, 0.9)',



                    fontFamily: 'var(--font-body)',



                    lineHeight: 1.7,



                    margin: '0 0 2rem 0',



                  }}>



                    Independent lab verification ensures every batch meets our professional standards



                  </p>







                  {/* Lab Report Button */}



                  <button className="premium-btn" style={{



                    width: '100%',



                    fontSize: 'var(--scale-base)',



                    padding: '1rem 2rem',



                    background: 'transparent',



                    color: '#FFFFFF',



                    fontWeight: 600,



                    border: '2px solid #00FFFF',



                  }}>



                    View Lab Report (PDF)



                  </button>



                </div>







                {/* Trust Card 2 */}



                <div className="premium-card" style={{



                  padding: '3rem',



                  textAlign: 'center',



                  flex: '1',



                  maxWidth: '400px',



                  background: 'rgba(255,255,255,0.08)',



                  backdropFilter: 'blur(12px)',



                  border: '1px solid rgba(255,255,255,0.18)',



                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',



                }}



                  onMouseEnter={(e) => {



                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';



                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';



                  }}



                  onMouseLeave={(e) => {



                    e.currentTarget.style.transform = 'translateY(0) scale(1)';



                    e.currentTarget.style.boxShadow = 'none';



                  }}>



                  <div style={{



                    width: '100px',



                    height: '100px',



                    background: '#000000',



                    borderRadius: '50%',



                    display: 'flex',



                    alignItems: 'center',



                    justifyContent: 'center',



                    fontSize: 'var(--scale-3xl)',



                    color: '#FFFFFF',



                    fontWeight: 700,



                    fontFamily: 'var(--font-body)',



                    margin: '0 auto 2.5rem auto',



                  }}>



                    📋



                  </div>



                  <div style={{



                    fontSize: 'var(--scale-xl)',



                    fontWeight: 600,



                    fontFamily: 'var(--font-display)',



                    color: '#FFFFFF',



                    marginBottom: '1.5rem',



                    letterSpacing: '-0.03em',



                  }}>



                    Full Transparency



                  </div>



                  <p style={{



                    fontSize: 'var(--scale-lg)',



                    color: 'rgba(255, 255, 255, 0.8)',



                    fontFamily: 'var(--font-body)',



                    lineHeight: 1.7,



                    margin: 0,



                  }}>



                    Complete professional transparency with detailed lab reports available for every product



                  </p>



                </div>







                {/* Trust Card 3 */}



                <div className="premium-card" style={{



                  padding: '3rem',



                  textAlign: 'center',



                  flex: '1',



                  maxWidth: '400px',



                  background: 'rgba(255,255,255,0.08)',



                  backdropFilter: 'blur(12px)',



                  border: '1px solid rgba(255,255,255,0.18)',



                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',



                }}



                  onMouseEnter={(e) => {



                    e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';



                    e.currentTarget.style.boxShadow = 'var(--shadow-card)';



                  }}



                  onMouseLeave={(e) => {



                    e.currentTarget.style.transform = 'translateY(0) scale(1)';



                    e.currentTarget.style.boxShadow = 'none';



                  }}>



                  <div style={{



                    width: '100px',



                    height: '100px',



                    background: '#000000',



                    borderRadius: '50%',



                    display: 'flex',



                    alignItems: 'center',



                    justifyContent: 'center',



                    fontSize: 'var(--scale-3xl)',



                    color: '#FFFFFF',



                    fontWeight: 700,



                    fontFamily: 'var(--font-body)',



                    margin: '0 auto 2.5rem auto',



                  }}>



                    🔬



                  </div>



                  <div style={{



                    fontSize: 'var(--scale-xl)',



                    fontWeight: 600,



                    fontFamily: 'var(--font-display)',



                    color: '#FFFFFF',



                    marginBottom: '1.5rem',



                    letterSpacing: '-0.03em',



                  }}>



                    Certified Labs



                  </div>



                  <p style={{



                    fontSize: 'var(--scale-lg)',



                    color: 'rgba(255, 255, 255, 0.8)',



                    fontFamily: 'var(--font-body)',



                    lineHeight: 1.7,



                    margin: 0,



                  }}>



                    Partnered with internationally accredited professional laboratories for testing excellence



                  </p>



                </div>



              </div>







              {/* Professional CTA Section */}



              <div className="fade-in-up" style={{



                animationDelay: '0.8s',



              }}>



                <div className="glass-panel" style={{



                  background: 'var(--glass-dark)',



                  backdropFilter: 'var(--glass-blur)',



                  border: '1px solid var(--glass-border)',



                  padding: '4rem',



                  borderRadius: 'var(--radius-3xl)',



                  maxWidth: '800px',



                  margin: '0 auto',



                  textAlign: 'center',



                }}>



                  <p style={{



                    fontSize: 'var(--scale-2xl)',



                    color: '#FFFFFF',



                    margin: '0 0 2.5rem 0',



                    fontFamily: 'var(--font-body)',



                    lineHeight: 1.8,



                    fontWeight: 500,



                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',



                  }}>



                    Review our comprehensive professional lab reports and see the quality difference for yourself



                  </p>



                  <button className="premium-btn" style={{



                    fontSize: 'var(--scale-xl)',



                    padding: '1.75rem 5rem',



                    background: 'transparent',



                    color: '#FFFFFF',



                    fontWeight: 700,



                    minWidth: '350px',



                    border: '2px solid #00FFFF',



                  }}>



                    View Professional Lab Reports



                  </button>



                </div>



              </div>



            </div>



          </div>



        </section>



      </div>



    </>



  );



}



