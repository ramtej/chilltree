import "./AgeGate.css";

export default function AgeGate() {
  const handleYes = () => {
    sessionStorage.setItem("is21Plus", "true");
    window.location.reload();
  };

  const handleNo = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div className="agegate-backdrop">
      <div className="agegate-popup">
        {/* Logo */}
        <div className="agegate-logo">
          <img src="/logo.png" alt="Chilltree" height="120" />
        </div>

        {/* Age Verification Text */}
        <h2 className="agegate-heading">Are you over 21?</h2>
        
        <p className="agegate-subtext">
          You must be at least 21 years old to enter. By clicking 'Yes', you confirm that you meet this age requirement.
        </p>

        {/* Buttons - Stacked Vertically */}
        <div className="agegate-buttons">
          <button onClick={handleYes} className="agegate-button agegate-button-yes">
            Yes
          </button>

          <button onClick={handleNo} className="agegate-button agegate-button-no">
            No
          </button>
        </div>
      </div>
    </div>
  );
}
