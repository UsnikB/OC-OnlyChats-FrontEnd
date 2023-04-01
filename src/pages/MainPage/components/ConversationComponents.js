import styled from "styled-components";
import { messagesList } from "../Data";
import { SearchContainer, SearchInput } from "./ContactListComponents";
const Container = styled.div`
display: flex ;
flex-direction: column;
height: 100%;
flex: 2;
background: transparent;
`;
const ProfileHeader=styled.div`
    display: flex;
    flex-direction: row;
    background: transparent;
    padding: 15px;
    align-items: center;
    gap : 10px;
`;

const ProfileImage =styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
`;

const ChatBox =styled.div`
display: flex;
background: transparent;
padding: 10px;
align-items: center;
bottom : 0;
`;

const EmojiImage =styled.img`
width:30px;
height: 28px;
opacity: 0.4;
cursor: pointer;
`;
const MessageContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background: transparent;
`;

const MessageDiv = styled.div`
justify-content: ${(props) => (props.isYours ?'flex-end':'flex-start') };
display:flex;
margin: 5px 16px;
`;

const Message = styled.div`
background: ${(props) => (props.isYours ?"transparent":"transparent" )};
max-width:50%;
color: white;
padding: 8px 10px;
font-size: 19px;
box-shadow: ${(props) =>props.isYours ? "2px 2px 2px rgba(255, 255, 255, 0.5)" : "5px 5px 5px rgba(255, 255, 255, 0.5)"};
border-radius: 15px 0px 15px 20px;
`;

const ConversationComponent = () => {
    return (
    <Container>
        <ProfileHeader>
        <ProfileImage src="/profile/IMG_3464.jpg" />
        Anubhav Sharma
        </ProfileHeader>
        <MessageContainer>
            {messagesList.map((messageData) => (
                <MessageDiv isYours={messageData.senderID === 0}>
                  <Message isYours={messageData.senderID === 0}>{[messageData.text]} </Message>
                </MessageDiv>
            ))}
            
        </MessageContainer>
        <ChatBox>
            <SearchContainer>
            <EmojiImage src={"/data.svg"}/>
            <SearchInput placeholder="Type a message"/>
            </SearchContainer>
        </ChatBox>
        </Container>
    );
};
export default ConversationComponent;