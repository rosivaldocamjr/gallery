import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(to left, #070B2E, #202447);
    color: #fff;
    min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 980px;
    padding: 30px 0;
`;

export const Header = styled.h1`
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
    font-family: Arial;
    font-size: 45px;
`;

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const UploadForm = styled.form`
    background: #0B044770;
    padding: 15px;
    border-radius: 10px;
    margin-bottom: 30px;
    border: 1px solid #dedede20;

    input[type=submit] {
        background: #756df4;
        border: 0;
        color: #fff;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 0 20px;
        cursor: pointer;

        &:hover {
            opacity: .8;
        }
    }
`;