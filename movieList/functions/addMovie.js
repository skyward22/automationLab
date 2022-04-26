const {By} = require('selenium-webdriver')

const addMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Dumb and Dumber')
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button')).click()
    await driver.sleep(1000)

    const movie = await driver.findElement(By.xpath('//li'))

    const displayed = movie.isDisplayed()
    expect(displayed).toBeTruthy()
    
}

const crossOffMovie = async (driver) => {

    await driver.findElement(By.xpath('//li/span')).click()
    
    const uncrossed = await driver.findElement(By.xpath('//aside')).getText()
    const str = uncrossed.split(' ')
    expect(str[str.length -1]).toBe('watched!')
    
}

const uncrossOffMovie = async (driver) => {

    const movie = await driver.findElement(By.xpath('//li/span')).click()

    const uncrossed = await driver.findElement(By.xpath('//aside')).getText()
    const str = uncrossed.split(' ')
    expect(str[str.length -1]).toBe('back!')
}

const deleteMovie = async (driver) => {
    
    const movie = await driver.findElement(By.xpath('//li/button')).click()

    const uncrossed = await driver.findElement(By.xpath('//aside')).getText()
    const str = uncrossed.split(' ')
    expect(str[str.length -1]).toBe('deleted!')
    
}


module.exports = {
    addMovie,
    crossOffMovie,
    uncrossOffMovie,
    deleteMovie
}