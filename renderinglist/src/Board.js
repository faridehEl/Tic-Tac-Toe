import Square from "./Square"
export default function Board() {
  return(
   
    <>
    <div className="Board">
    <div className="board-row">
    <Square value={1}/>
    <Square value={2}/>
    <Square value={3} />
    </div>
    <div className="board-row">
    <Square />
    <Square />
    <Square />
    </div>
    <div className="board-row">
    <Square />
    <Square />
    <Square />
    </div>
    </div>
    </>
   
  )
}


