class CustomErrorHandler extends Error {
    constructor(status, message) {
        this.status = status;
        this.message = message;
    }

    static alreadyExist(message) {
        return new CustomErrorHandler(409, message)
    }
}

export default CustomErrorHandler;