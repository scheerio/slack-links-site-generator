import React from "react";
import { Card } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Card className="text-center">
        <Card.Footer className="text-muted">
          &copy; {new Date().getFullYear()} Ben Scheer
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Footer;
