import React from "react"
import Card from "react-bootstrap/Card"

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" />
        <Card.Body>
            <Card.Title>Keoki Casey</Card.Title>
            <Card.Text>
            Card text
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard