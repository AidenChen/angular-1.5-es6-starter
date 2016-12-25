export default class GreetingController {
  $onInit() {
    console.log(this.name)
    this.date = `${this.year}-${this.month}`
  }

  getMonth() {
    return this.month
  }

  getYear() {
    return this.year
  }
}
