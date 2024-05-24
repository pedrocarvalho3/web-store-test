import styled from "@emotion/styled";
import { Card } from "@mui/material";

export const CardCustom = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.5rem;
  max-height: 24.6rem;

  &:hover {
    box-shadow: 0px 0px 4px 3px #cecece;
  }

  &:hover .content {
    transform: translateY(-50%);
    transition: 1s all;
  }

  .content {
    width: 100%;
    background: rgba(255, 255, 255, 0.6);
  }

  .main-image {
    height: 100%;
    width: 16rem;
    object-fit: cover;
  }
`;

export const ContentHidden = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transform: translateY(24%);
`;

export const ProductAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    display: flex;
    border: none;
    border-radius: 50%;
    padding: 4px;
    cursor: pointer;

    &:hover {
      background-color: lightgray;
    }
  }
  input {
    text-align: center;
    height: 2rem;
    width: 70%;
    color: gray;
    border: 1px solid lightgray;
  }
`;
