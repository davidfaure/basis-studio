import Loader from './Loader.js'
import Hero from './Hero.js'

export default class index
{
    constructor(main, app)
    {
        this.main = main
        this.app = app

        this.triggerLoad = async () => this.load()
    }

    load()
    {
        this.loader = new Loader(this.main, this.app)
        this.hero = new Hero(this.main, this.app)
    }
}