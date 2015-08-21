class Logger {

    log(...data) {
      if (process.env.NODE_ENV != "production")
        console.log(...data);
    }

}

export default new Logger();
