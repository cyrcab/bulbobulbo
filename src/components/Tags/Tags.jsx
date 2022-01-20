import styled from 'styled-components';


const Tag = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 100%;
    background: rgba(99, 191, 175, .8);
    border: 3px rgb(99, 191, 175) solid;
    cursor: pointer;
    :hover {
        background: rgb(99, 191, 175);
    }
`;

export default Tag;