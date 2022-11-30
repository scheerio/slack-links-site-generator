import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ButtonToolbar,
  ButtonGroup,
} from "react-bootstrap";
import { getLinks, getRandomColor } from "../utils/utils";

const Links = () => {
  const links = getLinks();
  console.log(links);

  return (
    <div>
      {links ? (
        <Container className="pb-4 mb-4 border-bottom">
          <ButtonToolbar
            className="mt-4 d-flex align-items-center justify-content-center"
            aria-label="Toolbar with button groups"
          >
            {links["data"].map((link) => (
              <Card
                style={{ width: "45rem", backgroundColor: getRandomColor() }}
                className="p-2 border-2 rounded-3 project-card m-2"
              >
                <Button
                  key={link.id}
                  href={link.link}
                  style={{ backgroundColor: "transparent" }}
                >
                  {link.image && (
                    <Card.Img
                      variant="top"
                      src={link.image}
                      className="card-img-top"
                    />
                  )}
                  <Card.Body>
                    <Card.Link href={link.link}>{link.link}</Card.Link>
                  </Card.Body>
                </Button>
              </Card>
            ))}
          </ButtonToolbar>
        </Container>
      ) : (
        <div>No data...follow the README instructions to generate your current_links.json file!</div>
      )}
    </div>
  );
};

export default Links;
