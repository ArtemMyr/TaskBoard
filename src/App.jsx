import React, { useState } from 'react';
import './style/App.css';

const App = () => {
  const [boards, setBoards] = useState([
    { id: 1, title: "в планах", items: [{ id: 1, title: "купаться" }, { id: 2, title: "думать" }, { id: 3, title: "Покушать" }] },
    { id: 2, title: "Начал делать", items: [{ id: 4, title: "плакать" }, { id: 5, title: "решать матан" }, { id: 6, title: "купить морожное" }] },
    { id: 3, title: "Ну крч сделал уже", items: [{ id: 7, title: "учить пхп" }, { id: 8, title: "играть" }, { id: 9, title: "деградировать" }] },
  ])

  const [currentBoard, setCurrentBoard] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  function dragOverHandler(e) {
    e.preventDefault();
    if (e.target.className === 'item') {
      e.target.style.boxShadow = '0 4px 3px gray'
    }

  }

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none'

  }

  function dragStartHandler(e, board, item) {
    setCurrentBoard(board)
    setCurrentItem(item)
  }

  function dropEndHandler(e) {
    e.target.style.boxShadow = 'none'

  }
  
  function dropCardHandler(e, board) {
    board.items.push(currentItem)
    const currentIndex = currentBoard.items.indexOf(currentItem)
    currentBoard.items.splice(currentIndex, 1)

    setBoards(boards.map(b => {
      if (b.id === board.id) {
        return board
      }
      if (b.id === currentBoard.id) {
        return currentBoard
      }
      return b
    }))
    e.target.style.boxShadow = 'none'
  }

  return (
    <div className='app'>
      {boards.map(board =>
        <div
          className='board'
          onDragOver={(e) => dragOverHandler(e)}
          onDrop={(e) => dropCardHandler(e, board)}

        >
          <div className='board__title'>{board.title}</div>
          {board.items.map(item =>
            <div
              onDragOver={(e) => dragOverHandler(e)}
              onDragLeave={e => dragLeaveHandler(e)}
              onDragStart={(e) => dragStartHandler(e, board, item)}
              onDragEnd={(e) => dropEndHandler(e)}
              // onDrop={(e) => dropHandler(e, board, item)}
              draggable={true}
              className='item'
            >
              {item.title}
            </div>
          )}
        </div>
      )}
    </div>
  )

}

export default App;
