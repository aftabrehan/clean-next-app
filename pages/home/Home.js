import Link from 'next/link'

import Button from 'components/button'

import stl from './Home.module.scss'

const Home = () => (
  <div className={stl.wrapper}>
    <h2>{`Let's Start without wasting your precious time 🕗`}</h2>

    <Button label="Yay! 🙋 " />
    <Link href="https://github.com/aftabrehan/clean-next-app">
      <a className={stl.link} target="_blank">
        Give us a Star ⭐ or Fork 🍴
      </a>
    </Link>
  </div>
)

export default Home
