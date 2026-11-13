
import "./Certificates.css";

import certificate1 from "../../assets/certificate1.png";
import certificate2 from "../../assets/certificate2.png";
import certificate3 from "../../assets/certificate3.png";

const certificates = [
  {
    title: "Certificate 1",
    image: certificate1,
  },
  {
    title: "Certificate 2",
    image: certificate2,
  },
  {
    title: "Certificate 3",
    image: certificate3,
  },
];

function Certificates() {
  return (
    <section id="certificates" className="certificates-section">
      <div className="certificates-heading">
        <h2>
          My <span>Certificates</span>
        </h2>
        <p>My certificates and achievements.</p>
      </div>

      <div className="certificates-container">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.title}>
            <div className="certificate-image">
              <img
                src={certificate.image}
                alt={certificate.title}
              />
            </div>

            <div className="certificate-content">
              <h3>{certificate.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
