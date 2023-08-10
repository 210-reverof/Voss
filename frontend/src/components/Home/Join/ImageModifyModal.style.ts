import { styled } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const ModalContent = styled.div`
  width: 45%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;

  .image-options {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .tabs-component [role="tablist"] {
    display: flex;
    flex-wrap: wrap;
    border-bottom: 1px solid #dee2e6;
    position: relative;
  }
  
  .tabs-component [role="tablist"] button {
    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
    margin: 0 1px;
    outline: none;
    background-color: #fff;
    transition: border 0.2s ease-in-out 0s;
  }
  
  .tabs-component [role="tablist"] button.active,
  .tabs-component [role="tablist"] button:focus,
  .tabs-component [role="tablist"] button:hover {
    border-width: 1px;
    border-color: #e9ecef #e9ecef #b41c1c;
  }
  
  .tabs-component [role="tablist"] button.active {
    color: #495057;
    background-color: #f8f8f8;
  }
  
  .tabs-component [role="tabpanel"] {
    text-align: left;
    padding: 1rem;
    background-color: #f8f8f8;
    box-shadow: 1px 1px 2px rgb(204 204 204 / 75%);
  }
  
  .tabs-component.vertical {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }
  
  .tabs-component.vertical [role="tablist"] {
    flex-direction: column;
  }
  
  .tabs-component.vertical [role="tabpanel"] {
    flex: 1;
  }
  
  .tabs-component [role="tablist"] button {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin: 0;
  }
  
  .tabs-component.vertical [role="tablist"] button.active,
  .tabs-component.vertical [role="tablist"] button:focus,
  .tabs-component.vertical [role="tablist"] button:hover {
    border-color: #e9ecef transparent #e9ecef #b41c1c;
  }

`;

export const CompleteButton = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

