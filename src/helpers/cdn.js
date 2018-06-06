class Cdn {

  constructor() {
    this.host = 'https://gandalf-cdn.herokuapp.com';
  }

  /**
   * Return image url
   * @param  {String} fileName [foo-bar.png]
   * @return {String}
   */
  image(fileName) {
    return `${this.host}/images/${fileName}`;
  }

}

export default new Cdn();
