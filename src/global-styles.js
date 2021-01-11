import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
html,body{
font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #000000;
        color: #333333;
        font-size: 16px;
        margin: 0;
        


}
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  th{
    cursor:pointer;
  }
  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }



`;
