import styled from "styled-components";

export const MessageComponent = styled.div`
    background-color: ${props=>props.color};
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 10px;
    width:40vw;
    margin-left:-15%

    @media (max-width: 900px) {
        width:80vw;
    }

  `
  


  export const MessageHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  `
  
  export const MessageSender = styled.div
 `
 color: ${props=>props.color};

    font-weight: bold;
    margin-right: 5px;
  `
  
  export const MessageTimestamp = styled.div`
    font-size: 12px;
    color: #999;
  `
  
  export const MessageContent = styled.div`
    font-size: 14px;
    line-height: 1.4;
    color: #333;
  `

  