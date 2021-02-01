import styled from "styled-components";

const UpdateTopMargin = styled.div`
  display: flex;
  height: 70px;
`;

const UpdateTheme = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  padding: 10px 100px;

  @media (max-width: 800px) {
    padding: 10px 30px;
  }
`;

const UpdateTitle = styled.h1`
  font-family: Poppins;
`;

const UpdateParagraph = styled.div`
  text-align: left;
  margin-bottom: 15px;
  font-family: Open Sans;
`;

const UpdateBlockSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  font-family: Open Sans;
`;

const UpdateBlockTitle = styled.h3`
  text-align: left;
  font-family: Poppins;
`;

const UpdateBlockDate = styled.p`
  text-align: left;
  font-weight: 550;
`;

const UpdateContent = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 300px;
  font-family: Open Sans;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const VerticalDivider = styled.div`
  width: 5px;
  height: inherit;
  background-color: #524797;
  margin: 0px 15px 5px;
  @media (max-width: 800px) {
    width: inherit;
    height: 3px;
    margin: 15px 5px;
  }
`;

const UpdateListItem = styled.a`
  min-width: 120px;
  list-style-type: none;
  border: none;
  @media (max-width: 800px) {
    text-align: left;
  }
`;

const UpdateTableTitle = styled.h3`
  text-align: left;
  font-family: Open Sans;
`;

const UpdateTable = styled.div`
  display: flex;
  flex-direction: column;
`;

const UpdateMessageSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Duck = styled.img`
  max-height: 30px;
  max-width: 30px;
`;

export {
  UpdateTheme,
  UpdateTopMargin,
  UpdateTitle,
  UpdateParagraph,
  UpdateBlockSection,
  UpdateBlockTitle,
  UpdateBlockDate,
  UpdateContent,
  VerticalDivider,
  UpdateListItem,
  UpdateTableTitle,
  UpdateTable,
  UpdateMessageSection,
  Duck
};
