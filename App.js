const header = <h1 className="title">Witaj na stronie!</h1>

const classBig = "big";

const handleClick = ()=> alert("klik!")

const main = (
  <div>
    <h1 onClick={ handleClick } className="red">Pierwszy artykuł</h1>
    <p>
      Loremdafijadajidnsadk dsad adasnd askn dandasdnasi sandasind asdn aid nasdnsa.
    </p>
  </div>
)

const text = "Stopka"
const largeText = "LAAArge text"

const footer =(
<footer>
  <p className={classBig}>{text}</p>
  {largeText}
</footer>
)

const app = [header, main, footer]





ReactDOM.render(app, document.getElementById('root'))