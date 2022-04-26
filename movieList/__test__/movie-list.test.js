const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const {addMovie} = require('../functions/addMovie.js')
const {crossOffMovie} = require('../functions/addMovie.js')
const {uncrossOffMovie} = require('../functions/addMovie.js')
const {deleteMovie} = require('../functions/addMovie.js')


beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})


describe('Movies', () => {

    test('add a movie', async () => {
        await addMovie(driver)
        await driver.sleep(3000)
    })

    test('cross off', async () => {
        await crossOffMovie(driver)
        await driver.sleep(3000)

    })

    test('uncross off movie', async () => {
        await uncrossOffMovie(driver)
        await driver.sleep(3000)

    })

    test('delete movie', async () => {
        await deleteMovie(driver)
        await driver.sleep(3000)

    })

})