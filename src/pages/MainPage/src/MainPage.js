import styled from "styled-components";
import img from 'D:/College(Term 3)/OC-OnlyChats-FrontEnd/src/pages/Home/assets/img/gb.jpg';
import ContactListComponent from "./components/ContactListComponents";
import ConversationComponent from "./components/ConversationComponents";

const Container = styled.div`
display : flex;
flex-direction: row;
height: 100vh;
width: 100%;
background-image: url(${img});
background-size: cover;
padding: 10px 10px;
`;
function App() {
  return (
  <Container>
    <ContactListComponent/>  
    <ConversationComponent/>
  </Container>
  );
}

export default App;
