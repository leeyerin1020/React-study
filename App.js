import React, {Component } from 'react';
import TOC from "./Components/TOC.js"
import Subject from "./Components/Subject.js"
import  Contents from "./Components/Contents.js"
import './App.css';




class App extends Component {
  render() { 
    return ( 
    <div className="App">
      <Subject title="WEB" sub="world wide web!"></Subject> 
      <Subject title="WW" sub="world wide!"></Subject> 
      <TOC></TOC>
      <Contents title="HTML" cont="HTML is hypertext markup language."></Contents>
    </div>
     /* 이렇게 Subject 컴포넌트를 넣어주면
      web사이트에서는 이 컴포넌트를 리액트가 html문법으로 전달해주기 때문에 
      리액트 존재를 모른다! */
      /* title, cont이런식으로 변수명 써서 속성을 집어넣어준다*/
  );
  } 
}

export default App;
