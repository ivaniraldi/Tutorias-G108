import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function ProductCard(props) {
  return (
    <Card
      className="h-100 shadow-sm border-0"
      style={{
        width: "18rem",
        minHeight: "450px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card.Img
        variant="top"
        src={props.image}
        style={{
          height: "200px",
          objectFit: "cover",
        }}
      />

      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Card.Title
          style={{
            minHeight: "50px",
            fontWeight: "600",
          }}
        >
          {props.title}
        </Card.Title>

        <Card.Text
          style={{
            flexGrow: 1,
            minHeight: "80px",
            color: "#555",
          }}
        >
          {props.description}
        </Card.Text>

        <Button
          variant="secondary"
          style={{
            marginTop: "auto",
            width: "100%",
            fontWeight: "500",
          }}
        >
          Comprar
        </Button>
      </Card.Body>
    </Card>
  );
}
