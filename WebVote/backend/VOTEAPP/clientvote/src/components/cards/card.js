import React, { useState, useEffect } from "react";
import "./card.css";
import { getImageUrl } from './picture';



function Card() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/candidate/');
        if (response.ok) {
          const data = await response.json();
          setCandidates(data);
        }
      } catch (error) {
        // Handle error
      }
    };
    fetchData();
  }, []);

  const handleCandidateSelection = (candidateId) => {
    setSelectedCandidate(candidateId);
  };

  const handleSubmitVote = async () => {
    if (selectedCandidate !== null) {
      try {
        const response = await fetch('http://127.0.0.1:8000/api/submit-vote/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: `candidate_id=${selectedCandidate}`,
        });
        
        if (response.ok) {
          console.log('Vote submitted successfully.');
        } else {
          console.error('Failed to submit vote.');
        }
      } catch (error) {
        console.error('Error submitting vote:', error);
      }
    } else {
      console.log('Please select a candidate before submitting.');
    }
  };

  return (
    <div className="container1" >
      <div className="ballot-form">
        <h2>Select a Candidate:</h2>
        <div className="candidate-options">
          {candidates.map((candidate) => (
              <div className="candidate-option" key={candidate.name}>
            <div>
              <input
                type="radio"
                name="candidate"
                value={candidate.id}
                checked={selectedCandidate === candidate.id}
                onChange={() => handleCandidateSelection(candidate.id)}
              />
              <div className="image">
              <img
                src={getImageUrl(candidate)}
                alt={candidate.name}
                className="candidate-image"
                />
                </div>


                <span className="candidate-name">{candidate.name}</span>
                <p className="candidate-position">{candidate.position}</p>
                <p className="candidate-description">{candidate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        <div className="btn2">
        <button onClick={handleSubmitVote}>Submit Vote</button>
        </div>
    </div>
  );
}

export default Card;
