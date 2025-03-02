import React from "react";
import './borealis.css';


const ExperienceSection: React.FC = () => {
  return (
    <div className="borealis-container">
      <div className="borealis-left">
        <h2>PII Detection – Scalable Asynchronous Processing</h2>
        <ul>
          <li>Built a distributed task queue with Celery and parallelized PII detection via Apache Airflow DAGs.</li>
          <li>Integrated Microsoft Presidio for NER-based PII detection & redaction.</li>
        </ul>

        <h2>Synthetic Data Generation</h2>
        <ul>
          <li>Developed a GAN-based pipeline to generate realistic synthetic customer data.</li>
          <li>Applied pandas & regex masking for dataset anonymization.</li>
        </ul>

        <h2>Job Manager – Database & API Optimization</h2>
        <ul>
          <li>Designed SQL schema and implemented CRUD operations with Flask SQLAlchemy.</li>
          <li>Modularized APIs with Flask Blueprint and documented via Swagger UI.</li>
          <li>Optimized file handling with Redis caching & Amazon S3.</li>
        </ul>
      </div>
      
      <div className="borealis-right">
        <h2 className="impact-header">🚀 Impact</h2>
        <ul>
          <li>10x faster PII detection (10 min ⟶ 2 min)</li>
          <li>25,000+ synthetic datasets generated with GANs for privacy compliance.</li>
          <li>30% lower microservice latency via SQL & API query optimizations.</li>
          <li>Hands-on experience with NLP, distributed systems, and AI ethics.</li>
        </ul>
      </div>
    </div>
  );
};

export default ExperienceSection;