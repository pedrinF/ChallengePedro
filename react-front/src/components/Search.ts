import styled from 'styled-components';

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 500px;
    margin: 20px auto;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

const SearchInput = styled.input`
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    border-radius: 8px 0 0 8px;
`;

const SearchButton = styled.button`
    background-color: #4CAF50;
    padding: 10px;
    border: none;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    background: transparent;
    outline: none;

    svg {
        width: 20px;
        height: 20px;
        fill: #fff;
    }

    &:hover {
        background-color: #45a049;
    }
`;

export default SearchContainer; SearchButton; SearchInput;