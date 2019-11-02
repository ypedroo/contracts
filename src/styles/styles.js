import styled from 'styled-components';

export const Container = styled.div`
margin-top: 18px;
width: 100%;
text-align: center;
display: inline-block;
background-color: #e8f4f8;
button{
    cursor: pointer;
    background: transparent;
    display: inline;
    font-size: 13px;
    border-radius: 3px;
    color: #101010;
    border: 2px solid grey;
    margin: 0 1em;
    margin-top: 10px;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    &:hover {
        background-color: skyblue;
        color: white;
    }
}
label {
    font-weight:  bold;
    font-size: 16px;
    text-shadow: -1px;
    color: #101010;
    display: block;
}
span {
    display: block;
    font-size: 20px;
    font-weight: bold;
    text-shadow: -1px;
    color: red;
}
img {
margin-bottom: 50px;
width: 70px;
}

`;