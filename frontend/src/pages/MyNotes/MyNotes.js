import { useEffect, useState } from "react";
import axios from "axios";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainScreen from "../../components/MainScreen/MainScreen";

const MyNotes = () => {
  const [notes, setNotes] = useState([]);

  const handleDeleteNote = (id) => {
    if (window.confirm("Are you sure?")) {}
  };

  const fetchNotes = async () => {
    const { data } = await axios.get("/api/notes");
    setNotes(data);
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <MainScreen title="Welcome back Paulo">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create New Note
        </Button>  
      </Link>
        {
          notes.map((note) => (
            <Accordion key={note._id}>
              <Accordion.Item eventkey="0" className="accordion-header">
                <Card style={{ margin: 10 }}>
                  <Card.Header style={{ display: "flex" }}>
                    <span
                      style={{
                        color: "black",
                        textDecoration: "none",
                        flex: 1,
                        cursor: "pointer",
                        alignSelf: "center",
                        fontSize: 18,
                      }}
                    >
                      <Accordion.Button as={Card.Text} variant="link">
                        {note.title}
                      </Accordion.Button>
                    </span> 
                    <div>
                      <Button href={`/note/${note._id}`}>Edit</Button>
                      <Button 
                        variant="danger" 
                        className="mx-2" 
                        onClick={() => handleDeleteNote(note._id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </Card.Header>
                  <Accordion.Collapse className="accordion-body">
                    <Card.Body>
                      <h4>
                        <Badge bg="success">
                          Category - {note.category}
                        </Badge>
                      </h4>
                      <blockquote className="blockquote mb-0">
                        <p>
                          {note.content}
                        </p>
                        <footer className="blockquote-footer">
                          Created On - date
                        </footer>
                      </blockquote>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion.Item>
            </Accordion>
          ))
        }
    </MainScreen>
  )
}

export default MyNotes