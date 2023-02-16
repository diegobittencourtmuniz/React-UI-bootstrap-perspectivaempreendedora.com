import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch('https://perspectivaempreendedora.com/wp-json/wp/v2/posts');
      const data = await response.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

  return (
    <Container>
      <h1>Posts</h1>
      <Row>
        {posts.map((post) => (
          <Col key={post.id} sm={12} md={6} lg={4}>
            <Card className="mb-4">
              <Card.Body>
                <Card.Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                <Card.Text>
                  <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <a href={`/post/${post.slug}`}>Read more...</a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default App;