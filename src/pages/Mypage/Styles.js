import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 50px auto;
    border: 1px solid #E3AD6A;
    border-radius: 8px;
    padding: 20px;
    width: 500px;
    height: 500px;

    background-color: #fefff1;
    & * {
        box-sizing: border-box;
        color: #BA7C2C;
    }
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 20px 0px;
`;

export const SProfileImgBox = css`
    display: flex;
    justify-content: center;
    align-items: center;

    border: 1px solid #E3AD6A;
    border-radius: 50%;
    width: 300px;
    height: 300px;
    overflow: hidden;
    cursor: pointer;
`;

export const SProfileImg = css`
    width: 100%;
`;

export const SFileHidden = css`
    display: none;
`;

export const SProfileContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    width: 350px;
`;

export const SInput = css`
    border: 1px solid #E3AD6A;
    border-radius: 2px;
    padding: 3px;
    width: 230px;
    &:focus {
        outline: 1px solid #E3AD6A;
        background-color: ivory;
    }
    &:-webkit-autofill { -webkit-box-shadow: 0 0 0 30px #fff inset ; -webkit-text-fill-color: #BA7C2C; }
    &:-webkit-autofill:focus { -webkit-box-shadow: 0 0 0 30px ivory inset ;}
    &:-webkit-autofill, &:-webkit-autofill:hover, &:-webkit-autofill:focus, &:-webkit-autofill:active { transition: background-color 5000s ease-in-out 0s; }
`;

export const SButton = css`
    margin-top: 10px;
    border: 1px solid #E3AD6A;
    border-radius: 4px;
    padding: 3px;
    background-color: #fff9d6;
    font-weight: 700;
    width: 100%;
    cursor: pointer;
    &:active {
        background-color: #ffe4a9;
    }
`;
