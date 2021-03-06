import styled from 'styled-components';

export const Container = styled.div`
margin-top: 18px;
width: 100%;
text-align: center;
display: inline-block;
button{
    cursor: pointer;
    background: transparent;
    display: inline;
    font-size: 13px;
    border-radius: 3px;
    color: #808080  ;
    border: 2px solid #19d2bf;
    margin: 0 1em;
    margin-top: 10px;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;
    &:hover {
        background-color: skyblue;
        color: white;
    }
}
body {
    background-color: #08AEEA;
    background-image: linear-gradient(0deg, #08AEEA 0%, #2AF598 100%);
}
label {
    font-weight:  bold;
    font-size: 16px;
    text-shadow: -1px;
    color: #808080;
    display: block;
}
span {
    display: block;
    font-size: 16px;
    font-weight: bold;
    text-shadow: -1px;
    color: red;
}
img {
margin-bottom: 50px;
width: 80px;
overflow: hidden;
transition: transform .5s ease;
    &:hover {
        transform: scale(1.5);
        box-shadow: 1px 1px 0.8px lightgray;
    }
}
.ContractDropZone {
    position: absolute;
    width: 100%;
    height: 100%;
}

.Form {
    margin-top: 10%;
}
input {
    display: block;
    bottom: 5%;
    top: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: #F0F0F0;
}
.form-field {
    font-size: 1.2em;
    font-weight: bold;
}
.formErrorMessage {
    font-size: 1em;
    color: #A00000;
    font-weight: bold;
}
`;