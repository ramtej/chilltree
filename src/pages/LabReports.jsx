import "./LabReports.css";

export default function LabReports() {
  const reports = [
    {
      id: 1,
      productName: "Focus Fuel",
      testType: "Quality",
      image: "/focus-fuel.png",
    },
    {
      id: 2,
      productName: "Herbal Power",
      testType: "Purity",
      image: "/herbal-power.png",
    },
    {
      id: 3,
      productName: "Primal Force",
      testType: "Safety",
      image: "/primal-force.png",
    },
    {
      id: 4,
      productName: "Mit + Kava Shot",
      testType: "Quality",
      image: "/product-1.png",
    },
  ];

  const handleDownload = (reportId, productName) => {
    // Placeholder for download functionality
    console.log(`Downloading report for ${productName}`);
    // In a real implementation, this would trigger a file download
  };

  return (
    <div className="lab-reports-page">
      <div className="lab-reports-inner">
        <div className="lab-reports-header">
          <h1 className="lab-reports-title">Lab Reports</h1>
        </div>

        <div className="lab-reports-desc">
          <p>
            We believe in complete transparency and trust. All our products undergo rigorous third-party laboratory testing to ensure the highest standards of quality, purity, and safety. Download our comprehensive lab reports to verify the integrity and composition of every product we offer.
          </p>
        </div>

        <div className="lab-reports-grid">
          {reports.map((report) => (
            <div key={report.id} className="lab-report-card">
              {report.image && (
                <div className="lab-report-image-wrap">
                  <img
                    src={report.image}
                    alt={report.productName}
                    className="lab-report-image"
                  />
                </div>
              )}
              <div>
                <h3 className="lab-report-name">{report.productName}</h3>
                <span className={`lab-report-badge lab-report-badge--${report.testType.toLowerCase()}`}>
                  {report.testType}
                </span>
              </div>
              <button
                type="button"
                className="lab-report-download"
                onClick={() => handleDownload(report.id, report.productName)}
              >
                Download Report
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
