class Response {
  constructor(res) {
    this.res = res;
    this.responseJson = {
      error: null,
      message: null,
      data: undefined,
    };
  }

  ko(message) {
    this.responseJson.error = true;
    this.responseJson.message = message;

    this.res.status(400).send(this.responseJson);
  }

  ok(message, data) {
    this.responseJson.error = false;
    this.responseJson.message = message;
    this.responseJson.data = data;

    this.res.status(200).send(this.responseJson);
  }
}

module.exports = Response;
