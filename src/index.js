import React, { Component } from 'react'
import  './style.scss'
class VirtualList extends Component {
  box = React.createRef();
  state = {
    startIndex: 0,
    endIndex: 4,
  }

  onScroll = () => {
    const { itemHeight, containerHeight } = this.props;
    const scrollTop = this.box.current.scrollTop;
    let startIndex = Math.floor(scrollTop / itemHeight); // 起始索引
    let endIndex = startIndex + Math.ceil(containerHeight/itemHeight); // 终点索引
    if (startIndex === this.state.startIndex && endIndex === this.state.endIndex) return
    console.log(startIndex, endIndex)
    window.requestAnimationFrame(() => this.setState({ startIndex, endIndex }));
  }
  render() {
    const { itemHeight, containerWidth,containerHeight, dataSource, renderRow = () => { } } = this.props;
    const total = dataSource.length;
    return <div ref={this.box} className='mini-virtual-list' onScroll={(el) => this.onScroll()} style={{ position: 'relative', boxSizing: 'border-box', width: `${containerWidth}px`,height: `${containerHeight}px`, overflow: 'scroll' }}>
      <div className='mini-virtual-list-wrap' style={{ height: `${total * itemHeight}px` }}>
        {dataSource.slice(this.state.startIndex, this.state.endIndex + 1).map((item, index) => {
          return <div
            className='mini-virtual-list-item' 
            ref={this.item}
            key={index}
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              transform: `translateY(${(this.state.startIndex + index) * itemHeight}px)`,
              height: `${itemHeight}`
            }}
          >
            {renderRow(item, index)}
          </div>
        })}
      </div>
    </div>;
  }
}
export default {VirtualList};