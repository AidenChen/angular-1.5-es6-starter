export default class GreetingController {
  $onInit() {
    this.date = `${this.year}-${this.month}`
  }

  getMonth() {
    return this.month
  }

  getYear() {
    return this.year
  }
}
