import React from 'react';
import styled from 'styled-components';

let coordenates = [[0,1] , [0,2] , [2,3], [4,3] , [7,3] , [8,5] , [8,7] , [8,8]]
let b = JSON.stringify(coordenates);

let matrixLenght = 10


const sortItems = () => {
  var arr = []
  for (var x = 0; x < matrixLenght; x++) {
     for (var y = 0; y < matrixLenght; y++) {
      const a = JSON.stringify([x,y])
      const result = b.indexOf(a)
      arr.push(result)
      }
  }
  return arr
}


const Grid = () => {
let matrix = sortItems()
console.log(matrix)
  return (
    <Wrapper>
    {
      matrix.map((dot) => (
        dot === -1 ? <BlankItem ></BlankItem> :
        <SelectedItem ></SelectedItem>
      ))
    }
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width:400px;
  height:400px;
  display:flex;
  flex-wrap:wrap;
  box-sizing:border-box;
`;

const BlankItem = styled.div`
  width: 40px;
  height: 40px;
  border:1px solid gray;
  box-sizing:border-box;
`
const SelectedItem = styled.div`
  width: 40px;
  height: 40px;
  background: #0082ca;
  border:1px solid gray;
  box-sizing:border-box;
`
export default Grid;