import './index.css'

const SoldierProfile = () => (
  <div className="bg-img">
    <div className="navBar">
      <ul className="navEle">HOME</ul>
      <ul className="navEle">MULTIPLAYER</ul>
      <ul className="navEle">SILDIER</ul>
      <ul className="navEle">CAMPAIGN</ul>
      <ul className="navEle">STORE</ul>
    </div>
    <div className="forall">
      <div>
        <img
          className="ind3"
          src="https://i.postimg.cc/GmYNh5Wy/soldier-pic.png"
          alt="soldier-pic"
        />
      </div>
      <div>
        <div className="asset1">
          <img
            className="ind4"
            src="https://i.postimg.cc/tJ3n2P7J/soldier-level.png"
            alt="soldier-level"
          />
          <div className="text">
            <h2>cookie</h2>
            <p>69,849/110,000</p>
          </div>
        </div>
        <div className="assets">
          <p className="ind1">WEAPONS</p>
          <p>71/182</p>
        </div>
        <div className="assets">
          <p className="ind1">KITS</p>
          <p>71/182</p>
        </div>
        <div className="assets">
          <p className="ind1">VEHICLES</p>
          <p>71/182</p>
        </div>
        <div className="assets">
          <p className="ind1">MEDALS</p>
          <p>71/182</p>
        </div>
        <div className="assets">
          <p className="ind1">DOG TAGS</p>
          <p>71/182</p>
        </div>
        <div className="assets">
          <p className="ind1">ASSIGNMENTS</p>
          <p>71/182</p>
        </div>
        <div className="assets">
          <p className="ind1">BATTLEPACKS</p>
        </div>
      </div>
      <div className="score">
        <div>
          <div>
            <img
              className="ind2"
              src="https://i.postimg.cc/dtcGcNjX/soldier-game-stats.png"
              alt="game-stats"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default SoldierProfile
