import './Borealis.css';
import logo from '../../WorkAssets/borealis.svg'
import swagger from '../../WorkAssets/swagger.svg'

const App: React.FC = () => {

  return (
    <div className="borealis-container">
      {/* Left Side */}
      <div className="borealis-left">
        <div className = "headingandlogo">
        <h1>Borealis AI</h1>
        <img src = {logo} style = {{width: "90px", marginTop: "-30px"}}></img>
        </div>

        
        <h2>2024 - Responsible AI Team</h2>
        <p>
          Worked on the  AI Trust Platform that featured 3 microservice: 
        </p>

        <h3>PII Detection – Scalable Asynchronous Processing</h3>
        <p>
        <li>Built a distributed task queue with Celery and parallelized PII detection via Apache Airflow DAGs.</li>
        <li>Integrated Microsoft Presidio for NER-based PII detection & redaction.</li>
        </p>

        <h3>Synthetic Data Generation</h3>
        <p>
        <li>Developed a GAN-based pipeline to generate realistic synthetic customer data.</li>
        <li>Applied pandas & regex masking for dataset anonymization.</li>
        </p>


        <h3>Job Manager – Database & API Optimization</h3>
        <p>
        <li>Designed SQL schema and implemented CRUD operations with Flask SQLAlchemy.</li>
          <li>Modularized APIs with Flask Blueprint and documented via Swagger UI.</li>
          <li>Optimized file handling with Redis caching & Amazon S3.</li>
          </p>
      </div>

      {/* Right Side */}
      <div className="borealis-right">
        <div className = "impact">
        <h2 className="impact-header">🚀 Impact</h2>
        <h3>
        <ul>
          <li>10x faster PII detection (10 min ⟶ 2 min)</li>
          <li>25,000+ synthetic datasets generated with GANs for privacy compliance.</li>
          <li>30% lower microservice latency via SQL & API query optimizations.</li>
          <li>Hands-on experience with NLP, distributed systems, and AI ethics.</li>
        </ul>
        </h3>
        </div>
        <img src = {swagger}></img>
      </div>
    </div>
  );
};

export default App;
