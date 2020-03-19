import React from 'react';
import ReactDom from 'react-dom';
import VirtualList from '../src/index'

const Demo = () => {
  return <VirtualList
    viewCount={5}
    itemHeight={100}
    containerHeight={500}
    containerWidth={500}
    dataSource={(() => {
      let arr=[];
      for (let a = 0; a < 100; a++) {
        arr.push(a)
      }
      return arr;
    })()
    }
    renderRow={(item, index) => {
      return <div
        style={{
          height: '200px',
          width: '500px',
          border: '1px solid black'
        }}>{item}
      </div>
    }}
  >
  </VirtualList>
}

ReactDom.render(<Demo />, document.getElementById('root'));